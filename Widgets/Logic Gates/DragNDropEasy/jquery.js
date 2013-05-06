//if the document has loaded all information, proceeed with jQuery
$(document).ready(function(){
	//calls the div containerMain by it's id, and accesses CSS for the element
	/*code taken from user "rviscomi" in github forum for twitter bootstrap issues. Found here: https://github.com/twitter/bootstrap/issues/675 .
	* Modified slightly to exclude jQuery function turning element into a modal. Modal in this project (iDime) is created with button.*/
	$('#containerMain').css({
        width: 'auto',//sets width to auto to wrap the size of modal-body
        'margin-left': function () {//creates function to center modal on page. 
            return -($(this).width() / 2);
        }
    });
});
