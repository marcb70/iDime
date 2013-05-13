
 function loadImages(sources, callback) {
        var images = {};
        var loadedImages = 0;
        var numImages = 0;
        // get num of sources
        for(var src in sources) {
          numImages++;
        }
        for(var src in sources) {
          images[src] = new Image();
          images[src].onload = function() {
            if(++loadedImages >= numImages) {
              callback(images);
            }
          };
          images[src].src = sources[src];
        }
      }
        
      function draw(images){
        var stage = new Kinetic.Stage({
          container: 'dndmedium',
          width: 922,
          height: 691
        });


        var layer = new Kinetic.Layer();
        andX = (stage.getWidth() / 2);
        andY = (stage.getHeight() / 2)-330;
        notX = (stage.getWidth() / 2)-300;
        notY = (stage.getHeight() / 2)-330;
        orX = (stage.getWidth() / 2) -150;
        orY = (stage.getHeight() / 2) -330;


        var andBox = new Kinetic.Rect({
          x: andX,
          y: andY,
          fillPatternImage: images.andImage,
          fillPatternRepeat: 'no-repeat',
          width: 100,
          height: 100,
          draggable: true,
        });

        var notBox = new Kinetic.Rect({
          x: notX,
          y: notY,
          fillPatternImage: images.notImage,
          fillPatternRepeat:'no-repeat',
          width: 100,
          height: 100,
          draggable: true,
        });

        var orBox = new Kinetic.Rect({
          x: orX,
          y: orY,
          fillPatternImage: images.orImage,
          fillPatternRepeat:'no-repeat',
          width: 100,
          height: 100,
          draggable: true,
        });
        var drop1 = new Kinetic.Rect({
          x: 190,
          y: 260,
          width: 100,
          height: 100,
          fill: '',
          stroke: 'black',
          strokeWidth: 2

        });

        var drop2 = new Kinetic.Rect({
          x: 190,
          y: 460,
          width: 100,
          height: 100,
          fill: '',
          stroke: 'black',
          strokeWidth: 2

        });
        var drop3 = new Kinetic.Rect({
          x: 370,
          y: 140,
          width: 100,
          height: 100,
          fill: '',
          stroke: 'black',
          strokeWidth: 2
        });
        
        var drop4 = new Kinetic.Rect({
          x: 370,
          y: 280,
          width: 100,
          height: 100,
          fill: '',
          stroke: 'black',
          strokeWidth: 2
        });

        var drop5 = new Kinetic.Rect({
          x: 370,
          y: 430,
          width: 100,
          height: 100,
          fill: '',
          stroke: 'black',
          strokeWidth: 2
        });


        var drop6 = new Kinetic.Rect({
          x: 550,
          y: 280,
          width: 100,
          height: 100,
          fill: '',
          stroke: 'black',
          strokeWidth: 2
        });


        var P = new Kinetic.Circle({
          x: 50,
          y: 160,
          radius: 15,
          fill: '',
          stroke: 'black',
          strokeWidth: 2,
          text: 'P',
          fontSize: 20,
          fontFamily: 'Calibri',
          textFill: 'black'
        });

        var Q = new Kinetic.Circle({
          x: 50,
          y: 220,
          radius: 15,
          fill: '',
          stroke: 'black',
          strokeWidth: 2,
          text: 'Q',
          fontSize: 20,
          fontFamily: 'Calibri',
          textFill: 'black'

        });
        var ptext=new Kinetic.Text({
          x: 44,
          y: 152,
          text: 'P',
          fontSize: 20,
          fontFamily: 'Calibri',
          fill: 'black'
        });
        var qtext = new Kinetic.Text({
          x: 43,
          y: 210,
          text: 'Q',
          fontSize: 20,
          fontFamily: 'Calibri',
          fill: 'black'
        });
        var PtoDrop3 = new Kinetic.Line({
          points: [63, 160, 370, 160],
          stroke: 'black',
          strokeWidth: 5
        });
        var PtoDrop4 = new Kinetic.Line({
          points: [115, 160, 115, 445, 115, 445, 370, 445],
          stroke: 'black',
          strokeWidth: 5
        });
       var QtoDrop3 = new Kinetic.Line({
          points: [63, 220, 370, 220],
          stroke: 'green',
          strokeWidth: 5
        });

        var AtoDrop1 = new Kinetic.Line({
          points: [150, 310, 190, 310],
          stroke: 'green',
          strokeWidth: 5
        });
        var QtoDrop2 = new Kinetic.Line({
          points: [150, 220, 150, 510, 150, 510, 190, 510],
          stroke: 'green',
          strokeWidth: 5
        });        
        var AtoDrop4 = new Kinetic.Line({
          points: [150, 370, 370, 370],
          stroke: 'green',
          strokeWidth: 5
        });
        var drop2todrop5=new Kinetic.Line({
          points: [290, 510, 370, 510],
          stroke: 'green',
          strokeWidth: 5
        });
        var drop1todrop4=new Kinetic.Line({
          points: [290, 310, 370, 310],
          stroke: 'green',
          strokeWidth: 5
        });
        var drop3todrop4=new Kinetic.Line({
          points: [470, 330, 550, 330],
          stroke: 'black',
          strokeWidth: 5
        });
        var drop3todrop6=new Kinetic.Line({
          points: [470, 190, 510, 190, 510, 190, 510, 305, 510, 305, 550, 305],
          stroke: 'black',
          strokeWidth: 5
        });
        var drop5todrop6=new Kinetic.Line({
          points: [470, 480, 510, 480, 510, 480, 510, 355, 510, 355, 550, 355],
          stroke: 'black',
          strokeWidth: 5
        });
        
        var drop4toend=new Kinetic.Line({
          points: [650, 330, 705, 330],
          stroke: 'black',
          strokeWidth: 5 
        });
        var end = new Kinetic.Circle({
          x: 710,
          y: 330,
          radius: 15,
          fill: 'red',
          stroke: 'black',
          strokeWidth: 2,
        });

        layer.add(andBox);
        layer.add(notBox);
        layer.add(orBox);
        layer.add(drop1);
        layer.add(drop2);
        layer.add(drop3);
        layer.add(drop4);
        layer.add(drop5);
        layer.add(drop6);
        layer.add(P);
        layer.add(Q);
        layer.add(ptext);
        layer.add(qtext);
        layer.add(PtoDrop3);
        layer.add(QtoDrop3);
        layer.add(PtoDrop4);
        layer.add(QtoDrop2);
        layer.add(AtoDrop1);
        layer.add(AtoDrop4);
        layer.add(drop1todrop4);
        layer.add(drop2todrop5);
        layer.add(drop3todrop4);
        layer.add(drop3todrop6);
        layer.add(drop5todrop6);
        layer.add(drop4toend);
        layer.add(end);
        stage.add(layer);   
        notBox.on("dragend", function(){
          checkDrop(notBox);
        });
        andBox.on("dragend", function(){
          checkDrop(andBox);
        });
        orBox.on("dragend", function(){
          checkDrop(orBox);
        });
      function resetXY()
      {
        notBox.setPosition(notX, notY);
        andBox.setPosition(andX, andY);
        orBox.setPosition(orX, orY);
        layer.draw();
      }
      function checkDrop(object)
      {
        if((object.getPosition().x >= 190 && object.getPosition().x <= 290) && (object.getPosition().y >= 260 && object.getPosition().y <= 360))
        {
          doDrop(object, drop1);
        }
        else if((object.getPosition().x >= 190 && object.getPosition().x <= 290) && (object.getPosition().y >= 460 && object.getPosition().y <= 560))
        {
          doDrop(object, drop2);
        }
        else if((object.getPosition().x >= 370 && object.getPosition().x <= 470) && (object.getPosition().y >= 140 && object.getPosition().y <= 240))
        {
          doDrop(object, drop3);
        }
        else if((object.getPosition().x >= 370 && object.getPosition().x <= 470) && (object.getPosition().y >= 240 && object.getPosition().y <= 340))
        {
          doDrop(object, drop4);
        }
        else if((object.getPosition().x >= 370 && object.getPosition().x <= 470) && (object.getPosition().y >= 430 && object.getPosition().y <= 530))
        {
          doDrop(object, drop5);
        }
        else if((object.getPosition().x >= 550 && object.getPosition().x <= 650) && (object.getPosition().y >= 280 && object.getPosition().y <= 380))
        {
          doDrop(object, drop6);
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
        //console.log("image: " + image);
        dropZone.setFillPatternImage(image);
        dropZone.setFillPatternRepeat('no-repeat');

        resetXY();
        layer.draw();
      }
      clear.onclick=function clear(){
        drop1.setFillPatternImage("");
        drop2.setFillPatternImage("");
        drop3.setFillPatternImage("");
        drop4.setFillPatternImage("");
        drop5.setFillPatternImage("");
        drop6.setFillPatternImage("");
        resetXY();
        layer.draw();
      }
      help.onclick = function helpInfo(){
          alert("Hey there! Having trouble? \nDrag the gates you see on the left of the screen into the drop box you think it belongs in to match the statement at the top of the screen.\nTo drag, just place your finger over the gate, hold it and drag it across the screen.\nTo drop, lift your finger.");
        }
      check.onclick=function checkGates(){
        var error = 0;
        var errorList = new Array();
        if(drop1.getFillPatternImage()==null||drop2.getFillPatternImage()==null||drop3.getFillPatternImage()==null||drop4.getFillPatternImage()==null||drop5.getFillPatternImage()==null||drop6.getFillPatternImage()==null){
          errorList.push("Blank Spots - keep going!");
          error++;
        }
        else{
          //check if first two boxes are and or or.
          if(drop1.getFillPatternImage()!=images.notImage){
            errorList.push("Drop box 1 has the wrong gate! Check your work!");
            error++;
          }
          if(drop2.getFillPatternImage()!=images.notImage){
            errorList.push("Drop box 2 has the wrong gate! Check your work!");
            error++;
          }
          if(drop3.getFillPatternImage()!=images.andImage){
              errorList.push("Drop box 3 has the wrong gate! Recheck your work!");
              error++;
          }
          if(drop4.getFillPatternImage()!=images.andImage){
              errorList.push("Drop box 4 has the wrong gate! Recheck your work!");
              error++;
          }
          if(drop5.getFillPatternImage()!=images.andImage){
              errorList.push("Dropbox 5 has the wrong gate! Recheck your work!");
              error++;
          }
          if(drop6.getFillPatternImage()!=images.orImage){
              errorList.push("Drop box 6 has the wrong gate! Recheck your work!");
              error++;
          }
        }
      if(error == 0){
        alert("Congratulations! You got the perfect combination!");
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



      }
      var sources = {
        notImage: 'images/Not.png',
        orImage:'images/Or.png',
        andImage:'images/And.png'
      };

      loadImages(sources, function(images) {
        draw(images);
      });
//if the document has loaded all information, proceeed with jQuery
$(document).ready(function(){
	//calls the div containerMain by it's id, and accesses CSS for the element
	/*code taken from user "rviscomi" in github forum for twitter bootstrap issues. Found here: https://github.com/twitter/bootstrap/issues/675 .
	* Modified slightly to exclude jQuery function turning element into a modal. Modal in this project (iDime) is created with button.*/
	$('#dndmediumMain').css({
        width: 'auto',//sets width to auto to wrap the size of modal-body
        'margin-left': function () {//creates function to center modal on page. 
            return -($(this).width() / 2);
        }
    });
});
