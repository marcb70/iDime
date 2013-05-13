
$(document).ready(function(){
	//calls the div containerMain by it's id, and accesses CSS for the element
	/*code taken from user "rviscomi" in github forum for twitter bootstrap issues. Found here: https://github.com/twitter/bootstrap/issues/675 .
	* Modified slightly to exclude jQuery function turning element into a modal. Modal in this project (iDime) is created with button.*/
	$('#container').css({
        height: '850px',//sets width to auto to wrap the size of modal-body
        'margin-bottom': function () {//creates function to center modal on page. 
            return -($(this).height() / 2);
        }
    });
});//if the document has loaded all information, proceeed with jQuery


/*$(document).ready(function () {
	var adjustModal = function($modal) {
  var top;
  if ($(window).width() <= 480) {
    if ($modal.hasClass('modal-fullscreen')) {
      if ($modal.height() >= $(window).height()) {
        top = $(window).scrollTop();
      } else {
        top = $(window).scrollTop() + ($(window).height() - $modal.height()) / 2;
      }
    } else if ($modal.height() >= $(window).height() - 10) {
      top = $(window).scrollTop() + 10;
    } else {
      top = $(window).scrollTop() + ($(window).height() - $modal.height()) / 2;
    }
  } else {
    top = '50%';
    if ($modal.hasClass('modal-fullscreen')) {
      $modal.stop().animate({
          marginTop  : -($modal.outerHeight() / 2)
        , marginLeft : -($modal.outerWidth() / 2)
        , top        : top
      }, "fast");
      return;
    }
  }
  $modal.stop().animate({ 'top': top }, "fast");
};

var show = function() {
  var $modal = $(this);
  adjustModal($modal);
};

var checkShow = function() {
  $('.modal').each(function() {
    var $modal = $(this);
    if ($modal.css('display') !== 'block') return;
    adjustModal($modal);
  });
};

var modalWindowResize = function() {
  $('.modal').not('.modal-gallery').on('show', show);
  $('.modal-gallery').on('displayed', show);
  checkShow();
};

$(modalWindowResize);
$(window).resize(modalWindowResize);
$(window).scroll(checkShow);

});*/
