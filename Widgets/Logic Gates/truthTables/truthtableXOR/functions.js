/*arrays created for error and size checking. Arrays were used instead of iterating through groups for ease of use. A group will record each object, 
regardless of color. These arrays will only push an object if it is clicked and therefore retains a color of green or red.*/
circleArray = new Array();

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

//this function serves to add an object to the error checking array.
function addToArray(object){
	if(!circleArray.contains(object)){
			circleArray.push(object);
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

	if(circleArray.length<4){
		errors++;
	}
	else{

		for(var i = 0; i < circleArray.length; i++){
			var color = circleArray[i].getFill();
			var object = circleArray[i].getId();
			//console.log("for loop 1 Object id and color: " + object + ", " + color);
			if(circleArray.length<4){
				errors++;
			}
			else{
				
				if(!((object == "3x1" && color == "red")||(object == "3x2" && color == "green")
		 			||(object == "3x3" && color == "green") || (object == "3x4" && color=="red"))){

					//console.log("If statement one: " + color + ", " + object);
					var temp = "The P + Q column is wrong.";
					if(!errorString.contains(temp))
					{
						errorString.push(temp);
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
		if(circleArray.length<4)
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