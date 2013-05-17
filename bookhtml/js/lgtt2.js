function lgtt2Call(){	
	var stage = new Kinetic.Stage({
		container: 'lgtt2',
		width: window.innerWidth,
		height: window.innerHeight,
		//draggable: true
	});
	//general layer
	var layer = new Kinetic.Layer();
	//layer containing all of the table shapes (circles/lines)
	var tableShapes = new Kinetic.Layer();
	//layer for the checkmarks
	var answerLayer = new Kinetic.Layer();
	var andImage = new Image();
	var orImage = new Image();
	var notImage = new Image();

	andImage.src = 'images/And.png';
	andImage.onload = function(){
	var AND = new Kinetic.Image({
	x: 435,
	y: 390,
	height: 150,
	width: 150,
	image: andImage
	});
	layer.add(AND);
	layer.draw();
	};

	orImage.src = 'images/Or.png';
	orImage.onload = function(){
	var OR = new Kinetic.Image({
	x: 700,
	y: 390,
	height: 150,
	width: 150,
	image: orImage
	});
	layer.add(OR);
	layer.draw();
	};

	notImage.src = 'images/Not.png';
	notImage.onload = function(){
	var NOT = new Kinetic.Image({
	x: 450,
	y: 575,
	height: 100,
	width: 125,
	image: notImage
	});
	layer.add(NOT);
	layer.draw();
	};

	var P = new Kinetic.Circle({
	  x: 335,
	  y: 350,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var Q = new Kinetic.Circle({
	  x: 335,
	  y: 425,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var R = new Kinetic.Circle({
	  x: 335,
	  y: 500,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var S = new Kinetic.Circle({
	  x: 335,
	  y: 625,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var StoNot = new Kinetic.Line({
	  points: [350, 625, 450, 625],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var RtoAnd = new Kinetic.Line({
	  points: [350, 500, 450, 500],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var QtoAnd = new Kinetic.Line({
	  points: [350, 425, 450, 425],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var PtoOr = new Kinetic.Line({
	  points: [350, 350, 625, 350, 625, 440, 735, 440],
	  stroke: 'red',
	  strokeWidth: 5
	});

	var AndtoOr = new Kinetic.Line({
	  points: [580, 470, 735, 470],
	  stroke: 'red',
	  strokeWidth: 5
	});

	var NottoOr = new Kinetic.Line({
	  points: [575, 625, 625, 625, 625, 500, 730, 500],
	  stroke: 'red',
	  strokeWidth: 5
	});

	var outputIndicator = new Kinetic.Circle({
	  x: 900,
	  y: 460,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var topLine = new Kinetic.Line({
	  points: [15, 50, 215, 50],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var rightLine = new Kinetic.Line({
	  points: [215, 50, 215, 690],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var leftLine = new Kinetic.Line({
	  points: [15, 50, 15, 690],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var bottomLine = new Kinetic.Line({
	  points: [15, 690, 215, 690],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var column1 = new Kinetic.Line({
	  points: [55, 50, 55, 690],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var column2 = new Kinetic.Line({
	  points: [95, 50, 95, 690],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var column3 = new Kinetic.Line({
	  points: [135, 50, 135, 690],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var column4 = new Kinetic.Line({
	  points: [175, 50, 175, 690],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var row1 = new Kinetic.Line({
	  points: [15, 90, 215, 90],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var row2 = new Kinetic.Line({
	  points: [15, 130, 215, 130],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var row3 = new Kinetic.Line({
	  points: [15, 170, 215, 170],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var row4 = new Kinetic.Line({
	  points: [15, 210, 215, 210],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var row5 = new Kinetic.Line({
	  points: [15, 250, 215, 250],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var row6 = new Kinetic.Line({
	  points: [15, 290, 215, 290],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var row7 = new Kinetic.Line({
	  points: [15, 330, 215, 330],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var row8 = new Kinetic.Line({
	  points: [15, 370, 215, 370],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var row9 = new Kinetic.Line({
	  points: [15, 410, 215, 410],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var row10 = new Kinetic.Line({
	  points: [15, 450, 215, 450],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var row11 = new Kinetic.Line({
	  points: [15, 490, 215, 490],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var row12 = new Kinetic.Line({
	  points: [15, 530, 215, 530],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var row13 = new Kinetic.Line({
	  points: [15, 570, 215, 570],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var row14 = new Kinetic.Line({
	  points: [15, 610, 215, 610],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var row15 = new Kinetic.Line({
	  points: [15, 650, 215, 650],
	  stroke: 'black',
	  strokeWidth: 5
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
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle1x4 = new Kinetic.Circle({
	  x: 35,
	  y: 190,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle1x5 = new Kinetic.Circle({
	  x: 35,
	  y: 230,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle1x6 = new Kinetic.Circle({
	  x: 35,
	  y: 270,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle1x7 = new Kinetic.Circle({
	  x: 35,
	  y: 310,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle1x8 = new Kinetic.Circle({
	  x: 35,
	  y: 350,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle1x9 = new Kinetic.Circle({
	  x: 35,
	  y: 390,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle1x10 = new Kinetic.Circle({
	  x: 35,
	  y: 430,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle1x11 = new Kinetic.Circle({
	  x: 35,
	  y: 470,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle1x12 = new Kinetic.Circle({
	  x: 35,
	  y: 510,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle1x13 = new Kinetic.Circle({
	  x: 35,
	  y: 550,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle1x14 = new Kinetic.Circle({
	  x: 35,
	  y: 590,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle1x15 = new Kinetic.Circle({
	  x: 35,
	  y: 630,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle1x16 = new Kinetic.Circle({
	  x: 35,
	  y: 670,
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
	  fill: 'green',
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
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle2x5 = new Kinetic.Circle({
	  x: 75,
	  y: 230,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle2x6 = new Kinetic.Circle({
	  x: 75,
	  y: 270,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle2x7 = new Kinetic.Circle({
	  x: 75,
	  y: 310,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle2x8 = new Kinetic.Circle({
	  x: 75,
	  y: 350,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle2x9 = new Kinetic.Circle({
	  x: 75,
	  y: 390,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle2x10 = new Kinetic.Circle({
	  x: 75,
	  y: 430,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle2x11 = new Kinetic.Circle({
	  x: 75,
	  y: 470,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle2x12 = new Kinetic.Circle({
	  x: 75,
	  y: 510,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle2x13 = new Kinetic.Circle({
	  x: 75,
	  y: 550,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle2x14 = new Kinetic.Circle({
	  x: 75,
	  y: 590,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle2x15 = new Kinetic.Circle({
	  x: 75,
	  y: 630,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle2x16 = new Kinetic.Circle({
	  x: 75,
	  y: 670,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle3x1 = new Kinetic.Circle({
	  x: 115,
	  y: 70,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle3x2 = new Kinetic.Circle({
	  x: 115,
	  y: 110,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle3x3 = new Kinetic.Circle({
	  x: 115,
	  y: 150,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle3x4 = new Kinetic.Circle({
	  x: 115,
	  y: 190,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle3x5 = new Kinetic.Circle({
	  x: 115,
	  y: 230,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle3x6 = new Kinetic.Circle({
	  x: 115,
	  y: 270,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle3x7 = new Kinetic.Circle({
	  x: 115,
	  y: 310,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle3x8 = new Kinetic.Circle({
	  x: 115,
	  y: 350,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle3x9 = new Kinetic.Circle({
	  x: 115,
	  y: 390,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle3x10 = new Kinetic.Circle({
	  x: 115,
	  y: 430,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle3x11 = new Kinetic.Circle({
	  x: 115,
	  y: 470,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle3x12 = new Kinetic.Circle({
	  x: 115,
	  y: 510,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle3x13 = new Kinetic.Circle({
	  x: 115,
	  y: 550,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle3x14 = new Kinetic.Circle({
	  x: 115,
	  y: 590,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle3x15 = new Kinetic.Circle({
	  x: 115,
	  y: 630,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle3x16 = new Kinetic.Circle({
	  x: 115,
	  y: 670,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle4x1 = new Kinetic.Circle({
	  x: 155,
	  y: 70,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle4x2 = new Kinetic.Circle({
	  x: 155,
	  y: 110,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle4x3 = new Kinetic.Circle({
	  x: 155,
	  y: 150,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle4x4 = new Kinetic.Circle({
	  x: 155,
	  y: 190,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle4x5 = new Kinetic.Circle({
	  x: 155,
	  y: 230,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle4x6 = new Kinetic.Circle({
	  x: 155,
	  y: 270,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle4x7 = new Kinetic.Circle({
	  x: 155,
	  y: 310,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle4x8 = new Kinetic.Circle({
	  x: 155,
	  y: 350,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle4x9 = new Kinetic.Circle({
	  x: 155,
	  y: 390,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle4x10 = new Kinetic.Circle({
	  x: 155,
	  y: 430,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle4x11 = new Kinetic.Circle({
	  x: 155,
	  y: 470,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle4x12 = new Kinetic.Circle({
	  x: 155,
	  y: 510,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle4x13 = new Kinetic.Circle({
	  x: 155,
	  y: 550,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle4x14 = new Kinetic.Circle({
	  x: 155,
	  y: 590,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle4x15 = new Kinetic.Circle({
	  x: 155,
	  y: 630,
	  radius: 15,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle4x16 = new Kinetic.Circle({
	  x: 155,
	  y: 670,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle5x1 = new Kinetic.Circle({
	  id: "5x1",
	  x: 195,
	  y: 70,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle5x2 = new Kinetic.Circle({
	  id: "5x2",
	  x: 195,
	  y: 110,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle5x3 = new Kinetic.Circle({
	  id: "5x3",
	  x: 195,
	  y: 150,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle5x4 = new Kinetic.Circle({
	  id: "5x4",
	  x: 195,
	  y: 190,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle5x5 = new Kinetic.Circle({
	  id: "5x5",
	  x: 195,
	  y: 230,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle5x6 = new Kinetic.Circle({
	  id: "5x6",
	  x: 195,
	  y: 270,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle5x7 = new Kinetic.Circle({
	  id: "5x7",
	  x: 195,
	  y: 310,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle5x8 = new Kinetic.Circle({
	  id: "5x8",
	  x: 195,
	  y: 350,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle5x9 = new Kinetic.Circle({
	  id: "5x9",
	  x: 195,
	  y: 390,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle5x10 = new Kinetic.Circle({
	  id: "5x10",
	  x: 195,
	  y: 430,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle5x11 = new Kinetic.Circle({
	  id: "5x11",
	  x: 195,
	  y: 470,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle5x12 = new Kinetic.Circle({
	  id: "5x12",
	  x: 195,
	  y: 510,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle5x13 = new Kinetic.Circle({
	  id: "5x13",
	  x: 195,
	  y: 550,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle5x14 = new Kinetic.Circle({
	  id: "5x14",
	  x: 195,
	  y: 590,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle5x15 = new Kinetic.Circle({
	  id: "5x15",
	  x: 195,
	  y: 630,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var circle5x16 = new Kinetic.Circle({
	  id: "5x16",
	  x: 195,
	  y: 670,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var check1 = new Kinetic.Line({
	  points: [235, 65, 245, 80, 255, 50],
	  stroke: 'green',
	  strokeWidth: 3,
	  visible: false
	});

	var check2 = new Kinetic.Line({
	  points: [235, 105, 245, 120, 255, 90],
	  stroke: 'green',
	  strokeWidth: 3,
	  visible: false
	});

	var check3 = new Kinetic.Line({
	  points: [235, 145, 245, 160, 255, 130],
	  stroke: 'green',
	  strokeWidth: 3,
	  visible: false
	});

	var check4 = new Kinetic.Line({
	  points: [235, 185, 245, 200, 255, 170],
	  stroke: 'green',
	  strokeWidth: 3,
	  visible: false
	});

	var check5 = new Kinetic.Line({
	  points: [235, 225, 245, 240, 255, 210],
	  stroke: 'green',
	  strokeWidth: 3,
	  visible: false
	});

	var check6 = new Kinetic.Line({
	  points: [235, 265, 245, 280, 255, 250],
	  stroke: 'green',
	  strokeWidth: 3,
	  visible: false
	});

	var check7 = new Kinetic.Line({
	  points: [235, 305, 245, 320, 255, 290],
	  stroke: 'green',
	  strokeWidth: 3,
	  visible: false
	});

	var check8 = new Kinetic.Line({
	  points: [235, 345, 245, 360, 255, 330],
	  stroke: 'green',
	  strokeWidth: 3,
	  visible: false
	});

	var check9 = new Kinetic.Line({
	  points: [235, 385, 245, 400, 255, 370],
	  stroke: 'green',
	  strokeWidth: 3,
	  visible: false
	});

	var check10 = new Kinetic.Line({
	  points: [235, 425, 245, 440, 255, 410],
	  stroke: 'green',
	  strokeWidth: 3,
	  visible: false
	});

	var check11 = new Kinetic.Line({
	  points: [235, 465, 245, 480, 255, 450],
	  stroke: 'green',
	  strokeWidth: 3,
	  visible: false
	});

	var check12 = new Kinetic.Line({
	  points: [235, 505, 245, 520, 255, 490],
	  stroke: 'green',
	  strokeWidth: 3,
	  visible: false
	});

	var check13 = new Kinetic.Line({
	  points: [235, 545, 245, 560, 255, 530],
	  stroke: 'green',
	  strokeWidth: 3,
	  visible: false
	});

	var check14 = new Kinetic.Line({
	  points: [235, 585, 245, 600, 255, 570],
	  stroke: 'green',
	  strokeWidth: 3,
	  visible: false
	});

	var check15 = new Kinetic.Line({
	  points: [235, 625, 245, 640, 255, 610],
	  stroke: 'green',
	  strokeWidth: 3,
	  visible: false
	});

	var check16 = new Kinetic.Line({
	  points: [235, 665, 245, 680, 255, 650],
	  stroke: 'green',
	  strokeWidth: 3,
	  visible: false
	});

	var textP = new Kinetic.Text({
	  x: 300,
	  y: 335,
	  text: 'P',
	  fontSize: 30,
	  fontFamily: 'Calibri',
	  fill: 'black'
	});

	var textQ = new Kinetic.Text({
	  x: 295,
	  y: 405,
	  text: 'Q',
	  fontSize: 30,
	  fontFamily: 'Calibri',
	  fill: 'black'
	});

	var textR = new Kinetic.Text({
	  x: 300,
	  y: 485,
	  text: 'R',
	  fontSize: 30,
	  fontFamily: 'Calibri',
	  fill: 'black'
	});

	var textS = new Kinetic.Text({
	  x: 300,
	  y: 610,
	  text: 'S',
	  fontSize: 30,
	  fontFamily: 'Calibri',
	  fill: 'black'
	});

	var tableP = new Kinetic.Text({
	  x: 25,
	  y: 15,
	  text: 'P',
	  fontSize: 30,
	  fontFamily: 'Calibri',
	  fill: 'black'
	});

	var tableQ = new Kinetic.Text({
	  x: 65,
	  y: 15,
	  text: 'Q',
	  fontSize: 30,
	  fontFamily: 'Calibri',
	  fill: 'black'
	});

	var tableR = new Kinetic.Text({
	  x: 110,
	  y: 15,
	  text: 'R',
	  fontSize: 30,
	  fontFamily: 'Calibri',
	  fill: 'black'
	});

	var tableS = new Kinetic.Text({
	  x: 150,
	  y: 15,
	  text: 'S',
	  fontSize: 30,
	  fontFamily: 'Calibri',
	  fill: 'black'
	});

	var tableOutput = new Kinetic.Text({
	  x: 175,
	  y: 20,
	  text: 'Output',
	  fontSize: 15,
	  fontFamily: 'Calibri',
	  fill: 'black'
	});
	layer.add(P);
	layer.add(Q);
	layer.add(R);
	layer.add(S);
	layer.add(textP);
	layer.add(textQ);
	layer.add(textR);
	layer.add(textS);
	layer.add(StoNot);
	layer.add(RtoAnd);
	layer.add(QtoAnd);
	layer.add(PtoOr);
	layer.add(AndtoOr);
	layer.add(NottoOr);
	layer.add(outputIndicator);
	tableShapes.add(topLine);
	tableShapes.add(rightLine);
	tableShapes.add(leftLine);
	tableShapes.add(bottomLine);
	tableShapes.add(column1);
	tableShapes.add(column2);
	tableShapes.add(column3);
	tableShapes.add(column4);
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
	tableShapes.add(tableP);
	tableShapes.add(tableQ);
	tableShapes.add(tableR);
	tableShapes.add(tableS);
	tableShapes.add(tableOutput);
	answerLayer.add(check1);
	answerLayer.add(check2);
	answerLayer.add(check3);
	answerLayer.add(check4);
	answerLayer.add(check5);
	answerLayer.add(check6);
	answerLayer.add(check7);
	answerLayer.add(check8);
	answerLayer.add(check9);
	answerLayer.add(check10);
	answerLayer.add(check11);
	answerLayer.add(check12);
	answerLayer.add(check13);
	answerLayer.add(check14);
	answerLayer.add(check15);
	answerLayer.add(check16);
	stage.add(layer);
	stage.add(answerLayer);
	stage.add(tableShapes);
	// These change the style of the cursor when you mouse over the object
	P.on("mouseover", function(){
	  document.body.style.cursor = "pointer";
	});

	Q.on("mouseover", function(){
	  document.body.style.cursor = "pointer";
	});

	R.on("mouseover", function(){
	  document.body.style.cursor = "pointer";
	});

	S.on("mouseover", function(){
	  document.body.style.cursor = "pointer";
	});

	P.on("mouseout", function(){
	  document.body.style.cursor = "default";
	});

	Q.on("mouseout", function(){
	  document.body.style.cursor = "default";
	});

	R.on("mouseout", function(){
	  document.body.style.cursor = "default";
	});

	S.on("mouseout", function(){
	  document.body.style.cursor = "default";
	});

	circle5x1.on("mouseover", function(){
	  document.body.style.cursor = "pointer";
	});

	circle5x2.on("mouseover", function(){
	  document.body.style.cursor = "pointer";
	});

	circle5x3.on("mouseover", function(){
	  document.body.style.cursor = "pointer";
	});

	circle5x4.on("mouseover", function(){
	  document.body.style.cursor = "pointer";
	});

	circle5x5.on("mouseover", function(){
	  document.body.style.cursor = "pointer";
	});

	circle5x6.on("mouseover", function(){
	  document.body.style.cursor = "pointer";
	});

	circle5x7.on("mouseover", function(){
	  document.body.style.cursor = "pointer";
	});

	circle5x8.on("mouseover", function(){
	  document.body.style.cursor = "pointer";
	});

	circle5x9.on("mouseover", function(){
	  document.body.style.cursor = "pointer";
	});

	circle5x10.on("mouseover", function(){
	  document.body.style.cursor = "pointer";
	});

	circle5x11.on("mouseover", function(){
	  document.body.style.cursor = "pointer";
	});

	circle5x12.on("mouseover", function(){
	  document.body.style.cursor = "pointer";
	});

	circle5x13.on("mouseover", function(){
	  document.body.style.cursor = "pointer";
	});

	circle5x14.on("mouseover", function(){
	  document.body.style.cursor = "pointer";
	});

	circle5x15.on("mouseover", function(){
	  document.body.style.cursor = "pointer";
	});

	circle5x16.on("mouseover", function(){
	  document.body.style.cursor = "pointer";
	});

	circle5x1.on("mouseout", function(){
	  document.body.style.cursor = "default";
	});

	circle5x2.on("mouseout", function(){
	  document.body.style.cursor = "default";
	});

	circle5x3.on("mouseout", function(){
	  document.body.style.cursor = "default";
	});

	circle5x4.on("mouseout", function(){
	  document.body.style.cursor = "default";
	});

	circle5x5.on("mouseout", function(){
	  document.body.style.cursor = "default";
	});

	circle5x6.on("mouseout", function(){
	  document.body.style.cursor = "default";
	});

	circle5x7.on("mouseout", function(){
	  document.body.style.cursor = "default";
	});

	circle5x8.on("mouseout", function(){
	  document.body.style.cursor = "default";
	});

	circle5x9.on("mouseout", function(){
	  document.body.style.cursor = "default";
	});

	circle5x10.on("mouseout", function(){
	  document.body.style.cursor = "default";
	});

	circle5x11.on("mouseout", function(){
	  document.body.style.cursor = "default";
	});

	circle5x12.on("mouseout", function(){
	  document.body.style.cursor = "default";
	});

	circle5x13.on("mouseout", function(){
	  document.body.style.cursor = "default";
	});

	circle5x14.on("mouseout", function(){
	  document.body.style.cursor = "default";
	});

	circle5x15.on("mouseout", function(){
	  document.body.style.cursor = "default";
	});

	circle5x16.on("mouseout", function(){
	  document.body.style.cursor = "default";
	});

	//these change the colors of the clickable objects (inputs and answers generally)
	P.on("click tap", function(){
		lgtt2setColor(P);
	});

	Q.on("click tap", function(){
		lgtt2setColor(Q);
	});

	R.on("click tap", function(){
		lgtt2setColor(R);
	});

	S.on("click tap", function(){
		lgtt2setColor(S);
	});

	circle5x1.on("click tap", function(){
		lgtt2setColor(circle5x1);
	});

	circle5x2.on("click tap", function(){
		lgtt2setColor(circle5x2);
	});

	circle5x3.on("click tap", function(){
		lgtt2setColor(circle5x3);
	});

	circle5x4.on("click tap", function(){
		lgtt2setColor(circle5x4);
	});

	circle5x5.on("click tap", function(){
		lgtt2setColor(circle5x5);
	});

	circle5x6.on("click tap", function(){
		lgtt2setColor(circle5x6);
	});

	circle5x7.on("click tap", function(){
		lgtt2setColor(circle5x7);
	});

	circle5x8.on("click tap", function(){
		lgtt2setColor(circle5x8);
	});

	circle5x9.on("click tap", function(){
		lgtt2setColor(circle5x9);
	});

	circle5x10.on("click tap", function(){
		lgtt2setColor(circle5x10);
	});

	circle5x11.on("click tap", function(){
		lgtt2setColor(circle5x11);
	});

	circle5x12.on("click tap", function(){
		lgtt2setColor(circle5x12);
	});

	circle5x13.on("click tap", function(){
		lgtt2setColor(circle5x13);
	});

	circle5x14.on("click tap", function(){
		lgtt2setColor(circle5x14);
	});

	circle5x15.on("click tap", function(){
		lgtt2setColor(circle5x15);
	});

	circle5x16.on("click tap", function(){
		lgtt2setColor(circle5x16);
	});
	check = new Array()
	/*
	Sets the color of theobjects clicked, based on it's previous color.
	then drawns the layer (to actually update the color on the canvas (important!).

	As nearly all objects and parts of the widget use the colors of the objects to do their logic,
	we must then update all lines and outputs
	*/
	function lgtt2setColor(object)
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
		lgtt2updateIndicators();
		lgtt2updateOutput();
		tableShapes.draw();
		check.push(object);
		layer.draw();
	}

	/*
	Updates the checkmarks that indicate if you got the correct answer or not. Objects being pulled are the circles in column 3.
	Does NOT make them visible (that's what checkTable function is for. You click the check button and then they are drawn
	*/
	function lgtt2checkTable()
	{
		for(var i = 0; i < check.length; i++){
			var objectId = check[i].getId();
			var color = check[i].getFill();

			if(objectId == "5x1")
			{
				switch(color)
				{
					case "green":
					check1.show();
					break;
					case "red":
					check1.hide();
					break;
				}
			}
			if(objectId == "5x2")
			{
				switch(color)
				{
					case "green":
					check2.show();
					break;
					case "red":
					check2.hide();
					break;
				}
			}
			if(objectId == "5x3")
			{
				switch(color)
				{
					case "green":
					check3.show();
					break;
					case "red":
					check3.hide();
					break;
				}
			}
			if(objectId == "5x4")
			{
				switch(color)
				{
					case "green":
					check4.show();
					break;
					case "red":
					check4.hide();
					break;
				}
			}
			if(objectId == "5x5")
			{
				switch(color)
				{
					case "green":
					check5.show();
					break;
					case "red":
					check5.hide();
					break;
				}
			}
			if(objectId == "5x6")
			{
				switch(color)
				{
					case "green":
					check6.show();
					break;
					case "red":
					check6.hide();
					break;
				}
			}
			if(objectId == "5x7")
			{
				switch(color)
				{
					case "green":
					check7.show();
					break;
					case "red":
					check7.hide();
					break;
				}
			}
			if(objectId == "5x8")
			{
				switch(color)
				{
					case "green":
					check8.show();
					break;
					case "red":
					check8.hide();
					break;
				}
			}
			if(objectId == "5x9")
			{
				switch(color)
				{
					case "green":
					check9.show();
					break;
					case "red":
					check9.hide();
					break;
				}
			}
			if(objectId == "5x10")
			{
				switch(color)
				{
					case "green":
					check10.show();
					break;
					case "red":
					check10.hide();
					break;
				}
			}
			if(objectId == "5x11")
			{
				switch(color)
				{
					case "green":
					check11.hide();
					break;
					case "red":
					check11.show();
					break;
				}
			}
			if(objectId == "5x12")
			{
				switch(color)
				{
					case "green":
					check12.show();
					break;
					case "red":
					check12.hide();
					break;
				}
			}
			if(objectId == "5x13")
			{
				switch(color)
				{
					case "green":
					check13.hide();
					break;
					case "red":
					check13.show();
					break;
				}
			}
			if(objectId == "5x14")
			{
				switch(color)
				{
					case "green":
					check14.show();
					break;
					case "red":
					check14.hide();
					break;
				}
			}
			if(objectId == "5x15")
			{
				switch(color)
				{
					case "green":
					check15.hide();
					break;
					case "red":
					check15.show();
					break;
				}
			}
			if(objectId == "5x16")
			{
				switch(color)
				{
					case "green":
					check16.show();
					break;
					case "red":
					check16.hide();
					break;
				}
			}
		}
	}

	/*
	Updates the connecting lines between inputs/logic gates/outputs based on input
	*/
	function lgtt2updateIndicators()
	{
		var pColor = P.getFill();
		var qColor = Q.getFill();
		var rColor = R.getFill();
		var sColor = S.getFill();

		if(pColor == "green")
		{
			PtoOr.setStroke("green");
		}
		if(pColor == "red")
		{
			PtoOr.setStroke("red");
		}
		if(qColor == "green")
		{
			QtoAnd.setStroke("green");
		}
		if(qColor == "red")
		{
			QtoAnd.setStroke("red");
		}
		if(rColor == "green")
		{
			RtoAnd.setStroke("green");
		}
		if(rColor == "red")
		{
			RtoAnd.setStroke("red");
		}
		if(sColor == "green")
		{
			StoNot.setStroke("green");
			NottoOr.setStroke("red");
		}
		if(sColor == "red")
		{
			StoNot.setStroke("red");
			NottoOr.setStroke("green");
		}
		if(qColor == "green" && rColor == "green")
		{
			AndtoOr.setStroke("green");
		}
		else
		{
			AndtoOr.setStroke("red");
		}
		layer.draw();
	}

	/*
	Updates output based on input
	*/
	function lgtt2updateOutput()
	{
		var pColor = P.getFill();
		var qColor = Q.getFill();
		var rColor = R.getFill();
		var sColor = S.getFill();

		if(pColor == "green")
		{
			outputIndicator.setFill("green");
		}
		else if(qColor == "green" && rColor == "green")
		{
			outputIndicator.setFill("green");
		}
		else if(sColor == "red")
		{
			outputIndicator.setFill("green");
		}
		else
		{
			outputIndicator.setFill("red");
		}
		layer.draw();
	}
}
var lgtt2html = '<div id = "lgtt2Main" class="modal hide fade" tabindex="-1" role="dialog" aria-hidden="true"> <!-- --> <div id="directions" class = "modal-header"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button> <h3 id="header">Fill in the output table by using the logic gates to check your answer.</h3> </div> <!--The main modal body contains only the exercise.--> <div id="lgtt2" class = "modal-body"></div> <div id = "buttonDiv" class="modal-footer"> <!--This button allows the user to close the modal and return to reading the material. Work will not be saved.--> <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button> <!--This button checks the user\'s work. Calls "updateTable" function. lgtt2checkTable() is found in functions.js. --> <input type = "submit" class="btn btn-primary" value = "Check it!" id = "lgtt2check" onclick = "lgtt2checkTable();" /> </div> </div>';
function writelgtt2(){
  $('#widgethtml').html(lgtt2html);
  lgtt2Call();

  $('#lgtt2Main').css({
	   width: 'auto',//sets width to auto to wrap the size of modal-body
	   'margin-left': function () {//creates function to center modal on page. 
	       return -($(this).width() / 2);
	    }
	});
}