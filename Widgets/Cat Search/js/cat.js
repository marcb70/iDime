function Cat(){
//This is a cat object
	var name = ""; //anything
	var	color = 0; //white - 0, black - 1, orange - 2 (must be make), calico - 3 (must be female), gray - 4, brown - 5
	var	breed = 0; //tabby - 0, maine coon - 1, persian - 2, siamese - 3, ragdoll - 4, sphinx - 5 
	var	isMale = 0; //true - male, false -female
	var	markings= 0; // none - 0, stripped - 1, spots - 2
	var	isFixed = 0; // spayed or neutered - true, else false
	var	eyecolor = 0; //green - 0 , gray - 1, blue - 2, yellow -3
	var	age = 0;
	var ageRange = "";
	var	hairlength = 0;//short - 0, long - 1, none 2
	var match = false;
	var img = "catPic.gif";
	var array = new Array()

	this.setName = function(aname) {
		name = aname;
	};

	this.getName = function(){
		return name;
	};

	this.setColor = function(aColorNum){
		//color = aColorNum;
		if(aColorNum == 0)
			color = "White";
		else if(aColorNum==1)
			color="Black";
		else if(aColorNum==2)
			color = "Orange";
		else if(aColorNum==3)
			color = "Calico";
		else if(aColorNum==4)
			color="Gray";
		else if(aColorNum==5)
			color="Brown";
		else
			color=0;
	};

	this.getColor = function(){
		return color;
	};

	this.setBreed = function(aBreed){
		//breed = aBreed;
		if(aBreed==0)
			breed="Tabby";
		else if(aBreed==1)
			breed="Maine Coon";
		else if(aBreed==2)
			breed="Persian";
		else if(aBreed==3)
			breed="Siamese";
		else if(aBreed==4)
			breed="Ragdoll";
		else if(aBreed==5)
			breed="Sphinx";
		else
			breed=0;
	};

	this.getBreed = function(){
		return breed;
	};

	this.setMale = function(maleBoolean){
		//true - male, false -female
		if(maleBoolean==false)
			isMale="Female";
		else
			isMale="Male";

	};

	this.getSex = function(){
		return isMale;
	};

	this.setMarkings = function(aMarking){
		// none - 0, striped - 1, spots - 2
		//markings = aMarking;
		if(aMarking==0)
			markings="None";
		else if(aMarking==1)
			markings="Stripes";
		else if(aMarking==2)
			markings="Spots";
		else
			markings=0
	};
	this.getMarkings = function(){
		return markings;
	}
	this.fixCat = function(fixedBoolean){
		if(fixedBoolean==false)
			isFixed="Not Fixed";
		else
			isFixed="Fixed";
	};

	this.checkIfFixed = function(){
		return isFixed;
	};

	this.setEyeColor = function(anEyeColor){
		//green - 0 , gray - 1, blue - 2, yellow -3
		//eyecolor = anEyeColor;
		if(anEyeColor==0)
			eyecolor="Green";
		else if(anEyeColor==1)
			eyecolor="Gray";
		else if(anEyeColor==2)
			eyecolor="Blue";
		else if(anEyeColor==3)
			eyecolor="Yellow";
		else
			eyecolor="Green";
	};

	this.getEyeColor = function(){
		return eyecolor;
	};

	this.setAge = function(anAge){
		 if(anAge <= 2){
		 	age = "Kitten"
		 }else if(anAge <=7){
		 	age = "Young Adult"
		 }else{
		 	age = "Adult"
		 }
	};
	
	this.getAgeRange = function(){
		
		if(age<2){
			ageRange = "Kitten";
		}
		else if(age >=2 && age<7){
			ageRange ="Young Adult";
		}
		else{
			ageRange = "Adult";
		}
		return ageRange;
	}

	this.getAge = function(){
		return age;
	}

	this.setHairlength = function(aHairlength){
		//short - 0, long - 1, none 2
		//hairlength = aHairlength;
		if(aHairlength==0)
			hairlength="Short";
		else if(aHairlength==1)
			hairlength="Long";
		else if(aHairlength==2)
			hairlength="None";
		else
			hairlength="Short";
	}

	this.getHairLength = function(){
		return hairlength;
	}

	this.isMatch = function(tF){
		match = tF;
	}

	this.getMatch = function(){
		return match;
	}

	this.setImg = function(anImgUrl){
		img = anImgUrl;
	}

	this.getImg = function(){
		return img;
	}

	this.catJson = function (){
		var x = 
		{
			name : name,
			breed : breed,
			color : color,
			markings : markings,
			fixed : isFixed,
			sex : isMale,
			eyecolor : eyecolor,
			age : age,
			hairlength: hairlength,
			match: match,
			img: img,

		}
		return x
	}

	this.printCat = function(){
		/*
		console.log("Name: " + name + "\n" + 
			"Breed: " + breed + "\n" +
			"Color: " + color + "\n" +
			"Sex: " + isMale + "\n" +
			"Markings: " + markings + "\n" +
			"Fixed?: " + isFixed + "\n" +
			"Eyecolor: " + eyecolor + "\n" +
			"Age: " + age + "(" + ageRange + ") \n" +
			"hairlength: " + hairlength + ".");
		*/ 
		console.log(this.catJson());	
	}

	this.displayCatThumb = function(){
		var html = "<div id='" + name + "Thumb' class='catThumb'><img src='" + img + "'></img>"+name+"</div>"
		return html;
	}

	this.displayCat = function(){
		var aCat = this.catJson();
		var html = "<div id='" + aCat.name + "Display' class='catDisplay'><img src='" + aCat.img + "'></img></div><div id='catAttributes'> Name: "+aCat.name+" <br/>Breed: " +aCat.breed+"<br/>Color: "+aCat.color+"<br/>Sex: "+aCat.sex+"<br/>Fixed: "+aCat.fixed+"<br/>Eyecolor: "+aCat.eyecolor+"<br/>Age: "+aCat.age+"<br/>Hairlength: " + aCat.hairlength+"</div>";
		//var html = "<div id='" + name + "Display' class='catDisplay'><img src='" + img + "'></img>Name: "+name+" <br/>Breed: " +breed+"<br/>Color: "+color+"<br/>Sex: "+isMale+"<br/>Fixed: "+isFixed+"<br/>Eyecolor: "+eyecolor+"<br/>Age:"+age+"<br/>Hairlength: " + hairlength+"</div>"
		//$("rightTop").html(html);
		return html;
	}

	this.displayClickedCat = function(aCat){
		var html = "<div id='" + aCat.name + "Display' class='catDisplay'><img src='" + aCat.img + "'></img></div><div id='catAttributes' Name: "+aCat.name+" <br/>Breed: " +aCat.breed+"<br/>Color: "+aCat.color+"<br/>Sex: "+aCat.sex+"<br/>Fixed: "+aCat.fixed+"<br/>Eyecolor: "+aCat.eyecolor+"<br/>Age:"+aCat.age+"<br/>Hairlength: " + aCat.hairlength+"</div>";
		$("rightTop").html(html);
		return html;
	}


	
}

