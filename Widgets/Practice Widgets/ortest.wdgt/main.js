/* 
 This file was generated by Dashcode.  
 You may edit this file to customize your widget or web page 
 according to the license.txt file included in the project.
 */

//
// Function: load()
// Called by HTML body element's onload event when the widget is ready to start
//
function load()
{
    dashcode.setupParts();
}

//
// Function: remove()
// Called when the widget has been removed from the Dashboard
//
function remove()
{
    // Stop any timers to prevent CPU usage
    // Remove any preferences as needed
    // widget.setPreferenceForKey(null, dashcode.createInstancePreferenceKey("your-key"));
}

//
// Function: hide()
// Called when the widget has been hidden
//
function hide()
{
    // Stop any timers to prevent CPU usage
}

//
// Function: show()
// Called when the widget has been shown
//
function show()
{
    // Restart any timers that were stopped on hide
}

//
// Function: sync()
// Called when the widget has been synchronized with .Mac
//
function sync()
{
    // Retrieve any preference values that you need to be synchronized here
    // Use this for an instance key's value:
    // instancePreferenceValue = widget.preferenceForKey(null, dashcode.createInstancePreferenceKey("your-key"));
    //
    // Or this for global key's value:
    // globalPreferenceValue = widget.preferenceForKey(null, "your-key");
}

//
// Function: showBack(event)
// Called when the info button is clicked to show the back of the widget
//
// event: onClick event from the info button
//
function showBack(event)
{
    var front = document.getElementById("front");
    var back = document.getElementById("back");

    if (window.widget) {
        widget.prepareForTransition("ToBack");
    }

    front.style.display = "none";
    back.style.display = "block";

    if (window.widget) {
        setTimeout('widget.performTransition();', 0);
    }
}

//
// Function: showFront(event)
// Called when the done button is clicked from the back of the widget
//
// event: onClick event from the done button
//
function showFront(event)
{
    var front = document.getElementById("front");
    var back = document.getElementById("back");

    if (window.widget) {
        widget.prepareForTransition("ToFront");
    }

    front.style.display="block";
    back.style.display="none";

    if (window.widget) {
        setTimeout('widget.performTransition();', 0);
    }
}

if (window.widget) {
    widget.onremove = remove;
    widget.onhide = hide;
    widget.onshow = show;
    widget.onsync = sync;
}


function orcheck(event)
{
    var p1 = document.getElementById("popup1").object.getValue();
    var p2 = document.getElementById("popup2").object.getValue();
    var indicator = document.getElementById("onoff");
    window.console.log(p1);
    window.console.log(p1);
    window.console.log(p1);
    
    if(p1 == "true" || p2 == "true"){
    
        indicator.object.setValue(1.0);
    }else{
    
        indicator.object.setValue(2.0);
    }
}



function myClickHandler(event)
{
    // Insert Code Here
    var p1 = document.getElementById("popup1").object.getValue();
    var p2 = document.getElementById("popup2").object.getValue();
    var indicator = document.getElementById("onoff");
    window.console.log("HELLO");
    window.console.log(p1);
    window.console.log(p1);
    alert(p1 == "true" || p2 == "true");
    
    if(p1 == true || p2 == true){
    
        indicator.object.setValue(1.0);
    }else{
    
        indicator.object.setValue(2.0);
    }
    

}


function myClickHandler1(event)
{
    var p1 = document.getElementById("popup1").object.getValue();
    var p2 = document.getElementById("popup2").object.getValue();
    var indicator = document.getElementById("onoff");
    window.console.log(p1);
    window.console.log(p1);
    window.console.log(p1);
    
    if(p1 == "true" || p2 == "true"){
    
        indicator.object.setValue(1.0);
    }else{
    
        indicator.object.setValue(2.0);
    }
    

}


// Assign this handler to the ondrop event
// on a drop target on your widget's interface
function dragDrop(event)
{
	try {
		// Obtain the URIs of the dropped items
		var uriString = event.dataTransfer.getData("text/uri-list");	
		
		// Split the URIs into an array
		var uriList = uriString.split("\n");
		
		// Use uriList for your own purposes
		
	} catch (ex) {
    
		alert("Problem fetching URI: " + ex);
	}

	event.stopPropagation();
	event.preventDefault();
}

// Be sure to assign these handlers for the ondragenter
// and ondragover events on your drop target
// These handlers prevent Web Kit from processing 
// drag events so you can handle the drop when it occurs
function dragEnter(event)
{
	event.stopPropagation();
	event.preventDefault();
}
function dragOver(event)
{
	event.stopPropagation();
	event.preventDefault();
}

