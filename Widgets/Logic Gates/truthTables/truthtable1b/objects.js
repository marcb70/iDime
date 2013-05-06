/*Creates all shapes, including the truth table, rows and columns for the truth table, and each cirlce in the truth table.
*Only circles that are changeable have id's attached to them for functional purposes. 
*This file uses kineticJS to create each object.*/

//creates the main rectable of the truth table
var truthTable = new Kinetic.Rect({
  height: 215,
  width: 430,
  stroke: 'black',
  strokeWidth: 5,
  x: 15,
  y: 10

});
//the following 4 variables create the table row lines
var topLine = new Kinetic.Line({
  points: [15, 50, 445, 50],
  stroke: 'black',
  strokeWidth: 4
});

var row1 = new Kinetic.Line({
  points: [15, 90, 445, 90],
  stroke: 'black',
  strokeWidth: 2
});

var row2 = new Kinetic.Line({
  points: [15, 130, 445, 130],
  stroke: 'black',
  strokeWidth: 2
});

var row3 = new Kinetic.Line({
  points: [15, 170, 445, 170],
  stroke: 'black',
  strokeWidth: 2
});

//the following 6 variables create the table column lines
var column1 = new Kinetic.Line({
  points: [55, 10, 55, 225],
  stroke: 'black',
  strokeWidth: 2
});

var column2 = new Kinetic.Line({
  points: [95, 10, 95, 225],
  stroke: 'black',
  strokeWidth: 2
});
var column3 = new Kinetic.Line({
  points: [135, 10, 135, 225],
  stroke: 'black',
  strokeWidth: 2
});
var column4 = new Kinetic.Line({
  points: [175, 10, 175, 225],
  stroke: 'black',
  strokeWidth: 2
});
var column5 = new Kinetic.Line({
  points: [220, 10, 220, 225],
  stroke: 'black',
  strokeWidth: 2
});
var column6 = new Kinetic.Line({
  points: [290, 10, 290, 225],
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

var circle4x1 = new Kinetic.Circle({
  id: "4x1",
  x: 155,
  y: 70,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle4x2 = new Kinetic.Circle({
  id: "4x2",
  x: 155,
  y: 110,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle4x3 = new Kinetic.Circle({
  id: "4x3",
  x: 155,
  y: 150,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle4x4 = new Kinetic.Circle({
  id: "4x4",
  x: 155,
  y: 190,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle5x1 = new Kinetic.Circle({
  id: "5x1",
  x: 197,
  y: 70,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle5x2 = new Kinetic.Circle({
  id: "5x2",
  x: 197,
  y: 110,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle5x3 = new Kinetic.Circle({
  id: "5x3",
  x: 197,
  y: 150,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle5x4 = new Kinetic.Circle({
  id: "5x4",
  x: 197,
  y: 190,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle6x1 = new Kinetic.Circle({
  id: "6x1",
  x: 255,
  y: 70,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle6x2 = new Kinetic.Circle({
  id: "6x2",
  x: 255,
  y: 110,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle6x3 = new Kinetic.Circle({
  id: "6x3",
  x: 255,
  y: 150,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle6x4 = new Kinetic.Circle({
  id: "6x4",
  x: 255,
  y: 190,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle7x1 = new Kinetic.Circle({
  id: "7x1",
  x: 365,
  y: 70,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle7x2 = new Kinetic.Circle({
  id: "7x2",
  x: 365,
  y: 110,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle7x3 = new Kinetic.Circle({
  id: "7x3",
  x: 365,
  y: 150,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle7x4 = new Kinetic.Circle({
  id: "7x4",
  x: 365,
  y: 190,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

//the following variables create the kinetic Text statements at the top of the truth table.
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

var NOTP = new Kinetic.Text({
  x: 105,
  y: 15,
  text: '~P',
  fontSize: 15,
  fontFamily: 'Calibri',
  fill: 'black'
});

var NOTQ = new Kinetic.Text({
  x: 145,
  y: 15,
  text: '~Q',
  fontSize: 15,
  fontFamily: 'Calibri',
  fill: 'black'
});

var PimpliesQ = new Kinetic.Text({
  x: 177,
  y: 15,
  text: 'P -> Q',
  fontSize: 15,
  fontFamily: 'Calibri',
  fill: 'black'
});


var NotQimpliesNotP = new Kinetic.Text({
  x: 225,
  y: 15,
  text: '~Q -> ~P',
  fontSize: 15,
  fontFamily: 'Calibri',
  fill: 'black'
});

var fullStatement = new Kinetic.Text({
  x: 295,
  y: 15,
  text: '(P -> Q) -> (~Q -> ~P)',
  fontSize: 15,
  fontFamily: 'Calibri',
  fill: 'black'
});