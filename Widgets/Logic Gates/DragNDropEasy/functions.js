function resetXY(){
	notBox.setPosition(notX, notY);
	andBox.setPosition(andX, andY);
	orBox.setPosition(orX, orY);
	layer.draw();
}
function checkDrop(object)
{
	if((object.getPosition().x >= 190 && object.getPosition().x <= 290) && (object.getPosition().y >= 110 && object.getPosition().y <= 210))
	{
	  console.log("drop1 dropped image: " + drop1.getFillPatternImage());

	  doDrop(object, drop1);
	}
	else if((object.getPosition().x >= 190 && object.getPosition().x <= 290) && (object.getPosition().y >= 275 && object.getPosition().y <= 375))
	{
	  console.log("drop2 dropped image: " + drop2.getFillPatternImage());
	  doDrop(object, drop2);
	}
	else if((object.getPosition().x >= 370 && object.getPosition().x <= 470) && (object.getPosition().y >= 200&& object.getPosition().y <= 300))
	{
	  console.log("drop3 dropped image: " + drop3.getFillPatternImage());
	  doDrop(object, drop3);
	}
	else if((object.getPosition().x >= 550 && object.getPosition().x <= 650) && (object.getPosition().y >= 200 && object.getPosition().y <= 300))
	{
	  console.log("drop4 dropped image: " + drop4.getFillPatternImage());
	  doDrop(object, drop4);
	}
	else
	{
	  resetXY(object);  
	}
	layer.draw()

}

//handles dropping T/F buttons onto dropzones
function doDrop(object, dropZone)
{
	var x = dropZone.getPosition().x;
	var y = dropZone.getPosition().y;
	var image = object.getFillPatternImage();
	console.log("image: " + image);
	dropZone.setFillPatternImage(image);
	dropZone.setFillPatternRepeat('no-repeat');

	resetXY();
	layer.draw();
}
function clear(){
	drop1.setFillPatternImage("");
	drop2.setFillPatternImage("");
	drop3.setFillPatternImage("");
	drop4.setFillPatternImage("");
	resetXY();
	layer.draw();
}
function helpInfo(){
  alert("Hey there! Having trouble? \nDrag the gates you see on the top of the page into the drop box you think it belongs in to match the statement on the screen.\nTo drag, just place your finger over the gate, hold it and drag it across the screen.\nTo drop, lift your finger.");
}
function checkGates(){
	var error = 0;
	var errorList = new Array();
	if(drop1.getFillPatternImage()==null||drop2.getFillPatternImage()==null||drop3.getFillPatternImage()==null||drop1.getFillPatternImage()==null){
	errorList.push("Blank Spots - keep going!");
	error++;
	}
	else{
		//check if first two boxes are and or or.
		if(drop1.getFillPatternImage()!=images.andImage){
		  errorList.push("Drop zone 1 has the wrong gate! Check your work!");
		  error++;
		}
		if(drop2.getFillPatternImage()!=images.orImage){
		  errorList.push("Drop zone 2 has the wrong gate! Check your work!");
		  error++;
		}
		if(drop3.getFillPatternImage()!=images.notImage){
		  errorList.push("Drop zone 3 has the wrong gate! Check your work!");
		  error++;
		}
		if(drop4.getFillPatternImage()!=images.orImage){
		  errorList.push("Drop zone 4 has the wrong gate! Check your work!");
		  error++;
		}
	}
	if(error == 0){
		alert("Congratulations! You've found the perfect combination!");
	}
	else{
		var tempString = "There are errors: ";

		for(var i = 0; i < errorList.length; i++){
			tempString += "\n-" + errorList[i];
		}
		tempString +="\nTry again";
		alert(tempString);

	}
}