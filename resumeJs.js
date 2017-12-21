//bunch of ugly html tags and text for each topic
function displaySkillsText() {

	g.navBtn[g.previousTopic].style.backgroundColor = "#252525";
	g.navBtn[0].style.backgroundColor = "#16B8BF";

	g.titleText.innerHTML = "<h1>MY TECHNICAL SKILLS</h1>";
	g.contentText.innerHTML = "<p>" + 
	"Studying in Dawson College, my </p><h4>technical skills</h4><p> ranges in many areas. Ranging"+
	" from </p><h4>web design</h4><p> to creating applications with </p><h4>OOP</h4><p>"+
	" (Object Oriented Programming) and designing efficient </p><h4>database entity structures</h4><p>."+
	" Here is the list of skills I have experience in:"
	+ "</p>" + "<br/><br/><br/><br/>" 
	+ "<div id='leftSkillList'>"
	+ "<ul><li>Java</li><li>C#</li><li>HTML</li><li>CSS</li><li>Javascript</li>"
	+ "<li>MySQL</li><li>Basic business knowledge</li></ul></div>"
	+ "<div id='rightSkillList'><h4>Other Skills</h4>"
	+ "<ul><li>Organized along with good sense of responsibilities</li>"
	+ "<li>Team work and communication abilities</li>"
	+ "<li>Adaptive in team situation and am told that I have good leadership skills</li>"
	+ "<li>Learning from constructive criticism and feedbacks</li>"
	+ "<li>Analytical and creative in making alternative solutions for improvement</li>"
	+ "<li>Perfectionist, always striving to do the best by hard work</li></ul></div>"
	;
}

function displayWorkText() {

	g.navBtn[g.previousTopic].style.backgroundColor = "#252525";
	g.navBtn[1].style.backgroundColor = "#16B8BF";

	g.titleText.innerHTML = "<h1>MY WORK EXPERIENCE</h1>";
	g.contentText.innerHTML = "<p>" + 
	" Only in 2 years of studying, I have participated in many projects, both </p><h4>solo</h4><p> and"+
	" in a </p><h4>team</h4><p>. We design our projects in ways that prioritize </p><h4>user interaction"+
	" </h4><p>while coding them as </p><h4>efficient</h4><p> as possible. I've experienced struggles of"+
	" working in a team as well as retaliating these internal problems at the same time. Being the </p>"+
	" <h4>leader</h4><p> of a team gave me experience of seeing the difference between a </p><h4>strong"+
	" cohesive team</h4><p> to a </p><h4>weak unorganized team</h4><p>. These are my main work experience"+
	" that I've acquired these 2 years:"
	+ "</p>" + "<br/><br/><br/><br/>" 
	+ "<ul><li>Built a Java GUI to display processed data for a Clinic hospital using OOP</li>"
	+ "<li>Designing & implementing games using Visual Studio C#: TicTacToe, Battleship, Tetris</li>"
	+ "<li>Created a matching game for kids and this website using html, css, and javascript</li>"
	+ "<li>In the process of exploring more uses of Ajax, XML, Json</li></ul>"
	;
}

function displayEducationText() {

	g.navBtn[g.previousTopic].style.backgroundColor = "#252525";
	g.navBtn[2].style.backgroundColor = "#16B8BF";

	g.titleText.innerHTML = "<h1>MY EDUCATION HISTORY</h1>";
	g.contentText.innerHTML = "<h4>" +
	"2016: </h4><p>Currently in 2nd year, 4th semester in Dawson College, Computer Science</p><br/><h4>"+
	"2014: </h4><p>Went to Adult Ed at St. Pius X School to study and pass my high school French</p><br/><h4>"+
	"2013: </h4><p>Graduated at Rosemount High school with diploma</p>"+
	"<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>"
	;
}

function displayPassionText() {

	g.navBtn[g.previousTopic].style.backgroundColor = "#252525";
	g.navBtn[3].style.backgroundColor = "#16B8BF";

	g.titleText.innerHTML = "<h1>MY PASSION</h1>";
	g.contentText.innerHTML = "<p>" +
	"I'm the type of person who strives and lives life by dreaming. Once I set a goal in my eyes,"+
	" I never let it out of my sight. Below are some of my </p><h4>personal passions</h4><p> and"+
	" </p><h4>personality attributes</h4><p>:"+
	"</p>" + "<br/><br/><br/><br/>" +
	"<ul><li>Ambitious in growing up as a person and gain skills to reach my goal</li>"
	+ "<li>Extremely love to discuss about anything related to my interests and sharing ideas</li>"
	+ "<li>My hobby is to draw, watch anime, play video games, and look up artworks</li>"
	+ "<li>Enthusiastic gamer at heart, dreamt of becoming a game designer since baby</li>"
	+ "<li>Cooperative and open-minded</li></ul><br/><br/><br/><br/>"
	;
}







