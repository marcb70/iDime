function lg3Call(){
	var stage = new Kinetic.Stage({
		container: 'lg3',
		width: window.innerWidth/2,
		height: window.innerHeight,
		draggable: true
	});
	//general layer
	var layer = new Kinetic.Layer();
	var NorImage = new Image();
	var AndImage = new Image();
	var OrImage = new Image();

	OrImage.src = 'images/Or.png';
	OrImage.onload = function(){
	  var OR = new Kinetic.Image({
	    x: 500,
	    y: 200,
	    image: OrImage
	  });
	  layer.add(OR);
	  layer.draw();
	};

	NorImage.src = 'images/NOR.png';
	NorImage.onload = function(){
	  var NOR = new Kinetic.Image({
	    x: 210,
	    y: 65,
	    image: NorImage
	  });
	  layer.add(NOR);
	  layer.draw();
	};

	AndImage.src = 'images/And.png';
	AndImage.onload = function(){
	  var AND = new Kinetic.Image({
	    x: 210,
	    y: 280,
	    image: AndImage
	  });
	  layer.add(AND);
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
	  y: 150,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var R = new Kinetic.Circle({
	  x: 100,
	  y: 350,
	  radius: 15,
	  fill: '',
	  stroke: 'black',
	  strokeWidth: 2
	});

	var PtoNor = new Kinetic.Line({
	  points: [115, 100, 250, 100],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var QtoNor = new Kinetic.Line({
	  points: [115, 150, 250, 150],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var RtoAnd = new Kinetic.Line({
	  points: [115, 350, 223, 350],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var QtoAnd = new Kinetic.Line({
	  points: [175, 150, 175, 315, 223, 315],
	  stroke: 'black',
	  strokeWidth: 5
	});

	var NortoOr = new Kinetic.Line({
	  points: [350, 130, 475, 130, 475, 230, 528, 230],
	  stroke: 'red',
	  strokeWidth: 5
	});

	var AndtoOr = new Kinetic.Line({
	  points: [300, 330, 475, 330, 475, 265, 528, 265],
	  stroke: 'red',
	  strokeWidth: 5
	});

	var outputIndicator = new Kinetic.Circle({
	  x: 650,
	  y: 250,
	  radius: 15,
	  fill: 'red',
	  stroke: 'black',
	  strokeWidth: 2
	});
	layer.add(P);
	layer.add(Q);
	layer.add(R);
	layer.add(PtoNor);
	layer.add(QtoNor);
	layer.add(RtoAnd);
	layer.add(QtoAnd);
	layer.add(NortoOr);
	layer.add(AndtoOr);
	layer.add(outputIndicator);
	stage.add(layer);
	//these change the colors of the clickable objects (inputs and answers generally)
	P.on("click tap", function(){
		lg3setColor(P);
	});
	Q.on("click tap", function(){
		lg3setColor(Q);
	});
	R.on("click tap", function(){
		lg3setColor(R);
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
	P.on("mouseout", function(){
	  document.body.style.cursor = "default";
	});
	Q.on("mouseout", function(){
	  document.body.style.cursor = "default";
	});
	R.on("mouseout", function(){
	  document.body.style.cursor = "default";
	});
	/*
	Sets the color of theobjects clicked, based on it's previous color.
	then drawns the layer (to actually update the color on the canvas (important!).

	As nearly all objects and parts of the widget use the colors of the objects to do their logic,
	we must then update all lines and outputs
	*/
	function lg3setColor(object)
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
		lg3updateIndicators();
		lg3updateOutput();
	}

	/*
	Updates the connecting lines between inputs/logic gates/outputs based on input
	*/
	function lg3updateIndicators()
	{
		var pColor = P.getFill();
		var qColor = Q.getFill();
		var rColor = R.getFill();
		
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
			QtoAnd.setStroke("green");
		}
		if(qColor == "red")
		{
			QtoNor.setStroke("red");
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
		if(qColor == "green" && rColor == "green")
		{
			AndtoOr.setStroke("green");
		}
		else if(pColor == "red" && qColor == "red")
		{
			NortoOr.setStroke("green");
		}
		else
		{
			NortoOr.setStroke("red");
			AndtoOr.setStroke("red");
		}
		layer.draw();
	}

	/*
	Updates output based on input
	*/
	function lg3updateOutput()
	{
		var pColor = P.getFill();
		var qColor = Q.getFill();
		var rColor = R.getFill();

		if(pColor == "red" && qColor == "red")
		{
			outputIndicator.setFill("green");
		}
		else if(qColor == "green" && rColor == "green")
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
var lg3html = '<div id = "lg3Main" class="modal hide fade" tabindex="-1" role="dialog" aria-hidden="true"> <!-- --> <div id="directions" class = "modal-header"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button> <h3 id="header">The statement (~(P + Q) + (Q * R)) is represented below.</h3> <h4>Tap or click on the first circles to see the output based on your input.</h4> </div> <!--The main modal body contains only the exercise.--> <div id="lg3" class = "modal-body"></div> <div id = "buttonDiv" class="modal-footer"> <!--This button allows the user to close the modal and return to reading the material. Work will not be saved.--> <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button> </div> </div>';
function writelg3(){
  $('#widgethtml').html(lg3html);
  lg3Call();

  $('#lg3Main').css({
	   width: 'auto',//sets width to auto to wrap the size of modal-body
	   'margin-left': function () {//creates function to center modal on page. 
	       return -($(this).width() / 2);
	    }
	});
}