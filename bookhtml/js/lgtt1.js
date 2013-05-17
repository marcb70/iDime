function lgtt1Call(){
	var stage = new Kinetic.Stage({
		container: 'lgtt1',
		width: window.innerWidth,
		height: window.innerHeight,
		//draggable: true
	});
	//gerneral layer
	var layer = new Kinetic.Layer();
	//testing adding shapes to a group and adding that to a layer
	var group = new Kinetic.Layer();
	//layer for objects on the tables
	var tableShapes = new Kinetic.Layer();
	//layer for checkmarks that will be drawn when "check" button is clicked
	var answers = new Kinetic.Layer();



	layer.add(tableQ);var notImage = new Image();
	var orImage = new Image();
	var andImage = new Image();

	//source of images
	notImage.src = 'images/Not.png';
	notImage.onload = function() {
	  var NOT = new Kinetic.Image({
	    x: 375,
	    y: 390,
	    image: notImage,
	    width: 106,
	    height: 118
	  });
	layer.add(NOT);
	layer.draw();
	};

	andImage.src = 'images/And.png';
	andImage.onload = function() {
	  var AND = new Kinetic.Image({
	    x: 650,
	    y: 490,
	    image: andImage,
	    width: 106,
	    height: 118
	  });
	layer.add(AND);
	layer.draw();
	};


	var P = new Kinetic.Circle({
	  x: 285,
	  y: 450,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var Q = new Kinetic.Circle({
	  x: 285,
	  y: 625,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var outputIndicator = new Kinetic.Circle({
	  x: 900,
	  y: 550,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var PtoNot = new Kinetic.Line({
	  points: [300, 450, 375, 450],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var QtoAnd = new Kinetic.Line({
	  points: [300, 625, 550, 625, 550, 575, 660, 575],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var NottoAnd = new Kinetic.Line({
	  points: [475, 450, 550, 450, 550, 525, 660, 525],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var AndtoOutput = new Kinetic.Line({
	  points: [750, 550, 885, 550],
	  stroke: 'red',
	  strokeWidth: 5
	});

	var topLine = new Kinetic.Line({
	  points: [50, 50, 275, 50],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var rightLine = new Kinetic.Line({
	  points: [275, 50, 275, 250],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var bottomLine = new Kinetic.Line({
	  points: [50, 250, 275, 250],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var leftLine = new Kinetic.Line({
	  points: [50, 50, 50, 250],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var column1 = new Kinetic.Line({
	  points: [125, 50, 125, 250],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var column2 = new Kinetic.Line({
	  points: [200, 50, 200, 250],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var row0 = new Kinetic.Line({
	  points: [50, 100, 275, 100],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var row1 = new Kinetic.Line({
	  points: [50, 150, 275, 150],
	  strokeWidth: 'black',
	  strokeWidth: 5
	});

	var row2 = new Kinetic.Line({
	  points: [50, 200, 275, 200],
	  strokeWidth: 'black',
	  strokeWidth: 5
	});

	var circle1x1 = new Kinetic.Circle({
	  x: 85,
	  y: 75,
	  radius: 20,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 4
	});

	var circle1x2 = new Kinetic.Circle({
	  x: 85,
	  y: 125,
	  radius: 20,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 4
	});

	var circle1x3 = new Kinetic.Circle({
	  x: 85,
	  y: 175,
	  radius: 20,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 4
	});

	var circle1x4 = new Kinetic.Circle({
	  x: 85,
	  y: 225,
	  radius: 20,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 4
	});

	var circle2x1 = new Kinetic.Circle({
	  x: 160,
	  y: 75,
	  radius: 20,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 4
	});

	var circle2x2 = new Kinetic.Circle({
	  x: 160,
	  y: 125,
	  radius: 20,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 4
	});

	var circle2x3 = new Kinetic.Circle({
	  x: 160,
	  y: 175,
	  radius: 20,
	  fill: 'green',
	  stroke: 'black',
	  strokeWidth: 4
	});

	var circle2x4 = new Kinetic.Circle({
	  x: 160,
	  y: 225,
	  radius: 20,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 4
	});

	var circle3x1 = new Kinetic.Circle({
	  id: "3x1",
	  x: 235,
	  y: 75,
	  radius: 20,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 4
	});

	var circle3x2 = new Kinetic.Circle({
	  id: "3x2",
	  x: 235,
	  y: 125,
	  radius: 20,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 4
	});

	var circle3x3 = new Kinetic.Circle({
	  id: "3x3",
	  x: 235,
	  y: 175,
	  radius: 20,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 4
	});

	var circle3x4 = new Kinetic.Circle({
	  id: "3x4",
	  x: 235,
	  y: 225,
	  radius: 20,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 4
	});

	var check1 = new Kinetic.Line({
	  points: [300, 75, 315, 95, 330, 55],
	  stroke: 'green',
	  strokeWidth: 3,
	  visible: false
	});

	var check2 = new Kinetic.Line({
	  points: [300, 125, 315, 145, 330, 105],
	  stroke: 'green',
	  strokeWidth: 3,
	  visible: false
	});

	var check3 = new Kinetic.Line({
	  points: [300, 175, 315, 195, 330, 155],
	  stroke: 'green',
	  strokeWidth: 3,
	  visible: false
	});

	var check4 = new Kinetic.Line({
	  points: [300, 225, 315, 245, 330, 205],
	  stroke: 'green',
	  strokeWidth: 3,
	  visible: false
	});

	var textP = new Kinetic.Text({
	  x: 250,
	  y: 435,
	  text: 'P',
	  fontSize: 30,
	  fontFamily: 'Calibri',
	  fill: 'black'
	});

	var textQ = new Kinetic.Text({
	  x: 245,
	  y: 610,
	  text: 'Q',
	  fontSize: 30,
	  fontFamily: 'Calibri',
	  fill: 'black'
	});

	var tableP = new Kinetic.Text({
	  x: 75,
	  y: 15,
	  text: 'P',
	  fontSize: 30,
	  fontFamily: 'Calibri',
	  fill: 'black'
	});

	var tableQ = new Kinetic.Text({
	  x: 150,
	  y: 15,
	  text: 'Q',
	  fontSize: 30,
	  fontFamily: 'Calibri',
	  fill: 'black'
	});

	var tableOutput = new Kinetic.Text({
	  x: 200,
	  y: 15,
	  text: 'Result',
	  fontSize: 30,
	  fontFamily: 'Calibri',
	  fill: 'black'
	});
	layer.add(tableOutput);
	layer.add(textP);
	layer.add(textQ);
	layer.add(tableP);
	tableShapes.add(circle1x1);
	tableShapes.add(circle1x2);
	tableShapes.add(circle1x3);
	tableShapes.add(circle1x4);
	tableShapes.add(circle2x1);
	tableShapes.add(circle2x2);
	tableShapes.add(circle2x3);
	tableShapes.add(circle2x4);
	tableShapes.add(circle3x1);
	tableShapes.add(circle3x2);
	tableShapes.add(circle3x3);
	tableShapes.add(circle3x4);
	answers.add(check1);
	answers.add(check2);
	answers.add(check3);
	answers.add(check4);
	group.add(rightLine);
	group.add(topLine);
	group.add(bottomLine);
	group.add(leftLine);
	group.add(column1);
	group.add(column2);
	group.add(row0);
	group.add(row1);
	group.add(row2);
	layer.add(group);
	layer.add(PtoNot);
	layer.add(QtoAnd);
	layer.add(NottoAnd);
	layer.add(AndtoOutput);
	layer.add(P);
	layer.add(Q);
	layer.add(outputIndicator);
	stage.add(layer);
	stage.add(tableShapes);
	stage.add(answers);
	// These change the style of the cursor when you mouse over the object
	P.on("mouseover", function(){
	  document.body.style.cursor = "pointer";
	});
	P.on("mouseout", function(){
	  document.body.style.cursor = "default";
	});

	Q.on("mouseover", function(){
	  document.body.style.cursor = "pointer";
	});
	Q.on("mouseout", function(){
	  document.body.style.cursor = "default";
	});


	//these change the colors of the clickable objects (inputs and answers generally)
	Q.on("click tap", function(){
	  lgtt1setColor(Q);
	});
	P.on("click tap", function(){
	  lgtt1setColor(P);
	});
	circle3x1.on("click tap", function(){
	  lgtt1setColor(circle3x1);
	});
	circle3x2.on("click tap", function(){
	  lgtt1setColor(circle3x2);
	});
	circle3x3.on("click tap", function(){
	  lgtt1setColor(circle3x3);
	});
	circle3x4.on("click tap", function(){
	  lgtt1setColor(circle3x4);
	});
	var check = new Array();
	/*
	Sets the color of theobjects clicked, based on it's previous color.
	then drawns the layer (to actually update the color on the canvas (important!).

	As nearly all objects and parts of the widget use the colors of the objects to do their logic,
	we must then update all lines and outputs
	*/
	function lgtt1setColor(object)
	{

		var color = object.getFill();
		switch(color)
		{
			case "":
			color = "green";
			break;
			case " ":
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
		layer.draw();
		tableShapes.draw();
		lgtt1updateIndicators();
		lgtt1updateOutput();
		check.push(object);
	}


	/*
	Updates the checkmarks that indicate if you got the correct answer or not. Objects being pulled are the circles in column 3.
	Does NOT make them visible (that's what lgtt1checkTable function is for. You click the check button and then they are drawn
	*/
	function lgtt1checkTable()
	{

		for(var i = 0; i < check.length; i++){
			var objectId = check[i].getId();
			var color = check[i].getFill();
			if(objectId == "3x1")
			{
				switch(color)
				{
					case "green":
					check1.hide();
					break;
					case "red":
					check1.show();
					break;
				}
			}
			else if(objectId == "3x2")
			{
				switch(color)
				{
					case "green":
					check2.hide();
					break;
					case "red":
					check2.show();
					break;
				}
			}
			else if(objectId == "3x3")
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
			else if(objectId == "3x4")
			{
				switch(color)
				{
					case "green":
					check4.hide();
					break;
					case "red":
					check4.show();
					break;
				}
			}
		}
		answers.draw();
		
	}

	/*
	Updates the connecting lines between inputs/logic gates/outputs based on input
	*/
	function lgtt1updateIndicators()
	{
		var pColor = P.getFill();
		var qColor = Q.getFill();

		if(pColor == "green")
		{
			PtoNot.setStroke("green");
			NottoAnd.setStroke("red");
		}
		if(pColor == "red")
		{
			PtoNot.setStroke("red");
			NottoAnd.setStroke("green");
		}
		if(qColor == "green")
		{
			QtoAnd.setStroke("green");
		}
		if(qColor == "red")
		{
			QtoAnd.setStroke("red");
		}
		layer.draw();
	}

	/*
	Updates output based on input
	*/
	function lgtt1updateOutput()
	{
		var pColor = P.getFill();
		var qColor = Q.getFill();

		if(pColor == "green" && qColor == "green")
		{
			AndtoOutput.setStroke("red");
			outputIndicator.setFill("red");
		}
		else if(pColor == "green" && qColor == "red")
		{
			AndtoOutput.setStroke("red");
			outputIndicator.setFill("red");
		}
		else if(pColor == "red" && qColor == "green")
		{
			AndtoOutput.setStroke("green");
			outputIndicator.setFill("green");
		}
		else if(pColor == "red" && qColor == "red")
		{
			AndtoOutput.setStroke("red");
			outputIndicator.setFill("red");
		}
		layer.draw();
	}
}
var lgtt1html = '<div id = "lgtt1Main" class="modal hide fade" tabindex="-1" role="dialog" aria-hidden="true"> <!-- --> <div id="directions" class = "modal-header"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button> <h3 id="header">Fill in the output table by using the logic gates to check your answer.</h3> </div> <!--The main modal body contains only the exercise.--> <div id="lgtt1" class = "modal-body"></div> <div id = "buttonDiv" class="modal-footer"> <!--This button allows the user to close the modal and return to reading the material. Work will not be saved.--> <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button> <!--This button checks the user\'s work. Calls "updateTable" function. lgtt1checkTable() is found in functions.js. --> <input type = "submit" class="btn btn-primary" value = "Check it!" id = "lgtt1check" onclick = "lgtt1checkTable();" /> </div> </div>';
function writelgtt1(){
  $('#widgethtml').html(lgtt1html);
  lgtt1Call();

  $('#lgtt1Main').css({
	   width: 'auto',//sets width to auto to wrap the size of modal-body
	   'margin-left': function () {//creates function to center modal on page. 
	       return -($(this).width() / 2);
	    }
	});
}