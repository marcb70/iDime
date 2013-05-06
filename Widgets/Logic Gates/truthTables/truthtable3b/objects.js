/*Creates all shapes, including the truth table, rows and columns for the truth table, and each cirlce in the truth table.
*Only circles that are changeable have id's attached to them for functional purposes. 
*This file uses kineticJS to create each object.*/

//creates the main rectable of the truth table
var truthTable = new Kinetic.Rect({
  height: 680,
  width: 530,
  stroke: 'black',
  strokeWidth: 5,
  x: 15,
  y: 10

});

//the following 16 variables create the table row lines
var topLine = new Kinetic.Line({
  points: [15, 50, 545, 50],
  stroke: 'black',
  strokeWidth: 4
});

var row1 = new Kinetic.Line({
  points: [15, 90, 545, 90],
  stroke: 'black',
  strokeWidth: 2
});

var row2 = new Kinetic.Line({
  points: [15, 130, 545, 130],
  stroke: 'black',
  strokeWidth: 2
});

var row3 = new Kinetic.Line({
  points: [15, 170, 545, 170],
  stroke: 'black',
  strokeWidth: 2
});
var row4 = new Kinetic.Line({
  points: [15, 210, 545, 210],
  stroke: 'black',
  strokeWidth: 2
});
var row5 = new Kinetic.Line({
  points: [15, 250, 545, 250],
  stroke: 'black',
  strokeWidth: 2
});
var row6 = new Kinetic.Line({
  points: [15, 290, 545, 290],
  stroke: 'black',
  strokeWidth: 2
});
var row7 = new Kinetic.Line({
  points: [15, 330, 545, 330],
  stroke: 'black',
  strokeWidth: 2
});
var row8 = new Kinetic.Line({
  points: [15, 370, 545, 370],
  stroke: 'black',
  strokeWidth: 2
});
var row9 = new Kinetic.Line({
  points: [15, 410, 545, 410],
  stroke: 'black',
  strokeWidth: 2
});
var row10 = new Kinetic.Line({
  points: [15, 450, 545, 450],
  stroke: 'black',
  strokeWidth: 2
});
var row11 = new Kinetic.Line({
  points: [15, 490, 545, 490],
  stroke: 'black',
  strokeWidth: 2
});
var row12 = new Kinetic.Line({
  points: [15, 530, 545, 530],
  stroke: 'black',
  strokeWidth: 2
});
var row13 = new Kinetic.Line({
  points: [15, 570, 545, 570],
  stroke: 'black',
  strokeWidth: 2
});
var row14 = new Kinetic.Line({
  points: [15, 610, 545, 610],
  stroke: 'black',
  strokeWidth: 2
});
var row15 = new Kinetic.Line({
  points: [15, 650, 545, 650],
  stroke: 'black',
  strokeWidth: 2
});

