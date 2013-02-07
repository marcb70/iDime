function Cat(){
	var aCat = {
		name : "", //anything
		color : 0, //white - 0, black - 1, orange - 2 (must be male), calico - 3 (must be female), gray - 4, brown - 5
		breed : 0, //tabby - 0, maine coon - 1, persian - 2, siamese - 3, ragdoll - 4, sphinx - 5 
		isMale : false , //true - male, false -female
		markings: 0, // none - 0, stripped - 1, spots - 2
		isFixed:false, // spayed or neutered - true, else false
		eyecolor: 0, //green - 0 , gray - 1, blue - 2, yellow -3
		age: 0,
		hairlength:"";//short - 0, long - 1, none 2


	}
	return aCat;
}

function createCatDB() = {

var cats = [];


cats[0] = new Cat();
cats[0].color = 2;
cats[0].breed = 0;
cats[0].isMale = true;
cats[0].markings = 0;
cats[0].isFixed = true;
cats[0].eyecolor = 1;
cats[0].age = 0;
cats[0].hairlength = 0;
cats[0].name = "Master Yi";

cats[1] = new Cat();
cats[1].color = 1;
cats[1].breed = 1;
cats[1].isMale = false;
cats[1].markings = 2;
cats[1].isFixed = true;
cats[1].eyecolor = 1;
cats[1].age = 3;
cats[1].hairlength = 0;
cats[1].name = "Katness";

cats[2] = new Cat();
cats[2].color = 2;
cats[2].breed = 4;
cats[2].isMale = true;
cats[2].markings = 3;
cats[2].isFixed = false;
cats[2].eyecolor = 1;
cats[2].age = 7;
cats[2].hairlength = 2;
cats[2].name = "Garren";

cats[3] = new Cat();
cats[3].color = 5;
cats[3].breed = 3;
cats[3].isMale = true;
cats[3].markings = 1;
cats[3].isFixed = true;
cats[3].eyecolor = 2;
cats[3].age = 4;
cats[3].hairlength = 1;
cats[3].name = "Goku";

cats[4] = new Cat();
cats[4].color = 2;
cats[4].breed = 4;
cats[4].isMale = true;
cats[4].markings = 2;
cats[4].isFixed = true;
cats[4].eyecolor = 1;
cats[4].age = 2;
cats[4].hairlength = 0;
cats[4].name = "Martini";

cats[5] = new Cat();
cats[5].color = 3;
cats[5].breed = 2;
cats[5].isMale = false;
cats[5].markings = 0;
cats[5].isFixed = true;
cats[5].eyecolor = 3;
cats[5].age = 5;
cats[5].hairlength = 1;
cats[5].name = "Annie";

cats[6] = new Cat();
cats[6].color = 4;
cats[6].breed = 0;
cats[6].isMale = false;
cats[6].markings = 3;
cats[6].isFixed = false;
cats[6].eyecolor = 3;
cats[6].age = 8;
cats[6].hairlength = 0;
cats[6].name = "Morgana";

cats[7] = new Cat();
cats[7].color = 0;
cats[7].breed = 3;
cats[7].isMale = false;
cats[7].markings = 2;
cats[7].isFixed = true;
cats[7].eyecolor = 3;
cats[7].age = 11;
cats[7].hairlength = 1;
cats[7].name = "Rukia";

cats[8] = new Cat();
cats[8].color = 3;
cats[8].breed = 4;
cats[8].isMale = false;
cats[8].markings = 1;
cats[8].isFixed = true;
cats[8].eyecolor = 2;
cats[8].age = 3;
cats[8].hairlength = 0;
cats[8].name = "Sakura";

cats[9] = new Cat();
cats[9].color = 2;
cats[9].breed = 1;
cats[9].isMale = true;
cats[9].markings = 1;
cats[9].isFixed = false;
cats[9].eyecolor = 3;
cats[9].age = 14;
cats[9].hairlength = 0;
cats[9].name = "Naruto";

cats[10] = new Cat();
cats[10].color = 0;
cats[10].breed = 3;
cats[10].isMale = true;
cats[10].markings = 0;
cats[10].isFixed = true;
cats[10].eyecolor = 2;
cats[10].age = 6;
cats[10].hairlength = 1;
cats[10].name = "Ghost";

cats[11] = new Cat();
cats[11].color = 4;
cats[11].breed = 0;
cats[11].isMale = false;
cats[11].markings = 1;
cats[11].isFixed = true;
cats[11].eyecolor = 1;
cats[11].age = 20;
cats[11].hairlength = 1;
cats[11].name = "Whiskers";

cats[12] = new Cat();
cats[12].color = 3;
cats[12].breed = 0;
cats[12].isMale = false;
cats[12].markings = 0;
cats[12].isFixed = true;
cats[12].eyecolor = 0;
cats[12].age = 8;
cats[12].hairlength = 1;
cats[12].name = "Jasmine";

cats[13] = new Cat();
cats[13].color = 3;
cats[13].breed = 0;
cats[13].isMale = false;
cats[13].markings = 0;
cats[13].isFixed = true;
cats[13].eyecolor = 3;
cats[13].age = 2;
cats[13].hairlength = 1;
cats[13].name = "Lady";


cats[14] = new Cat();
cats[14].color = 4;
cats[14].breed = 0;
cats[14].isMale = false;
cats[14].markings = 1;
cats[14].isFixed = true;
cats[14].eyecolor = 0;
cats[14].age = 3;
cats[14].hairlength = 1;
cats[14].name = "Rogue;

cats[15] = new Cat();
cats[15].color = 0;
cats[15].breed = 3;
cats[15].isMale = true;
cats[15].markings = 0;
cats[15].isFixed = true;
cats[15].eyecolor = 2;
cats[15].age = 3;
cats[15].hairlength = 0;
cats[15].name = "Indy";

cats[16] = new Cat();
cats[16].color = 2;
cats[16].breed = 0;
cats[16].isMale = true;
cats[16].markings = 1;
cats[16].isFixed = true;
cats[16].eyecolor = 3;
cats[16].age = 2;
cats[16].hairlength = 1;
cats[16].name = "William";

cats[17] = new Cat();
cats[17].color = 1;
cats[17].breed = 0;
cats[17].isMale = true;
cats[17].markings = 0;
cats[17].isFixed = true;
cats[17].eyecolor = 0;
cats[17].age = 10;
cats[17].hairlength = 1;
cats[17].name = "Tigger";

cats[18] = new Cat();
cats[18].color = 4;
cats[18].breed = 5;
cats[18].isMale = true;
cats[18].markings = 0;
cats[18].isFixed = true;
cats[18].eyecolor = 2;
cats[18].age = 1;
cats[18].hairlength = 2;
cats[18].name = "Anubis";

cats[19] = new Cat();
cats[19].color = 0;
cats[19].breed = 2;
cats[19].isMale = false;
cats[19].markings = 0;
cats[19].isFixed = true;
cats[19].eyecolor = 1;
cats[19].age = 3;
cats[19].hairlength = 1;
cats[19].name = "Persian";

cats[20] = new Cat();
cats[20].color = 2;
cats[20].breed = 1;
cats[20].isMale = true;
cats[20].markings = 1;
cats[20].isFixed = true;
cats[20].eyecolor = 0;
cats[20].age = 7;
cats[20].hairlength = 1;
cats[20].name = "Crookshanks";

cats[21] = new Cat();
cats[21].color = 3;
cats[21].breed = 0;
cats[21].isMale = false;
cats[21].markings = 1;
cats[21].isFixed = true;
cats[21].eyecolor = 0;
cats[21].age = 2;
cats[21].hairlength = 1;
cats[21].name = "Cookie";

cats[22] = new Cat();
cats[22].color = 3;
cats[22].breed = 2;
cats[22].isMale = false;
cats[22].markings = 0;
cats[22].isFixed = false;
cats[22].eyecolor = 2;
cats[22].age = 4;
cats[22].hairlength = 1;
cats[22].name = "Lux";

cats[23] = new Cat();
cats[23].color = 0;
cats[23].breed = 2;
cats[23].isMale = false;
cats[23].markings = 2;
cats[23].isFixed = true;
cats[23].eyecolor = 2;
cats[23].age = 6;
cats[23].hairlength = 1;
cats[23].name = "Marg";

cats[24] = new Cat();
cats[24].color = 0;
cats[24].breed = 4;
cats[24].isMale = true;
cats[24].markings = 0;
cats[24].isFixed = true;
cats[24].eyecolor = 2;
cats[24].age = 6;
cats[24].hairlength = 0;
cats[24].name = "Scruff";

cats[25] = new Cat();
cats[25].color = 0;
cats[25].breed = 5;
cats[25].isMale = true;
cats[25].markings = 1;
cats[25].isFixed = false;
cats[25].eyecolor = 2;
cats[25].age = 3;
cats[25].hairlength = 1;
cats[25].name = "Spidey";

cats[26] = new Cat();
cats[26].color = 0;
cats[26].breed = 3;
cats[26].isMale = true;
cats[26].markings = 0;
cats[26].isFixed = true;
cats[26].eyecolor = 2;
cats[26].age = 6;
cats[26].hairlength = 2;
cats[26].name = "Skinbag";

cats[27] = new Cat();
cats[27].color = 2;
cats[27].breed = 1;
cats[27].isMale = true;
cats[27].markings = 2;
cats[27].isFixed = true;
cats[27].eyecolor = 2;
cats[27].age = 7;
cats[27].hairlength = 0;
cats[27].name = "Darius";

cats[28] = new Cat();
cats[28].color = 2;
cats[28].breed = 1;
cats[28].isMale = true;
cats[28].markings = 2;
cats[28].isFixed = false;
cats[28].eyecolor = 2;
cats[28].age = 1;
cats[28].hairlength = 1;
cats[28].name = "Pokey";

cats[29] = new Cat();
cats[29].color = 4;
cats[29].breed = 4;
cats[29].isMale = true;
cats[29].markings = 1;
cats[29].isFixed = true;
cats[29].eyecolor = 1;
cats[29].age = 3;
cats[29].hairlength = 1;
cats[29].name = "Grey Wind";

return cats;
}