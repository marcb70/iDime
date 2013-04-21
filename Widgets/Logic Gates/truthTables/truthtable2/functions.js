var circleArray = new Array();
var circle4Array = new Array();
var circle5Array = new Array();
var circle6Array = new Array();
var trashArray = new Array();

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
	console.log("addToArray information: " + object.getFill() + ", " + object.getId());
	if(!circleArray.contains(object)){
			circleArray.push(object);
	}
	var objectId = object.getId();

	if(objectId=="4x1"||objectId=="4x2"||objectId=="4x3"||objectId=="4x4"||objectId=="4x5"||objectId=="4x6"||objectId=="4x7"||objectId=="4x8"){
		if(!circle4Array.contains(object)){
			console.log("pushing to circle4Array" + objectId + " " + object.getFill());
			circle4Array.push(object);
		}
	}
	else if(objectId=="5x1"||objectId=="5x2"||objectId=="5x3"||objectId=="5x4"||objectId=="5x5"||objectId=="5x6"||objectId=="5x7"||objectId=="5x8"){
		if(!circle5Array.contains(object)){
			console.log("pushing to circle5Array" + objectId + " " + object.getFill());
			circle5Array.push(object);
		}
	}
	else if(objectId=="6x1"||objectId=="6x2"||objectId=="6x3"||objectId=="6x4"||objectId=="6x5"||objectId=="6x6"||objectId=="6x7"||objectId=="6x8"){
		if(!circle6Array.contains(object)){
			console.log("pushing to circle6Array" + objectId + " " + object.getFill());
			circle6Array.push(object);
		}
	}
	else{
		console.log("pushing to trashArray" + objectId + " " + object.getFill());
		trashArray.push(object);
	}
	
}

function updateTable()
{
	var errorString = new Array();
	var errors = 0;

	if(circleArray.length<24){
		errors++;
	}
	else{

		for(var j=0; j<circle4Array.length; j++){
			var color1 = circle4Array[j].getFill();
			var object1 = circle4Array[j].getId();
			console.log("for loop 2 Object id and color: " + object1 + ", " + color1);
			if(circle4Array.length<8){
				errors++;
			}
			else{
				if(!((object1 == "4x1" && color1 == "green")||(object1 == "4x2" && color1 == "green")
		 			|| (object1 == "4x3" && color1 == "red") ||  (object1 == "4x4" && color1=="red")||
		 			(object1 == "4x5" && color1 == "green")||(object1 == "4x6" && color1 == "green")
		 			|| (object1 == "4x7" && color1 == "green") ||  (object1 == "4x8" && color1=="green"))){

					var temp1 = "The P -> Q column has errors.";
					if(!errorString.contains(temp1))
					{
						errorString.push(temp1);
					}
					errors++;

				}
			}
		}
		for(var k=0; k<circle5Array.length; k++){
			var color2 = circle5Array[k].getFill();
			var object2 = circle5Array[k].getId();
			console.log("for loop 3 Object id and color: " + object2 + ", " + color2);
			if(circle5Array.length<8){
				errors++;
			}
			else{
				if(!((object2 == "5x1" && color2 == "red")||(object2 == "5x2" && color2 == "red")
		 			||(object2 == "5x3" && color2 == "red") ||  (object2 == "5x4" && color2=="red")||
		 			(object2 == "5x5" && color2 == "green")||(object2 == "5x6" && color2 == "red")
		 			||(object2 == "5x7" && color2 == "green") ||  (object2 == "5x8" && color2=="red"))){

					var temp2="The P * Q column has errors.";
					if(!errorString.contains(temp2))
					{
						errorString.push(temp2);
					}
					errors++;
				}
			}
		}
		for(var l=0; l<circle6Array.length; l++){
			var color3 = circle6Array[l].getFill();
			var object3 = circle6Array[l].getId();
			console.log("for loop 3 Object id and color: " + object3 + ", " + color3);
			if(circle6Array.length<8){
				errors++;
			}
			else{
				if(!((object3 == "6x1" && color3 == "green")||(object3 == "6x2" && color3 == "green")
		 			|| (object3 == "6x3" && color3 == "red") ||  (object3 == "6x4" && color3=="red")||
		 			(object3 == "6x5" && color3 == "green")||(object3 == "6x6" && color3 == "green")
		 			|| (object3 == "6x7" && color3 == "green") ||  (object3 == "6x8" && color3=="green"))){

		 			var temp3 ="The final column has errors.";
					if(!errorString.contains(temp3))
					{
						errorString.push(temp3);
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
		if(circle4Array.length<8||circle5Array.length<8||circle6Array.length<8||circleArray.length<24)
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