function resetXY()
{
	notImage.setPosition(notX, notY);
	andImage.setPosition(andX, andY);
	orImage.setPosition(orX, orY);
	layer.draw();
}
function checkDrop(object)
{
	var mousePos = stage.getMousePosition();

	if((mousePos.x >= 63 && mousePos.x <= 163) && (mousePos.y >= 110 && mousePos.y <= 210))
	{
		console.log("drop1");
		doDrop(object, drop1);
	}
	else if((mousePos.x >= 63 && mousePos.x <= 163) && (mousePos.y >= 275 && mousePos.y <= 375))
	{
		console.log("drop2");
		doDrop(object, drop2);
	}
	else if((mousePos.x >= 375 && mousePos.x <= 425) && (mousePos.y >= 175 && mousePos.y <= 225))
	{
		doDrop(object, drop3);
	}
	else if((mousePos.x >= 375 && mousePos.x <= 425) && (mousePos.y >= 175 && mousePos.y <= 225))
	{
		doDrop(object, drop4);
	}
	else
	{
		resetXY(object);	
	}
}

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
          container: 'container',
          width: 922,
          height: 691
        });


        var layer = new Kinetic.Layer();
        andX = (stage.getWidth() / 2);
        andY = (stage.getHeight() / 2) +100;
        notX = (stage.getWidth() / 2)-100;
        notY = (stage.getHeight() / 2) +100;
        orX = (stage.getWidth() / 2) -200;
        orY = (stage.getHeight() / 2) + 100;

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
          y: 110,
          width: 100,
          height: 100,
          fill: '',
          stroke: 'black',
          strokeWidth: 2
        });
        
        
        var drop2 = new Kinetic.Rect({
          x: 190,
          y: 275,
          width: 100,
          height: 100,
          fill: '',
          stroke: 'black',
          strokeWidth: 2
        });

        var drop3 = new Kinetic.Rect({
          x: 370,
          y: 200,
          width: 100,
          height: 100,
          fill: '',
          stroke: 'black',
          strokeWidth: 2
        });


        var drop4 = new Kinetic.Rect({
          x: 550,
          y: 200,
          width: 100,
          height: 100,
          fill: '',
          stroke: 'black',
          strokeWidth: 2
        });

        var P = new Kinetic.Circle({
          x: 50,
          y: 130,
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
          y: 360,
          radius: 15,
          fill: '',
          stroke: 'black',
          strokeWidth: 2,
          text: 'Q',
          fontSize: 20,
          fontFamily: 'Calibri',
          textFill: 'black'

        });
        var PtoDrop1 = new Kinetic.Line({
          points: [63, 130, 190, 130],
          stroke: 'black',
          strokeWidth: 5
        });
        var PtoB = new Kinetic.Line({
          points: [115, 130, 115, 330],
          stroke: 'black',
          strokeWidth: 5
        });
        var BtoDrop2 = new Kinetic.Line({
          points: [112, 330, 190, 330],
          stroke: 'black',
          strokeWidth: 5
        });
       var QtoDrop2 = new Kinetic.Line({
          points: [63, 360, 190, 360],
          stroke: 'green',
          strokeWidth: 5
        });
        var QtoA = new Kinetic.Line({
          points: [135, 360, 135, 190],
          stroke: 'green',
          strokeWidth: 5
        });
        var AtoDrop2 = new Kinetic.Line({
          points: [133, 190, 190, 190],
          stroke: 'green',
          strokeWidth: 5
        });
        var drop2todrop31=new Kinetic.Line({
          points: [290, 325, 330, 325],
          stroke: 'green',
          strokeWidth: 5
        });
        var drop2todrop32=new Kinetic.Line({
          points: [328, 325, 330, 280],
          stroke: 'green',
          strokeWidth: 5
        });
        var drop2todrop33=new Kinetic.Line({
          points: [328, 280, 370, 280],
          stroke: 'green',
          strokeWidth: 5
        });
        var drop1todrop31=new Kinetic.Line({
          points: [290, 160, 330, 160],
          stroke: 'black',
          strokeWidth: 5
        });
        var drop1todrop32=new Kinetic.Line({
          points: [328, 160, 328, 230],
          stroke: 'black',
          strokeWidth: 5
        });
        var drop1todrop33=new Kinetic.Line({
          points: [326, 230, 370, 230],
          stroke: 'black',
          strokeWidth: 5
        });
        var drop3todrop4=new Kinetic.Line({
          points: [470, 250, 550, 250],
          stroke: 'black',
          strokeWidth: 5
        });

        
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
        layer.add(PtoB);
        layer.add(BtoDrop2);
        layer.add(QtoDrop2);
        layer.add(QtoA);
        layer.add(AtoDrop2);
        layer.add(drop2todrop31);
        layer.add(drop2todrop32);
        layer.add(drop2todrop33);
        layer.add(drop1todrop31);
        layer.add(drop1todrop32);
        layer.add(drop1todrop33);
        layer.add(drop3todrop4);
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
        var mousePos = stage.getMousePosition();

        if((mousePos.x >= 63 && mousePos.x <= 163) && (mousePos.y >= 110 && mousePos.y <= 210))
        {
          console.log("drop1 dropped image: " + drop1.getFillPatternImage());

          doDrop(object, drop1);
        }
        else if((mousePos.x >= 190 && mousePos.x <= 290) && (mousePos.y >= 275 && mousePos.y <= 375))
        {
          console.log("drop2 dropped image: " + drop2.getFillPatternImage());
          doDrop(object, drop2);
        }
        else if((mousePos.x >= 375 && mousePos.x <= 425) && (mousePos.y >= 175 && mousePos.y <= 225))
        {
          console.log("drop3 dropped image: " + drop3.getFillPatternImage());
          doDrop(object, drop3);
        }
        else if((mousePos.x >= 450 && mousePos.x <= 550) && (mousePos.y >= 192 && mousePos.y <= 292))
        {
          console.log("drop4 dropped image: " + drop4.getFillPatternImage());
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
        console.log("image: " + image);
        dropZone.setFillPatternImage(image);
        dropZone.setFillPatternRepeat('no-repeat');

        resetXY();
        layer.draw();
      }
      check.onclick=function checkGates(){
        if(drop1.getFillPatternImage()==null||drop2.getFillPatternImage()==null||drop3.getFillPatternImage()==null||drop1.getFillPatternImage()==null){
          alert("Blank Spots - redo");
        }
        else{
          //check if first two boxes are and or or.
          if(drop1.getFillPatternImage()==images.andImage){
            if(drop2.getFillPatternImage()!=images.orImage){
              alert("alert 1 Wrong! Check your work!");
            }
          }
          else if(drop1.getFillPatternImage()==images.orImage) {
            if(drop2.getFillPatternImage() != images.andImage){
              alert("alert 2 Wrong! Recheck your work!");
            }
          }
          else{
              alert(" alert 3 Wrong! Recheck your work!");
          }

          if(drop3.getFillPatternImage()!=images.notImage){
              alert("drop 3 Wrong! Recheck your work!");
          }

          if(drop4.getFillPatternImage()!=images.orImage){
              alert("drop 4 Wrong! Recheck your work!");
          }
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