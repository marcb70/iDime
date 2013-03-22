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
	layer.draw();
}

function updateOutput()
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