	var tt2ccirleArray = new Array();
	var tt2ccirle4Array = new Array();
	var tt2ccirle5Array = new Array();
	var tt2ccirle6Array = new Array();

function tt2cCall(){
	
	//creates canvas we'll be working with using dimensions which fit the exercise.
	var stage = new Kinetic.Stage({
	container: 'tt2c',
	width: 450,
	height: 400
	});
	//creates layer to draw each element.
	var tableShapes = new Kinetic.Layer();

	//creates kinetic groups for the first three columns which allow the user to click on the text above the group (P, Q or R) and clear that column for better visibility and interactivity.
	var col1 = new Kinetic.Group();
	var col2 = new Kinetic.Group();
	var col3 = new Kinetic.Group();

	//adds each element to the layer
	tableShapes.add(truthTable); //main rectangle of table
	//table column lines
	tableShapes.add(column1);
	tableShapes.add(column2);
	tableShapes.add(column3);
	tableShapes.add(column4);
	tableShapes.add(column5);
	tableShapes.add(topLine);
	//table row loines
	tableShapes.add(row1);
	tableShapes.add(row2);
	tableShapes.add(row3);
	tableShapes.add(row4);
	tableShapes.add(row5);
	tableShapes.add(row6);
	tableShapes.add(row7);
	//circles within table
	tableShapes.add(circle1x1);
	tableShapes.add(circle1x2);
	tableShapes.add(circle1x3);
	tableShapes.add(circle1x4);
	tableShapes.add(circle1x5);
	tableShapes.add(circle1x6);
	tableShapes.add(circle1x7);
	tableShapes.add(circle1x8);
	tableShapes.add(circle2x1);
	tableShapes.add(circle2x2);
	tableShapes.add(circle2x3);
	tableShapes.add(circle2x4);
	tableShapes.add(circle2x5);
	tableShapes.add(circle2x6);
	tableShapes.add(circle2x7);
	tableShapes.add(circle2x8);
	tableShapes.add(circle3x1);
	tableShapes.add(circle3x2);
	tableShapes.add(circle3x3);
	tableShapes.add(circle3x4);
	tableShapes.add(circle3x5);
	tableShapes.add(circle3x6);
	tableShapes.add(circle3x7);
	tableShapes.add(circle3x8);
	tableShapes.add(circle4x1);
	tableShapes.add(circle4x2);
	tableShapes.add(circle4x3);
	tableShapes.add(circle4x4);
	tableShapes.add(circle4x5);
	tableShapes.add(circle4x6);
	tableShapes.add(circle4x7);
	tableShapes.add(circle4x8);
	tableShapes.add(circle5x1);
	tableShapes.add(circle5x2);
	tableShapes.add(circle5x3);
	tableShapes.add(circle5x4);      
	tableShapes.add(circle5x5);      
	tableShapes.add(circle5x6);      
	tableShapes.add(circle5x7);      
	tableShapes.add(circle5x8);      
	tableShapes.add(circle6x1);
	tableShapes.add(circle6x2);
	tableShapes.add(circle6x3);
	tableShapes.add(circle6x4);      
	tableShapes.add(circle6x5);      
	tableShapes.add(circle6x6);      
	tableShapes.add(circle6x7);      
	tableShapes.add(circle6x8);
	col1.add(circle1x1);
	col1.add(circle1x2);
	col1.add(circle1x3);
	col1.add(circle1x4);
	col1.add(circle1x5);
	col1.add(circle1x6);
	col1.add(circle1x7);
	col1.add(circle1x8);
	col2.add(circle2x1);
	col2.add(circle2x2);
	col2.add(circle2x3);
	col2.add(circle2x4);
	col2.add(circle2x5);
	col2.add(circle2x6);
	col2.add(circle2x7);
	col2.add(circle2x8);
	col3.add(circle3x1);
	col3.add(circle3x2);
	col3.add(circle3x3);
	col3.add(circle3x4);
	col3.add(circle3x5);
	col3.add(circle3x6);
	col3.add(circle3x7);
	col3.add(circle3x8);
	//text and statements      
	tableShapes.add(tableP);
	tableShapes.add(tableQ);
	tableShapes.add(tableR);
	tableShapes.add(PbiconR);
	tableShapes.add(PbiconQ);
	tableShapes.add(fullStatement);

	//adds group to the layer.
	tableShapes.add(col1);
	tableShapes.add(col2);
	tableShapes.add(col3);
	//adds layer to the stage. The layer must be added to the stage last to insure all elements are added.

	stage.add(tableShapes);

	/*creates an event each time a circle is clicked or tapped. Calls upon tt2csetColor() function in functions.js
	*for devices with a mouse device, the click function is used. For touch devices such as mobile and tablet devices, the tap function is used.*/
	circle4x1.on("click tap", function(){
		tt2csetColor(circle4x1);
	})

	circle4x2.on("click tap", function(){
		tt2csetColor(circle4x2);
	})

	circle4x3.on("click tap", function(){
		tt2csetColor(circle4x3);
	})

	circle4x4.on("click tap", function(){
		tt2csetColor(circle4x4);
	})
	circle4x5.on("click tap", function(){
		tt2csetColor(circle4x5);
	})

	circle4x6.on("click tap", function(){
		tt2csetColor(circle4x6);
	})

	circle4x7.on("click tap", function(){
		tt2csetColor(circle4x7);
	})

	circle4x8.on("click tap", function(){
		tt2csetColor(circle4x8);
	})
	circle5x1.on("click tap", function(){
		tt2csetColor(circle5x1);
	})

	circle5x2.on("click tap", function(){
		tt2csetColor(circle5x2);
	})

	circle5x3.on("click tap", function(){
		tt2csetColor(circle5x3);
	})

	circle5x4.on("click tap", function(){
		tt2csetColor(circle5x4);
	})
	circle5x5.on("click tap", function(){
		tt2csetColor(circle5x5);
	})

	circle5x6.on("click tap", function(){
		tt2csetColor(circle5x6);
	})

	circle5x7.on("click tap", function(){
		tt2csetColor(circle5x7);
	})

	circle5x8.on("click tap", function(){
		tt2csetColor(circle5x8);
	})
	circle6x1.on("click tap", function(){
		tt2csetColor(circle6x1);
	})

	circle6x2.on("click tap", function(){
		tt2csetColor(circle6x2);
	})

	circle6x3.on("click tap", function(){
		tt2csetColor(circle6x3);
	})

	circle6x4.on("click tap", function(){
		tt2csetColor(circle6x4);
	})
	circle6x5.on("click tap", function(){
		tt2csetColor(circle6x5);
	})

	circle6x6.on("click tap", function(){
		tt2csetColor(circle6x6);
	})

	circle6x7.on("click tap", function(){
		tt2csetColor(circle6x7);
	})

	circle6x8.on("click tap", function(){
		tt2csetColor(circle6x8);
	})
	//calls upon tt2cclearColumn() in functions.js. used to change each cirlce in the specified column to clear, which may help the user see the needed columns more clearly.
	tableP.on("click tap", function(){
		//console.log("tablep clicked");
		tt2cclearColumn("c1");
	})
	tableQ.on("click tap", function(){
		tt2cclearColumn("c2");
	})
	tableR.on("click tap", function(){
		tt2cclearColumn("c3");
	})
	/*arrays created for error and size checking. Arrays were used instead of iterating through groups for ease of use. A group will record each object, 
	regardless of color. These arrays will only push an object if it is clicked and therefore retains a color of green or red.*/


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
	/*this function clears a specified column. If the user clicks on a letter column (P, Q or R), that column is turned white, enabling the user to more clearly 
	see the other columns. If the user clicks again, the column returns to its previous pre-ordered colors.*/
	function tt2cclearColumn(object){
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
	tt2caddToArray to add the object to its corresponding array and draws the layer to ensure color change.*/
	function tt2csetColor(object)
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
		tt2caddToArray(object);//add the object with it's id and color to an array
		tableShapes.draw();//draw the layer to make the color change. 
	}

	//this function serves to add an object to its correct array.
	function tt2caddToArray(object){
		//console.log("tt2caddToArray information: " + object.getFill() + ", " + object.getId());
		if(!tt2ccirleArray.contains(object)){//if the array does not already contain the element, add it to the array
				tt2ccirleArray.push(object);
		}
		var objectId = object.getId();//get the id of the element
		//check the id of each element. If it matches the specified id, add it to the correct array.
		if(objectId=="4x1"||objectId=="4x2"||objectId=="4x3"||objectId=="4x4"||objectId=="4x5"||objectId=="4x6"||objectId=="4x7"||objectId=="4x8"){
			if(!tt2ccirle4Array.contains(object)){
				//console.log("pushing to tt2ccirle4Array" + objectId + " " + object.getFill());
				tt2ccirle4Array.push(object);
			}
		}
		else if(objectId=="5x1"||objectId=="5x2"||objectId=="5x3"||objectId=="5x4"||objectId=="5x5"||objectId=="5x6"||objectId=="5x7"||objectId=="5x8"){
			if(!tt2ccirle5Array.contains(object)){
				//console.log("pushing to tt2ccirle5Array" + objectId + " " + object.getFill());
				tt2ccirle5Array.push(object);
			}
		}
		else if(objectId=="6x1"||objectId=="6x2"||objectId=="6x3"||objectId=="6x4"||objectId=="6x5"||objectId=="6x6"||objectId=="6x7"||objectId=="6x8"){
			if(!tt2ccirle6Array.contains(object)){
				//console.log("pushing to tt2ccirle6Array" + objectId + " " + object.getFill());
				tt2ccirle6Array.push(object);
			}
		}
		else{
			//do nothing
		}
		
	}

	/*each for loop in the function checks a specific row for errors in the truth table. Each array is checked for correct length to make sure
	there are no uncolored or missing circles and that the truth table is complete. Each for loop follows the same patter: get the color and id
	of each element in the array and assign them to a variable. Check the length of the each array. If the array is smaller than specified, there
	is at least one blank circle. Increas error count and add to error string. Then check each id and color. If not exactly as sepcified, table is incorrect.*/
	}

