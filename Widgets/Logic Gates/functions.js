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
	layer.draw();
	updateIndicators();
	updateOutput();
}

function updateIndicators()
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

function updateOutput()
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