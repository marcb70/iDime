function resetXY()
{
	notImage.setPosition(notX, notY);
	andImage.setPosition(andX, andY);
	orImage.setPosition(orX, orY);
	layer.draw();
}
function checkDrop(object)
{
	var mousePos = stage.getMousePosition();

	if((mousePos.x >= 63 && mousePos.x <= 163) && (mousePos.y >= 110 && mousePos.y <= 210))
	{
		console.log("drop1");
		doDrop(object, drop1);
	}
	else if((mousePos.x >= 63 && mousePos.x <= 163) && (mousePos.y >= 275 && mousePos.y <= 375))
	{
		console.log("drop2");
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
	var image = object.getFillPatternImage();
	dropzone.setFillPatternImage(image);
	
	if(image == notImage)
	{
		
	}

	resetXY();
	layer.draw();
}
function checkGates(){
	if{drop1.getFillPatternImage()==null||drop2.getFillPatternImage()==null||drop3.getFillPatternImage()==null||drop1.getFillPatternImage()==null}{
		alert("One or more of your drop boxes are blank. Please make sure
			all of them are filled before you check your work.");
	}
	else{
		if(drop1.getFillPatternImage()==andImage){
			if(!drop2.getFillPatternImage()==orImage){
				alert("Wrong! Recheck your work!");
			}
		}
		else if (drop1.getFillPatternImage==orImage) {
			if{!drop2.getFillPatternImage == andImage}{
				alert("Wrong! Recheck your work!");
			}
		}
		else if(drop1.getFillPatternImage()!=andImage{

		}
	}
}