//global namespace
var g = {};


//show content text by topic choice from nav bar
function showTextByTopic(e) {
	var evt = e || window.event;
	var target = evt.target || evt.srcElement;

	if(target.id == "skillsBtn") {
		displaySkillsText();
		g.previousTopic = 0;
	}
	else if(target.id == "workBtn") {
		displayWorkText();
		g.previousTopic = 1;
	}
	else if(target.id == "educationBtn") {
		displayEducationText();
		g.previousTopic = 2;
	}
	else if(target.id == "passionBtn") {
		displayPassionText();
		g.previousTopic = 3;
	}
}

//this function initializes content and add events after the cover has been removed
function initContentLayer() {

	addEvent(navBar, "click", showTextByTopic);
	//reveal nav options + contents by opacity
	var contentElem = document.getElementById("contentWrapper");
	
	var contentAnimation = setInterval(
		function contentFade() {
			if(contentElem.style.opacity >= 1) {
				clearInterval(contentAnimation);
				/*alert("clear");*/
			}
			else {
				contentElem.style.opacity = parseFloat(contentElem.style.opacity) + 0.05;
				g.navBar.style.opacity = parseFloat(g.navBar.style.opacity) + 0.05;
			}
		}
	, 80);
	

}

//redirects to top of page and uncovers top layer by lowering opacity
//and moving towards right
function uncoverTopLayer() {
	window.scrollTo(0,150);
	var coverElem = document.getElementById("cover");
	var pos = 0;
	var coverAnimation = setInterval(
		function coverFade() {
			if(coverElem.style.opacity <= 0) {
				clearInterval(coverAnimation);
				removeEvent(g.coverBtn, "click", uncoverTopLayer);
				/*alert("clear");*/
			}
			else {
				coverElem.style.opacity = parseFloat(coverElem.style.opacity) - 0.1;
				pos += 3;
				coverElem.style.left = pos + 'px';
			}
		}
	, 50);

	initContentLayer();
	/*alert("works");*/
}

//process server data
function processServerData() {
	//alert("processserverdata");
	var num;
	var user;
	var msg;
	
	if(g.request.readyState == 4 && g.request.status == 200) {
			//get text from request
			var text = g.request.responseText;

			//parse into xml
			if(window.DOMParser) {
				parser = new DOMParser();
				xmldoc = parser.parseFromString(text, "text/xml");
			}
			else {
				xmldoc = new ActiveXObject("Microsoft.XMLDOM");
				xmldoc.async = false;
				xmldoc.loadXML(text);
			}

			var msgArray = xmldoc.getElementsByTagName("message");
			var chatArray = xmldoc.getElementsByTagName("chat");
			//get last msg num
			g.msgNo = chatArray[0].attributes[0].value;

			for (var i=0; i<msgArray.length; i++) {
				num = msgArray[i].getElementsByTagName("msgNo")[0].childNodes[0].textContent;
				user = msgArray[i].getElementsByTagName("username")[0].childNodes[0].textContent;
				msg = msgArray[i].getElementsByTagName("msg")[0].childNodes[0].textContent;

				if(user = g.username.value)
					g.chatBox.innerHTML += "<p id='admin'>"+user+": "+msg+"</p>";
				else
					g.chatBox.innerHTML += "<p>"+user+": "+msg+"</p>";

				g.chatBox.scrollTop = g.chatBox.scrollHeight;
				//alert("DONE");
			}
		
	}
}

//process interval server data
function processIntervalServerData() {

	var num;
	var user;
	var msg;

	if(g.requestInterval.readyState == 4 && g.request.status == 200) {
			//get text from requestInterval
			var text = g.requestInterval.responseText;

			//parse into xml
			if(window.DOMParser) {
				parser = new DOMParser();
				xmldoc = parser.parseFromString(text, "text/xml");
			}
			else {
				xmldoc = new ActiveXObject("Microsoft.XMLDOM");
				xmldoc.async = false;
				xmldoc.loadXML(text);
			}

			var msgArray = xmldoc.getElementsByTagName("message");
			var chatArray = xmldoc.getElementsByTagName("chat");
			//get last msg num
			g.msgNo = chatArray[0].attributes[0].value;

			for (var i=0; i<msgArray.length; i++) {
				num = msgArray[i].getElementsByTagName("msgNo")[0].childNodes[0].textContent;
				user = msgArray[i].getElementsByTagName("username")[0].childNodes[0].textContent;
				msg = msgArray[i].getElementsByTagName("msg")[0].childNodes[0].textContent;

				g.chatBox.innerHTML += "<p>"+user+": "+msg+"</p>";

				g.chatBox.scrollTop = g.chatBox.scrollHeight;
				//alert("DONE");
			}			
	}
}

