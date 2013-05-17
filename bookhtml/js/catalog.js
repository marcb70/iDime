function catalogcall(){
var newNum = 0, questionCount = 0;
var selectedCats = new Array();
var selectedCatList = new Array();
var qString = "";
var findTheseCats = [["Tigger", "Crookshanks"], ["Pokey", "Gray Wind", "Katniss"], ["Master Yi", "Skinbag", "Scruff"]]; //add more arrays of cats name to add more questions
var selectedCatAnswer = [];
var selectedOptions = {
breed : [],
color : [],
sex : [],
markings : [],
fixed : [],
eyecolor : [],
age : [],
hairlength: []
}

function arraysEqual(arr1, arr2) {
if(arr1.length !== arr2.length)
    return false;
for(var i = arr1.length; i--;) {
    if(arr1[i] !== arr2[i])
        return false;
}

return true;
}
//checks if an array contains a value
Array.prototype.contains = function(obj) {
var i = this.length;
while (i--) {
    if (this[i] === obj) {
        return true;
    }
}
return false;
}
//generates a question
function generateQStringtring(){
var aQString = ''
for(var i= 0; i < findTheseCats[questionCount].length; i++){
    aQString += findTheseCats[questionCount][i] + " "
} 
$("#rightTopBottomRight").html("Find these Cats: " + aQString);
return aQString
}
generateQStringtring();
$('#chooseCat').click(function(){
if($('#catListInfo').val()!=0)
{
    $('#chosenCatInfo').val($('#catListInfo').val());
    $('#chosenCatInfowPic').css('display', 'block');
    $('#congratsText').css('display', 'block');
}
});

$('#submit').click(function(){

var catHTML="";
var catDb = new createCatDB();
catArray = catDb.getDB();

    selectedOptions = {
        breed : [],
        color : [],
        sex : [],
        markings : [],
        fixed : [],
        eyecolor : [],
        age : [],
        hairlength: []
    }

    $('.clonedBreedInput').find('select').each(function() {
        if($(this).val() != "null"){
            selectedOptions.breed.push($(this).val()) 
        }
    });

    $('.clonedColorInput').find('select').each(function() {
        if($(this).val() != "null"){
            selectedOptions.color.push($(this).val()) 
        }
    });

    $('.clonedSexInput').find('select').each(function() {
        if($(this).val() != "null"){
            selectedOptions.sex.push($(this).val()) 
        }
    });

    $('.clonedMarkingsInput').find('select').each(function() {
        if($(this).val() != "null"){
            selectedOptions.markings.push($(this).val()) 
        }
    });

    $('.clonedFixInput').find('select').each(function() {
        if($(this).val() != "null"){
            selectedOptions.fixed.push($(this).val()) 
        }
    });

    $('.clonedEyeInput').find('select').each(function() {
        if($(this).val() != "null"){
            selectedOptions.eyecolor.push($(this).val()) 
        }
    });

    $('.clonedAgeInput').find('select').each(function() {
        if($(this).val() != "null"){
            selectedOptions.age.push($(this).val()) 
        }
    });

    $('.clonedHairInput').find('select').each(function() {
        if($(this).val() != "null"){
            selectedOptions.hairlength.push($(this).val()) 
        }
    });

    $('.clonedMarkInput').find('select').each(function() {
        if($(this).val() != "null"){
            selectedOptions.markings.push($(this).val()) 
        }
    });

    //builds the array for the users "answer"
    for (var i = 0; i < catArray.length; i++) {

        if( (selectedOptions.age.contains(catArray[i].getAge()) || selectedOptions.age.length == 0) && (selectedOptions.breed.contains(catArray[i].getBreed()) || selectedOptions.breed.length == 0) && (selectedOptions.color.contains(catArray[i].getColor()) || selectedOptions.color.length == 0) && (selectedOptions.eyecolor.contains(catArray[i].getEyeColor()) || selectedOptions.eyecolor.length == 0) && (selectedOptions.fixed.contains(catArray[i].checkIfFixed()) || selectedOptions.fixed.length == 0) && (selectedOptions.sex.contains(catArray[i].getSex()) || selectedOptions.sex.length == 0) && (selectedOptions.hairlength.contains(catArray[i].getHairLength()) || selectedOptions.hairlength.length == 0) && (selectedOptions.markings.contains(catArray[i].getMarkings()) || selectedOptions.markings.length == 0))
        {

            catArray[i].isMatch(true);
            selectedCatAnswer.push(catArray[i].getName());
        }

        if(catArray[i].getMatch()){
            catHTML += catArray[i].displayCatThumb()
        }

        $("#selectedCatDisplay").html(catHTML);
    }
    //checks if you've found all the cats from the question
    if(arraysEqual(selectedCatAnswer,findTheseCats[questionCount])){
        questionCount++;
        qString = generateQStringtring()
        if(questionCount < findTheseCats.length){
            alert("Great Job now find these cats " + qString);
        }else{
            alert("Great Job you have answered all the questions");
        }
    }
    
    $('.catThumb').click(function(){
        for (var i = 0; i < catArray.length; i++) {

           if(catArray[i].getName() == $(this).text()){
            catHTML = catArray[i].displayCat();
            }
        };

    $("#rightTopTop").html(catHTML);

    });

$("#rightTopTop").html("")
//builds  and displays the statment of selected options
var count = 0;
var stStart ="Boolean options:";
var bigStatement = "";
    bigStatement += stStart;

for(key in selectedOptions){
    if(selectedOptions[key].length == 0){
        delete selectedOptions[key]
    }
}

for(key in selectedOptions) {
    if(selectedOptions.hasOwnProperty(key)) {
        count++;
    }
}

var m = 0;
for(key in selectedOptions){

    var attrName = key;
    var attrValue = selectedOptions[key];
    var statement =" \( " + key +": ";
    m++;
    
    for(var i = 0; i < attrValue.length; i++){
        
        
            if(attrValue[i] && i < attrValue.length - 1){
                console.log(attrValue[i]);
                statement = statement + attrValue[i] + " OR ";
            }else if(attrValue[i] && i == attrValue.length - 1){
                statement = statement + attrValue[i];
            }
        

    }

    if(m == count){
        statement = statement + " \)";
        bigStatement = bigStatement + statement;

    }else{

        statement = statement + " \) AND ";
        bigStatement = bigStatement + statement;
    }
}
//end of statment builder
$("#rightTopBottomLeft").html(bigStatement);
});

//resarts the widget
$("#startOver").click(function(){
window.location.reload()
})
//displays the cat you've selected from the list of cats
$('.catThumb').click(function(){
var catHTML="";
var catDb = new createCatDB();
catArray = catDb.getDB();

        selectedOptions = {
            breed : [],
            color : [],
            sex : [],
            markings : [],
            fixed : [],
            eyecolor : [],
            age : [],
            hairlength: []
        }

        for (var i = 0; i < catArray.length; i++) {

           if(catArray[i].getName() == $(this).text()){
            catHTML = catArray[i].displayCat();
        }
    };

    $("#rightTopTop").html(catHTML);

});
//adds a new catagory to the options list if it isn't already there
$('#addC').click(function() {
var val = $('#category').val();
if (val == "a") {
   $('#breedDiv').css('display', 'block');
   $('#breed1').css('display', 'block');
   $('.clonedBreedInput').css('display', 'block');
}
else if (val == "b") {
   $('#colorDiv').css('display', 'block');
   $('#color1').css('display', 'block');
   $('.clonedColorInput').css('display', 'block');
}
else if (val == "c") {
   $('#eyeDiv').css('display', 'block');
   $('#eye1').css('display', 'block');
   $('.clonedEyeInput').css('display', 'block');
   console.log("newNum: " + $('.clonedColorInput').length);
}
else if (val == "d") {
   $('#hairDiv').css('display', 'block');
   $('#hair1').css('display', 'block');
   $('.clonedHairInput').css('display', 'block');
}
else if (val == "e") {
   $('#sexDiv').css('display', 'block');
   $('#sex1').css('display', 'block');
   $('.clonedSexInput').css('display', 'block');
}
else if (val == "f") {
   $('#fixDiv').css('display', 'block');
   $('#fix1').css('display', 'block');
   $('.clonedFixInput').css('display', 'block');
}
else if (val == "g") {
   $('#ageDiv').css('display', 'block');
   $('#age1').css('display', 'block');
   $('.clonedAgeInput').css('display', 'block');
}
else if (val == "h") {
   $('#markDiv').css('display', 'block');
   $('#mark1').css('display', 'block');
   $('.clonedMarkInput').css('display', 'block');
}
});

$('#btnAdd').click(function () {
   // console.log("hello")
    var num = $('.clonedBreedInput').length; // how many "duplicatable" input fields we currently have
   // console.log(num);
    newNum = num + 1; // the numeric ID of the new input field being added
    var newElem = $('#breed' + num).clone().attr('id', 'breed' + newNum); // create the new element via clone(), and manipulate it's ID using newNum value
    //console.log("newNum:" + newNum + " num: " + num + " newElem: " + newElem)
    $('#BreedList' + num).attr('id', 'BreedList' + newNum);
    $('.select').each(function (index) {
        newElem.children('.select').children('option[value="' + $(this).val() + '"]').remove();
        temp = $(this).val();
        if(!selectedCats.contains(temp))
        {
            selectedCats.push(temp);
        }
    });
    $('#breed' + num).after(newElem); // insert the new element after the last "duplicatable" breed field
    //$('#btnDel').attr('disabled', true); // enable the "remove" button

    if (newNum >= 6) {
        $('#btnAdd').attr('disabled', true);
    }else{
         $('#btnAdd').attr('disabled', false);
    }
    if (newNum >= 2) {
        $('#btnDel').attr('disabled', false);
    }
    else
        $('#btnDel').attr('disabled', true);

});

$('#btnDel').click(function () {
    var num = $('.clonedBreedInput').length; // how many "duplicatable" input fields we currently have
    newNum = num + 1;
    var num = $('.clonedBreedInput').length; // how many "duplicatable" input fields we currently have
    $('#breed' + num).remove(); // remove the last element
    $('#btnAdd').attr('disabled', false); // enable the "add" button
    newNum--;

    if (newNum <= 2) {
        $('#btnDel').attr('disabled', true);
    }else{
        $('#btnDel').attr('disabled', false);
    }

});

$('#colorAdd').click(function () {
    var num = $('.clonedColorInput').length; // how many "duplicatable" input fields we currently have
    newNum = num + 1; // the numeric ID of the new input field being added
    var newElem = $('#color' + num).clone().attr('id', 'color' + newNum); // create the new element via clone(), and manipulate it's ID using newNum value

    $('.Colorselect').each(function (index) {
        newElem.children('.Colorselect').children('option[value="' + $(this).val() + '"]').remove();
        temp = $(this).val();
        if(!selectedCats.contains(temp))
        {
            selectedCats.push(temp);
        }

    });
    $('#color' + num).after(newElem); // insert the new element after the last "duplicatable" input field
    $('#colorDel').attr('disabled', false); // enable the "remove" button


    if (newNum >= 6) {
        $('#colorAdd').attr('disabled', true);
    }else{
        $('#colorAdd').attr('disabled', false);
    }

    if (newNum >= 2) {
        $('#colorDel').attr('disabled', false);
    }
    else
        $('#colorDel').attr('disabled', true);

});

$('#colorDel').click(function () {
    var num = $('.clonedColorInput').length; // how many "duplicatable" input fields we currently have
    newNum = num + 1;
    $('#color' + num).remove(); // remove the last element
    $('#colorAdd').attr('disabled', false); // enable the "add" button
    newNum--;
    if (newNum <= 2) {
        $('#colorDel').attr('disabled', true);
    }else{
        $('#colorDel').attr('disabled', false);
    }

});

$('#ecAdd').click(function () {
    var num = $('.clonedEyeInput').length; // how many "duplicatable" input fields we currently have
    newNum = num + 1; // the numeric ID of the new input field being added
    var newElem = $('#eye' + num).clone().attr('id', 'eye' + newNum); // create the new element via clone(), and manipulate it's ID using newNum value

    $('.Eyeselect').each(function (index) {
        newElem.children('.Eyeselect').children('option[value="' + $(this).val() + '"]').remove()
        temp = $(this).val();
        if(!selectedCats.contains(temp))
        {
            selectedCats.push(temp);
        }
    });

    $('#eye' + num).after(newElem); // insert the new element after the last "duplicatable" input field
    $('#ecDel').attr('disabled', false); // enable the "remove" button


    if (newNum >= 4) {
        $('#ecAdd').attr('disabled', true);
    }else{
         $('#ecAdd').attr('disabled', false);
    }

    if (newNum >= 2) {
        $('#ecDel').attr('disabled', false);
    }
    else
        $('#ecDel').attr('disabled', true);

});

$('#ecDel').click(function () {
    var num = $('.clonedEyeInput').length; // how many "duplicatable" input fields we currently have
    newNum=num+1;
    console.log("newNum: " + newNum);
    $('#eye' + num).remove(); // remove the last element
    $('#ecAdd').attr('disabled', false); // enable the "add" button
    newNum--;
    if (newNum <= 2) {
        $('#ecDel').attr('disabled', true);
    }else{
        $('#ecDel').attr('disabled', false);
    }
});

$('#hairAdd').click(function () {
    var num = $('.clonedHairInput').length; // how many "duplicatable" input fields we currently have
    newNum = num + 1; // the numeric ID of the new input field being added
    var newElem = $('#hair' + num).clone().attr('id', 'hair' + newNum); // create the new element via clone(), and manipulate it's ID using newNum value

    $('.Hairselect').each(function (index) {
        newElem.children('.Hairselect').children('option[value="' + $(this).val() + '"]').remove()
        temp = $(this).val();
        if(!selectedCats.contains(temp))
        {
            selectedCats.push(temp);
        }
    });
    $('#hair' + num).after(newElem); // insert the new element after the last "duplicatable" input field
    $('#hairDel').attr('disabled', false); // enable the "remove" button


    if (newNum >= 4) {
        $('#hairAdd').attr('disabled', true);
    }

    if (newNum >= 2) {
        $('#hairDel').attr('disabled', false);
    }
    else
        $('#hairDel').attr('disabled', true);

});

$('#hairDel').click(function () {
    var num = $('.clonedHairInput').length; // how many "duplicatable" input fields we currently have
    newNum=num+1;
    $('#hair' + num).remove(); // remove the last element
    $('#hairAdd').attr('disabled', false); // enable the "add" button
    newNum--;
    if (newNum <= 2) {
        $('#hairDel').attr('disabled', true);
    }else{
        $('#hairDel').attr('disabled', false);
    }
});

$('#sexAdd').click(function () {
    var num = $('.clonedSexInput').length; // how many "duplicatable" input fields we currently have
    newNum = num + 1; // the numeric ID of the new input field being added
    var newElem = $('#sex' + num).clone().attr('id', 'sex' + newNum); // create the new element via clone(), and manipulate it's ID using newNum value

    $('.Sexselect').each(function (index) {
        newElem.children('.Sexselect').children('option[value="' + $(this).val() + '"]').remove()
        temp = $(this).val();
        if(!selectedCats.contains(temp))
        {
            selectedCats.push(temp);
        }
    });
    $('#sex' + num).after(newElem); // insert the new element after the last "duplicatable" input field
    $('#sexDel').attr('disabled', false); // enable the "remove" button


    if (newNum >= 2) {
        $('#sexAdd').attr('disabled', true);
    }else{
        $('#sexAdd').attr('disabled', false);
    }

    if (newNum >= 2) {
        $('#sexDel').attr('disabled', false);
    }
    else
        $('#sexDel').attr('disabled', true);

});

$('#sexDel').click(function () {
    var num = $('.clonedSexInput').length; // how many "duplicatable" input fields we currently have
    newNum=num+1;
    $('#sex' + num).remove(); // remove the last element
    $('#sexAdd').attr('disabled', false); // enable the "add" button
    newNum--;
    if (newNum <= 2) {
        $('#sexDel').attr('disabled', true);
    }else{
        $('#sexDel').attr('disabled', false);
    }
});

$('#fixAdd').click(function () {
    var num = $('.clonedFixInput').length; // how many "duplicatable" input fields we currently have
    newNum = num + 1; // the numeric ID of the new input field being added
    var newElem = $('#fix' + num).clone().attr('id', 'fix' + newNum); // create the new element via clone(), and manipulate it's ID using newNum value

    $('.Fixselect').each(function (index) {
        newElem.children('.Fixselect').children('option[value="' + $(this).val() + '"]').remove()
    });
    $('#fix' + num).after(newElem); // insert the new element after the last "duplicatable" input field
    $('#fixDel').attr('disabled', false); // enable the "remove" button


    if (newNum >= 2) {
        $('#fixAdd').attr('disabled', true);
    }else{
        $('#fixAdd').attr('disabled', false);
    }

    if (newNum >= 2) {
        $('#fixDel').attr('disabled', false);
    }
    else
        $('#fixDel').attr('disabled', true);

});

$('#fixDel').click(function () {
    var num = $('.clonedFixInput').length; // how many "duplicatable" input fields we currently have
    newNum=num+1;
    $('#fix' + num).remove(); // remove the last element
    $('#fixAdd').attr('disabled', false); // enable the "add" button
    newNum--;
    if (newNum <= 2) {
        $('#fixDel').attr('disabled', true);
    }else{
        $('#fixDel').attr('disabled', false);
    }
});

$('#ageAdd').click(function () {
    var num = $('.clonedAgeInput').length; // how many "duplicatable" input fields we currently have
    newNum = num + 1; // the numeric ID of the new input field being added
    var newElem = $('#age' + num).clone().attr('id', 'age' + newNum); // create the new element via clone(), and manipulate it's ID using newNum value

    $('.Ageselect').each(function (index) {
        newElem.children('.Ageselect').children('option[value="' + $(this).val() + '"]').remove()
        selectedCats.push($(this).val())
    });
    $('#age' + num).after(newElem); // insert the new element after the last "duplicatable" input field
    $('#ageDel').attr('disabled', false); // enable the "remove" button


    if (newNum >= 3) {
        $('#ageAdd').attr('disabled', true);
    }else{
        $('#ageAdd').attr('disabled', false);
    }

    if (newNum >=2) {
        $('#ageDel').attr('disabled', false);
    }
    else
        $('#ageDel').attr('disabled', true);

});

$('#ageDel').click(function () {
    var num = $('.clonedAgeInput').length; // how many "duplicatable" input fields we currently have
    newNum=num+1;
    $('#age' + num).remove(); // remove the last element
    $('#ageAdd').attr('disabled', false); // enable the "add" button
    newNum--;
    if (newNum <= 2) {
        $('#ageDel').attr('disabled', true);
    }else{
        $('#ageDel').attr('disabled', false);
    }
});

$('#markAdd').click(function () {
    var num = $('.clonedMarkingsInput').length; // how many "duplicatable" input fields we currently have
    newNum = num + 1; // the numeric ID of the new input field being added
    var newElem = $('#mark' + num).clone().attr('id', 'mark' + newNum); // create the new element via clone(), and manipulate it's ID using newNum value

    $('.Markselect').each(function (index) {
        newElem.children('.Markselect').children('option[value="' + $(this).val() + '"]').remove()
        selectedCats.push($(this).val())
    });
    $('#mark' + num).after(newElem); // insert the new element after the last "duplicatable" input field
    $('#markDel').attr('disabled', false); // enable the "remove" button


    if (newNum >= 4) {
        $('#markAdd').attr('disabled', true);
    }else{
        $('#markAdd').attr('disabled', false);
    }

    if (newNum >=3) {
        $('#markDel').attr('disabled', false);
    }
    else
        $('#markDel').attr('disabled', true);

});

$('#markDel').click(function () {
    var num = $('.clonedMarkingsInput').length; // how many "duplicatable" input fields we currently have
    newNum=num+1;
    $('#mark' + num).remove(); // remove the last element
    $('#markAdd').attr('disabled', false); // enable the "add" button
    newNum--;
    if (newNum <= 3) {
        $('#markDel').attr('disabled', true);
    }else{
        $('#markDel').attr('disabled', false);
    }
});
}
var cataloghtml = '<div id="catalogMain" class="modal hide fade" tabindex="-1" role="dialog" aira-hidden="true"><div id="widget" class="modal-body big-body"><div id = "leftDiv"><div id="maindiv"><label for="category">Category:</label><select id="category" class="select"><option value="a" id="a">Breed</option><option value="b" id="b">Color</option><option value="c" id="c">Eye Color</option><option value="d" id="d">Hair Length</option><option value="e" id="e">Sex</option><option value="f" id="f">Fixed?</option><option value="g" id="g">Age</option><option value="h" id="h">Markings</option></select><input type="button" class="buttonStyle" value="Add Category" id="addC" /></div><br /><div class="box"><div style="position:relative" class="options" id="breedDiv"><div id="breed1" class="clonedBreedInput" style="margin-bottom:4px;" ><label>Breed:</label><select id = "BreedList1" class="select" name="BreedList" ><option value="null"> Select a Breed</option><option value="Tabby">Tabby</option><option value="Maine Coon">Maine Coon</option><option value="Persian">Persian</option><option value="Siamese">Siamese</option><option value="Ragdoll">Ragdoll</option><option value="Sphynx">Sphinx</option></select></div> <!--end input1 --><div><input id="btnAdd" class="buttonDiv buttonStyle" type="button"  value="Add another breed" ><input id="btnDel" class="buttonDiv buttonStyle" type="button"  value="Remove breed"  disabled = "disabled"></div></br></div><div id = "colorDiv" class="options" style="position:relative"><div id="color1" class="clonedColorInput" style="margin-bottom:4px;"><label> Color:</label><select class= "Colorselect" name = "ColorList"  ><option value="null"> Select a Color</option><option value = "White">White</option><option value = "Black">Black</option><option value = "Orange">Orange</option><option value = "Calico">Calico</option><option value = "Gray">Gray</option><option value = "Brown">Brown</option></select></div><div><input id="colorAdd" class="buttonDiv buttonStyle" type="button"  value="Add another color"><input id="colorDel" class="buttonDiv buttonStyle" type="button"  value="Remove color" disabled = "disabled"></div></br></div><div id = "eyeDiv" class="options" style="position:relative"><div id="eye1" class="clonedEyeInput" style="margin-bottom:4px;" ><label> Eye Color:</label><select class= "Eyeselect" name = "EyeList"  ><option value="null"> Select an Eye Color</option><option value = "Green">Green</option><option value = "Gray">Gray</option><option value = "Blue">Blue</option><option value = "Yellow">Yellow</option></select></div><div><input id="ecAdd" class="buttonDiv buttonStyle" type="button"  value="Add another eye color"><input id="ecDel" class="buttonDiv buttonStyle" type="button" value="Remove eye color" disabled = "disabled"></div><br /></div><div id="hairDiv" class="options" style="position:relative"><div id="hair1" class="clonedHairInput" style="margin-bottom:4px;" ><label> Hair Length:</label><select class= "Hairselect" name= "HairList"><option value="null"> Select a hair length</option><option value = "Long">Long Hair</option><option value = "Short">Short Hair</option><option value = "None">Hairless</option></select></div><div><input type="button" class="buttonStyle" value="Add a hair length" id="hairAdd" class="buttonDiv"><input type="button" class="buttonStyle" value="Remove hair length" id="hairDel" class="buttonDiv" disabled = "disabled"></div><br /></div><div id="sexDiv" class="options" style="position:relative"  ><div id="sex1" class="clonedSexInput" style="margin-bottom:4px;" ><label> Sex:</label> <select name = "SexList" class= "Sexselect" > <option value="null"> Select a gender</option> <option value = "Female">Female</option> <option value = "Male">Male</option> </select> </div> <div> <input type="button" class="buttonStyle" value="Add sex" id="sexAdd" class="buttonDiv"> <input type="button" class="buttonStyle" value="Remove sex" id="sexDel" class="buttonDiv" disabled = "disabled"> </div> </br> </div> <div id= "fixDiv" class="options" style="position:relative"  > <div id="fix1" class="clonedFixInput" style="margin-bottom:4px;" > <label> Spayed or Neutered?:</label> <select class= "Fixselect" name = "fixList" > <option value="null"> Select if fixed</option> <option value = "Fixed">Spay/Neuter</option> <option value = "Not Fixed">Intact</option> </select> </div> <div> <input id="fixAdd" class="buttonStyle buttonDiv" type="button"  value="Add choice" > <input id="fixDel" class="buttonDiv" type="button" class="buttonStyle" value="Remove choice" disabled = "disabled"> </div> </br> </div> <div id = "ageDiv" class="options" style="position:relative"> <div id="age1" class="clonedAgeInput" style="margin-bottom:4px;" > <label> Prefered Age:</label> <select name = "ageList" class= "Ageselect" > <option value="null"> Select an age range</option> <option value = "Kitten">Kitten (under 2 years)</option> <option value = "Young Adult">Young Adult (2-7 years)</option> <option value = "Adult">Adult (7+ years)</option> </select> </div> <div> <input  id="ageAdd" class="buttonDiv buttonStyle" type="button" value="Add age"> <input  id="ageDel" class="buttonDiv buttonStyle" type="button"  value="Remove age" disabled = "disabled"> </div> <br /> </div> <div id="markDiv" class="options" style="position:relative"> <div id="mark1" class="clonedMarkingsInput" style="margin-bottom:4px;" > <label> Prefered Markings:</label> <select name = "markList" class= "Markselect" > <option value="null"> Select prefered Markings</option> <option value = "None">None</option> <option value = "Stripes">Stripes</option> <option value = "Spots">Spots</option> </select> </div> <div> <input  id="markAdd" class="buttonDiv buttonStyle" type="button" value="Add marking"> <input  id="markDel" class="buttonDiv buttonStyle" type="button"  value="Remove marking" disabled = "disabled"> </div> <br /> </div> </div> </div> <!-- end left div --> <div id="rightDiv"> <div id="rightTop"> <div id="rightTopTop"> </div> <div id="rightTopBottom"> <div id="rightTopBottomLeft"> </div> <div id="rightTopBottomRight"> </div> </div> </div> <div id="rightBottom"> <div id ="selectedCatDisplay"> </div> </div> </div> </div> <div class="modal-footer"> <input id = "submit" type = "button" class="btn btn-primary" value = "Find My Cat"/> </div> </div>'

function writecatalog(){
    $('#widgethtml').html(cataloghtml);
    catalogcall();
    $('#catalogMain').css({
        width: 'auto',//sets width to auto to wrap the size of modal-body
        'margin-left': function () {//creates function to center modal on page. 
            return -($(this).width() / 2);
        }
        
    });
}

