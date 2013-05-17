	ttbiconcircleArray = new Array();

function ttbiconCall(){
	var stage = new Kinetic.Stage({
		container: 'ttbicon',
		width: 250,
		height: 250
	});
	//creates layer to draw each element.
	var tableShapes = new Kinetic.Layer();
	//adds each element to the layer
	var truthTable = new Kinetic.Rect({
	  height: 215,
	  width: 145,
	  stroke: 'black',
	  strokeWidth: 5,
	  x: 15,
	  y: 10

	});
	var topLine = new Kinetic.Line({
	  points: [15, 50, 160, 50],
	  stroke: 'black',
	  strokeWidth: 4
	});
	var column1 = new Kinetic.Line({
	  points: [55, 10, 55, 215],
	  stroke: 'black',
	  strokeWidth: 2
	});

	var column2 = new Kinetic.Line({
	  points: [95, 10, 95, 215],
	  stroke: 'black',
	  strokeWidth: 2
	});
	var row1 = new Kinetic.Line({
	  points: [15, 90, 160, 90],
	  stroke: 'black',
	  strokeWidth: 2
	});

	var row2 = new Kinetic.Line({
	  points: [15, 130, 160, 130],
	  stroke: 'black',
	  strokeWidth: 2
	});

	var row3 = new Kinetic.Line({
	  points: [15, 170, 160, 170],
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle1x1 = new Kinetic.Circle({
	  x: 35,
	  y: 70,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle1x2 = new Kinetic.Circle({
	  x: 35,
	  y: 110,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle1x3 = new Kinetic.Circle({
	  x: 35,
	  y: 150,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle1x4 = new Kinetic.Circle({
	  x: 35,
	  y: 190,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle2x1 = new Kinetic.Circle({
	  x: 75,
	  y: 70,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle2x2 = new Kinetic.Circle({
	  x: 75,
	  y: 110,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle2x3 = new Kinetic.Circle({
	  x: 75,
	  y: 150,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle2x4 = new Kinetic.Circle({
	  x: 75,
	  y: 190,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle3x1 = new Kinetic.Circle({
	  id: "3x1",
	  x: 120,
	  y: 70,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle3x2 = new Kinetic.Circle({
	  id: "3x2",
	  x: 120,
	  y: 110,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle3x3 = new Kinetic.Circle({
	  id: "3x3",
	  x: 120,
	  y: 150,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle3x4 = new Kinetic.Circle({
	  id: "3x4",
	  x: 120,
	  y: 190,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});


	var PbiconQ = new Kinetic.Text({
	  x: 100,
	  y: 15,
	  text: 'P <--> Q',
	  fontSize: 15,
	  fontFamily: 'Calibri',
	  fill: 'black'
	});

	var tableP = new Kinetic.Text({
	  x: 25,
	  y: 15,
	  text: 'P',
	  fontSize: 15,
	  fontFamily: 'Calibri',
	  fill: 'black'
	});

	var tableQ = new Kinetic.Text({
	  x: 65,
	  y: 15,
	  text: 'Q',
	  fontSize: 15,
	  fontFamily: 'Calibri',
	  fill: 'black'
	});


	tableShapes.add(truthTable); //main rectangle of table
	//table column lines
	tableShapes.add(column1);
	tableShapes.add(column2);
	tableShapes.add(topLine);
	//table row lines
	tableShapes.add(row1);
	tableShapes.add(row2);
	tableShapes.add(row3);
	//each circle in the table
	tableShapes.add(circle1x1);
	tableShapes.add(circle1x2);
	tableShapes.add(circle1x3);
	tableShapes.add(circle1x4);
	tableShapes.add(circle2x1);
	tableShapes.add(circle2x2);
	tableShapes.add(circle2x3);
	tableShapes.add(circle2x4);
	tableShapes.add(circle3x1);
	tableShapes.add(circle3x2);
	tableShapes.add(circle3x3);
	tableShapes.add(circle3x4);
	//text and statements
	tableShapes.add(tableP);
	tableShapes.add(tableQ);
	tableShapes.add(PbiconQ);
	//adds layer to the stage. The layer must be added to the stage last to insure all elements are added.
	stage.add(tableShapes);
	/*creates an event each time a circle is clicked or tapped. Calls upon setColor() function in functions.js
	*for devices with a mouse device, the click function is used. For touch devices such as mobile and tablet devices, the tap function is used.*/
	circle3x1.on("click tap", function(){
		setColor(circle3x1);
	})

	circle3x2.on("click tap", function(){
		setColor(circle3x2);
	})

	circle3x3.on("click tap", function(){
		setColor(circle3x3);
	})

	circle3x4.on("click tap", function(){
		setColor(circle3x4);
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

	/*when an object is clicked or tapped, this function changes the color of the circle based upon the color it was when tapped. This function then calls
	ttbiconaddToArray to add the object to its corresponding array and draws the layer to ensure color change.*/
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
		ttbiconaddToArray(object);//add the object with it's id and color to an array
		tableShapes.draw();//draw the layer to make the color change. 
	}

	//this function serves to add an object to the error checking array.
	function ttbiconaddToArray(object){
		if(!ttbiconcircleArray.contains(object)){
				ttbiconcircleArray.push(object);
		}
		
	}

	/*each for loop in the function checks a specific row for errors in the truth table. Each array is checked for correct length to make sure
	there are no uncolored or missing circles and that the truth table is complete.*/

}

	function ttbiconupdateTable()
	{
		 //array to add all english error alerts. When user clicks "check it" button, if there are errors the for loop below will output each string so the user knows what is wrong.
		var errorString = new Array();
		
		 //variable to record the number of errors. if the variable is zero, the user has completed the table correctly. If the variable is greater than zero, there are erros the user must correct.
		var errors = 0;

		if(ttbiconcircleArray.length<4){
			errors++;
		}
		else{

			for(var i = 0; i < ttbiconcircleArray.length; i++){
				var color = ttbiconcircleArray[i].getFill();
				var object = ttbiconcircleArray[i].getId();
				//console.log("for loop 1 Object id and color: " + object + ", " + color);
				if(ttbiconcircleArray.length<4){
					errors++;
				}
				else{
					
					if(!((object == "3x1" && color == "green")||(object == "3x2" && color == "red")
			 			||(object == "3x3" && color == "red") || (object == "3x4" && color=="green"))){

						//console.log("If statement one: " + color + ", " + object);
						var temp = "The final column is wrong.";
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
			if(ttbiconcircleArray.length<4)
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
	var ttbiconhtml = '<div id = "ttbiconMain" class="modal hide fade" tabindex="-1" role="dialog" aria-hidden="true"> <!-- --> <div id="directions" class = "modal-header"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button> <h3 id="header">Build the truth table for the BICONDITIONAL operator: </h3> <h4>P <--> Q</h4> </div> <!--The main modal body contains only the exercise.--> <div id="ttbicon" class = "modal-body"></div> <div id = "buttonDiv" class="modal-footer"> <!--This button allows the user to close the modal and return to reading the material. Work will not be saved.--> <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button> <!--This button checks the user\'s work. Calls "ttbiconupdateTable" function. ttbiconupdateTable() is found in functions.js. --> <input type = "submit" class="btn btn-primary" value = "check it!" id = "ttbiconsubmit" onclick = "ttbiconupdateTable();" /> </div> </div>';
	function writettbicon(){
		$('#widgethtml').html(ttbiconhtml);
		ttbiconCall();
	}
