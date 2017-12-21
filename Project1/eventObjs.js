//Global namespace
var g = {};


//Set up each cover with an image
function SetUpCover() {
	for(var i=0; i<16; i++) {
		g.coverPics[i].src = g.coverImages[i];
		g.coverPics[i].style.visibility = 'visible';
	}
}

//Randomizes midde layer by pair pictures on each tile
function RandomizePicturesOnTiles() {
	var tempPicArray = [];
	var loop = 0;
	var i = 0;

	//place tileImages in a temp array
	while(loop != 2) {
		for(var j=0; j<8; j++) {
			tempPicArray[i] = g.tileImages[j];
			i++;
		}
		loop++;
	}

	//randomize temp array
	var l = tempPicArray.length;
	var a, b;
		//while there are remaining elements
		while(l) {
			//get remaining element
			a = Math.floor(Math.random() * l--);
			//swap elements
			b = tempPicArray[l];
			tempPicArray[l] = tempPicArray[a];
			tempPicArray[a] = b;
		}

	//place randomized temp array into tile by id
	for(var i=0; i<g.tilePics.length; i++) {
		g.tilePics[i].src = tempPicArray[i];
		g.tilePics[i].style.visibility = 'visible';
	}
}

function uncoverEvent(e) {
	var evt = e || window.event;
	if(evt.type == "click") {
		var target = evt.target || evt.srcElement;
		var targetId = target.id.substring(1);
		//alert(targetId);
		OnMatchingEvent(targetId);
	}
	else if(evt.type == "keypress") {
		var charCode = evt.which || evt.keycode;
		//alert(charCode-96);
		//substract charCode by 96 to get index 
		//ie. B key => 2
		OnMatchingEvent(charCode-96);
	}
}

function OnMatchingEvent(tileNum) {
	tileNum = parseInt(tileNum);
	//if isn't already revealed
	if(g.coverPics[tileNum-1].style.visibility != "hidden") {

		g.coverPics[tileNum-1].style.visibility = 'hidden';
		g.clickCtr++;

		if(g.clickCtr != 2) {
			g.firstTileIndex = tileNum-1;
		}
		else if(g.clickCtr == 2) {
			g.clickCtr = 0;
			g.secondTileIndex = tileNum-1;
			//remove events
			removeEvent(g.cover, "click", uncoverEvent);
			removeEvent(window, "keypress", uncoverEvent);
			//delay and execute after 2 seconds
			setTimeout(function() { 
				//alert("KEK");
				if(g.tilePics[g.firstTileIndex].src !=
						g.tilePics[g.secondTileIndex].src) {

					g.coverPics[g.firstTileIndex].style.visibility = 'visible';
					g.coverPics[g.secondTileIndex].style.visibility = 'visible';
				}
				else if(g.tilePics[g.firstTileIndex].src ==
							g.tilePics[g.secondTileIndex].src) {
					g.numOfPairs++;
					g.tilePics[g.firstTileIndex].style.visibility = 'hidden';
					g.tilePics[g.secondTileIndex].style.visibility = 'hidden';
					CheckIfWin();
				}
				addEvent(g.cover, "click", uncoverEvent);
				addEvent(window, "keypress", uncoverEvent);
			}, 1000);
			
		}
	}
}

function CheckIfWin() {
	if(g.numOfPairs == 8) {
		alert("YOU WIN");
		g.numOfPairs = 0;
		g.replayBtn.style.visibility = 'visible';
		g.resetBtn.style.visibility = 'hidden';
		g.endBtn.style.visibility = 'hidden';
	}
}

//Changes background (bottom layer) image
function ChangeBackground() {
	
	if(g.backgroundCtr == 4)
		g.backgroundCtr = 0
	else
		g.backgroundCtr++;

	g.bgPic.src = g.bgImages[g.backgroundCtr];
}

function EndEvent() {
	for(var i=0; i<16; i++) {
		g.coverPics[i].style.visibility = 'hidden';
		g.tilePics[i].style.visibility = 'hidden';
	}
	g.replayBtn.style.visibility = 'visible';
	g.resetBtn.style.visibility = 'hidden';
	g.endBtn.style.visibility = 'hidden';
}

function ResetEvent() {
	SetUpCover();
	RandomizePicturesOnTiles();
}

function ReplayEvent() {
	ChangeBackground();
	SetUpCover();
	RandomizePicturesOnTiles();
	g.replayBtn.style.visibility = 'hidden';
	g.endBtn.style.visibility = 'visible';
	g.resetBtn.style.visibility = 'visible';
}