function createCatDB(){
	var size = 30;
	var cats = new Array(30);
	var JSONcats = new Array(30);

	cats[0] = new Cat();
	cats[0].setColor(2);
	cats[0].setBreed(0);
	cats[0].setMale(true);
	cats[0].setMarkings(0);
	cats[0].fixCat(true);
	cats[0].setEyeColor(1);
	cats[0].setAge(0);
	cats[0].setHairlength(0);
	cats[0].setName("Master Yi");

	cats[1] = new Cat();
	cats[1].setColor(1);
	cats[1].setBreed(1);
	cats[1].setMale(false);
	cats[1].setMarkings(2);
	cats[1].fixCat(true);
	cats[1].setEyeColor(1);
	cats[1].setAge(3);
	cats[1].setHairlength(0);
	cats[1].setName("Katniss");

	cats[2] = new Cat();
	cats[2].setColor(2);
	cats[2].setBreed(4);
	cats[2].setMale(true);
	cats[2].setMarkings(3);
	cats[2].fixCat(false);
	cats[2].setEyeColor(1);
	cats[2].setAge(7);
	cats[2].setHairlength(2);
	cats[2].setName("Garren");

	cats[3] = new Cat();
	cats[3].setColor(5);
	cats[3].setBreed(3);
	cats[3].setMale(true);
	cats[3].setMarkings(1);
	cats[3].fixCat(true);
	cats[3].setEyeColor(2);
	cats[3].setAge(4);
	cats[3].setHairlength(1);
	cats[3].setName("Goku");

	cats[4] = new Cat();
	cats[4].setColor(2);
	cats[4].setBreed(4);
	cats[4].setMale(true);
	cats[4].setMarkings(2);
	cats[4].fixCat(true);
	cats[4].setEyeColor(1);
	cats[4].setAge(2);
	cats[4].setHairlength(0);
	cats[4].setName("Martini");

	cats[5] = new Cat();
	cats[5].setColor(3);
	cats[5].setBreed(2);
	cats[5].setMale(false);
	cats[5].setMarkings(0);
	cats[5].fixCat(true);
	cats[5].setEyeColor(3);
	cats[5].setAge(5);
	cats[5].setHairlength(1);
	cats[5].setName("Annie");

	cats[6] = new Cat();
	cats[6].setColor(4);
	cats[6].setBreed(0);
	cats[6].setMale(false);
	cats[6].setMarkings(2);
	cats[6].fixCat(false);
	cats[6].setEyeColor(3);
	cats[6].setAge(8);
	cats[6].setHairlength(0);
	cats[6].setName("Morgana");

	cats[7] = new Cat();
	cats[7].setColor(0);
	cats[7].setBreed(3);
	cats[7].setMale(false);
	cats[7].setMarkings(2);
	cats[7].fixCat(true);
	cats[7].setEyeColor(3);
	cats[7].setAge(11);
	cats[7].setHairlength(1);
	cats[7].setName("Rukia");

	cats[8] = new Cat();
	cats[8].setColor(3);
	cats[8].setBreed(4);
	cats[8].setMale(false);
	cats[8].setMarkings(1);
	cats[8].fixCat(true);
	cats[8].setEyeColor(2);
	cats[8].setAge(3);
	cats[8].setHairlength(0);
	cats[8].setName("Sakura");

	cats[9] = new Cat();
	cats[9].setColor(2);
	cats[9].setBreed(1);
	cats[9].setMale(true);
	cats[9].setMarkings(1);
	cats[9].fixCat(false);
	cats[9].setEyeColor(3);
	cats[9].setAge(14);
	cats[9].setHairlength(0);
	cats[9].setName("Naruto");

	cats[10] = new Cat();
	cats[10].setColor(0);
	cats[10].setBreed(3);
	cats[10].setMale(true);
	cats[10].setMarkings(0);
	cats[10].fixCat(true);
	cats[10].setEyeColor(2);
	cats[10].setAge(6);
	cats[10].setHairlength(1);
	cats[10].setName("Ghost");


	cats[11] = new Cat();
	cats[11].setColor(4);
	cats[11].setBreed(0);
	cats[11].setMale(false);
	cats[11].setMarkings(1);
	cats[11].fixCat(true);
	cats[11].setEyeColor(1);
	cats[11].setAge(20);
	cats[11].setHairlength(1);
	cats[11].setName("Whiskers");

	cats[12] = new Cat();
	cats[12].setColor(3);
	cats[12].setBreed(0);
	cats[12].setMale(false);
	cats[12].setMarkings(0);
	cats[12].fixCat(true);
	cats[12].setEyeColor(0);
	cats[12].setAge(8);
	cats[12].setHairlength(1);
	cats[12].setName("Jasmine");

	cats[13] = new Cat();
	cats[13].setColor(3);
	cats[13].setBreed(0);
	cats[13].setMale(false);
	cats[13].setMarkings(0);
	cats[13].fixCat(true);
	cats[13].setEyeColor(3);
	cats[13].setAge(2);
	cats[13].setHairlength(1);
	cats[13].setName("Lady");


	cats[14] = new Cat();
	cats[14].setColor(4);
	cats[14].setBreed(0);
	cats[14].setMale(false);
	cats[14].setMarkings(1);
	cats[14].fixCat(true);
	cats[14].setEyeColor(0);
	cats[14].setAge(3);
	cats[14].setHairlength(1);
	cats[14].setName("Rogue");

	cats[15] = new Cat();
	cats[15].setColor(0);
	cats[15].setBreed(3);
	cats[15].setMale(true);
	cats[15].setMarkings(0);
	cats[15].fixCat(true);
	cats[15].setEyeColor(2);
	cats[15].setAge(3);
	cats[15].setHairlength(0);
	cats[15].setName("Indy");

	cats[16] = new Cat();
	cats[16].setColor(2);
	cats[16].setBreed(0);
	cats[16].setMale(true);
	cats[16].setMarkings(1);
	cats[16].fixCat(true);
	cats[16].setEyeColor(3);
	cats[16].setAge(2);
	cats[16].setHairlength(1);
	cats[16].setName("William");

	cats[17] = new Cat();
	cats[17].setColor(2);
	cats[17].setBreed(0);
	cats[17].setMale(true);
	cats[17].setMarkings(0);
	cats[17].fixCat(true);
	cats[17].setEyeColor(0);
	cats[17].setAge(10);
	cats[17].setHairlength(1);
	cats[17].setName("Tigger");

	cats[18] = new Cat();
	cats[18].setColor(4);
	cats[18].setBreed(5);
	cats[18].setMale(true);
	cats[18].setMarkings(0);
	cats[18].fixCat(true);
	cats[18].setEyeColor(2);
	cats[18].setAge(1);
	cats[18].setHairlength(2);
	cats[18].setName("Anubis");

	cats[19] = new Cat();
	cats[19].setColor(0);
	cats[19].setBreed(2);
	cats[19].setMale(false);
	cats[19].setMarkings(0);
	cats[19].fixCat(true);
	cats[19].setEyeColor(1);
	cats[19].setAge(3);
	cats[19].setHairlength(1);
	cats[19].setName("Persian");

	cats[20] = new Cat();
	cats[20].setColor(2);
	cats[20].setBreed(1);
	cats[20].setMale(true);
	cats[20].setMarkings(1);
	cats[20].fixCat(true);
	cats[20].setEyeColor(0);
	cats[20].setAge(7);
	cats[20].setHairlength(1);
	cats[20].setName("Crookshanks");

	cats[21] = new Cat();
	cats[21].setColor(3);
	cats[21].setBreed(0);
	cats[21].setMale(false);
	cats[21].setMarkings(1);
	cats[21].fixCat(true);
	cats[21].setEyeColor(0);
	cats[21].setAge(2);
	cats[21].setHairlength(1);
	cats[21].setName("Cookie");

	cats[22] = new Cat();
	cats[22].setColor(3);
	cats[22].setBreed(2);
	cats[22].setMale(false);
	cats[22].setMarkings(0);
	cats[22].fixCat(false);
	cats[22].setEyeColor(2);
	cats[22].setAge(4);
	cats[22].setHairlength(1);
	cats[22].setName("Lux");

	cats[23] = new Cat();
	cats[23].setColor(0);
	cats[23].setBreed(2);
	cats[23].setMale(false);
	cats[23].setMarkings(2);
	cats[23].fixCat(true);
	cats[23].setEyeColor(2);
	cats[23].setAge(6);
	cats[23].setHairlength(1);
	cats[23].setName("Marg");

	cats[24] = new Cat();
	cats[24].setColor(0);
	cats[24].setBreed(4);
	cats[24].setMale(true);
	cats[24].setMarkings(0);
	cats[24].fixCat(true);
	cats[24].setEyeColor(2);
	cats[24].setAge(6);
	cats[24].setHairlength(0);
	cats[24].setName("Scruff");

	cats[25] = new Cat();
	cats[25].setColor(0);
	cats[25].setBreed(5);
	cats[25].setMale(true);
	cats[25].setMarkings(1);
	cats[25].fixCat(false);
	cats[25].setEyeColor(2);
	cats[25].setAge(3);
	cats[25].setHairlength(1);
	cats[25].setName("Spidey");

	cats[26] = new Cat();
	cats[26].setColor(0);
	cats[26].setBreed(3);
	cats[26].setMale(true);
	cats[26].setMarkings(0);
	cats[26].fixCat(true);
	cats[26].setEyeColor(2);
	cats[26].setAge(6);
	cats[26].setHairlength(2);
	cats[26].setName("Skinbag");

	cats[27] = new Cat();
	cats[27].setColor(2);
	cats[27].setBreed(1);
	cats[27].setMale(true);
	cats[27].setMarkings(2);
	cats[27].fixCat(true);
	cats[27].setEyeColor(2);
	cats[27].setAge(7);
	cats[27].setHairlength(0);
	cats[27].setName("Darius");

	cats[28] = new Cat();
	cats[28].setColor(2);
	cats[28].setBreed(1);
	cats[28].setMale(true);
	cats[28].setMarkings(2);
	cats[28].fixCat(false);
	cats[28].setEyeColor(2);
	cats[28].setAge(1);
	cats[28].setHairlength(1);
	cats[28].setName("Pokey");

	cats[29] = new Cat();
	cats[29].setColor(4);
	cats[29].setBreed(4);
	cats[29].setMale(true);
	cats[29].setMarkings(1);
	cats[29].fixCat(true);
	cats[29].setEyeColor(1);
	cats[29].setAge(3);
	cats[29].setHairlength(1);
	cats[29].setName("Grey Wind");

	for (var i = 0; i < cats.length; i++) {
		JSONcats[i] = cats[i].catJson();
	};

	this.getDB = function(){
		return cats;
	};

	this.getDbAsJson = function(){
		return JSONcats;
	}

}