//the following 7 variables create the table column lines
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
  points: [235, 10, 235, 690],
  stroke: 'black',
  strokeWidth: 2
});
var column6 = new Kinetic.Line({
  points: [325, 10, 325, 690],
  stroke: 'black',
  strokeWidth: 2
});
var column7 = new Kinetic.Line({
  points: [380, 10, 380, 690],
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
  x: 205,
  y: 70,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle5x2 = new Kinetic.Circle({
  id: "5x2",
  x: 205,
  y: 110,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle5x3 = new Kinetic.Circle({
  id: "5x3",
  x: 205,
  y: 150,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle5x4 = new Kinetic.Circle({
  id: "5x4",
  x: 205,
  y: 190,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle5x5 = new Kinetic.Circle({
  id: "5x5",
  x: 205,
  y: 230,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle5x6 = new Kinetic.Circle({
  id: "5x6",
  x: 205,
  y: 270,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle5x7 = new Kinetic.Circle({
  id: "5x7",
  x: 205,
  y: 310,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle5x8 = new Kinetic.Circle({
  id: "5x8",
  x: 205,
  y: 350,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle5x9 = new Kinetic.Circle({
  id: "5x9",
  x: 205,
  y: 390,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle5x10 = new Kinetic.Circle({
  id: "5x10",
  x: 205,
  y: 430,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle5x11 = new Kinetic.Circle({
  id: "5x11",
  x: 205,
  y: 470,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle5x12 = new Kinetic.Circle({
  id: "5x12",
  x: 205,
  y: 510,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle5x13 = new Kinetic.Circle({
  id: "5x13",
  x: 205,
  y: 550,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle5x14 = new Kinetic.Circle({
  id: "5x14",
  x: 205,
  y: 590,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle5x15 = new Kinetic.Circle({
  id: "5x15",
  x: 205,
  y: 630,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle5x16 = new Kinetic.Circle({
  id: "5x16",
  x: 205,
  y: 670,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle6x1 = new Kinetic.Circle({
  id: "6x1",
  x: 280,
  y: 70,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle6x2 = new Kinetic.Circle({
  id: "6x2",
  x: 280,
  y: 110,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle6x3 = new Kinetic.Circle({
  id: "6x3",
  x: 280,
  y: 150,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle6x4 = new Kinetic.Circle({
  id: "6x4",
  x: 280,
  y: 190,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle6x5 = new Kinetic.Circle({
  id: "6x5",
  x: 280,
  y: 230,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle6x6 = new Kinetic.Circle({
  id: "6x6",
  x: 280,
  y: 270,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle6x7 = new Kinetic.Circle({
  id: "6x7",
  x: 280,
  y: 310,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle6x8 = new Kinetic.Circle({
  id: "6x8",
  x: 280,
  y: 350,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle6x9 = new Kinetic.Circle({
  id: "6x9",
  x: 280,
  y: 390,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle6x10 = new Kinetic.Circle({
  id: "6x10",
  x: 280,
  y: 430,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle6x11 = new Kinetic.Circle({
  id: "6x11",
  x: 280,
  y: 470,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle6x12 = new Kinetic.Circle({
  id: "6x12",
  x: 280,
  y: 510,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle6x13 = new Kinetic.Circle({
  id: "6x13",
  x: 280,
  y: 550,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle6x14 = new Kinetic.Circle({
  id: "6x14",
  x: 280,
  y: 590,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle6x15 = new Kinetic.Circle({
  id: "6x15",
  x: 280,
  y: 630,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle6x16 = new Kinetic.Circle({
  id: "6x16",
  x: 280,
  y: 670,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle7x1 = new Kinetic.Circle({
  id: "7x1",
  x: 355,
  y: 70,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle7x2 = new Kinetic.Circle({
  id: "7x2",
  x: 355,
  y: 110,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle7x3 = new Kinetic.Circle({
  id: "7x3",
  x: 355,
  y: 150,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle7x4 = new Kinetic.Circle({
  id: "7x4",
  x: 355,
  y: 190,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle7x5 = new Kinetic.Circle({
  id: "7x5",
  x: 355,
  y: 230,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle7x6 = new Kinetic.Circle({
  id: "7x6",
  x: 355,
  y: 270,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle7x7 = new Kinetic.Circle({
  id: "7x7",
  x: 355,
  y: 310,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle7x8 = new Kinetic.Circle({
  id: "7x8",
  x: 355,
  y: 350,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle7x9 = new Kinetic.Circle({
  id: "7x9",
  x: 355,
  y: 390,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle7x10 = new Kinetic.Circle({
  id: "7x10",
  x: 355,
  y: 430,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle7x11 = new Kinetic.Circle({
  id: "7x11",
  x: 355,
  y: 470,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle7x12 = new Kinetic.Circle({
  id: "7x12",
  x: 355,
  y: 510,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle7x13 = new Kinetic.Circle({
  id: "7x13",
  x: 355,
  y: 550,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle7x14 = new Kinetic.Circle({
  id: "7x14",
  x: 355,
  y: 590,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle7x15 = new Kinetic.Circle({
  id: "7x15",
  x: 355,
  y: 630,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle7x16 = new Kinetic.Circle({
  id: "7x16",
  x: 355,
  y: 670,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle8x1 = new Kinetic.Circle({
  id: "8x1",
  x: 455,
  y: 70,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle8x2 = new Kinetic.Circle({
  id: "8x2",
  x: 455,
  y: 110,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle8x3 = new Kinetic.Circle({
  id: "8x3",
  x: 455,
  y: 150,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var circle8x4 = new Kinetic.Circle({
  id: "8x4",
  x: 455,
  y: 190,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle8x5 = new Kinetic.Circle({
  id: "8x5",
  x: 455,
  y: 230,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle8x6 = new Kinetic.Circle({
  id: "8x6",
  x: 455,
  y: 270,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle8x7 = new Kinetic.Circle({
  id: "8x7",
  x: 455,
  y: 310,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle8x8 = new Kinetic.Circle({
  id: "8x8",
  x: 455,
  y: 350,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle8x9 = new Kinetic.Circle({
  id: "8x9",
  x: 455,
  y: 390,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle8x10 = new Kinetic.Circle({
  id: "8x10",
  x: 455,
  y: 430,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle8x11 = new Kinetic.Circle({
  id: "8x11",
  x: 455,
  y: 470,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle8x12 = new Kinetic.Circle({
  id: "8x12",
  x: 455,
  y: 510,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle8x13 = new Kinetic.Circle({
  id: "8x13",
  x: 455,
  y: 550,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle8x14 = new Kinetic.Circle({
  id: "8x14",
  x: 455,
  y: 590,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle8x15 = new Kinetic.Circle({
  id: "8x15",
  x: 455,
  y: 630,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});
var circle8x16 = new Kinetic.Circle({
  id: "8x16",
  x: 455,
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
var impliesR = new Kinetic.Text({
  x: 240,
  y: 15,
  text: '(P -> Q) -> R',
  fontSize: 15,
  fontFamily: 'Calibri',
  fill: 'black'
});
var notQandS = new Kinetic.Text({
  x: 330,
  y: 15,
  text: '~Q * S',
  fontSize: 15,
  fontFamily: 'Calibri',
  fill: 'black'
});
var fullStatement = new Kinetic.Text({
  x: 385,
  y: 15,
  text: '((P -> Q)->R) # (~Q * S)',
  fontSize: 15,
  fontFamily: 'Calibri',
  fill: 'black'
});