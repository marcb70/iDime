var andX = (stage.getWidth() / 2);
        var andY = (stage.getHeight() / 2)-330;
        var notX = (stage.getWidth() / 2)-300;
        var notY = (stage.getHeight() / 2)-330;
        var orX = (stage.getWidth() / 2) -150;
        var orY = (stage.getHeight() / 2) -330;

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