function HoverEvent(e) {
	var evt = e || window.event;
	var target = evt.target || evt.srcElement;

	if(target.id == "endBtn")
		g.endBtn.src = g.btnImages[1];
	else if(target.id == "resetBtn")
		g.resetBtn.src = g.btnImages[3];
	else if(target.id == "replayBtn")
		g.replayBtn.src = g.btnImages[5];
}

function UnhoverEvent() {
	g.endBtn.src = g.btnImages[0];
	g.resetBtn.src = g.btnImages[2];
	g.replayBtn.src = g.btnImages[4];
}

//Cache images
function CacheImg() {
	var imgSrc = new Image();
	var imgArray = g.bgImages.concat
					(g.tileImages.concat
						(g.coverImages.concat
							(g.btnImages)));
	for(i=0; i<imgArray.length; i++)
		imgSrc.src = imgArray[i];
}

function init() {
	
	//images inside g var
	g.bgImages = ["pictures/Flowey.png",
					"pictures/Toriel.png",
					"pictures/Papyrus.png",
					"pictures/Monster_Kid.png",
					"pictures/Asgore.png"];
	g.tileImages = ["pictures/Froggit.png", 
					 "pictures/Woshua.png",
					 "pictures/Napstablook.png",
					 "pictures/Temmie.png",
					 "pictures/Vulkin.png",
					 "pictures/Whimsun.png",
					 "pictures/Asriel.png",
					 "pictures/AnnoyingDog.png"];
	g.coverImages = ["pictures/alphabets/cover_A.png",
					 "pictures/alphabets/cover_B.png",
					 "pictures/alphabets/cover_C.png",
					 "pictures/alphabets/cover_D.png",
					 "pictures/alphabets/cover_E.png",
					 "pictures/alphabets/cover_F.png",
					 "pictures/alphabets/cover_G.png",
					 "pictures/alphabets/cover_H.png",
					 "pictures/alphabets/cover_I.png",
					 "pictures/alphabets/cover_J.png",
					 "pictures/alphabets/cover_K.png",
					 "pictures/alphabets/cover_L.png",
					 "pictures/alphabets/cover_M.png",
					 "pictures/alphabets/cover_N.png",
					 "pictures/alphabets/cover_O.png",
					 "pictures/alphabets/cover_P.png"];
	g.btnImages = ["pictures/end_btn.png",
					"pictures/end_btn_hover.png",
					"pictures/reset_btn.png",
					"pictures/reset_btn_hover.png",
					"pictures/replay_btn.png",
					"pictures/replay_btn_hover.png"];

	//cache the images
	CacheImg();
	
	//global vars
	g.backgroundCtr = 0;
	g.tilePictureArray = [];
	g.clickCtr = 0;
	g.firstTileIndex;
	g.secondTileIndex;
	g.numOfPairs = 0;  //8 pairs would notify the finish
	
	//get tags
	g.bgPic = document.getElementById("bgPic");
	g.tilePics = getElementsByClass("tile");
	g.coverPics = getElementsByClass("cover");
	g.cover = document.getElementById("puzzleBoxTop");
	g.endBtn = document.getElementById("endBtn");
	g.resetBtn = document.getElementById("resetBtn");
	g.replayBtn = document.getElementById("replayBtn");
	
	//init layer pictures
	g.bgPic.src = g.bgImages[0];
	g.endBtn.src = g.btnImages[0];
	g.resetBtn.src = g.btnImages[2];
	g.replayBtn.src = g.btnImages[4];
	g.replayBtn.style.visibility = 'hidden';
	SetUpCover();
	RandomizePicturesOnTiles();
	
	//add events
	addEvent(g.cover, "click", uncoverEvent);
	addEvent(window, "keypress", uncoverEvent);
	addEvent(g.endBtn, "click", EndEvent);
	addEvent(g.resetBtn, "click", ResetEvent);
	addEvent(g.replayBtn, "click", ReplayEvent);

	addEvent(g.endBtn, "mouseover", HoverEvent);
	addEvent(g.resetBtn, "mouseover", HoverEvent);
	addEvent(g.replayBtn, "mouseover", HoverEvent);
	addEvent(g.endBtn, "mouseout", UnhoverEvent);
	addEvent(g.resetBtn, "mouseout", UnhoverEvent);
	addEvent(g.replayBtn, "mouseout", UnhoverEvent);
	//couldn't find the opposite of hover
}

window.onload = init;