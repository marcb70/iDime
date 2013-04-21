function setColor(object)
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
	updateIndicators();
	updateOutput();
	updateTable(object);
	layer.draw();
	tableShapes.draw();
	answerLayer.draw();
}

function updateTable(object)
{
	var objectId = object.getId();
	var color = object.getFill();

	if(objectId == "3x1")
	{
		switch(color)
		{
			case "green":
			check1.setVisible(false);
			break;
			case "red":
			check1.setVisible(true);
			break;
		}
	}
	if(objectId == "3x2")
	{
		switch(color)
		{
			case "green":
			check2.setVisible(true);
			break;
			case "red":
			check2.setVisible(false);
			break;
		}
	}
	if(objectId == "3x3")
	{
		switch(color)
		{
			case "green":
			check3.setVisible(false);
			break;
			case "red":
			check3.setVisible(true);
			break;
		}
	}
	if(objectId == "3x4")
	{
		switch(color)
		{
			case "green":
			check4.setVisible(true);
			break;
			case "red":
			check4.setVisible(false);
			break;
		}
	}
}
function updateIndicators()
{
	var pColor = P.getFill();
	var qColor = Q.getFill();
	var color;

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

function updateOutput()
{
	var pColor = P.getFill();
	var qColor = Q.getFill();
}