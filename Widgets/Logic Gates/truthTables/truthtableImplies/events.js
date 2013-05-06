/*creates an event each time a circle is clicked or tapped. Calls upon setColor() function in functions.js
*for devices with a mouse device, the click function is used. For touch devices such as mobile and tablet devices, the tap function is used.*/
circle3x1.on("click tap", function(){
	setColor(circle3x1);
})

circle3x2.on("click tap", function(){
	setColor(circle3x2);
})

circle3x3.on("click tap", function(){
	setColor(circle3x3);
})

circle3x4.on("click tap", function(){
	setColor(circle3x4);
})

