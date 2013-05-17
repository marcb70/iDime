	var tt2cirleArray = new Array();
	var tt2cirle4Array = new Array();
	var tt2cirle5Array = new Array();
	var tt2cirle6Array = new Array();
	var tt2trashArray = new Array();
function tt2Call(){

	//creates canvas we'll be working with using dimensions which fit the exercise.
	var stage = new Kinetic.Stage({
	container: 'tt2',
	width: 450,
	height: 400
	});
	//creates layer to draw each element.
	var tableShapes = new Kinetic.Layer();

	//creates kinetic groups for the first three columns which allow the user to click on the text above the group (P, Q or R) and clear that column for better visibility and interactivity.
	var col1 = new Kinetic.Group();
	var col2 = new Kinetic.Group();
	var col3 = new Kinetic.Group();

	/*Creates all shapes, including the truth table, rows and columns for the truth table, and each cirlce in the truth table.
	*This file uses kineticJS to create each object.*/

	//creates the main rectable of the truth table
	var truthTable = new Kinetic.Rect({
	  height: 365,
	  width: 400,
	  stroke: 'black',
	  strokeWidth: 5,
	  x: 15,
	  y: 10

	});
	//the following 8 variables create the table row lines
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
	var row4 = new Kinetic.Line({
	  points: [15, 210, 415, 210],
	  stroke: 'black',
	  strokeWidth: 2
	});
	var row5 = new Kinetic.Line({
	  points: [15, 250, 415, 250],
	  stroke: 'black',
	  strokeWidth: 2
	});
	var row6 = new Kinetic.Line({
	  points: [15, 290, 415, 290],
	  stroke: 'black',
	  strokeWidth: 2
	});
	var row7 = new Kinetic.Line({
	  points: [15, 330, 415, 330],
	  stroke: 'black',
	  strokeWidth: 2
	});

	//the following 5 variables create the table column lines
	var column1 = new Kinetic.Line({
	  points: [55, 10, 55, 375],
	  stroke: 'black',
	  strokeWidth: 2
	});

	var column2 = new Kinetic.Line({
	  points: [95, 10, 95, 375],
	  stroke: 'black',
	  strokeWidth: 2
	});
	var column3 = new Kinetic.Line({
	  points: [145, 10, 145, 375],
	  stroke: 'black',
	  strokeWidth: 2
	});
	var column4 = new Kinetic.Line({
	  points: [220, 10, 220, 375],
	  stroke: 'black',
	  strokeWidth: 2
	});
	var column5 = new Kinetic.Line({
	  points: [290, 10, 290, 375],
	  stroke: 'black',
	  strokeWidth: 2
	});

	//the following variables create all circles within the tables. 
	var circle1x1 = new Kinetic.Circle({
	  id: "1x1",
	  x: 35,
	  y: 70,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle1x2 = new Kinetic.Circle({
	  id: "1x2",
	  x: 35,
	  y: 110,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle1x3 = new Kinetic.Circle({
	  id: "1x3",
	  x: 35,
	  y: 150,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle1x4 = new Kinetic.Circle({
	  id: "1x4",
	  x: 35,
	  y: 190,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle1x5 = new Kinetic.Circle({
	  id: "1x5",
	  x: 35,
	  y: 230,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle1x6 = new Kinetic.Circle({
	  id: "1x6",
	  x: 35,
	  y: 270,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle1x7 = new Kinetic.Circle({
	  id: "1x7",
	  x: 35,
	  y: 310,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle1x8 = new Kinetic.Circle({
	  id: "1x8",
	  x: 35,
	  y: 350,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle2x1 = new Kinetic.Circle({
	  id: "2x1",
	  x: 75,
	  y: 70,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle2x2 = new Kinetic.Circle({
	  id: "2x2",
	  x: 75,
	  y: 110,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle2x3 = new Kinetic.Circle({
	  id: "2x3",
	  x: 75,
	  y: 150,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle2x4 = new Kinetic.Circle({
	  id: "2x4",
	  x: 75,
	  y: 190,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle2x5 = new Kinetic.Circle({
	  id: "2x5",
	  x: 75,
	  y: 230,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle2x6 = new Kinetic.Circle({
	  id: "2x6",
	  x: 75,
	  y: 270,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle2x7 = new Kinetic.Circle({
	  id: "2x7",
	  x: 75,
	  y: 310,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle2x8 = new Kinetic.Circle({
	  id: "2x8",
	  x: 75,
	  y: 350,
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
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle3x2 = new Kinetic.Circle({
	  id: "3x2",
	  x: 120,
	  y: 110,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle3x3 = new Kinetic.Circle({
	  id: "3x3",
	  x: 120,
	  y: 150,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle3x4 = new Kinetic.Circle({
	  id: "3x4",
	  x: 120,
	  y: 190,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle3x5 = new Kinetic.Circle({
	  id: "3x5",
	  x: 120,
	  y: 230,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle3x6 = new Kinetic.Circle({
	  id: "3x6",
	  x: 120,
	  y: 270,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle3x7 = new Kinetic.Circle({
	  id: "3x7",
	  x: 120,
	  y: 310,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle3x8 = new Kinetic.Circle({
	  id: "3x8",
	  x: 120,
	  y: 350,
	  radius: 15,
	  fill: 'red',
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
	var circle4x5 = new Kinetic.Circle({
	  id: "4x5",
	  x: 180,
	  y: 230,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle4x6 = new Kinetic.Circle({
	  id: "4x6",
	  x: 180,
	  y: 270,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle4x7 = new Kinetic.Circle({
	  id: "4x7",
	  x: 180,
	  y: 310,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle4x8 = new Kinetic.Circle({
	  id: "4x8",
	  x: 180,
	  y: 350,
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
	var circle5x5 = new Kinetic.Circle({
	  id: "5x5",
	  x: 255,
	  y: 230,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle5x6 = new Kinetic.Circle({
	  id: "5x6",
	  x: 255,
	  y: 270,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle5x7 = new Kinetic.Circle({
	  id: "5x7",
	  x: 255,
	  y: 310,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle5x8 = new Kinetic.Circle({
	  id: "5x8",
	  x: 255,
	  y: 350,
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
	var circle6x5 = new Kinetic.Circle({
	  id: "6x5",
	  x: 345,
	  y: 230,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle6x6 = new Kinetic.Circle({
	  id: "6x6",
	  x: 345,
	  y: 270,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle6x7 = new Kinetic.Circle({
	  id: "6x7",
	  x: 345,
	  y: 310,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle6x8 = new Kinetic.Circle({
	  id: "6x8",
	  x: 345,
	  y: 350,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	//the following variables create the kinetic Text statements at the top of the truth table.
	var PANDR = new Kinetic.Text({
	  x: 240,
	  y: 15,
	  text: '~P * R',
	  fontSize: 15,
	  fontFamily: 'Calibri',
	  fill: 'black'
	});

	var tableR = new Kinetic.Text({
	  x: 100,
	  y: 15,
	  text: 'R',
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

	var PimpliesQ = new Kinetic.Text({
	  x: 160,
	  y: 15,
	  text: 'P -> Q',
	  fontSize: 15,
	  fontFamily: 'Calibri',
	  fill: 'black'
	});
	var fullStatement = new Kinetic.Text({
	  x: 295,
	  y: 15,
	  text: '(P -> Q) + (~P * R)',
	  fontSize: 15,
	  fontFamily: 'Calibri',
	  fill: 'black'
	});

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
	tableShapes.add(PimpliesQ);
	tableShapes.add(PANDR);
	tableShapes.add(fullStatement);
	//adds group to the layer.
	tableShapes.add(col1);
	tableShapes.add(col2);
	tableShapes.add(col3);
	//adds layer to the stage. The layer must be added to the stage last to insure all elements are added.
	stage.add(tableShapes);
	/*creates an event each time a circle is clicked or tapped. Calls upon setColor() function in functions.js
	*for devices with a mouse device, the click function is used. For touch devices such as mobile and tablet devices, the tap function is used.*/
	circle4x1.on("click tap", function(){
		setColor(circle4x1);
	})

	circle4x2.on("click tap", function(){
		setColor(circle4x2);
	})

	circle4x3.on("click tap", function(){
		setColor(circle4x3);
	})

	circle4x4.on("click tap", function(){
		setColor(circle4x4);
	})
	circle4x5.on("click tap", function(){
		setColor(circle4x5);
	})

	circle4x6.on("click tap", function(){
		setColor(circle4x6);
	})

	circle4x7.on("click tap", function(){
		setColor(circle4x7);
	})

	circle4x8.on("click tap", function(){
		setColor(circle4x8);
	})
	circle5x1.on("click tap", function(){
		setColor(circle5x1);
	})

	circle5x2.on("click tap", function(){
		setColor(circle5x2);
	})

	circle5x3.on("click tap", function(){
		setColor(circle5x3);
	})

	circle5x4.on("click tap", function(){
		setColor(circle5x4);
	})
	circle5x5.on("click tap", function(){
		setColor(circle5x5);
	})

	circle5x6.on("click tap", function(){
		setColor(circle5x6);
	})

	circle5x7.on("click tap", function(){
		setColor(circle5x7);
	})

	circle5x8.on("click tap", function(){
		setColor(circle5x8);
	})
	circle6x1.on("click tap", function(){
		setColor(circle6x1);
	})

	circle6x2.on("click tap", function(){
		setColor(circle6x2);
	})

	circle6x3.on("click tap", function(){
		setColor(circle6x3);
	})

	circle6x4.on("click tap", function(){
		setColor(circle6x4);
	})
	circle6x5.on("click tap", function(){
		setColor(circle6x5);
	})

	circle6x6.on("click tap", function(){
		setColor(circle6x6);
	})

	circle6x7.on("click tap", function(){
		setColor(circle6x7);
	})

	circle6x8.on("click tap", function(){
		setColor(circle6x8);
	})
	//calls upon clearColumn() in functions.js. used to change each cirlce in the specified column to clear, which may help the user see the needed columns more clearly.
	tableP.on("click tap", function(){
		//console.log("tablep clicked");
		tt2clearColumn("c1");
	})
	tableQ.on("click tap", function(){
		tt2clearColumn("c2");
	})
	tableR.on("click tap", function(){
		tt2clearColumn("c3");
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
	function tt2clearColumn(object){
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
	function tt2setColor(object)
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
		tt2addToArray(object);//add the object with it's id and color to an array
		tableShapes.draw();//draw the layer to make the color change. 
	}

	//this function serves to add an object to its correct array.
	function tt2addToArray(object){
		//console.log("addToArray information: " + object.getFill() + ", " + object.getId());
		if(!tt2cirleArray.contains(object)){
				tt2cirleArray.push(object);
		}
		var objectId = object.getId();

		if(objectId=="4x1"||objectId=="4x2"||objectId=="4x3"||objectId=="4x4"||objectId=="4x5"||objectId=="4x6"||objectId=="4x7"||objectId=="4x8"){
			if(!tt2cirle4Array.contains(object)){
				//console.log("pushing to tt2cirle4Array" + objectId + " " + object.getFill());
				tt2cirle4Array.push(object);
			}
		}
		else if(objectId=="5x1"||objectId=="5x2"||objectId=="5x3"||objectId=="5x4"||objectId=="5x5"||objectId=="5x6"||objectId=="5x7"||objectId=="5x8"){
			if(!tt2cirle5Array.contains(object)){
				//console.log("pushing to tt2cirle5Array" + objectId + " " + object.getFill());
				tt2cirle5Array.push(object);
			}
		}
		else if(objectId=="6x1"||objectId=="6x2"||objectId=="6x3"||objectId=="6x4"||objectId=="6x5"||objectId=="6x6"||objectId=="6x7"||objectId=="6x8"){
			if(!tt2cirle6Array.contains(object)){
				//console.log("pushing to tt2cirle6Array" + objectId + " " + object.getFill());
				tt2cirle6Array.push(object);
			}
		}
		else{
			//console.log("pushing to tt2trashArray" + objectId + " " + object.getFill());
			tt2trashArray.push(object);
		}
		
	}

	/*each for loop in the function checks a specific row for errors in the truth table. Each array is checked for correct length to make sure
	there are no uncolored or missing circles and that the truth table is complete.*/
	
}

	function tt2hint(){
		alert("If you're having a tough time separating the letter (P, Q or R) columns, click on the letter (P, Q, or R) for better visibility. Click again to get the colors back.")
	}

	function tt2updateTable()
	{
		 //array to add all english error alerts. When user clicks "check it" button, if there are errors the for loop below will output each string so the user knows what is wrong.
		var errorString = new Array();

		 //variable to record the number of errors. if the variable is zero, the user has completed the table correctly. If the variable is greater than zero, there are erros the user must correct.
		var errors = 0;

		if(tt2cirleArray.length<24){
			errors++;
		}
		else{

			for(var j=0; j<tt2cirle4Array.length; j++){
				var color1 = tt2cirle4Array[j].getFill();
				var object1 = tt2cirle4Array[j].getId();
				//console.log("for loop 2 Object id and color: " + object1 + ", " + color1);
				if(tt2cirle4Array.length<8){
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
			for(var k=0; k<tt2cirle5Array.length; k++){
				var color2 = tt2cirle5Array[k].getFill();
				var object2 = tt2cirle5Array[k].getId();
				//console.log("for loop 3 Object id and color: " + object2 + ", " + color2);
				if(tt2cirle5Array.length<8){
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
			for(var l=0; l<tt2cirle6Array.length; l++){
				var color3 = tt2cirle6Array[l].getFill();
				var object3 = tt2cirle6Array[l].getId();
				//console.log("for loop 3 Object id and color: " + object3 + ", " + color3);
				if(tt2cirle6Array.length<8){
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
			if(tt2cirle4Array.length<8||tt2cirle5Array.length<8||tt2cirle6Array.length<8||tt2cirleArray.length<24)
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

	var tt2html = '<div id = "tt2Main" class="modal hide fade" tabindex="-1" role="dialog" aria-hidden="true"> <!-- --> <div id="directions" class = "modal-header"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button> <h3 id="header">P, Q and R have been filled in for you. Now, build the truth table for this statement: </h3> <h4>(P -> Q) + (~P * R)</h4> </div> <!--The main modal body contains only the exercise.--> <div id="tt2" class = "modal-body"></div> <div id = "buttonDiv" class="modal-footer"> <!--This button allows the user to close the modal and return to reading the material. Work will not be saved.--> <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button> <!--This button checks the user\'s work. Calls "updateTable" function. tt2updateTable() is found in functions.js. --> <input type = "submit" class="btn btn-primary" value = "check it!" id = "tt2submit" onclick = "tt2updateTable();" /> <!--This button gives the user a hint Calls "hint" function. --> <input type = "submit" class="btn btn-danger" value = "Give me a Hint!" id = "tt2hintme" onclick = "tt2hint();" /> </div> </div>';
	 function writett2(){
      $('#widgethtml').html(tt2html);
      tt2Call();

    }
