function lgtt3Call(){
	var stage = new Kinetic.Stage({
		container: 'lgtt3',
		width: window.innerWidth,
		height: window.innerHeight,
		//draggable: true
	});
	//general layer
	var layer = new Kinetic.Layer();
	//layer for objects on table
	var tableShapes = new Kinetic.Layer();
	//layer for checkmarks that will be drawn when "check" button is clicked
	var answerLayer = new Kinetic.Layer();
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
	layer.add(P);
	layer.add(Q);
	layer.add(PtoNor);
	layer.add(QtoNor);
	layer.add(QtoNot);
	layer.add(NortoOr);
	layer.add(NottoOr);
	layer.add(outputIndicator);
	tableShapes.add(topLine);
	tableShapes.add(rightLine);
	tableShapes.add(leftLine);
	tableShapes.add(bottomLine);
	tableShapes.add(column1);
	tableShapes.add(column2);
	tableShapes.add(row1);
	tableShapes.add(row2);
	tableShapes.add(row3);
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
	tableShapes.add(tableP);
	tableShapes.add(tableQ);
	tableShapes.add(tableOutput);
	answerLayer.add(check1);
	answerLayer.add(check2);
	answerLayer.add(check3);
	answerLayer.add(check4);
	stage.add(tableShapes);
	stage.add(answerLayer);
	stage.add(layer);
	P.on("click tap", function(){
		lgtt3setColor(P);
	});

	Q.on("click tap", function(){
		lgtt3setColor(Q);
	});

	circle3x1.on("click tap", function(){
		lgtt3setColor(circle3x1);
	})

	circle3x2.on("click tap", function(){
		lgtt3setColor(circle3x2);
	})

	circle3x3.on("click tap", function(){
		lgtt3setColor(circle3x3);
	})

	circle3x4.on("click tap", function(){
		lgtt3setColor(circle3x4);
	})
	var check = new Array();
	/*
	Sets the color of theobjects clicked, based on it's previous color.
	then drawns the layer (to actually update the color on the canvas (important!).

	As nearly all objects and parts of the widget use the colors of the objects to do their logic,
	we must then update all lines and outputs
	*/
	function lgtt3setColor(object)
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
		lggt3updateIndicators();
		lgtt3updateOutput();
		check.push(object);
		layer.draw();
		tableShapes.draw();
	}

	/*
	Updates the checkmarks that indicate if you got the correct answer or not. Objects being pulled are the circles in column 3.
	Does NOT make them visible (that's what checkTable function is for. You click the check button and then they are drawn
	*/
	function lgtt3checkTable()
	{
		for(var i = 0; i < check.length; i++){
		var objectId = object.getId();
		var color = object.getFill();

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
		if(objectId == "3x2")
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
		if(objectId == "3x3")
		{
			switch(color)
			{
				case "green":
				check3.hide();
				break;
				case "red":
				check3.show();
				break;
			}
		}
		if(objectId == "3x4")
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
	}
		answerLayer.draw();

	}

	/*
	Updates the connecting lines between inputs/logic gates/outputs based on input
	*/
	function lggt3updateIndicators()
	{
		var pColor = P.getFill();
		var qColor = Q.getFill();

		if(pColor == "green")
		{
			PtoNor.setStroke("green");
		}
		if(pColor == "red")
		{
			PtoNor.setStroke("red");
		}
		if(qColor == "green")
		{
			QtoNor.setStroke("green");
			QtoNot.setStroke("green");
			NottoOr.setStroke("red");
		}
		if(qColor == "red")
		{
			QtoNor.setStroke("red");
			QtoNot.setStroke("red");
			NottoOr.setStroke("green");
			outputIndicator.setFill("green");
		}
		if(pColor == "red" && qColor == "red")
		{
			NortoOr.setStroke("green");
			outputIndicator.setFill("green");
		}
		else
		{
			NortoOr.setStroke("red");
		}
	}

	/*
	Updates output based on input
	*/
	function lgtt3updateOutput()
	{
		var pColor = P.getFill();
		var qColor = Q.getFill();
	}
}
var lgtt3html = '<div id = "lgtt3Main" class="modal hide fade" tabindex="-1" role="dialog" aria-hidden="true"> <!-- --> <div id="directions" class = "modal-header"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button> <h3 id="header">Fill in the output table by using the logic gates to check your answer.</h3> </div> <!--The main modal body contains only the exercise.--> <div id="lgtt3" class = "modal-body"></div> <div id = "buttonDiv" class="modal-footer"> <!--This button allows the user to close the modal and return to reading the material. Work will not be saved.--> <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button> <!--This button checks the user\'s work. Calls "lgtt3updateTable" function. lgtt3checkTable() is found in functions.js. --> <input type = "submit" class="btn btn-primary" value = "Check it!" id = "lgtt3check" onclick = "lgtt3checkTable();" /> </div> </div>';
function writelgtt3(){
  $('#widgethtml').html(lgtt3html);
  lgtt3Call();

  $('#lgtt3Main').css({
	   width: 'auto',//sets width to auto to wrap the size of modal-body
	   'margin-left': function () {//creates function to center modal on page. 
	       return -($(this).width() / 2);
	    }
	});
}