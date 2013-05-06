/*Creates all shapes, including the truth table, rows and columns for the truth table, and each cirlce in the truth table.
*Only circles that are changeable have id's attached to them for functional purposes. 
*This file uses kineticJS to create each object.*/

//creates the main rectable of the truth table
var truthTable = new Kinetic.Rect({
  height: 215,
  width: 330,
  stroke: 'black',
  strokeWidth: 5,
  x: 15,
  y: 10

});
//the following 4 variables create the table row lines
var topLine = new Kinetic.Line({
  points: [15, 50, 345, 50],
  stroke: 'black',
  strokeWidth: 4
});

var row1 = new Kinetic.Line({
  points: [15, 90, 345, 90],
  stroke: 'black',
  strokeWidth: 2
});

var row2 = new Kinetic.Line({
  points: [15, 130, 345, 130],
  stroke: 'black',
  strokeWidth: 2
});

var row3 = new Kinetic.Line({
  points: [15, 170, 345, 170],
  stroke: 'black',
  strokeWidth: 2
});

//the following 5 variables create the table column lines
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
  points: [145, 10, 145, 225],
  stroke: 'black',
  strokeWidth: 2
});
var column4 = new Kinetic.Line({
  points: [220, 10, 220, 225],
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
  x: 280,
  y: 70,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle5x2 = new Kinetic.Circle({
  id: "5x2",
  x: 280,
  y: 110,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle5x3 = new Kinetic.Circle({
  id: "5x3",
  x: 280,
  y: 150,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle5x4 = new Kinetic.Circle({
  id: "5x4",
  x: 280,
  y: 190,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

//the following variables create the kinetic Text statements at the top of the truth table.
var PbiconQ = new Kinetic.Text({
  x: 160,
  y: 15,
  text: 'P <--> Q',
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


var fullStatement = new Kinetic.Text({
  x: 225,
  y: 15,
  text: '(P # Q) * (P <--> Q)',
  fontSize: 15,
  fontFamily: 'Calibri',
  fill: 'black'
});