//send request to server
function serverRequest(params, async) {

	g.request.open("post","chatpgm.php",async);
	g.request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	g.request.setRequestHeader("Content-length", params.length);
	g.request.setRequestHeader("Connection", "close");
	//alert("SERVERREQUEST");
	g.request.onreadystatechange = processServerData;
	g.request.send(params);
}

//calls to retrieve over an interval
function retrievalInterval() {
	var params = "msgNo=" + g.msgNo + 
				  "&username=" + g.username.value +
				  "&msg=" + "none";
	g.requestInterval.open("post", "chatpgm.php", true);
	g.requestInterval.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	g.requestInterval.setRequestHeader("Content-length", params.length);
	g.requestInterval.setRequestHeader("Connection", "close");
	g.requestInterval.onreadystatechange = processIntervalServerData;
	g.requestInterval.send(params);
}

//sends the new message to the server
function sendMsgToChat() {

	var params = "msgNo=" + g.msgNo + 
				  "&username=" + g.username.value +
				  "&msg=" + g.msg.value;
	serverRequest(params, true);
	//reset message and regain focus
	g.msg.value = null;
	g.msg.focus();
	//alert("SENDMSG");
}

//show chat and connect after inputting name
function showChat() {

	g.chatLabel.style.visibility = 'hidden';
	g.chatBox.style.visibility = "visible";
	g.chatMsgBox.style.visibility = "visible";

	var params = "msgNo=" + g.msgNo + 
				  "&username=" + g.username.value +
				  "&msg=" + "none";
	//alert("SHOWCHAT");
	serverRequest(params, false);
	g.callServer = setInterval(retrievalInterval, 1000);

}

//function on init to cache images
function CacheImg() {
	var imgSrc = new Image();
	var imgArray = g.btnImages.concat(g.iconImages.concat
							(g.bgImages.concat(g.galleryImages)));
	for(var i=0; i<imgArray.length; i++)
		imgSrc.src = imgArray[i];
}

//window.onload initialize function
function init() {

	//images inside g var
	//gradient*
	g.btnImages = ["images/cover_btn.jpg", "images/cover_btn_hover.jpg"];
	g.iconImages = ["images/mail_icon.png", "images/phone_icon.png",
					"images/fb_icon.png", "images/twitter_icon.png",
					"images/googleplus_icon.png", "images/blueline.png"];
	g.bgImages = ["images/Landscape_3.jpg", "images/myface.jpg"];
	g.galleryImages = ["gallery/javacode.png", "gallery/mysqlcode.png",
					   "gallery/csharpcode.png", "gallery/webcode.png",
					   "gallery/me1.jpg", "gallery/me2.jpg", 
					   "gallery/me4.jpg", "gallery/work1.jpg",
					   "gallery/hobby1.jpg", "gallery/hobby2.jpg",
					   "gallery/lan1.png", "gallery/lan2.png"];

	//cache the images
	CacheImg();

	//global vars
	g.previousTopic = 0;

	//get objects from tags
	g.coverBtn = document.getElementById("coverBtn");
	g.titleText = document.getElementById("titleText");
	g.contentText = document.getElementById("contentText");
	g.navBar = document.getElementById("navBar");
	g.navBtn = getElementsByClass("navBtn");

	g.username = document.getElementById("nameInput");
	g.chatLabel = document.getElementById("chatLabel");
	g.chatBox = document.getElementById("chatbox");
	g.chatMsgBox = document.getElementById("chatMsgBox");
	g.sendMsg = document.getElementById("sendBtn");
	g.msg = document.getElementById("msgbox");

	//create request objects
	g.request = createRequestObject();
	g.requestInterval = createRequestObject();

	//init stuff
	displaySkillsText();
	
	g.msgNo = 0;
	g.chatBox.style.visibility = 'hidden';
	g.chatMsgBox.style.visibility = 'hidden';
	g.callServer;

	//add events
	addEvent(g.coverBtn, "click", uncoverTopLayer);

	//not sure if onchange event is appropriate, was running out of time
	//and my friend told me it's the quickiest fix
	addEvent(g.username, "change", showChat);
	addEvent(g.sendMsg, "click", sendMsgToChat);
	//alert("init");
}

window.onload = init;