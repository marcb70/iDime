circleArray = new Array();
Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}

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
	addToArray(object);
	layer.draw();
	tableShapes.draw();
}
function addToArray(object){
	if(!circleArray.contains(object)){
			circleArray.push(object);
	}
	
}

function updateTable()
{
	var errorString = new Array();
	var errors = 0;

	if(circleArray.length<4){
		errors++;
	}
	else{

		for(var i = 0; i < circleArray.length; i++){
			var color = circleArray[i].getFill();
			var object = circleArray[i].getId();
			console.log("for loop 1 Object id and color: " + object + ", " + color);
			if(circleArray.length<4){
				errors++;
			}
			else{
				
				if(!((object == "3x1" && color == "red")||(object == "3x2" && color == "green")
		 			||(object == "3x3" && color == "green") || (object == "3x4" && color=="red"))){

					console.log("If statement one: " + color + ", " + object);
					var temp = "The P + Q column is wrong.";
					if(!errorString.contains(temp))
					{
						errorString.push(temp);
					}
					errors++;
				}
			}
		}
	}
		
	if(errors==0){
		alert("Congrats! You completed the truth table correctly.");
	}
	else{
		var tempString = "There are errors: ";
		if(circleArray.length<4)
		{
			var tempString2 = "The table is incomplete. Keep going!";
			if(!errorString.contains(tempString2))
			{
				errorString.push(tempString2);
			}
		}

        for(var i = 0; i < errorString.length; i++){
          tempString += "\n-" + errorString[i];
        }
        tempString +="\nTry again";
        alert(tempString);
	}

}