var NorImage = new Image();
var NotImage = new Image();
var OrImage = new Image();

OrImage.src = 'images/Or.png';
OrImage.onload = function(){
  var OR = new Kinetic.Image({
    x: 750,
    y: 500,
    height: 100,
    width: 125,
    image: OrImage
  });
  layer.add(OR);
  layer.draw();
};

NorImage.src = 'images/Nor.png';
NorImage.onload = function(){
  var NOR = new Kinetic.Image({
    x: 500,
    y: 350,
    height: 166,
    width: 194,
    image: NorImage
  });
  layer.add(NOR);
  layer.draw();
};

NotImage.src = 'images/Not.png';
NotImage.onload = function(){
  var NOT = new Kinetic.Image({
    x: 500,
    y: 575,
    height: 100,
    width: 125,
    image: NotImage
  });
  layer.add(NOT);
  layer.draw();
};

var P = new Kinetic.Circle({
  x: 350,
  y: 400,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var Q = new Kinetic.Circle({
  x: 350,
  y: 475,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var PtoNor = new Kinetic.Line({
  points: [365, 400, 550, 400],
  stroke: 'black',
  strokeWidth: 5
});

var QtoNor = new Kinetic.Line({
  points: [365, 475, 550, 475],
  stroke: 'black',
  strokeWidth: 5
});

var QtoNot = new Kinetic.Line({
  points: [400, 475, 400, 625, 500, 625],
  stroke: 'black',
  strokeWidth: 5
});

var NortoOr = new Kinetic.Line({
  points: [690, 435, 740, 435, 740, 525, 775, 525],
  stroke: 'red',
  strokeWidth: 5
});

var NottoOr = new Kinetic.Line({
  points: [625, 625, 675, 625, 675, 575, 775, 575],
  stroke: 'red',
  strokeWidth: 5
});

var outputIndicator = new Kinetic.Circle({
  x: 900,
  y: 550,
  radius: 15,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 2
});

var topLine = new Kinetic.Line({
  points: [15, 50, 135, 50],
  stroke: 'black',
  strokeWidth: 5
});

var rightLine = new Kinetic.Line({
  points: [135, 50, 135, 215],
  stroke: 'black',
  strokeWidth: 5
});

var leftLine = new Kinetic.Line({
  points: [15, 50, 15, 215],
  stroke: 'black',
  strokeWidth: 5
});

var bottomLine = new Kinetic.Line({
  points: [15, 215, 135, 215],
  stroke: 'black',
  strokeWidth: 5
});

var column1 = new Kinetic.Line({
  points: [55, 50, 55, 215],
  stroke: 'black',
  strokeWidth: 5
});

var column2 = new Kinetic.Line({
  points: [95, 50, 95, 215],
  stroke: 'black',
  strokeWidth: 5
});

var row1 = new Kinetic.Line({
  points: [15, 90, 135, 90],
  stroke: 'black',
  strokeWidth: 5
});

var row2 = new Kinetic.Line({
  points: [15, 130, 135, 130],
  stroke: 'black',
  strokeWidth: 5
});

var row3 = new Kinetic.Line({
  points: [15, 170, 135, 170],
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
  x: 115,
  y: 70,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle3x2 = new Kinetic.Circle({
  id: "3x2",
  x: 115,
  y: 110,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle3x3 = new Kinetic.Circle({
  id: "3x3",
  x: 115,
  y: 150,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle3x4 = new Kinetic.Circle({
  id: "3x4",
  x: 115,
  y: 190,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var check1 = new Kinetic.Line({
  points: [170, 65, 180, 80, 190, 50],
  stroke: 'green',
  strokeWidth: 3,
  visible: false
});

var check2 = new Kinetic.Line({
  points: [170, 105, 180, 120, 190, 90],
  stroke: 'green',
  strokeWidth: 3,
  visible: false
});

var check3 = new Kinetic.Line({
  points: [170, 145, 180, 160, 190, 130],
  stroke: 'green',
  strokeWidth: 3,
  visible: false
});

var check4 = new Kinetic.Line({
  points: [170, 185, 180, 200, 190, 170],
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

var tableOutput = new Kinetic.Text({
  x: 90,
  y: 20,
  text: 'Output',
  fontSize: 15,
  fontFamily: 'Calibri',
  fill: 'black'
});