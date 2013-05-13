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
      //provides the file paths or sources for each image needed
      var sources = {
        notImage: 'images/Not.png',
        orImage:'images/Or.png',
        andImage:'images/And.png'
      };
      //loads the images using sources and the draw function
      loadImages(sources, function(images) {
        draw(images);
      });
        //draws stage with images 
      function draw(images){
        var stage = new Kinetic.Stage({
          container: 'dndeasy',
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
          y: 140,
          width: 100,
          height: 100,
          fill: '',
          stroke: 'black',
          strokeWidth: 2
        });
        
        
        var drop2 = new Kinetic.Rect({
          x: 190,
          y: 305,
          width: 100,
          height: 100,
          fill: '',
          stroke: 'black',
          strokeWidth: 2
        });

        var drop3 = new Kinetic.Rect({
          x: 370,
          y: 230,
          width: 100,
          height: 100,
          fill: '',
          stroke: 'black',
          strokeWidth: 2
        });


        var drop4 = new Kinetic.Rect({
          x: 550,
          y: 230,
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
          strokeWidth: 2
        });

        var Q = new Kinetic.Circle({
          x: 50,
          y: 390,
          radius: 15,
          fill: '',
          stroke: 'black',
          strokeWidth: 2
        });
        var qtext=new Kinetic.Text({
          x: 42,
          y: 380,
          text: 'Q',
          fontSize: 20,
          fontFamily: 'Calibri',
          fill: 'black'
        });
        var ptext = new Kinetic.Text({
          x: 43,
          y: 152,
          text: 'P',
          fontSize: 20,
          fontFamily: 'Calibri',
          fill: 'black'
        });
        var PtoDrop1 = new Kinetic.Line({
          points: [63, 160, 190, 160],
          stroke: 'black',
          strokeWidth: 5
        });
        var PtoDrop2 = new Kinetic.Line({
          points: [115, 160, 115, 360, 115, 360, 190, 360],
          stroke: 'black',
          strokeWidth: 5
        });
       var QtoDrop2 = new Kinetic.Line({
          points: [63, 390, 190, 390],
          stroke: 'green',
          strokeWidth: 5
        });
        var QtoDrop1 = new Kinetic.Line({
          points: [135, 390, 135, 210, 135, 210, 190, 210],
          stroke: 'green',
          strokeWidth: 5
        });
        var drop2todrop3=new Kinetic.Line({
          points: [290, 355, 330, 355, 330, 355, 330, 310, 330, 310, 370, 310],
          stroke: 'green',
          strokeWidth: 5
        });
        var drop1todrop4=new Kinetic.Line({
          points: [290, 190, 510, 190, 510, 190, 510, 260, 508, 260, 550, 260],
          stroke: 'black',
          strokeWidth: 5
        });
        var drop3todrop4=new Kinetic.Line({
          points: [470, 280, 550, 280],
          stroke: 'black',
          strokeWidth: 5
        });
        var drop4toend=new Kinetic.Line({
          points: [650, 280, 705, 280],
          stroke: 'black',
          strokeWidth: 5 
        });
        var end = new Kinetic.Circle({
          x: 710,
          y: 280,
          radius: 15,
          fill: 'red',
          stroke: 'black',
          strokeWidth: 2,
        });

        layer.add(ptext);
        layer.add(qtext);
        layer.add(andBox);
        layer.add(notBox);
        layer.add(orBox);
        layer.add(drop1);
        layer.add(drop2);
        layer.add(drop3);
        layer.add(drop4);
        layer.add(P);
        layer.add(Q);
        layer.add(PtoDrop1);
        layer.add(PtoDrop2);
        layer.add(QtoDrop2);
        layer.add(QtoDrop1);
        layer.add(drop2todrop3);
        layer.add(drop1todrop4);
        layer.add(drop3todrop4);
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
            //console.log("drop1 dropped image: " + drop1.getFillPatternImage());

            doDrop(object, drop1);
          }
          else if((object.getPosition().x >= 190 && object.getPosition().x <= 290) && (object.getPosition().y >= 275 && object.getPosition().y <= 375))
          {
            //console.log("drop2 dropped image: " + drop2.getFillPatternImage());
            doDrop(object, drop2);
          }
          else if((object.getPosition().x >= 370 && object.getPosition().x <= 470) && (object.getPosition().y >= 200&& object.getPosition().y <= 300))
          {
            //console.log("drop3 dropped image: " + drop3.getFillPatternImage());
            doDrop(object, drop3);
          }
          else if((object.getPosition().x >= 550 && object.getPosition().x <= 650) && (object.getPosition().y >= 200 && object.getPosition().y <= 300))
          {
            //console.log("drop4 dropped image: " + drop4.getFillPatternImage());
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
          //console.log("image: " + image);
          dropZone.setFillPatternImage(image);
          dropZone.setFillPatternRepeat('no-repeat');

          resetXY();
          layer.draw();
        }
        clear.onclick = function clear(){
          drop1.setFillPatternImage("");
          drop2.setFillPatternImage("");
          drop3.setFillPatternImage("");
          drop4.setFillPatternImage("");
          resetXY();
          layer.draw();
        }
        help.onclick = function helpInfo(){
          alert("Hey there! Having trouble? \nDrag the gates you see on the top of the page into the drop box you think it belongs in to match the statement on the screen.\nTo drag, just place your finger over the gate, hold it and drag it across the screen.\nTo drop, lift your finger.");
        }
        check.onclick = function checkGates(){
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


      }
//if the document has loaded all information, proceeed with jQuery
$(document).ready(function(){
	//calls the div containerMain by it's id, and accesses CSS for the element
	/*code taken from user "rviscomi" in github forum for twitter bootstrap issues. Found here: https://github.com/twitter/bootstrap/issues/675 .
	* Modified slightly to exclude jQuery function turning element into a modal. Modal in this project (iDime) is created with button.*/
	$('#dndeasyMain').css({
        width: 'auto',//sets width to auto to wrap the size of modal-body
        'margin-left': function () {//creates function to center modal on page. 
            return -($(this).width() / 2);
        }
    });
});
