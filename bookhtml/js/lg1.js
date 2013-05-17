function lg1Call(){
	var stage = new Kinetic.Stage({
	  container: 'lg1',
	  width: window.innerWidth/2,
	  height: window.innerHeight/2,
	  draggable: true
	});
	//general layer
	var layer = new Kinetic.Layer();
	var notImage = new Image();
	var orImage = new Image();
	var andImage = new Image();

	//source of images
	notImage.src = 'images/Not.png';
	notImage.onload = function() {
	  var NOT = new Kinetic.Image({
	    x: 175,
	    y: 50,
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
	    x: 400,
	    y: 150,
	    image: andImage,
	    width: 106,
	    height: 118
	  });
	layer.add(AND);
	layer.draw();
	};


	var P = new Kinetic.Circle({
	  x: 125,
	  y: 110,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var Q = new Kinetic.Circle({
	  x: 125,
	  y: 275,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var outputIndicator = new Kinetic.Circle({
	  x: 565,
	  y: 210,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var PtoNot = new Kinetic.Line({
	  points: [140, 110, 180, 110],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var QtoAnd = new Kinetic.Line({
	  points: [140, 275, 275, 275, 275, 225, 410, 225],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var NottoAnd = new Kinetic.Line({
	  points: [275, 110, 350, 110, 350, 200, 410, 200],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var AndtoOutput = new Kinetic.Line({
	  points: [505, 210, 550, 210],
	  stroke: 'black',
	  strokeWidth: 5
	});  
	layer.add(PtoNot);
	layer.add(QtoAnd);
	layer.add(NottoAnd);
	layer.add(AndtoOutput);
	layer.add(P);
	layer.add(Q);
	layer.add(outputIndicator);
	stage.add(layer);
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
	P.on("click tap", function(){
	  lg1setColor(P);
	});
	Q.on("click tap", function(){
	  lg1setColor(Q);
	});
	/*
	Sets the color of the objects clicked, based on it's previous color.
	then drawns the layer (to actually update the color on the canvas (important!).

	As nearly all objects and parts of the widget use the colors of the objects to do their logic,
	we must then update all lines and outputs
	*/
	function lg1setColor(object)
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
		lg1updateIndicators();
		lg1updateOutput();
	}

	/*
	Updates the connecting lines between inputs/logic gates/outputs based on input
	*/
	function lg1updateIndicators()
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
	function lg1updateOutput()
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
var lg1html = '<div id = "lg1Main" class="modal hide fade" tabindex="-1" role="dialog" aria-hidden="true"> <!-- --> <div id="directions" class = "modal-header"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button> <h3 id="header">The statement (~P * Q) is represented below.</h3> <h4>Tap or click on the first circles to see the output based on your input.</h4> </div> <!--The main modal body contains only the exercise.--> <div id="lg1" class = "modal-body"></div> <div id = "buttonDiv" class="modal-footer"> <!--This button allows the user to close the modal and return to reading the material. Work will not be saved.--> <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button> </div> </div>';
function writelg1(){
  $('#widgethtml').html(lg1html);
  lg1Call();

  $('#lg1Main').css({
	   width: 'auto',//sets width to auto to wrap the size of modal-body
	   'margin-left': function () {//creates function to center modal on page. 
	       return -($(this).width() / 2);
	    }
	});
}