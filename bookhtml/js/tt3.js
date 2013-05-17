	var tt3cirleArray = new Array();
	var tt3cirle7Array = new Array();
	var tt3cirle5Array = new Array();
	var tt3cirle6Array = new Array();


function tt3Call(){


	//creates canvas we'll be working with using dimensions to fit the exercise.
	var stage = new Kinetic.Stage({
	container: 'tt3',
	width: 800,
	height: 800,
	draggable: true
	});
	//creates layer to draw each element.
	var tableShapes = new Kinetic.Layer();
	//adds each element to the layer

	//creates kinetic groups for the first three columns which allow the user to click on the text above the group (P, Q or R) and clear that column for better visibility and interactivity.
	var col1 = new Kinetic.Group();
	var col2 = new Kinetic.Group();
	var col3 = new Kinetic.Group();
	var col4 = new Kinetic.Group();
	/*Creates all shapes, including the truth table, rows and columns for the truth table, and each cirlce in the truth table.
	*This file uses kineticJS to create each object.*/

	//creates the main rectable of the truth table
	var truthTable = new Kinetic.Rect({
	  height: 680,
	  width: 440,
	  stroke: 'black',
	  strokeWidth: 5,
	  x: 15,
	  y: 10

	});

	//the following 6 variables create the table column lines
	var column1 = new Kinetic.Line({
	  points: [55, 10, 55, 690],
	  stroke: 'black',
	  strokeWidth: 2
	});

	var column2 = new Kinetic.Line({
	  points: [95, 10, 95, 690],
	  stroke: 'black',
	  strokeWidth: 2
	});
	var column3 = new Kinetic.Line({
	  points: [135, 10, 135, 690],
	  stroke: 'black',
	  strokeWidth: 2
	});
	var column4 = new Kinetic.Line({
	  points: [175, 10, 175, 690],
	  stroke: 'black',
	  strokeWidth: 2
	});
	var column5 = new Kinetic.Line({
	  points: [240, 10, 240, 690],
	  stroke: 'black',
	  strokeWidth: 2
	});
	var column6 = new Kinetic.Line({
	  points: [300, 10, 300, 690],
	  stroke: 'black',
	  strokeWidth: 2
	});

	//the following 16 variables create the table row lines
	var topLine = new Kinetic.Line({
	  points: [15, 50, 455, 50],
	  stroke: 'black',
	  strokeWidth: 4
	});
	var row1 = new Kinetic.Line({
	  points: [15, 90, 455, 90],
	  stroke: 'black',
	  strokeWidth: 2
	});

	var row2 = new Kinetic.Line({
	  points: [15, 130, 455, 130],
	  stroke: 'black',
	  strokeWidth: 2
	});

	var row3 = new Kinetic.Line({
	  points: [15, 170, 455, 170],
	  stroke: 'black',
	  strokeWidth: 2
	});
	var row4 = new Kinetic.Line({
	  points: [15, 210, 455, 210],
	  stroke: 'black',
	  strokeWidth: 2
	});
	var row5 = new Kinetic.Line({
	  points: [15, 250, 455, 250],
	  stroke: 'black',
	  strokeWidth: 2
	});
	var row6 = new Kinetic.Line({
	  points: [15, 290, 455, 290],
	  stroke: 'black',
	  strokeWidth: 2
	});
	var row7 = new Kinetic.Line({
	  points: [15, 330, 455, 330],
	  stroke: 'black',
	  strokeWidth: 2
	});
	var row8 = new Kinetic.Line({
	  points: [15, 370, 455, 370],
	  stroke: 'black',
	  strokeWidth: 2
	});
	var row9 = new Kinetic.Line({
	  points: [15, 410, 455, 410],
	  stroke: 'black',
	  strokeWidth: 2
	});
	var row10 = new Kinetic.Line({
	  points: [15, 450, 455, 450],
	  stroke: 'black',
	  strokeWidth: 2
	});
	var row11 = new Kinetic.Line({
	  points: [15, 490, 455, 490],
	  stroke: 'black',
	  strokeWidth: 2
	});
	var row12 = new Kinetic.Line({
	  points: [15, 530, 455, 530],
	  stroke: 'black',
	  strokeWidth: 2
	});
	var row13 = new Kinetic.Line({
	  points: [15, 570, 455, 570],
	  stroke: 'black',
	  strokeWidth: 2
	});
	var row14 = new Kinetic.Line({
	  points: [15, 610, 455, 610],
	  stroke: 'black',
	  strokeWidth: 2
	});
	var row15 = new Kinetic.Line({
	  points: [15, 650, 455, 650],
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
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle1x6 = new Kinetic.Circle({
	  id: "1x6",
	  x: 35,
	  y: 270,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle1x7 = new Kinetic.Circle({
	  id: "1x7",
	  x: 35,
	  y: 310,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle1x8 = new Kinetic.Circle({
	  id: "1x8",
	  x: 35,
	  y: 350,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle1x9 = new Kinetic.Circle({
	  id: "1x9",
	  x: 35,
	  y: 390,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle1x10 = new Kinetic.Circle({
	  id: "1x10",
	  x: 35,
	  y: 430,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle1x11 = new Kinetic.Circle({
	  id: "1x11",
	  x: 35,
	  y: 470,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle1x12 = new Kinetic.Circle({
	  id: "1x12",
	  x: 35,
	  y: 510,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle1x13 = new Kinetic.Circle({
	  id: "1x13",
	  x: 35,
	  y: 550,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle1x14 = new Kinetic.Circle({
	  id: "1x14",
	  x: 35,
	  y: 590,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle1x15 = new Kinetic.Circle({
	  id: "1x15",
	  x: 35,
	  y: 630,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle1x16 = new Kinetic.Circle({
	  id: "1x16",
	  x: 35,
	  y: 670,
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
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle2x4 = new Kinetic.Circle({
	  id: "2x4",
	  x: 75,
	  y: 190,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle2x5 = new Kinetic.Circle({
	  id: "2x5",
	  x: 75,
	  y: 230,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle2x6 = new Kinetic.Circle({
	  id: "2x6",
	  x: 75,
	  y: 270,
	  radius: 15,
	  fill: 'red',
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

	var circle2x9 = new Kinetic.Circle({
	  id: "2x9",
	  x: 75,
	  y: 390,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle2x10 = new Kinetic.Circle({
	  id: "2x10",
	  x: 75,
	  y: 430,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle2x11 = new Kinetic.Circle({
	  id: "2x10",
	  x: 75,
	  y: 470,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle2x12 = new Kinetic.Circle({
	  id: "2x12",
	  x: 75,
	  y: 510,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle2x13 = new Kinetic.Circle({
	  id: "2x13",
	  x: 75,
	  y: 550,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle2x14 = new Kinetic.Circle({
	  id: "2x14",
	  x: 75,
	  y: 590,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle2x15 = new Kinetic.Circle({
	  id: "2x15",
	  x: 75,
	  y: 630,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle2x16 = new Kinetic.Circle({
	  id: "2x16",
	  x: 75,
	  y: 670,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle3x1 = new Kinetic.Circle({
	  id: "3x1",
	  x: 115,
	  y: 70,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle3x2 = new Kinetic.Circle({
	  id: "3x2",
	  x: 115,
	  y: 110,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle3x3 = new Kinetic.Circle({
	  id: "3x3",
	  x: 115,
	  y: 150,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle3x4 = new Kinetic.Circle({
	  id: "3x4",
	  x: 115,
	  y: 190,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle3x5 = new Kinetic.Circle({
	  id: "3x5",
	  x: 115,
	  y: 230,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle3x6 = new Kinetic.Circle({
	  id: "3x6",
	  x: 115,
	  y: 270,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle3x7 = new Kinetic.Circle({
	  id: "3x7",
	  x: 115,
	  y: 310,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle3x8 = new Kinetic.Circle({
	  id: "3x8",
	  x: 115,
	  y: 350,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle3x9 = new Kinetic.Circle({
	  id: "3x9",
	  x: 115,
	  y: 390,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle3x10 = new Kinetic.Circle({
	  id: "3x10",
	  x: 115,
	  y: 430,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle3x11 = new Kinetic.Circle({
	  id: "3x11",
	  x: 115,
	  y: 470,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle3x12 = new Kinetic.Circle({
	  id: "3x12",
	  x: 115,
	  y: 510,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle3x13 = new Kinetic.Circle({
	  id: "3x13",
	  x: 115,
	  y: 550,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle3x14 = new Kinetic.Circle({
	  id: "3x14",
	  x: 115,
	  y: 590,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle3x15 = new Kinetic.Circle({
	  id: "3x15",
	  x: 115,
	  y: 630,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle3x16 = new Kinetic.Circle({
	  id: "3x16",
	  x: 115,
	  y: 670,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle4x1 = new Kinetic.Circle({
	  id: "4x1",
	  x: 155,
	  y: 70,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle4x2 = new Kinetic.Circle({
	  id: "4x2",
	  x: 155,
	  y: 110,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle4x3 = new Kinetic.Circle({
	  id: "4x3",
	  x: 155,
	  y: 150,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle4x4 = new Kinetic.Circle({
	  id: "4x4",
	  x: 155,
	  y: 190,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle4x5 = new Kinetic.Circle({
	  id: "4x5",
	  x: 155,
	  y: 230,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle4x6 = new Kinetic.Circle({
	  id: "4x6",
	  x: 155,
	  y: 270,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle4x7 = new Kinetic.Circle({
	  id: "4x7",
	  x: 155,
	  y: 310,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle4x8 = new Kinetic.Circle({
	  id: "4x8",
	  x: 155,
	  y: 350,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle4x9 = new Kinetic.Circle({
	  id: "4x9",
	  x: 155,
	  y: 390,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle4x10 = new Kinetic.Circle({
	  id: "4x10",
	  x: 155,
	  y: 430,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle4x11 = new Kinetic.Circle({
	  id: "4x11",
	  x: 155,
	  y: 470,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle4x12 = new Kinetic.Circle({
	  id: "4x12",
	  x: 155,
	  y: 510,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle4x13 = new Kinetic.Circle({
	  id: "4x13",
	  x: 155,
	  y: 550,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle4x14 = new Kinetic.Circle({
	  id: "4x14",
	  x: 155,
	  y: 590,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle4x15 = new Kinetic.Circle({
	  id: "4x15",
	  x: 155,
	  y: 630,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle4x16 = new Kinetic.Circle({
	  id: "4x16",
	  x: 155,
	  y: 670,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle5x1 = new Kinetic.Circle({
	  id: "5x1",
	  x: 210,
	  y: 70,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle5x2 = new Kinetic.Circle({
	  id: "5x2",
	  x: 210,
	  y: 110,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle5x3 = new Kinetic.Circle({
	  id: "5x3",
	  x: 210,
	  y: 150,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle5x4 = new Kinetic.Circle({
	  id: "5x4",
	  x: 210,
	  y: 190,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle5x5 = new Kinetic.Circle({
	  id: "5x5",
	  x: 210,
	  y: 230,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle5x6 = new Kinetic.Circle({
	  id: "5x6",
	  x: 210,
	  y: 270,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle5x7 = new Kinetic.Circle({
	  id: "5x7",
	  x: 210,
	  y: 310,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle5x8 = new Kinetic.Circle({
	  id: "5x8",
	  x: 210,
	  y: 350,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle5x9 = new Kinetic.Circle({
	  id: "5x9",
	  x: 210,
	  y: 390,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle5x10 = new Kinetic.Circle({
	  id: "5x10",
	  x: 210,
	  y: 430,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle5x11 = new Kinetic.Circle({
	  id: "5x11",
	  x: 210,
	  y: 470,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle5x12 = new Kinetic.Circle({
	  id: "5x12",
	  x: 210,
	  y: 510,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle5x13 = new Kinetic.Circle({
	  id: "5x13",
	  x: 210,
	  y: 550,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle5x14 = new Kinetic.Circle({
	  id: "5x14",
	  x: 210,
	  y: 590,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle5x15 = new Kinetic.Circle({
	  id: "5x15",
	  x: 210,
	  y: 630,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle5x16 = new Kinetic.Circle({
	  id: "5x16",
	  x: 210,
	  y: 670,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle6x1 = new Kinetic.Circle({
	  id: "6x1",
	  x: 265,
	  y: 70,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle6x2 = new Kinetic.Circle({
	  id: "6x2",
	  x: 265,
	  y: 110,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle6x3 = new Kinetic.Circle({
	  id: "6x3",
	  x: 265,
	  y: 150,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle6x4 = new Kinetic.Circle({
	  id: "6x4",
	  x: 265,
	  y: 190,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle6x5 = new Kinetic.Circle({
	  id: "6x5",
	  x: 265,
	  y: 230,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle6x6 = new Kinetic.Circle({
	  id: "6x6",
	  x: 265,
	  y: 270,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle6x7 = new Kinetic.Circle({
	  id: "6x7",
	  x: 265,
	  y: 310,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle6x8 = new Kinetic.Circle({
	  id: "6x8",
	  x: 265,
	  y: 350,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle6x9 = new Kinetic.Circle({
	  id: "6x9",
	  x: 265,
	  y: 390,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle6x10 = new Kinetic.Circle({
	  id: "6x10",
	  x: 265,
	  y: 430,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle6x11 = new Kinetic.Circle({
	  id: "6x11",
	  x: 265,
	  y: 470,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle6x12 = new Kinetic.Circle({
	  id: "6x12",
	  x: 265,
	  y: 510,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle6x13 = new Kinetic.Circle({
	  id: "6x13",
	  x: 265,
	  y: 550,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle6x14 = new Kinetic.Circle({
	  id: "6x14",
	  x: 265,
	  y: 590,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle6x15 = new Kinetic.Circle({
	  id: "6x15",
	  x: 265,
	  y: 630,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle6x16 = new Kinetic.Circle({
	  id: "6x16",
	  x: 265,
	  y: 670,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle7x1 = new Kinetic.Circle({
	  id: "7x1",
	  x: 380,
	  y: 70,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle7x2 = new Kinetic.Circle({
	  id: "7x2",
	  x: 380,
	  y: 110,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle7x3 = new Kinetic.Circle({
	  id: "7x3",
	  x: 380,
	  y: 150,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle7x4 = new Kinetic.Circle({
	  id: "7x4",
	  x: 380,
	  y: 190,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle7x5 = new Kinetic.Circle({
	  id: "7x5",
	  x: 380,
	  y: 230,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle7x6 = new Kinetic.Circle({
	  id: "7x6",
	  x: 380,
	  y: 270,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle7x7 = new Kinetic.Circle({
	  id: "7x7",
	  x: 380,
	  y: 310,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle7x8 = new Kinetic.Circle({
	  id: "7x8",
	  x: 380,
	  y: 350,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle7x9 = new Kinetic.Circle({
	  id: "7x9",
	  x: 380,
	  y: 390,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle7x10 = new Kinetic.Circle({
	  id: "7x10",
	  x: 380,
	  y: 430,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle7x11 = new Kinetic.Circle({
	  id: "7x11",
	  x: 380,
	  y: 470,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle7x12 = new Kinetic.Circle({
	  id: "7x12",
	  x: 380,
	  y: 510,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle7x13 = new Kinetic.Circle({
	  id: "7x13",
	  x: 380,
	  y: 550,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle7x14 = new Kinetic.Circle({
	  id: "7x14",
	  x: 380,
	  y: 590,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle7x15 = new Kinetic.Circle({
	  id: "7x15",
	  x: 380,
	  y: 630,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});
	var circle7x16 = new Kinetic.Circle({
	  id: "7x16",
	  x: 380,
	  y: 670,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	//the following variables create the kinetic Text statements at the top of the truth table.
	var tableR = new Kinetic.Text({
	  x: 105,
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

	var tableS = new Kinetic.Text({
	  x: 145,
	  y: 15,
	  text: 'S',
	  fontSize: 15,
	  fontFamily: 'Calibri',
	  fill: 'black'
	});
	var PimpliesQ = new Kinetic.Text({
	  x: 190,
	  y: 15,
	  text: 'P -> Q',
	  fontSize: 15,
	  fontFamily: 'Calibri',
	  fill: 'black'
	});
	var RorS = new Kinetic.Text({
	  x: 255,
	  y: 15,
	  text: 'R + S',
	  fontSize: 15,
	  fontFamily: 'Calibri',
	  fill: 'black'
	});
	var fullStatement = new Kinetic.Text({
	  x: 315,
	  y: 15,
	  text: '(P -> Q) <--> (R + S)',
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
	tableShapes.add(column6);
	//table row lines
	tableShapes.add(topLine);
	tableShapes.add(row1);
	tableShapes.add(row2);
	tableShapes.add(row3);
	tableShapes.add(row4);
	tableShapes.add(row5);
	tableShapes.add(row6);
	tableShapes.add(row7);
	tableShapes.add(row8);
	tableShapes.add(row9);
	tableShapes.add(row10);
	tableShapes.add(row11);
	tableShapes.add(row12);
	tableShapes.add(row13);
	tableShapes.add(row14);
	tableShapes.add(row15);
	//circles within table
	tableShapes.add(circle1x1);
	tableShapes.add(circle1x2);
	tableShapes.add(circle1x3);
	tableShapes.add(circle1x4);
	tableShapes.add(circle1x5);
	tableShapes.add(circle1x6);
	tableShapes.add(circle1x7);
	tableShapes.add(circle1x8);
	tableShapes.add(circle1x9);
	tableShapes.add(circle1x10);
	tableShapes.add(circle1x11);
	tableShapes.add(circle1x12);
	tableShapes.add(circle1x13);
	tableShapes.add(circle1x14);
	tableShapes.add(circle1x15);
	tableShapes.add(circle1x16);
	tableShapes.add(circle2x1);
	tableShapes.add(circle2x2);
	tableShapes.add(circle2x3);
	tableShapes.add(circle2x4);
	tableShapes.add(circle2x5);
	tableShapes.add(circle2x6);
	tableShapes.add(circle2x7);
	tableShapes.add(circle2x8);
	tableShapes.add(circle2x9);
	tableShapes.add(circle2x10);
	tableShapes.add(circle2x11);
	tableShapes.add(circle2x12);
	tableShapes.add(circle2x13);
	tableShapes.add(circle2x14);
	tableShapes.add(circle2x15);
	tableShapes.add(circle2x16);
	tableShapes.add(circle3x1);
	tableShapes.add(circle3x2);
	tableShapes.add(circle3x3);
	tableShapes.add(circle3x4);
	tableShapes.add(circle3x5);
	tableShapes.add(circle3x6);
	tableShapes.add(circle3x7);
	tableShapes.add(circle3x8);
	tableShapes.add(circle3x9);
	tableShapes.add(circle3x10);
	tableShapes.add(circle3x11);
	tableShapes.add(circle3x12);
	tableShapes.add(circle3x13);
	tableShapes.add(circle3x14);
	tableShapes.add(circle3x15);
	tableShapes.add(circle3x16);
	tableShapes.add(circle4x1);
	tableShapes.add(circle4x2);
	tableShapes.add(circle4x3);
	tableShapes.add(circle4x4);
	tableShapes.add(circle4x5);
	tableShapes.add(circle4x6);
	tableShapes.add(circle4x7);
	tableShapes.add(circle4x8);
	tableShapes.add(circle4x9);
	tableShapes.add(circle4x10);
	tableShapes.add(circle4x11);
	tableShapes.add(circle4x12);
	tableShapes.add(circle4x13);
	tableShapes.add(circle4x14);
	tableShapes.add(circle4x15);
	tableShapes.add(circle4x16);
	tableShapes.add(circle5x1);
	tableShapes.add(circle5x2);
	tableShapes.add(circle5x3);
	tableShapes.add(circle5x4);      
	tableShapes.add(circle5x5);      
	tableShapes.add(circle5x6);      
	tableShapes.add(circle5x7);      
	tableShapes.add(circle5x8);
	tableShapes.add(circle5x9);
	tableShapes.add(circle5x10);
	tableShapes.add(circle5x11);
	tableShapes.add(circle5x12);
	tableShapes.add(circle5x13);
	tableShapes.add(circle5x14);
	tableShapes.add(circle5x15);
	tableShapes.add(circle5x16);      
	tableShapes.add(circle6x1);
	tableShapes.add(circle6x2);
	tableShapes.add(circle6x3);
	tableShapes.add(circle6x4);      
	tableShapes.add(circle6x5);      
	tableShapes.add(circle6x6);      
	tableShapes.add(circle6x7);      
	tableShapes.add(circle6x8);
	tableShapes.add(circle6x9);
	tableShapes.add(circle6x10);
	tableShapes.add(circle6x11);
	tableShapes.add(circle6x12);
	tableShapes.add(circle6x13);
	tableShapes.add(circle6x14);
	tableShapes.add(circle6x15);
	tableShapes.add(circle6x16);
	tableShapes.add(circle7x1);
	tableShapes.add(circle7x2);
	tableShapes.add(circle7x3);
	tableShapes.add(circle7x4);      
	tableShapes.add(circle7x5);      
	tableShapes.add(circle7x6);      
	tableShapes.add(circle7x7);      
	tableShapes.add(circle7x8);
	tableShapes.add(circle7x9);
	tableShapes.add(circle7x10);
	tableShapes.add(circle7x11);
	tableShapes.add(circle7x12);
	tableShapes.add(circle7x13);
	tableShapes.add(circle7x14);
	tableShapes.add(circle7x15);
	tableShapes.add(circle7x16);
	//adds shapes to correct groups
	col1.add(circle1x1);
	col1.add(circle1x2);
	col1.add(circle1x3);
	col1.add(circle1x4);
	col1.add(circle1x5);
	col1.add(circle1x6);
	col1.add(circle1x7);
	col1.add(circle1x8);
	col1.add(circle1x9);
	col1.add(circle1x10);
	col1.add(circle1x11);
	col1.add(circle1x12);
	col1.add(circle1x13);
	col1.add(circle1x14);
	col1.add(circle1x15);
	col1.add(circle1x16);
	col2.add(circle2x1);
	col2.add(circle2x2);
	col2.add(circle2x3);
	col2.add(circle2x4);
	col2.add(circle2x5);
	col2.add(circle2x6);
	col2.add(circle2x7);
	col2.add(circle2x8);
	col2.add(circle2x9);
	col2.add(circle2x10);
	col2.add(circle2x11);
	col2.add(circle2x12);
	col2.add(circle2x13);
	col2.add(circle2x14);
	col2.add(circle2x15);
	col2.add(circle2x16);
	col3.add(circle3x1);
	col3.add(circle3x2);
	col3.add(circle3x3);
	col3.add(circle3x4);
	col3.add(circle3x5);
	col3.add(circle3x6);
	col3.add(circle3x7);
	col3.add(circle3x8); 
	col3.add(circle3x9); 
	col3.add(circle3x10); 
	col3.add(circle3x11); 
	col3.add(circle3x12); 
	col3.add(circle3x13); 
	col3.add(circle3x14); 
	col3.add(circle3x15); 
	col3.add(circle3x16);
	col4.add(circle4x1); 
	col4.add(circle4x2); 
	col4.add(circle4x3); 
	col4.add(circle4x4); 
	col4.add(circle4x5); 
	col4.add(circle4x6); 
	col4.add(circle4x7); 
	col4.add(circle4x8); 
	col4.add(circle4x9); 
	col4.add(circle4x10); 
	col4.add(circle4x11); 
	col4.add(circle4x12); 
	col4.add(circle4x13); 
	col4.add(circle4x14); 
	col4.add(circle4x15); 
	col4.add(circle4x16); 
	//text and statements     
	tableShapes.add(tableP);
	tableShapes.add(tableQ);
	tableShapes.add(tableR);
	tableShapes.add(tableS);
	tableShapes.add(PimpliesQ);
	tableShapes.add(RorS);
	tableShapes.add(fullStatement);
	//adds group to the layer.
	tableShapes.add(col1);
	tableShapes.add(col2);
	tableShapes.add(col3);
	tableShapes.add(col4);
	//adds layer to the stage. The layer must be added to the stage last to insure all elements are added.
	stage.add(tableShapes);
	/*creates an event each time a circle is clicked or tapped. Calls upon tt3setColor() function in functions.js
	*for devices with a mouse device, the click function is used. For touch devices such as mobile and tablet devices, the tap function is used.*/
	circle5x1.on("click tap", function(){
		tt3setColor(circle5x1);
	})

	circle5x2.on("click tap", function(){
		tt3setColor(circle5x2);
	})

	circle5x3.on("click tap", function(){
		tt3setColor(circle5x3);
	})

	circle5x4.on("click tap", function(){
		tt3setColor(circle5x4);
	})
	circle5x5.on("click tap", function(){
		tt3setColor(circle5x5);
	})

	circle5x6.on("click tap", function(){
		tt3setColor(circle5x6);
	})

	circle5x7.on("click tap", function(){
		tt3setColor(circle5x7);
	})

	circle5x8.on("click tap", function(){
		tt3setColor(circle5x8);
	})
	circle5x9.on("click tap", function(){
		tt3setColor(circle5x9);
	})

	circle5x10.on("click tap", function(){
		tt3setColor(circle5x10);
	})

	circle5x11.on("click tap", function(){
		tt3setColor(circle5x11);
	})

	circle5x12.on("click tap", function(){
		tt3setColor(circle5x12);
	})
	circle5x13.on("click tap", function(){
		tt3setColor(circle5x13);
	})

	circle5x14.on("click tap", function(){
		tt3setColor(circle5x14);
	})

	circle5x15.on("click tap", function(){
		tt3setColor(circle5x15);
	})

	circle5x16.on("click tap", function(){
		tt3setColor(circle5x16);
	})
	circle6x1.on("click tap", function(){
		tt3setColor(circle6x1);
	})

	circle6x2.on("click tap", function(){
		tt3setColor(circle6x2);
	})

	circle6x3.on("click tap", function(){
		tt3setColor(circle6x3);
	})

	circle6x4.on("click tap", function(){
		tt3setColor(circle6x4);
	})
	circle6x5.on("click tap", function(){
		tt3setColor(circle6x5);
	})

	circle6x6.on("click tap", function(){
		tt3setColor(circle6x6);
	})

	circle6x7.on("click tap", function(){
		tt3setColor(circle6x7);
	})

	circle6x8.on("click tap", function(){
		tt3setColor(circle6x8);
	})
	circle6x9.on("click tap", function(){
		tt3setColor(circle6x9);
	})
	circle6x10.on("click tap", function(){
		tt3setColor(circle6x10);
	})

	circle6x11.on("click tap", function(){
		tt3setColor(circle6x11);
	})

	circle6x12.on("click tap", function(){
		tt3setColor(circle6x12);
	})
	circle6x13.on("click tap", function(){
		tt3setColor(circle6x13);
	})

	circle6x14.on("click tap", function(){
		tt3setColor(circle6x14);
	})

	circle6x15.on("click tap", function(){
		tt3setColor(circle6x15);
	})

	circle6x16.on("click tap", function(){
		tt3setColor(circle6x16);
	})
	circle7x1.on("click tap", function(){
		tt3setColor(circle7x1);
	})

	circle7x2.on("click tap", function(){
		tt3setColor(circle7x2);
	})

	circle7x3.on("click tap", function(){
		tt3setColor(circle7x3);
	})

	circle7x4.on("click tap", function(){
		tt3setColor(circle7x4);
	})
	circle7x5.on("click tap", function(){
		tt3setColor(circle7x5);
	})

	circle7x6.on("click tap", function(){
		tt3setColor(circle7x6);
	})

	circle7x7.on("click tap", function(){
		tt3setColor(circle7x7);
	})

	circle7x8.on("click tap", function(){
		tt3setColor(circle7x8);
	})
	circle7x9.on("click tap", function(){
		tt3setColor(circle7x9);
	})

	circle7x10.on("click tap", function(){
		tt3setColor(circle7x10);
	})

	circle7x11.on("click tap", function(){
		tt3setColor(circle7x11);
	})

	circle7x12.on("click tap", function(){
		tt3setColor(circle7x12);
	})
	circle7x13.on("click tap", function(){
		tt3setColor(circle7x13);
	})

	circle7x14.on("click tap", function(){
		tt3setColor(circle7x14);
	})

	circle7x15.on("click tap", function(){
		tt3setColor(circle7x15);
	})

	circle7x16.on("click tap", function(){
		tt3setColor(circle7x16);
	})

	//calls upon tt3clearColumn() in functions.js. used to change each cirlce in the specified column to clear, which may tt3help the user see the needed columns more clearly.
	tableP.on("click tap", function(){
		//console.log("tablep clicked");
		tt3clearColumn("c1");
	})
	tableQ.on("click tap", function(){
		tt3clearColumn("c2");
	})
	tableR.on("click tap", function(){
		tt3clearColumn("c3");
	})
	tableS.on("click tap", function(){
		tt3clearColumn("c4");
	})
	//arrays created for error and size checking


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
	function tt3clearColumn(object){
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
	tt3addToArray to add the object to its corresponding array and draws the layer to ensure color change.*/
	function tt3setColor(object)
	{
		var color = object.getFill();
		switch(color)
		{
			case "":
			color = "green";
			break;
			case "green":
			color = "red";
			break;
			case "red":
			color = "green";
			break;
		}
		object.setFill(color);
		tt3addToArray(object);
		tableShapes.draw();
	}
	function tt3addToArray(object){
		//console.log("tt3addToArray information: " + object.getFill() + ", " + object.getId());
		if(!tt3cirleArray.contains(object)){
				tt3cirleArray.push(object);
		}
		var objectId = object.getId();

		if(objectId=="7x1"||objectId=="7x2"||objectId=="7x3"||objectId=="7x4"||objectId=="7x5"||objectId=="7x6"||objectId=="7x7"||objectId=="7x8"||objectId=="7x9"||objectId=="7x10"||objectId=="7x11"||objectId=="7x12"||objectId=="7x13"||objectId=="7x14"||objectId=="7x15"||objectId=="7x16"){
			if(!tt3cirle7Array.contains(object)){
				//console.log("pushing to tt3cirle7Array" + objectId + " " + object.getFill());
				tt3cirle7Array.push(object);
			}
		}
		else if(objectId=="5x1"||objectId=="5x2"||objectId=="5x3"||objectId=="5x4"||objectId=="5x5"||objectId=="5x6"||objectId=="5x7"||objectId=="5x8"||objectId=="5x9"||objectId=="5x10"||objectId=="5x11"||objectId=="5x12"||objectId=="5x13"||objectId=="5x14"||objectId=="5x15"||objectId=="5x16"){
			if(!tt3cirle5Array.contains(object)){
				//console.log("pushing to tt3cirle5Array" + objectId + " " + object.getFill());
				tt3cirle5Array.push(object);
			}
		}
		else if(objectId=="6x1"||objectId=="6x2"||objectId=="6x3"||objectId=="6x4"||objectId=="6x5"||objectId=="6x6"||objectId=="6x7"||objectId=="6x8"||objectId=="6x9"||objectId=="6x10"||objectId=="6x11"||objectId=="6x12"||objectId=="6x13"||objectId=="6x14"||objectId=="6x15"||objectId=="6x16"){
			if(!tt3cirle6Array.contains(object)){
				//console.log("pushing to tt3cirle6Array" + objectId + " " + object.getFill());
				tt3cirle6Array.push(object);
			}
		}
		else{
			//do nothing
		}
		
	}

	/*each for loop in the function checks a specific row for errors in the truth table. Each array is checked for correct length to make sure
	there are no uncolored or missing circles and that the truth table is complete.*/

}

	function tt3hint(){
		alert("If you're having a tough time separating the letter (P, Q or R) columns, click on the letter (P, Q, or R) for better visibility. Click again to get the colors back.")
	}

		function tt3updateTable()
	{
		 //array to add all english error alerts. When user clicks "check it" button, if there are errors the for loop below will output each string so the user knows what is wrong.
		var errorString = new Array();
		
		 //variable to record the number of errors. if the variable is zero, the user has completed the table correctly. If the variable is greater than zero, there are erros the user must correct.
		var errors = 0;

		if(tt3cirleArray.length<48){
			errors++;
		}
		else{

			for(var j=0; j<tt3cirle7Array.length; j++){
				var color1 = tt3cirle7Array[j].getFill();
				var object1 = tt3cirle7Array[j].getId();
				//console.log("for loop 2 Object id and color: " + object1 + ", " + color1);
				if(tt3cirle7Array.length<16){
					errors++;
				}
				else{
					if(!((object1 == "7x1" && color1 == "green")||(object1 == "7x2" && color1 == "green")
			 			|| (object1 == "7x3" && color1 == "green") ||  (object1 == "7x4" && color1=="red")||
			 			(object1 == "7x5" && color1 == "red")||(object1 == "7x6" && color1 == "red")
			 			|| (object1 == "7x7" && color1 == "red") ||  (object1 == "7x8" && color1=="green")||
			 			(object1 == "7x9" && color1 == "green")||(object1 == "7x10" && color1 == "green")
			 			|| (object1 == "7x11" && color1 == "green") ||  (object1 == "7x12" && color1=="red")||
			 			(object1 == "7x13" && color1 == "green")||(object1 == "7x14" && color1 == "green")
			 			|| (object1 == "7x15" && color1 == "green") ||  (object1 == "7x16" && color1=="red"))){

						var temp1 = "The final column has errors.";
						if(!errorString.contains(temp1))
						{
							errorString.push(temp1);
						}
						errors++;

					}
				}
			}
			for(var k=0; k<tt3cirle5Array.length; k++){
				var color2 = tt3cirle5Array[k].getFill();
				var object2 = tt3cirle5Array[k].getId();
				//console.log("for loop 3 Object id and color: " + object2 + ", " + color2);
				if(tt3cirle5Array.length<16){
					errors++;
				}
				else{
					if(!((object2 == "5x1" && color2 == "green")||(object2 == "5x2" && color2 == "green")
			 			||(object2 == "5x3" && color2 == "green") ||  (object2 == "5x4" && color2=="green")||
			 			(object2 == "5x5" && color2 == "red")||(object2 == "5x6" && color2 == "red")
			 			||(object2 == "5x7" && color2 == "red") ||  (object2 == "5x8" && color2=="red")||
			 			(object2 == "5x9" && color2 == "green")||(object2 == "5x10" && color2 == "green")
			 			||(object2 == "5x11" && color2 == "green") ||  (object2 == "5x12" && color2=="green")||
			 			(object2 == "5x13" && color2 == "green")||(object2 == "5x14" && color2 == "green")
			 			||(object2 == "5x15" && color2 == "green") ||  (object2 == "5x16" && color2=="green"))){

						var temp2="The P -> q column has errors.";
						if(!errorString.contains(temp2))
						{
							errorString.push(temp2);
						}
						errors++;
					}
				}
			}
			for(var l=0; l<tt3cirle6Array.length; l++){
				var color3 = tt3cirle6Array[l].getFill();
				var object3 = tt3cirle6Array[l].getId();
				//console.log("for loop 3 Object id and color: " + object3 + ", " + color3);
				if(tt3cirle6Array.length<16){
					errors++;
				}
				else{
					if(!((object3 == "6x1" && color3 == "green")||(object3 == "6x2" && color3 == "green")
			 			|| (object3 == "6x3" && color3 == "green") ||  (object3 == "6x4" && color3=="red")||
			 			(object3 == "6x5" && color3 == "green")||(object3 == "6x6" && color3 == "green")
			 			|| (object3 == "6x7" && color3 == "green") ||  (object3 == "6x8" && color3=="red")||
			 			(object3 == "6x9" && color3 == "green")||(object3 == "6x10" && color3 == "green")
			 			|| (object3 == "6x11" && color3 == "green") ||  (object3 == "6x12" && color3=="red")||
			 			(object3 == "6x13" && color3 == "green")||(object3 == "6x14" && color3 == "green")
			 			|| (object3 == "6x15" && color3 == "green") ||  (object3 == "6x16" && color3=="red"))){

			 			var temp3 ="The R + S column has errors.";
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
			if(tt3cirle7Array.length<16||tt3cirle5Array.length<16||tt3cirle6Array.length<16||tt3cirleArray.length<48)
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

	var tt3html = '<div id = "tt3Main" class="modal hide fade" tabindex="-1" role="dialog" aria-hidden="true"> <!-- --> <div id="directions" class = "modal-header"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button> <h3 id="header">P, Q, R and S have been filled in for you. Now, build the truth table for this statement: </h3> <h4>(P -> Q) <--> (R + S)</h4> </div> <!--The main modal body contains only the exercise.--> <div id="tt3" class = "modal-body"></div> <div id = "buttonDiv" class="modal-footer"> <!--This button allows the user to close the modal and return to reading the material. Work will not be saved.--> <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button> <!--This button checks the user\'s work. Calls "tt3updateTable" function. tt3updateTable() is found in functions.js. --> <input type = "submit" class="btn btn-primary" value = "check it!" id = "tt3submit" onclick = "tt3updateTable();" /> <!--This button gives the user a hint Calls "hint" function. --> <input type = "submit" class="btn btn-danger" value = "Give me a Hint!" id = "tt3hintme" onclick = "tt3hint();" /> </div> </div>';
	function writett3(){
		$('#widgethtml').html(tt3html);
		tt3Call();
	}
