function lg2Call(){
	var stage = new Kinetic.Stage({
		container: 'lg2',
		width: window.innerWidth/2,
		height: window.innerHeight,
		draggable: true
	});
	var layer = new Kinetic.Layer();
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
	layer.add(P);
	layer.add(Q);
	layer.add(R);
	layer.add(S);
	layer.add(StoNot);
	layer.add(RtoAnd);
	layer.add(QtoAnd);
	layer.add(PtoOr);
	layer.add(AndtoOr);
	layer.add(NottoOr);
	layer.add(outputIndicator);
	stage.add(layer);
	//event handlers
	//these change the colors of the clickable objects (inputs and answers generally)
	P.on("click tap", function(){
		lg2setColor(P);
	});

	Q.on("click tap", function(){
		lg2setColor(Q);
	});

	R.on("click tap", function(){
		lg2setColor(R);
	});

	S.on("click tap", function(){
		lg2setColor(S);
	});

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
	});/*
	Sets the color of theobjects clicked, based on it's previous color.
	then drawns the layer (to actually update the color on the canvas (important!).

	As nearly all objects and parts of the widget use the colors of the objects to do their logic,
	we must then update all lines and outputs
	*/
	function lg2setColor(object)
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
		layer.draw();
		lg2updateIndicators();
		lg2updateOutput();
	}

	/*
	Updates the connecting lines between inputs/logic gates/outputs based on input
	*/
	function lg2updateIndicators()
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
	function lg2updateOutput()
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
var lg2html = '<div id = "lg2Main" class="modal hide fade" tabindex="-1" role="dialog" aria-hidden="true"> <!-- --> <div id="directions" class = "modal-header"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button> <h3 id="header">The statement ((P + ~S) + (Q * R)) is represented below.</h3> <h4>Tap or click on the first circles to see the output based on your input.</h4> </div> <!--The main modal body contains only the exercise.--> <div id="lg2" class = "modal-body"></div> <div id = "buttonDiv" class="modal-footer"> <!--This button allows the user to close the modal and return to reading the material. Work will not be saved.--> <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button> </div> </div>';
function writelg2(){
  $('#widgethtml').html(lg2html);
  lg2Call();

  $('#lg2Main').css({
	   width: 'auto',//sets width to auto to wrap the size of modal-body
	   'margin-left': function () {//creates function to center modal on page. 
	       return -($(this).width() / 2);
	    }
	});
}