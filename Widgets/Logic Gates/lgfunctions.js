function checkDrop(object)
{
	var mousePos = stage.getMousePosition();

	if((mousePos.x >= 63 && mousePos.x <= 163) && (mousePos.y >= 110 && mousePos.y <= 210))
	{
		doDrop(object, drop1);
	}
	else if((mousePos.x >= 375 && mousePos.x <= 425) && (mousePos.y >= 175 && mousePos.y <= 225))
	{
		doDrop(object, drop2);
	}
	else if((mousePos.x >= 375 && mousePos.x <= 425) && (mousePos.y >= 175 && mousePos.y <= 225))
	{
		doDrop(object, drop3);
	}
	else if((mousePos.x >= 375 && mousePos.x <= 425) && (mousePos.y >= 175 && mousePos.y <= 225))
	{
		doDrop(object, drop4);
	}
	else
	{
		resetXY(object);	
	}
}

//handles dropping T/F buttons onto dropzones
function doDrop(object, dropZone)
{
	var x = dropZone.getPosition().x;
	var y = dropZone.getPosition().y;
	
/*	if(color == "green")
	{
		if(x == leftDrop.x)
		{
			alert("Hi");
		}
		if(x == rightDrop.x)
		{
			alert("right");
		}
	}*/

	resetXY();
	layer.draw();
}
