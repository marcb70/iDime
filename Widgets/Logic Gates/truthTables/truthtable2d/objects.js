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
var QimpliesR = new Kinetic.Text({
  x: 240,
  y: 15,
  text: '~Q -> ~R',
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

var RimpliesP = new Kinetic.Text({
  x: 160,
  y: 15,
  text: 'R -> P',
  fontSize: 15,
  fontFamily: 'Calibri',
  fill: 'black'
});
var fullStatement = new Kinetic.Text({
  x: 295,
  y: 15,
  text: '(R -> P) * (~Q -> ~R)',
  fontSize: 15,
  fontFamily: 'Calibri',
  fill: 'black'
});