function tt2chint(){
		alert("If you're having a tough time separating the letter (P, Q or R) columns, click on the letter (P, Q, or R) for better visibility. Click again to get the colors back.")
	}

function tt2cupdateTable()
	{
		 //array to add all english error alerts. When user clicks "check it" button, if there are errors the for loop below will output each string so the user knows what is wrong.
		var errorString = new Array();

		 //variable to record the number of errors. if the variable is zero, the user has completed the table correctly. If the variable is greater than zero, there are erros the user must correct.
		var errors = 0;

		if(tt2ccirleArray.length<24){
			errors++;
		}
		else{

			for(var j=0; j<tt2ccirle4Array.length; j++){
				var color1 = tt2ccirle4Array[j].getFill();
				var object1 = tt2ccirle4Array[j].getId();
				//console.log("for loop 2 Object id and color: " + object1 + ", " + color1);
				if(tt2ccirle4Array.length<8){
					errors++;
				}
				else{
					if(!((object1 == "4x1" && color1 == "green")||(object1 == "4x2" && color1 == "green")
			 			|| (object1 == "4x3" && color1 == "green") ||  (object1 == "4x4" && color1=="green")||
			 			(object1 == "4x5" && color1 == "red")||(object1 == "4x6" && color1 == "green")
			 			|| (object1 == "4x7" && color1 == "red") ||  (object1 == "4x8" && color1=="green"))){

						var temp1 = "The ~P <--> ~R column has errors.";
						if(!errorString.contains(temp1))
						{
							errorString.push(temp1);
						}
						errors++;

					}
				}
			}
			for(var k=0; k<tt2ccirle5Array.length; k++){
				var color2 = tt2ccirle5Array[k].getFill();
				var object2 = tt2ccirle5Array[k].getId();
				//console.log("for loop 3 Object id and color: " + object2 + ", " + color2);
				if(tt2ccirle5Array.length<8){
					errors++;
				}
				else{
					if(!((object2 == "5x1" && color2 == "green")||(object2 == "5x2" && color2 == "green")
			 			||(object2 == "5x3" && color2 == "red") ||  (object2 == "5x4" && color2=="red")||
			 			(object2 == "5x5" && color2 == "green")||(object2 == "5x6" && color2 == "green")
			 			||(object2 == "5x7" && color2 == "green") ||  (object2 == "5x8" && color2=="green"))){

						var temp2="The P <--> Q column has errors.";
						if(!errorString.contains(temp2))
						{
							errorString.push(temp2);
						}
						errors++;
					}
				}
			}
			for(var l=0; l<tt2ccirle6Array.length; l++){
				var color3 = tt2ccirle6Array[l].getFill();
				var object3 = tt2ccirle6Array[l].getId();
				//console.log("for loop 3 Object id and color: " + object3 + ", " + color3);
				if(tt2ccirle6Array.length<8){
					errors++;
				}
				else{
					if(!((object3 == "6x1" && color3 == "green")||(object3 == "6x2" && color3 == "red")
			 			|| (object3 == "6x3" && color3 == "red") ||  (object3 == "6x4" && color3=="green")||
			 			(object3 == "6x5" && color3 == "green")||(object3 == "6x6" && color3 == "red")
			 			|| (object3 == "6x7" && color3 == "red") ||  (object3 == "6x8" && color3=="green"))){

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
			if(tt2ccirle4Array.length<8||tt2ccirle5Array.length<8||tt2ccirle6Array.length<8||tt2ccirleArray.length<24)
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


	var tt2chtml = '  <div id = "tt2cMain" class="modal hide fade" tabindex="-1" role="dialog" aria-hidden="true"> <!-- --> <div id="directions" class = "modal-header"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button> <h3 id="header">P, Q and R have been filled in for you. Now, build the truth table for this statement: </h3> <h4>(~P <--> ~R) <--> (P <--> Q)</h4> </div> <!--The main modal body contains only the exercise.--> <div id="tt2c" class = "modal-body"></div> <div id = "buttonDiv" class="modal-footer"> <!--This button allows the user to close the modal and return to reading the material. Work will not be saved.--> <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button> <!--This button checks the user\'s work. Calls "tt2cupdateTable" function. tt2cupdateTable() is found in functions.js. --> <input type = "submit" class="btn btn-primary" value = "check it!" id = "tt2csubmit" onclick = "tt2cupdateTable();" /> <!--This button gives the user a hint Calls "hint" function. --> <input type = "submit" class="btn btn-danger" value = "Give me a Hint!" id = "tt2chintme" onclick = "tt2chint();" /> </div> </div>';
	function writett2c(){
		$('#widgethtml').html(tt2chtml);
		tt2cCall();
	}
