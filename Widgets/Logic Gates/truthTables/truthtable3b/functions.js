/*arrays created for error and size checking. Arrays were used instead of iterating through groups for ease of use. A group will record each object, 
regardless of color. These arrays will only push an object if it is clicked and therefore retains a color of green or red.*/
var circleArray = new Array();
var circle7Array = new Array();
var circle5Array = new Array();
var circle6Array = new Array();
var circle8Array = new Array();

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
/*this function clears a specified column. If the user clicks on a letter column (P, Q, R or S), that column is turned white, enabling the user to more clearly 
see the other columns. If the user clicks again, the column returns to its previous pre-ordered colors.*/
function clearColumn(object){
	//console.log(object);
	//if user clicks on the P column
	if(object=="c1"){
		var c1 = col1.getChildren();//get each circle in the first column group
		for (var i = 0; i < c1.length; i++) {
				if(c1[i].getFill()==""){//check if column is already white. if it is, change colors back to original.
					if(c1[i].getId()=="1x1"||c1[i].getId()=="1x2"||c1[i].getId()=="1x3"||c1[i].getId()=="1x4"||c1[i].getId()=="1x5"||c1[i].getId()=="1x6"||c1[i].getId()=="1x7"||c1[i].getId()=="1x8"){
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
					if(c1[i].getId()=="2x1"||c1[i].getId()=="2x2"||c1[i].getId()=="2x3"||c1[i].getId()=="2x4"||c1[i].getId()=="2x9"||c1[i].getId()=="2x10"||c1[i].getId()=="2x11"||c1[i].getId()=="2x12"){
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
					if(c1[i].getId()=="3x1"||c1[i].getId()=="3x2"||c1[i].getId()=="3x5"||c1[i].getId()=="3x6"||c1[i].getId()=="3x9"||c1[i].getId()=="3x10"||c1[i].getId()=="3x13"||c1[i].getId()=="3x14"){
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
	else if(object=="c4") //if user clicks on the S column
	{
		var c1 = col4.getChildren();//get each circle in the third column group
		for (var i = 0; i < c1.length; i++) {
				if(c1[i].getFill()=="")//check if column is already white. if it is, change colors back to original.
				{
					if(c1[i].getId()=="4x1"||c1[i].getId()=="4x3"||c1[i].getId()=="4x5"||c1[i].getId()=="4x7"||c1[i].getId()=="4x9"||c1[i].getId()=="4x11"||c1[i].getId()=="4x13"||c1[i].getId()=="4x15"){
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
	if(!circleArray.contains(object))//if the array does not already contain this object, add it to the array
	{
			circleArray.push(object);
	}
	
	var objectId = object.getId();//get the object's id, assign it to objectId

	//check the object's id agains each known id. If it matches, add it to correct array.
	if(objectId=="7x1"||objectId=="7x2"||objectId=="7x3"||objectId=="7x4"||objectId=="7x5"||objectId=="7x6"||objectId=="7x7"||objectId=="7x8"||objectId=="7x9"||objectId=="7x10"||objectId=="7x11"||objectId=="7x12"||objectId=="7x13"||objectId=="7x14"||objectId=="7x15"||objectId=="7x16"){
		if(!circle7Array.contains(object)){
			//console.log("pushing to circle7Array" + objectId + " " + object.getFill());
			circle7Array.push(object);
		}
	}
	else if(objectId=="5x1"||objectId=="5x2"||objectId=="5x3"||objectId=="5x4"||objectId=="5x5"||objectId=="5x6"||objectId=="5x7"||objectId=="5x8"||objectId=="5x9"||objectId=="5x10"||objectId=="5x11"||objectId=="5x12"||objectId=="5x13"||objectId=="5x14"||objectId=="5x15"||objectId=="5x16"){
		if(!circle5Array.contains(object)){
			//console.log("pushing to circle5Array" + objectId + " " + object.getFill());
			circle5Array.push(object);
		}
	}
	else if(objectId=="6x1"||objectId=="6x2"||objectId=="6x3"||objectId=="6x4"||objectId=="6x5"||objectId=="6x6"||objectId=="6x7"||objectId=="6x8"||objectId=="6x9"||objectId=="6x10"||objectId=="6x11"||objectId=="6x12"||objectId=="6x13"||objectId=="6x14"||objectId=="6x15"||objectId=="6x16"){
		if(!circle6Array.contains(object)){
			//console.log("pushing to circle6Array" + objectId + " " + object.getFill());
			circle6Array.push(object);
		}
	}
	else if(objectId=="8x1"||objectId=="8x2"||objectId=="8x3"||objectId=="8x4"||objectId=="8x5"||objectId=="8x8"||objectId=="8x7"||objectId=="8x8"||objectId=="8x9"||objectId=="8x10"||objectId=="8x11"||objectId=="8x12"||objectId=="8x13"||objectId=="8x14"||objectId=="8x15"||objectId=="8x18"){
	    if(!circle8Array.contains(object)){
	      //console.log("pushing to circle8Array" + objectId + " " + object.getFill());
	      circle8Array.push(object);
	    }
	}
	else{
		//do nothing
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

	if(circleArray.length<64)//if there are not 64 circles in the main array, there is a blank circle. Increase error count 
	{
		errors++;
	}
	else{
		
		//checks column 5 for errors or correct completion.
		for(var i=0; i<circle5Array.length; i++){
			var color2 = circle5Array[i].getFill();//get the color of the element in the array
			var object2 = circle5Array[i].getId();// gett he id of the element in the array
			//console.log("for loop 3 Object id and color: " + object2 + ", " + color2);
			if(circle5Array.length<16){//if this array is less than 16, there is a blank circle in this column
				errors++;
			}
			else{
				//if the obects and colors in the array do not match exactly, the table is incorrect.
				if(!((object2 == "5x1" && color2 == "green")||(object2 == "5x2" && color2 == "green")
		 			||(object2 == "5x3" && color2 == "green") ||  (object2 == "5x4" && color2=="green")||
		 			(object2 == "5x5" && color2 == "red")||(object2 == "5x6" && color2 == "red")
		 			||(object2 == "5x7" && color2 == "red") ||  (object2 == "5x8" && color2=="red")||
		 			(object2 == "5x9" && color2 == "green")||(object2 == "5x10" && color2 == "green")
		 			||(object2 == "5x11" && color2 == "green") ||  (object2 == "5x12" && color2=="green")||
		 			(object2 == "5x13" && color2 == "green")||(object2 == "5x14" && color2 == "green")
		 			||(object2 == "5x15" && color2 == "green") ||  (object2 == "5x16" && color2=="green"))){

					var temp2="The P -> Q column has errors.";
					if(!errorString.contains(temp2))//if this error does not already exist, add it to the error string array
					{
						errorString.push(temp2);
					}
					errors++;//increase error count
				}
			}
		}
		//checks column 6 for errors or correct completion.
		for(var i=0; i<circle6Array.length; i++){
			var color3 = circle6Array[i].getFill();
			var object3 = circle6Array[i].getId();
			//console.log("for loop 3 Object id and color: " + object3 + ", " + color3);
			if(circle6Array.length<16){
				errors++;
			}
			else{
				if(!((object3 == "6x1" && color3 == "green")||(object3 == "6x2" && color3 == "green")
		 			|| (object3 == "6x3" && color3 == "red") ||  (object3 == "6x4" && color3=="red")||
		 			(object3 == "6x5" && color3 == "green")||(object3 == "6x6" && color3 == "green")
		 			|| (object3 == "6x7" && color3 == "green") ||  (object3 == "6x8" && color3=="green")||
		 			(object3 == "6x9" && color3 == "green")||(object3 == "6x10" && color3 == "green")
		 			|| (object3 == "6x11" && color3 == "red") ||  (object3 == "6x12" && color3=="red")||
		 			(object3 == "6x13" && color3 == "green")||(object3 == "6x14" && color3 == "green")
		 			|| (object3 == "6x15" && color3 == "red") ||  (object3 == "6x16" && color3=="red"))){

		 			var temp3 ="The ((P -> Q) -> R) column has errors.";
					if(!errorString.contains(temp3))
					{
						errorString.push(temp3);
					}
					errors++;
				}
			}
		}
	}
	for(var i=0; i<circle7Array.length; i++){
			var color1 = circle7Array[i].getFill();
			var object1 = circle7Array[i].getId();
			//console.log("for loop 2 Object id and color: " + object1 + ", " + color1);
			if(circle7Array.length<16){
				errors++;
			}
			else{
				if(!((object1 == "7x1" && color1 == "red")||(object1 == "7x2" && color1 == "red")
		 			|| (object1 == "7x3" && color1 == "red") ||  (object1 == "7x4" && color1=="red")||
		 			(object1 == "7x5" && color1 == "green")||(object1 == "7x6" && color1 == "red")
		 			|| (object1 == "7x7" && color1 == "green") ||  (object1 == "7x8" && color1=="red")||
		 			(object1 == "7x9" && color1 == "red")||(object1 == "7x10" && color1 == "red")
		 			|| (object1 == "7x11" && color1 == "red") ||  (object1 == "7x12" && color1=="red")||
		 			(object1 == "7x13" && color1 == "green")||(object1 == "7x14" && color1 == "red")
		 			|| (object1 == "7x15" && color1 == "green") ||  (object1 == "7x16" && color1=="red"))){

					var temp1 = "The ~Q * S column has errors.";
					if(!errorString.contains(temp1))
					{
						errorString.push(temp1);
					}
					errors++;

				}
			}
		}	
		for(var i = 0; i< circle8Array.length; i++){
			color4 = circle8Array[i].getFill();
			object4 = circle8Array[i].getId();
			if(circle8Array.length<16){
				errors++;
			}
			else{
				if(!((object4 == "8x1" && color4 == "green")||(object4 == "8x2" && color4 == "green")
		          || (object4 == "8x3" && color4 == "red") ||  (object4 == "8x4" && color4=="red")||
		          (object4 == "8x5" && color4 == "red")||(object4 == "8x6" && color4 == "green")
		          || (object4 == "8x8" && color4 == "red") ||  (object4 == "8x8" && color4=="green")||
		          (object4 == "8x9" && color4 == "green")||(object4 == "8x10" && color4 == "green")
		          || (object4 == "8x11" && color4 == "red") ||  (object4 == "8x12" && color4=="red")||
		          (object4 == "8x13" && color4 == "red")||(object4 == "8x14" && color4 == "green")
		          || (object4 == "8x15" && color4 == "green") ||  (object4 == "8x16" && color4=="red"))){

					var temp4 = "The final column has errors.";
					if(!errorString.contains(temp4))
					{
						errorString.push(temp4);
					}
					errors++;
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
		if(circle8Array.length<16||circle7Array.length<16||circle5Array.length<16||circle6Array.length<16||circleArray.length<64)
		{
			//if the lenghts are less than specified, there are blank circles. notify user.
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