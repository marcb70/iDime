$(document).ready(function(){
var newNum = 0;
var selectedCats = new Array();
var selectedCatList = new Array();
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

Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}

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
        //var JsonCatArray = catDb.getDbAsJson();
        //console.log(JsonCatArray);
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
        console.log(selectedCats);
        $('.clonedBreedInput').find('select').each(function() {
            if($(this).val() != "null"){
                selectedOptions.breed.push($(this).val()) 
                console.log($(this).val());
            }
        });

        $('.clonedColorInput').find('select').each(function() {
            if($(this).val() != "null"){
                selectedOptions.color.push($(this).val()) 
                console.log($(this).val());
            }
        });

        $('.clonedSexInput').find('select').each(function() {
            if($(this).val() != "null"){
                selectedOptions.sex.push($(this).val()) 
                console.log($(this).val());
            }
        });

        $('.clonedMarkingsInput').find('select').each(function() {
            if($(this).val() != "null"){
                selectedOptions.markings.push($(this).val()) 
                console.log($(this).val());
            }
        });

        $('.clonedFixInput').find('select').each(function() {
            if($(this).val() != "null"){
                selectedOptions.fixed.push($(this).val()) 
                console.log($(this).val());
            }
        });

        $('.clonedEyeInput').find('select').each(function() {
            if($(this).val() != "null"){
                selectedOptions.eyecolor.push($(this).val()) 
                console.log($(this).val());
            }
        });

        $('.clonedAgeInput').find('select').each(function() {
            if($(this).val() != "null"){
                selectedOptions.age.push($(this).val()) 
                console.log($(this).val());
            }
        });

        $('.clonedHairInput').find('select').each(function() {
            if($(this).val() != "null"){
                selectedOptions.hairlength.push($(this).val()) 
                console.log($(this).val());
            }
        });
        $('.clonedMarkInput').find('select').each(function() {
            if($(this).val() != "null"){
                selectedOptions.markings.push($(this).val()) 
                console.log($(this).val());
            }
        });
        console.log(selectedOptions);

        for (var i = 0; i < catArray.length; i++) {

            if( (selectedOptions.age.contains(catArray[i].getAge()) || selectedOptions.age.length == 0) && (selectedOptions.breed.contains(catArray[i].getBreed()) || selectedOptions.breed.length == 0) && (selectedOptions.color.contains(catArray[i].getColor()) || selectedOptions.color.length == 0) && (selectedOptions.eyecolor.contains(catArray[i].getEyeColor()) || selectedOptions.eyecolor.length == 0) && (selectedOptions.fixed.contains(catArray[i].checkIfFixed()) || selectedOptions.fixed.length == 0) && (selectedOptions.sex.contains(catArray[i].getSex()) || selectedOptions.sex.length == 0) && (selectedOptions.hairlength.contains(catArray[i].getHairLength()) || selectedOptions.hairlength.length == 0) && (selectedOptions.markings.contains(catArray[i].getMarkings()) || selectedOptions.markings.length == 0))
            {

                catArray[i].isMatch(true);
            }

            if(catArray[i].getMatch()){
                catHTML += catArray[i].displayCatThumb()
            }

            $("#selectedCatDisplay").html(catHTML);
        }
        
        $('.catThumb').click(function(){
            for (var i = 0; i < catArray.length; i++) {
               // console.log(catArray[i].getName() == $(this).text())
               // console.log(catArray)
               if(catArray[i].getName() == $(this).text()){
                catHTML = catArray[i].displayCat();
            }
        };

        $("#rightTop").html(catHTML);

    });

        $("#rightTop").html("")
    });

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

        $("#rightTop").html(catHTML);

    });

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

});
