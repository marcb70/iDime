/*creates an event each time a circle is clicked or tapped. Calls upon setColor() function in functions.js
*for devices with a mouse device, the click function is used. For touch devices such as mobile and tablet devices, the tap function is used.*/
circle4x1.on("click tap", function(){
	setColor(circle4x1);
})

circle4x2.on("click tap", function(){
	setColor(circle4x2);
})

circle4x3.on("click tap", function(){
	setColor(circle4x3);
})

circle4x4.on("click tap", function(){
	setColor(circle4x4);
})
circle4x5.on("click tap", function(){
	setColor(circle4x5);
})

circle4x6.on("click tap", function(){
	setColor(circle4x6);
})

circle4x7.on("click tap", function(){
	setColor(circle4x7);
})

circle4x8.on("click tap", function(){
	setColor(circle4x8);
})
circle5x1.on("click tap", function(){
	setColor(circle5x1);
})

circle5x2.on("click tap", function(){
	setColor(circle5x2);
})

circle5x3.on("click tap", function(){
	setColor(circle5x3);
})

circle5x4.on("click tap", function(){
	setColor(circle5x4);
})
circle5x5.on("click tap", function(){
	setColor(circle5x5);
})

circle5x6.on("click tap", function(){
	setColor(circle5x6);
})

circle5x7.on("click tap", function(){
	setColor(circle5x7);
})

circle5x8.on("click tap", function(){
	setColor(circle5x8);
})
circle6x1.on("click tap", function(){
	setColor(circle6x1);
})

circle6x2.on("click tap", function(){
	setColor(circle6x2);
})

circle6x3.on("click tap", function(){
	setColor(circle6x3);
})

circle6x4.on("click tap", function(){
	setColor(circle6x4);
})
circle6x5.on("click tap", function(){
	setColor(circle6x5);
})

circle6x6.on("click tap", function(){
	setColor(circle6x6);
})

circle6x7.on("click tap", function(){
	setColor(circle6x7);
})

circle6x8.on("click tap", function(){
	setColor(circle6x8);
})
//calls upon clearColumn() in functions.js. used to change each cirlce in the specified column to clear, which may help the user see the needed columns more clearly.
tableP.on("click tap", function(){
	//console.log("tablep clicked");
	clearColumn("c1");
})
tableQ.on("click tap", function(){
	clearColumn("c2");
})
tableR.on("click tap", function(){
	clearColumn("c3");
})