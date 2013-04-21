var truthTable = new Kinetic.Rect({
  height: 215,
  width: 400,
  stroke: 'black',
  strokeWidth: 5,
  x: 15,
  y: 10

});
var topLine = new Kinetic.Line({
  points: [15, 50, 415, 50],
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


var PANDQ = new Kinetic.Text({
  x: 240,
  y: 15,
  text: 'P * Q',
  fontSize: 15,
  fontFamily: 'Calibri',
  fill: 'black'
});

var PORQ = new Kinetic.Text({
  x: 100,
  y: 15,
  text: 'P + Q',
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

var NOTPORQ = new Kinetic.Text({
  x: 160,
  y: 15,
  text: '~(P + Q)',
  fontSize: 15,
  fontFamily: 'Calibri',
  fill: 'black'
});
var fullStatement = new Kinetic.Text({
  x: 295,
  y: 15,
  text: '(P * Q) + ~(P + Q)',
  fontSize: 15,
  fontFamily: 'Calibri',
  fill: 'black'
});