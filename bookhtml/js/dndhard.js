
  function dndhardloadImages(sources, callback) {
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
  var sources = {
      notImage: 'images/Not1.png',
      orImage:'images/Or1.png',
      andImage:'images/And1.png'
    };
  
      
  function dndharddraw(images){
    	var stage = new Kinetic.Stage({
      container: 'dndhard',
      width: 1000,
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
        width: 90,
        height: 90,
        draggable: true,
      });

      var notBox = new Kinetic.Rect({
        x: notX,
        y: notY,
        fillPatternImage: images.notImage,
        fillPatternRepeat:'no-repeat',
        width: 90,
        height: 90,
        draggable: true,
      });

      var orBox = new Kinetic.Rect({
        x: orX,
        y: orY,
        fillPatternImage: images.orImage,
        fillPatternRepeat:'no-repeat',
        width: 90,
        height: 90,
        draggable: true,
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
        y: 310,
        radius: 15,
        fill: '',
        stroke: 'black',
        strokeWidth: 2,
        text: 'Q',
        fontSize: 20,
        fontFamily: 'Calibri',
        textFill: 'black'

      });

      var R = new Kinetic.Circle({
        x: 50,
        y: 455,
        radius: 15,
        fill: '',
        stroke: 'black',
        strokeWidth: 2,
        text: 'P',
        fontSize: 20,
        fontFamily: 'Calibri',
        textFill: 'black'
      });

      var S = new Kinetic.Circle({
        x: 50,
        y: 590,
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
        y: 300,
        text: 'Q',
        fontSize: 20,
        fontFamily: 'Calibri',
        fill: 'black'
      });
      var rtext=new Kinetic.Text({
        x: 44,
        y: 448,
        text: 'R',
        fontSize: 20,
        fontFamily: 'Calibri',
        fill: 'black'
      });
      var stext = new Kinetic.Text({
        x: 43,
        y: 580,
        text: 'S',
        fontSize: 20,
        fontFamily: 'Calibri',
        fill: 'black'
      });

      var drop1 = new Kinetic.Rect({
        x: 190,
        y: 190,
        width: 90,
        height: 90,
        fill: '',
        stroke: 'black',
        strokeWidth: 2
      });

      var drop2 = new Kinetic.Rect({
        x: 190,
        y: 330,
        width: 90,
        height: 90,
        fill: '',
        stroke: 'black',
        strokeWidth: 2
      });
      var drop3 = new Kinetic.Rect({
        x: 190,
        y: 480,
        width: 90,
        height: 90,
        fill: '',
        stroke: 'black',
        strokeWidth: 2
      });
      
      

      var drop4 = new Kinetic.Rect({
        x: 330,
        y: 330,
        width: 90,
        height: 90,
        fill: '',
        stroke: 'black',
        strokeWidth: 2
      });

      var drop5 = new Kinetic.Rect({
        x: 500,
        y: 270,
        width: 90,
        height: 90,
        fill: '',
        stroke: 'black',
        strokeWidth: 2
      });
      var drop6 = new Kinetic.Rect({
        x: 500,
        y: 420,
        width: 90,
        height: 90,
        fill: '',
        stroke: 'black',
        strokeWidth: 2
      });
      var drop7 = new Kinetic.Rect({
        x: 670,
        y: 140,
        width: 90,
        height: 90,
        fill: '',
        stroke: 'black',
        strokeWidth: 2
      });

      var drop8 = new Kinetic.Rect({
        x: 670,
        y: 530,
        width: 90,
        height: 90,
        fill: '',
        stroke: 'black',
        strokeWidth: 2
      });
      var drop9 = new Kinetic.Rect({
        x: 850,
        y: 330,
        width: 90,
        height: 90,
        fill: '',
        stroke: 'black',
        strokeWidth: 2
      });

      var StoDrop8 = new Kinetic.Line({
        points: [64, 590, 670, 590],
        stroke: 'black',
        strokeWidth: 5
      });

      var PtoDrop6 = new Kinetic.Line({
        points: [64, 160, 670, 160],
        stroke: 'black',
        strokeWidth: 5
      });


      var drop2todrop4=new Kinetic.Line({
        points: [280, 380, 330, 380],
        stroke: 'black',
        strokeWidth: 5
      });

      var PtoDrop1 = new Kinetic.Line({
        points: [120, 160, 120, 220, 120, 220, 190, 220],
        stroke: 'black',
        strokeWidth: 5
      });

      var QtoA = new Kinetic.Line({
        points: [64, 310, 120, 310],
        stroke: 'black',
        strokeWidth: 5
      });

      var RtoA = new Kinetic.Line({
        points: [64, 455, 120, 455],
        stroke: 'black',
        strokeWidth: 5          
      });

      var StoDrop3 = new Kinetic.Line({
        points: [120, 590, 120, 550, 120, 550, 190, 550],
        stroke: 'black',
        strokeWidth: 5
      });

      var Drop1Drop2Connect = new Kinetic.Line({
        points: [120, 260, 190, 260, 120, 260, 120, 260, 120, 360, 190, 360],
        stroke: 'black',
        strokeWidth: 5
      });

      var Drop2Drop3Connect = new Kinetic.Line({
        points: [120, 400, 190, 400, 120, 400, 120, 400, 120, 510, 190, 510],
        stroke: 'black', 
        strokeWidth: 5
      });

      
      var drop1toDrop5 = new Kinetic.Line({
        points: [280, 235, 460, 235, 460, 295, 460, 235, 460, 295, 500, 295],
        stroke: 'black',
        strokeWidth: 5
      });

      var drop4toB = new Kinetic.Line({
        points: [420, 375, 460, 375],
        stroke: 'black',
        strokeWidth: 5
      });    

      var Drop6Drop7Connect = new Kinetic.Line({
        points: [460, 325, 500, 325, 460, 325, 460, 435, 460, 435, 500, 435], 
        stroke: 'black',
        strokeWidth: '5'
      });

      var drop5toDrop7 = new Kinetic.Line({
        points: [590, 325, 630, 325, 630, 325, 630, 195, 630, 195, 670, 195],
        stroke: 'black',
        strokeWidth: 5
      });

     var Drop3toDrop6 = new Kinetic.Line({
        points: [280, 530, 460, 530, 460, 530, 460, 490, 460, 490, 500, 490], 
        stroke: 'black',
        strokeWidth: '5'
      }); 
    
      var drop6todrop8 = new Kinetic.Line({
        points: [590, 470, 630, 470, 630, 560, 630, 470, 630, 560, 670, 560],
        stroke: 'black',
        strokeWidth: 5
      });

      var drop7todrop9 = new Kinetic.Line({
        points: [760, 190, 805, 190, 805, 190, 805, 360, 805, 360, 850, 360],
        stroke: 'black',
        strokeWidth: 5
      });
      var drop8todrop9 = new Kinetic.Line({
        points: [760, 575, 805, 575, 805, 575, 805, 390, 805, 390, 850, 390],
        stroke: 'black',
        strokeWidth: 5
      }); 

      var end = new Kinetic.Circle({
        x: 710,
        y: 330,
        radius: 15,
        fill: 'black',
        stroke: 'black',
        strokeWidth: 2,
      });

      /*layer.add(textbox);
      layer.add(statementText);
      layer.add(guideText);*/
      layer.add(andBox);
      layer.add(notBox);
      layer.add(orBox);
      layer.add(drop1);
      layer.add(drop2);
      layer.add(drop3);
      layer.add(drop4);
      layer.add(drop5);
      layer.add(drop6);
      layer.add(drop7);
      layer.add(drop8);
      layer.add(drop9);
      layer.add(P);
      layer.add(Q);
      layer.add(R);
      layer.add(S);
      layer.add(ptext);
      layer.add(qtext);
      layer.add(rtext);
      layer.add(stext);
      layer.add(PtoDrop6);
      layer.add(StoDrop8);
      layer.add(drop2todrop4);
      layer.add(QtoA);
      layer.add(RtoA);
      layer.add(PtoDrop1);
      layer.add(Drop1Drop2Connect);
      layer.add(Drop2Drop3Connect);
      layer.add(StoDrop3);
      layer.add(drop1toDrop5);
      layer.add(drop5toDrop7);
      layer.add(drop4toB);
      layer.add(Drop6Drop7Connect);
      layer.add(Drop3toDrop6);
      layer.add(drop6todrop8);
      layer.add(drop7todrop9);
      layer.add(drop8todrop9);
      /*layer.add(PtoB);
      layer.add(drop4toend);
      layer.add(end);*/
      stage.add(layer);   

      notBox.on("dragend", function(){
        dndhardcheckDrop(notBox);
      });
      andBox.on("dragend", function(){
        dndhardcheckDrop(andBox);
      });
      orBox.on("dragend", function(){
        dndhardcheckDrop(orBox);
      });
    function dndhardresetXY()
    {
      notBox.setPosition(notX, notY);
      andBox.setPosition(andX, andY);
      orBox.setPosition(orX, orY);
      layer.draw();
    }


    //handles dropping T/F buttons onto dropzones
    function dndharddoDrop(object, dropZone)
    {
      var x = dropZone.getPosition().x;
      var y = dropZone.getPosition().y;
      var image = object.getFillPatternImage();
      //console.log("image: " + image);
      dropZone.setFillPatternImage(image);
      dropZone.setFillPatternRepeat('no-repeat');

      dndhardresetXY();
      layer.draw();
    }
    
    function dndhardcheckDrop(object)
    {
      if((object.getPosition().x >= 190 && object.getPosition().x <= 280) && (object.getPosition().y >= 190 && object.getPosition().y <= 280))
      {
        dndharddoDrop(object, drop1);

      }
      else if((object.getPosition().x >= 190 && object.getPosition().x <= 280) && (object.getPosition().y >= 260 && object.getPosition().y <= 350))
      {
        dndharddoDrop(object, drop2);
      }
      else if((object.getPosition().x >= 190 && object.getPosition().x <= 280) && (object.getPosition().y >= 460 && object.getPosition().y <= 550))
      {
        dndharddoDrop(object, drop3);
      }
      else if((object.getPosition().x >= 330 && object.getPosition().x <= 420) && (object.getPosition().y >= 330 && object.getPosition().y <= 420))
      {
        dndharddoDrop(object, drop4);
      }
      else if((object.getPosition().x >= 500 && object.getPosition().x <= 590) && (object.getPosition().y >= 270 && object.getPosition().y <= 360))
      {
        dndharddoDrop(object, drop5);
      }
      else if((object.getPosition().x >= 500 && object.getPosition().x <= 590) && (object.getPosition().y >= 420 && object.getPosition().y <= 510))
      {
        dndharddoDrop(object, drop6);
      }
      else if((object.getPosition().x >= 670 && object.getPosition().x <= 760) && (object.getPosition().y >= 140 && object.getPosition().y <= 230))
      {
        dndharddoDrop(object, drop7);
      }
      else if((object.getPosition().x >= 670 && object.getPosition().x <= 760) && (object.getPosition().y >= 530 && object.getPosition().y <= 620))
      {
        dndharddoDrop(object, drop8);
      }
      else if((object.getPosition().x >= 850 && object.getPosition().x <= 940) && (object.getPosition().y >= 330 && object.getPosition().y <= 420))
      {
        dndharddoDrop(object, drop9);
      }
      else
      {
        dndhardresetXY(object);  
      }
      layer.draw()

    }
    hclear.onclick = function dndhardclear(){
      drop1.setFillPatternImage("");
      drop2.setFillPatternImage("");
      drop3.setFillPatternImage("");
      drop4.setFillPatternImage("");
      drop5.setFillPatternImage("");
      drop6.setFillPatternImage("");
      drop7.setFillPatternImage("");
      drop8.setFillPatternImage("");
      drop9.setFillPatternImage("");
      dndhardresetXY();
      layer.draw();
    }
    hhelp.onclick = function dndhardhelpInfo(){
        alert("Hey there! Having trouble? \nDrag the gates you see on the top of the screen into the drop box you think it belongs in to match the statement at the top of the screen.\nDrop boxes are numbered from top to bottom, left to right.");
      }
    hcheck.onclick=function dndhardcheckGates(){
      var error = 0;
      var errorList = new Array();
      if(drop1.getFillPatternImage()==null||drop2.getFillPatternImage()==null||drop3.getFillPatternImage()==null||drop4.getFillPatternImage()==null||drop5.getFillPatternImage()==null||drop6.getFillPatternImage()==null||drop7.getFillPatternImage()==null||drop8.getFillPatternImage()==null||drop9.getFillPatternImage()==null){
        errorList.push("Blank Spots - keep going!");
        error++;
      }
      else{
        //check if first two boxes are and or or.
        if(drop1.getFillPatternImage()!=images.andImage){
          errorList.push("Drop box 1 has the wrong gate! Check your work!");
          error++;
        }
        if(drop2.getFillPatternImage()!=images.orImage){
          errorList.push("Drop box 2 has the wrong gate! Check your work!");
          error++;
        }
        if(drop3.getFillPatternImage()!=images.andImage){
            errorList.push("Drop box 3 has the wrong gate! Recheck your work!");
            error++;
        }
        if(drop4.getFillPatternImage()!=images.notImage){
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
        if(drop7.getFillPatternImage()!=images.orImage){
            errorList.push("Drop box 7 has the wrong gate! Recheck your work!");
            error++;
        }
        if(drop8.getFillPatternImage()!=images.orImage){
            errorList.push("Drop box 8 has the wrong gate! Recheck your work!");
            error++;
        }
        if(drop9.getFillPatternImage()!=images.orImage){
            errorList.push("Drop box 9 has the wrong gate! Recheck your work!");
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

var dndhardhtml = '<div id = "dndhardMain" class="modal hide fade" tabindex="-1" role="dialog" aria-hidden="true"> <!-- --> <div id="directions" class = "modal-header"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button> <h3 id="header">Drag and drop the logic gates into the correct boxes to match this statement: </h3> <h4>{P + [ (P * Q) * ~(Q + R) ] } + {S + [ ~(Q + R) + (R * S) ] }</h4> </div> <!--The main modal body contains only the exercise.--> <div id="dndhard" class = "modal-body"></div> <div id = "buttonDiv" class="modal-footer"> <!--This button allows the user to close the modal and return to reading the material. Work will not be saved.--> <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button> <!--This button checks the user\'s work. Calls "updateTable" function. updateTable() is found in functions.js. --> <input type = "submit" class="btn btn-primary" value = "check it!" id = "hcheck" onclick = "dndhardcheckGates();" /> <!--This button gives the user a hint Calls "hint" function. --> <input type = "submit" class="btn btn-danger" value = "Help!!" id = "hhelp" onclick = "dndhardhelpInfo();" /> <!--This button allows user to reset the statement gates. Calles the dndhardclear() function. --> <input type = "submit" class="btn btn-warning" value = "Clear it!" id = "hclear" onclick = "dndhardclear();" /> </div> </div>';
function writedndhard(){
      $('#widgethtml').html(dndhardhtml);
      dndhardloadImages(sources, function(images) {
      dndharddraw(images);
    });
      $('#dndhardMain').css({
        width: 'auto',//sets width to auto to wrap the size of modal-body
        'margin-left': function () {//creates function to center modal on page. 
            return -($(this).width() / 2);
        }
    });
    }