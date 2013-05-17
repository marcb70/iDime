var tt1ccircleArray = new Array();
var tt1ccircle3Array = new Array();
var tt1ccircle4Array = new Array();
var tt1ccircle5Array = new Array();
var tt1ccircle6Array = new Array();
var tt1dtrashArray = new Array();

function tt1dCall(){

//creates canvas we'll be working with using dimensions to fit the exercise.

  var stage = new Kinetic.Stage({
    container: 'tt1d',
    width: 450,
    height: 250
  });
  //creates layer to draw each element.
  var tableShapes = new Kinetic.Layer();
  //adds each element to the layer
     /*Creates all shapes, including the truth table, rows and columns for the truth table, and each cirlce in the truth table.
	*Only circles that are changeable have id's attached to them for functional purposes. 
	*This file uses kineticJS to create each object.*/

	//creates the main rectable of the truth table
	var truthTable = new Kinetic.Rect({
	  height: 205,
	  width: 400,
	  stroke: 'black',
	  strokeWidth: 5,
	  x: 15,
	  y: 10

	});
	//the following 4 variables create the table row lines
	var topLine = new Kinetic.Line({
	  points: [15, 50, 415, 50],
	  stroke: 'black',
	  strokeWidth: 4
	});

	var row1 = new Kinetic.Line({
	  points: [15, 90, 415, 90],
	  stroke: 'black',
	  strokeWidth: 2
	});

	var row2 = new Kinetic.Line({
	  points: [15, 130, 415, 130],
	  stroke: 'black',
	  strokeWidth: 2
	});

	var row3 = new Kinetic.Line({
	  points: [15, 170, 415, 170],
	  stroke: 'black',
	  strokeWidth: 2
	});

	//the following 5 variables create the table column lines
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
	var column3 = new Kinetic.Line({
	  points: [145, 10, 145, 215],
	  stroke: 'black',
	  strokeWidth: 2
	});
	var column4 = new Kinetic.Line({
	  points: [220, 10, 220, 215],
	  stroke: 'black',
	  strokeWidth: 2
	});
	var column5 = new Kinetic.Line({
	  points: [290, 10, 290, 215],
	  stroke: 'black',
	  strokeWidth: 2
	});

	//the following variables create all circles within the tables. 
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

	var circle4x1 = new Kinetic.Circle({
	  id: "4x1",
	  x: 180,
	  y: 70,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle4x2 = new Kinetic.Circle({
	  id: "4x2",
	  x: 180,
	  y: 110,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle4x3 = new Kinetic.Circle({
	  id: "4x3",
	  x: 180,
	  y: 150,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle4x4 = new Kinetic.Circle({
	  id: "4x4",
	  x: 180,
	  y: 190,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle5x1 = new Kinetic.Circle({
	  id: "5x1",
	  x: 255,
	  y: 70,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle5x2 = new Kinetic.Circle({
	  id: "5x2",
	  x: 255,
	  y: 110,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle5x3 = new Kinetic.Circle({
	  id: "5x3",
	  x: 255,
	  y: 150,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle5x4 = new Kinetic.Circle({
	  id: "5x4",
	  x: 255,
	  y: 190,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle6x1 = new Kinetic.Circle({
	  id: "6x1",
	  x: 345,
	  y: 70,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle6x2 = new Kinetic.Circle({
	  id: "6x2",
	  x: 345,
	  y: 110,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle6x3 = new Kinetic.Circle({
	  id: "6x3",
	  x: 345,
	  y: 150,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle6x4 = new Kinetic.Circle({
	  id: "6x4",
	  x: 345,
	  y: 190,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});


	//the following variables create the kinetic Text statements at the top of the truth table.
	var PimpliesQ = new Kinetic.Text({
	  x: 240,
	  y: 15,
	  text: 'P -> Q',
	  fontSize: 15,
	  fontFamily: 'Calibri',
	  fill: 'black'
	});

	var PXORQ = new Kinetic.Text({
	  x: 100,
	  y: 15,
	  text: 'P # Q',
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

	var NOTPXORQ = new Kinetic.Text({
	  x: 160,
	  y: 15,
	  text: '~(P # Q)',
	  fontSize: 15,
	  fontFamily: 'Calibri',
	  fill: 'black'
	});
	var fullStatement = new Kinetic.Text({
	  x: 295,
	  y: 15,
	  text: '~(P # Q) # (P -> Q)',
	  fontSize: 15,
	  fontFamily: 'Calibri',
	  fill: 'black'
	});
      tableShapes.add(truthTable); //main rectangle of table
      //table column lines
      tableShapes.add(column1);
      tableShapes.add(column2);
      tableShapes.add(column3);
      tableShapes.add(column4);
      tableShapes.add(column5);
      //table row loines
      tableShapes.add(topLine);
      tableShapes.add(row1);
      tableShapes.add(row2);
      tableShapes.add(row3);
      //circles within table
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
      tableShapes.add(circle4x1);
      tableShapes.add(circle4x2);
      tableShapes.add(circle4x3);
      tableShapes.add(circle4x4);
      tableShapes.add(circle5x1);
      tableShapes.add(circle5x2);
      tableShapes.add(circle5x3);
      tableShapes.add(circle5x4);      
      tableShapes.add(circle6x1);
      tableShapes.add(circle6x2);
      tableShapes.add(circle6x3);
      tableShapes.add(circle6x4);      
      //text and statements      
      tableShapes.add(tableP);
      tableShapes.add(tableQ);
      tableShapes.add(PXORQ);
      tableShapes.add(NOTPXORQ);
      tableShapes.add(PimpliesQ);
      tableShapes.add(fullStatement);
      //adds layer to the stage. The layer must be added to the stage last to insure all elements are added.
      stage.add(tableShapes);

/*creates an event each time a circle is clicked or tapped. Calls upon tt1dsetColor() function in functions.js
*for devices with a mouse device, the click function is used. For touch devices such as mobile and tablet devices, the tap function is used.*/
	circle3x1.on("click tap", function(){
		tt1dsetColor(circle3x1);
	})

	circle3x2.on("click tap", function(){
		tt1dsetColor(circle3x2);
	})

	circle3x3.on("click tap", function(){
		tt1dsetColor(circle3x3);
	})

	circle3x4.on("click tap", function(){
		tt1dsetColor(circle3x4);
	})
	circle4x1.on("click tap", function(){
		tt1dsetColor(circle4x1);
	})

	circle4x2.on("click tap", function(){
		tt1dsetColor(circle4x2);
	})

	circle4x3.on("click tap", function(){
		tt1dsetColor(circle4x3);
	})

	circle4x4.on("click tap", function(){
		tt1dsetColor(circle4x4);
	})
	circle5x1.on("click tap", function(){
		tt1dsetColor(circle5x1);
	})

	circle5x2.on("click tap", function(){
		tt1dsetColor(circle5x2);
	})

	circle5x3.on("click tap", function(){
		tt1dsetColor(circle5x3);
	})

	circle5x4.on("click tap", function(){
		tt1dsetColor(circle5x4);
	})
	circle6x1.on("click tap", function(){
		tt1dsetColor(circle6x1);
	})

	circle6x2.on("click tap", function(){
		tt1dsetColor(circle6x2);
	})

	circle6x3.on("click tap", function(){
		tt1dsetColor(circle6x3);
	})

	circle6x4.on("click tap", function(){
		tt1dsetColor(circle6x4);
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
	addToArray to add the object to its corresponding array and draws the layer to ensure color change.*/
	function tt1dsetColor(object)
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
		tt1daddToArray(object);//add the object with it's id and color to an array
		tableShapes.draw();//draw the layer to make the color change. 
	}

	//this function serves to add an object to its correct array.
	function tt1daddToArray(object){
		if(!tt1ccircleArray.contains(object)){
				tt1ccircleArray.push(object);
		}
		var objectId = object.getId();

		if(objectId=="3x1"||objectId=="3x2"||objectId=="3x3"||objectId=="3x4"){
			if(!tt1ccircle3Array.contains(object)){
				tt1ccircle3Array.push(object);
			}
		}
		else if(objectId=="4x1"||objectId=="4x2"||objectId=="4x3"||objectId=="4x4"){
			if(!tt1ccircle4Array.contains(object)){
				tt1ccircle4Array.push(object);
			}
		}
		else if(objectId=="5x1"||objectId=="5x2"||objectId=="5x3"||objectId=="5x4"){
			if(!tt1ccircle5Array.contains(object)){
				tt1ccircle5Array.push(object);
			}
		}
		else if(objectId=="6x1"||objectId=="6x2"||objectId=="6x3"||objectId=="6x4"){
			if(!tt1ccircle6Array.contains(object)){
				tt1ccircle6Array.push(object);
			}
		}
		else{
			tt1dtrashArray.push(object);
		}
		
	}

	/*each for loop in the function checks a specific row for errors in the truth table. Each array is checked for correct length to make sure
	there are no uncolored or missing circles and that the truth table is complete.*/

}

	function tt1dupdateTable()
	{
		 //array to add all english error alerts. When user clicks "check it" button, if there are errors the for loop below will output each string so the user knows what is wrong.
		var errorString = new Array();
		
		 //variable to record the number of errors. if the variable is zero, the user has completed the table correctly. If the variable is greater than zero, there are erros the user must correct.
		var errors = 0;

		if(tt1ccircleArray.length<16){
			errors++;
		}
		else{

			for(var i = 0; i < tt1ccircle3Array.length; i++){
				var color = tt1ccircle3Array[i].getFill();
				var object = tt1ccircle3Array[i].getId();
				//console.log("for loop 1 Object id and color: " + object + ", " + color);
				if(tt1ccircle3Array.length<4){
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
			for(var j=0; j<tt1ccircle4Array.length; j++){
				var color1 = tt1ccircle4Array[j].getFill();
				var object1 = tt1ccircle4Array[j].getId();
				//console.log("for loop 2 Object id and color: " + object1 + ", " + color1);
				if(tt1ccircle4Array.length<4){
					errors1++;
				}
				else{
					if(!((object1 == "4x1" && color1 == "green")||(object1 == "4x2" && color1 == "red")
			 			|| (object1 == "4x3" && color1 == "red") ||  (object1 == "4x4" && color1=="green"))){

						var temp1 = "The ~(P + Q) column has errors.";
						if(!errorString.contains(temp1))
						{
							errorString.push(temp1);
						}
						errors++;

					}
				}
			}
			for(var k=0; k<tt1ccircle5Array.length; k++){
				var color2 = tt1ccircle5Array[k].getFill();
				var object2 = tt1ccircle5Array[k].getId();
				//console.log("for loop 3 Object id and color: " + object2 + ", " + color2);
				if(tt1ccircle5Array.length<4){
					errors++;
				}
				else{
					if(!((object2 == "5x1" && color2 == "green")||(object2 == "5x2" && color2 == "red")
			 			||(object2 == "5x3" && color2 == "green") ||  (object2 == "5x4" && color2=="green"))){

						var temp2="The P * Q column has errors.";
						if(!errorString.contains(temp2))
						{
							errorString.push(temp2);
						}
						errors++;
					}
				}
			}
			for(var l=0; l<tt1ccircle6Array.length; l++){
				var color3 = tt1ccircle6Array[l].getFill();
				var object3 = tt1ccircle6Array[l].getId();
				//console.log("for loop 3 Object id and color: " + object3 + ", " + color3);
				if(tt1ccircle6Array.length<4){
					errors++;
				}
				else{
					if(!((object3 == "6x1" && color3 == "red")||(object3 == "6x2" && color3 == "red")
			 			|| (object3 == "6x3" && color3 == "green") ||  (object3 == "6x4" && color3=="red"))){

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
			if(tt1ccircle3Array.length<4||tt1ccircle4Array.length<4||tt1ccircle5Array.length<4||tt1ccircle6Array.length<4||tt1ccircleArray.length<16)
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
	
	var tt1dhtml = ' <div id = "tt1dMain" class="modal hide fade" tabindex="-1" role="dialog" aria-hidden="true"> <!-- --> <div id="directions" class = "modal-header"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button> <h3 id="header">P and Q have been filled in for you. Now, build the truth table for this statement: </h3> <h4>(~(P # Q) # (P -> Q))</h4> </div> <!--The main modal body contains only the exercise.--> <div id="tt1d" class = "modal-body"></div> <div id = "buttonDiv" class="modal-footer"> <!--This button allows the user to close the modal and return to reading the material. Work will not be saved.--> <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button> <!--This button checks the user\'s work. Calls "updateTable" function. tt1dupdateTable() is found in functions.js. --> <input type = "submit" class="btn btn-primary" value = "check it!" id = "tt1dsubmit" onclick = "tt1dupdateTable();" /> </div></div>';
	function writett1d(){

      $('#widgethtml').html(tt1dhtml);
      tt1dCall();
    }
