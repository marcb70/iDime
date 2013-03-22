var andImage = new Image();
var orImage = new Image();
var notImage = new Image();

andImage.src = 'images/And.png';
andImage.onload = function(){
var AND = new Kinetic.Image({
x: 210,
y: 175,
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
x: 425,
y: 180,
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
x: 225,
y: 350,
height: 100,
width: 125,
image: notImage
});
layer.add(NOT);
layer.draw();
};

var P = new Kinetic.Circle({
  x: 100,
  y: 100,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var Q = new Kinetic.Circle({
  x: 100,
  y: 200,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var R = new Kinetic.Circle({
  x: 100,
  y: 300,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var S = new Kinetic.Circle({
  x: 100,
  y: 400,
  radius: 15,
  fill: '',
  stroke: 'black',
  strokeWidth: 2
});

var StoNot = new Kinetic.Line({
  points: [115, 400, 225, 400],
  stroke: 'black',
  strokeWidth: 5
});

var RtoAnd = new Kinetic.Line({
  points: [115, 300, 225, 300],
  stroke: 'black',
  strokeWidth: 5
});

var QtoAnd = new Kinetic.Line({
  points: [115, 200, 225, 200],
  stroke: 'black',
  strokeWidth: 5
});

var PtoOr = new Kinetic.Line({
  points: [115, 100, 400, 100, 400, 225, 460, 225],
  stroke: 'red',
  strokeWidth: 5
});

var AndtoOr = new Kinetic.Line({
  points: [355, 250, 460, 250],
  stroke: 'red',
  strokeWidth: 5
});

var NottoOr = new Kinetic.Line({
  points: [350, 400, 400, 400, 400, 275, 460, 275],
  stroke: 'red',
  strokeWidth: 5
});

var outputIndicator = new Kinetic.Circle({
  x: 600,
  y: 250,
  radius: 15,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 2
});