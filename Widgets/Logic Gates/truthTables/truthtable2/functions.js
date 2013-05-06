/*arrays created for error and size checking. Arrays were used instead of iterating through groups for ease of use. A group will record each object, 
regardless of color. These arrays will only push an object if it is clicked and therefore retains a color of green or red.*/
var circleArray = new Array();
var circle4Array = new Array();
var circle5Array = new Array();
var circle6Array = new Array();
var trashArray = new Array();

//code taken from internet. boolean function that checks to see if an array contains a certain element. 
Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}
/*this function clears a specified column. If the user clicks on a letter column (P, Q or R), that column is turned white, enabling the user to more clearly 
see the other columns. If the user clicks again, the column returns to its previous pre-ordered colors.*/
function clearColumn(object){
	//console.log(object);
	//if user clicks on the P column
	if(object=="c1"){
		var c1 = col1.getChildren();//get each circle in the first column group
		for (var i = 0; i < c1.length; i++) {
				if(c1[i].getFill()==""){//check if column is already white. if it is, change colors back to original.
					if(c1[i].getId()=="1x1"||c1[i].getId()=="1x2"||c1[i].getId()=="1x3"||c1[i].getId()=="1x4"){
						c1[i].setFill("green");
					}
					else{
						c1[i].setFill("red");
					}
				}
				else{//if the column is not already white, make it white.
					c1[i].setFill("");
				}
				
			}	
	}
	else if(object=="c2")//if user clicks on the Q column
	{
		var c1 = col2.getChildren();//get each circle in the second column group
		for (var i = 0; i < c1.length; i++) {
				if(c1[i].getFill()==""){//check if column is already white. if it is, change colors back to original.
					if(c1[i].getId()=="2x1"||c1[i].getId()=="2x2"||c1[i].getId()=="2x5"||c1[i].getId()=="2x6"){
						c1[i].setFill("green");
					}
					else{
						c1[i].setFill("red");
					}
				}
				else{//if the column is not already white, make it white.
					c1[i].setFill("");
				}
				
			}	
	}
	else if(object=="c3") //if user clicks on the R column
	{
		var c1 = col3.getChildren();//get each circle in the third column group
		for (var i = 0; i < c1.length; i++) {
				if(c1[i].getFill()=="")//check if column is already white. if it is, change colors back to original.
				{
					if(c1[i].getId()=="3x1"||c1[i].getId()=="3x3"||c1[i].getId()=="3x5"||c1[i].getId()=="3x7"){
						c1[i].setFill("green");
					}
					else{
						c1[i].setFill("red");
					}
				}
				else{//if the column is not already white, make it white.
					c1[i].setFill("");
				}
				
			}	
	}
	//draw the layer to change the colors.
	tableShapes.draw();
}
/*when an object is clicked or tapped, this function changes the color of the circle based upon the color it was when tapped. This function then calls
addToArray to add the object to its corresponding array and draws the layer to ensure color change.*/
function setColor(object)
{
	var color = object.getFill();//get the color of the object
	switch(color)
	{
		case ""://if the color is null, change it to green
		color = "green";
		break;
		case "green"://if the color is green, change it to red
		color = "red";
		break;
		case "red"://if the color is red, change it to green.
		color = "green";
		break;
	}
	object.setFill(color);//set the color fill of the object to the correct one.
	addToArray(object);//add the object with it's id and color to an array
	tableShapes.draw();//draw the layer to make the color change. 
}

//this function serves to add an object to its correct array.
function addToArray(object){
	//console.log("addToArray information: " + object.getFill() + ", " + object.getId());
	if(!circleArray.contains(object)){
			circleArray.push(object);
	}
	var objectId = object.getId();

	if(objectId=="4x1"||objectId=="4x2"||objectId=="4x3"||objectId=="4x4"||objectId=="4x5"||objectId=="4x6"||objectId=="4x7"||objectId=="4x8"){
		if(!circle4Array.contains(object)){
			//console.log("pushing to circle4Array" + objectId + " " + object.getFill());
			circle4Array.push(object);
		}
	}
	else if(objectId=="5x1"||objectId=="5x2"||objectId=="5x3"||objectId=="5x4"||objectId=="5x5"||objectId=="5x6"||objectId=="5x7"||objectId=="5x8"){
		if(!circle5Array.contains(object)){
			//console.log("pushing to circle5Array" + objectId + " " + object.getFill());
			circle5Array.push(object);
		}
	}
	else if(objectId=="6x1"||objectId=="6x2"||objectId=="6x3"||objectId=="6x4"||objectId=="6x5"||objectId=="6x6"||objectId=="6x7"||objectId=="6x8"){
		if(!circle6Array.contains(object)){
			//console.log("pushing to circle6Array" + objectId + " " + object.getFill());
			circle6Array.push(object);
		}
	}
	else{
		//console.log("pushing to trashArray" + objectId + " " + object.getFill());
		trashArray.push(object);
	}
	
}

