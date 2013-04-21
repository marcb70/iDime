var circleArray = new Array();
var circle7Array = new Array();
var circle5Array = new Array();
var circle6Array = new Array();

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
	//console.log("addToArray information: " + object.getFill() + ", " + object.getId());
	if(!circleArray.contains(object)){
			circleArray.push(object);
	}
	var objectId = object.getId();

	if(objectId=="7x1"||objectId=="7x2"||objectId=="7x3"||objectId=="7x4"||objectId=="7x5"||objectId=="7x6"||objectId=="7x7"||objectId=="7x8"||objectId=="7x9"||objectId=="7x10"||objectId=="7x11"||objectId=="7x12"||objectId=="7x13"||objectId=="7x14"||objectId=="7x15"||objectId=="7x16"){
		if(!circle7Array.contains(object)){
			//console.log("pushing to circle7Array" + objectId + " " + object.getFill());
			circle7Array.push(object);
		}
	}
	else if(objectId=="5x1"||objectId=="5x2"||objectId=="5x3"||objectId=="5x4"||objectId=="5x5"||objectId=="5x6"||objectId=="5x7"||objectId=="5x8"||objectId=="5x9"||objectId=="5x10"||objectId=="5x11"||objectId=="5x12"||objectId=="5x13"||objectId=="5x14"||objectId=="5x15"||objectId=="5x16"){
		if(!circle5Array.contains(object)){
			//console.log("pushing to circle5Array" + objectId + " " + object.getFill());
			circle5Array.push(object);
		}
	}
	else if(objectId=="6x1"||objectId=="6x2"||objectId=="6x3"||objectId=="6x4"||objectId=="6x5"||objectId=="6x6"||objectId=="6x7"||objectId=="6x8"||objectId=="6x9"||objectId=="6x10"||objectId=="6x11"||objectId=="6x12"||objectId=="6x13"||objectId=="6x14"||objectId=="6x15"||objectId=="6x16"){
		if(!circle6Array.contains(object)){
			//console.log("pushing to circle6Array" + objectId + " " + object.getFill());
			circle6Array.push(object);
		}
	}
	else{
		//do nothing
	}
	
}

function updateTable()
{
	var errorString = new Array();
	var errors = 0;

	if(circleArray.length<48){
		errors++;
	}
	else{

		for(var j=0; j<circle7Array.length; j++){
			var color1 = circle7Array[j].getFill();
			var object1 = circle7Array[j].getId();
			//console.log("for loop 2 Object id and color: " + object1 + ", " + color1);
			if(circle7Array.length<16){
				errors++;
			}
			else{
				if(!((object1 == "7x1" && color1 == "green")||(object1 == "7x2" && color1 == "green")
		 			|| (object1 == "7x3" && color1 == "green") ||  (object1 == "7x4" && color1=="red")||
		 			(object1 == "7x5" && color1 == "red")||(object1 == "7x6" && color1 == "red")
		 			|| (object1 == "7x7" && color1 == "red") ||  (object1 == "7x8" && color1=="green")||
		 			(object1 == "7x9" && color1 == "green")||(object1 == "7x10" && color1 == "green")
		 			|| (object1 == "7x11" && color1 == "green") ||  (object1 == "7x12" && color1=="red")||
		 			(object1 == "7x13" && color1 == "green")||(object1 == "7x14" && color1 == "green")
		 			|| (object1 == "7x15" && color1 == "green") ||  (object1 == "7x16" && color1=="red"))){

					var temp1 = "The final column has errors.";
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
			//console.log("for loop 3 Object id and color: " + object2 + ", " + color2);
			if(circle5Array.length<16){
				errors++;
			}
			else{
				if(!((object2 == "5x1" && color2 == "green")||(object2 == "5x2" && color2 == "green")
		 			||(object2 == "5x3" && color2 == "green") ||  (object2 == "5x4" && color2=="green")||
		 			(object2 == "5x5" && color2 == "red")||(object2 == "5x6" && color2 == "red")
		 			||(object2 == "5x7" && color2 == "red") ||  (object2 == "5x8" && color2=="red")||
		 			(object2 == "5x9" && color2 == "green")||(object2 == "5x10" && color2 == "green")
		 			||(object2 == "5x11" && color2 == "green") ||  (object2 == "5x12" && color2=="green")||
		 			(object2 == "5x13" && color2 == "green")||(object2 == "5x14" && color2 == "green")
		 			||(object2 == "5x15" && color2 == "green") ||  (object2 == "5x16" && color2=="green"))){

					var temp2="The R + S column has errors.";
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
			//console.log("for loop 3 Object id and color: " + object3 + ", " + color3);
			if(circle6Array.length<16){
				errors++;
			}
			else{
				if(!((object3 == "6x1" && color3 == "green")||(object3 == "6x2" && color3 == "green")
		 			|| (object3 == "6x3" && color3 == "green") ||  (object3 == "6x4" && color3=="red")||
		 			(object3 == "6x5" && color3 == "green")||(object3 == "6x6" && color3 == "green")
		 			|| (object3 == "6x7" && color3 == "green") ||  (object3 == "6x8" && color3=="red")||
		 			(object3 == "6x9" && color3 == "green")||(object3 == "6x10" && color3 == "green")
		 			|| (object3 == "6x11" && color3 == "green") ||  (object3 == "6x12" && color3=="red")||
		 			(object3 == "6x13" && color3 == "green")||(object3 == "6x14" && color3 == "green")
		 			|| (object3 == "6x15" && color3 == "green") ||  (object3 == "6x16" && color3=="red"))){

		 			var temp3 ="The P -> Q column has errors.";
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
		if(circle7Array.length<16||circle5Array.length<16||circle6Array.length<16||circleArray.length<48)
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