/*each for loop in the function checks a specific row for errors in the truth table. Each array is checked for correct length to make sure
there are no uncolored or missing circles and that the truth table is complete.*/
function updateTable()
{
	 //array to add all english error alerts. When user clicks "check it" button, if there are errors the for loop below will output each string so the user knows what is wrong.
	var errorString = new Array();

	 //variable to record the number of errors. if the variable is zero, the user has completed the table correctly. If the variable is greater than zero, there are erros the user must correct.
	var errors = 0;

	if(circleArray.length<24){
		errors++;
	}
	else{

		for(var j=0; j<circle4Array.length; j++){
			var color1 = circle4Array[j].getFill();
			var object1 = circle4Array[j].getId();
			//console.log("for loop 2 Object id and color: " + object1 + ", " + color1);
			if(circle4Array.length<8){
				errors++;
			}
			else{
				if(!((object1 == "4x1" && color1 == "green")||(object1 == "4x2" && color1 == "green")
		 			|| (object1 == "4x3" && color1 == "red") ||  (object1 == "4x4" && color1=="red")||
		 			(object1 == "4x5" && color1 == "green")||(object1 == "4x6" && color1 == "green")
		 			|| (object1 == "4x7" && color1 == "green") ||  (object1 == "4x8" && color1=="green"))){

					var temp1 = "The P -> Q column has errors.";
					if(!errorString.contains(temp1))
					{
						errorString.push(temp1);
					}
					errors++;

				}
			}
		}
		for(var k=0; k<circle5Array.length; k++){
			var color2 = circle5Array[k].getFill();
			var object2 = circle5Array[k].getId();
			//console.log("for loop 3 Object id and color: " + object2 + ", " + color2);
			if(circle5Array.length<8){
				errors++;
			}
			else{
				if(!((object2 == "5x1" && color2 == "red")||(object2 == "5x2" && color2 == "red")
		 			||(object2 == "5x3" && color2 == "red") ||  (object2 == "5x4" && color2=="red")||
		 			(object2 == "5x5" && color2 == "green")||(object2 == "5x6" && color2 == "red")
		 			||(object2 == "5x7" && color2 == "green") ||  (object2 == "5x8" && color2=="red"))){

					var temp2="The P * Q column has errors.";
					if(!errorString.contains(temp2))
					{
						errorString.push(temp2);
					}
					errors++;
				}
			}
		}
		for(var l=0; l<circle6Array.length; l++){
			var color3 = circle6Array[l].getFill();
			var object3 = circle6Array[l].getId();
			//console.log("for loop 3 Object id and color: " + object3 + ", " + color3);
			if(circle6Array.length<8){
				errors++;
			}
			else{
				if(!((object3 == "6x1" && color3 == "green")||(object3 == "6x2" && color3 == "green")
		 			|| (object3 == "6x3" && color3 == "red") ||  (object3 == "6x4" && color3=="red")||
		 			(object3 == "6x5" && color3 == "green")||(object3 == "6x6" && color3 == "green")
		 			|| (object3 == "6x7" && color3 == "green") ||  (object3 == "6x8" && color3=="green"))){

		 			var temp3 ="The final column has errors.";
					if(!errorString.contains(temp3))
					{
						errorString.push(temp3);
					}
					errors++;
				}
			}
		}
	}
	//if there are no errors, alert the user they have completed the truth table correctly	
	if(errors==0){
		alert("Congrats! You completed the truth table correctly.");
	}
	else{
		var tempString = "There are errors: ";
		//check for array length, make sure the table is completed, no uncolored circles.
		if(circle4Array.length<8||circle5Array.length<8||circle6Array.length<8||circleArray.length<24)
		{
			var tempString2 = "The table is incomplete. Keep going!";
			if(!errorString.contains(tempString2))
			{
				errorString.push(tempString2);
			}
		}

		//for loop so there are not multuple alert boxes when the user checks.
        for(var i = 0; i < errorString.length; i++){
          tempString += "\n-" + errorString[i];
        }
        tempString +="\nTry again";
        alert(tempString);
	}

}