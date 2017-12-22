//bunch of ugly html tags and text for each topic
function displaySkillsText() {

	g.navBtn[g.previousTopic].style.backgroundColor = "#252525";
	g.navBtn[0].style.backgroundColor = "#16B8BF";

	g.titleText.innerHTML = "<h1>MY SKILLS</h1>";
	g.contentText.innerHTML =
	"<p><span class='subtitle'>Technical Skills<span></p><br/><br/><br/>"+
	"<p>My skills range in many areas, getting my hands dirty with web designing, developing applications, "+
	"designing efficient database structures, and more.</p><br/><br/>"+
	"<ul>"+
	"<li>Experienced with OOP (object oriented programming) for <span class='hl'>Java</span> and "+
		"<span class='hl'>Android</span>, very familiar with <span class='hl'>C#</span></li>"+
	"<li>Practical with <span class='hl'>HTML, CSS, JavaScript, PHP, MySQL,</span> and <span class='hl'>JDBC</span></li>"+
	"<li>Designing <span class='hl'>UML diagrams for OOP</span> and <span class='hl'>EDMX for databases</span> to create strong and flexible coding</li>"+
	"<li>Capable of using <span class='hl'>GIT</span> to manage projects among the team and ensure backups </li>"+
	"<li>Consistent in following <span class='hl'>programming principles</span> and <span class='hl'>strategy patterns</span></li>"+
	"<li>Strong in <span class='hl'>GUI designing</span></li>"+
	"<li>Beginner knowledge in <span class='hl'>C++, Unity,</span> and <span class='hl'>Unreal Engine</span></li>"+
	"</ul><br/><br/>"+
	"<p><span class='subtitle'>Management Tools<span></p><br/><br/><br/>"+
	"<ul>"+
	"<li>Word, PowerPoint, Visio</li>"+
	"<li>Jira</li>"+
	"<li>Confluence</li>"+
	"<li>Invision</li>"+
	"<li>Clip Paint Studio (similar to PhotoShop)</li>"+
	"</ul><br/><br/>"+
	"<p><span class='subtitle'>Transferable Skills<span></p><br/><br/><br/>"+
	"<ul>"+
	"<li>Meticulous, organized, planner, evaluative, reflective, responsible</li>"+
	"<li>Extremely adaptive in team environments while being co-operative, open-minded, and coordinated</li>"+
	"<li>Knows how to make use of constructive criticism and feedbacks</li>"+
	"<li>Dedicated, ambitious, and always striving to do my best</li>"+
	"<li>Excel in creativity and gaining inspirations</li>"+
	"</ul>"
	;
}

function displayWorkText() {

	g.navBtn[g.previousTopic].style.backgroundColor = "#252525";
	g.navBtn[1].style.backgroundColor = "#16B8BF";

	g.titleText.innerHTML = "<h1>MY WORK EXPERIENCE</h1>";
	g.contentText.innerHTML = "<p><span class='subtitle'>" +
	"Professional work<span></p><br/><br/>"+
	"<p><span class='yearTitle'>2017 Summer - Winter</span></p><br/>"+
	"<p>My manager at <span class='hl'>CityParking</span> kept me after my internship and training was over. "+
	"From there, I worked closely with two senior developers (one was an advisor) to build the Android app. "+
	"While looking with two professionals, I was able to absorb a lot of knowledge and criticism. I learned "+
	"how to use numerous frameworks, implement APIs, and code with good practices. I was also given the role "+
	"of lead designer for the UI screens of the app. </p><br/><br/>"+
	"<p><span class='yearTitle'>2017 Spring - Summer</span></p><br/>"+
	"<p>An Android developer intern at <span class='hl'>CityParking</span> in the course of 4 weeks. Within "+
	"this period, my first mentor taught me basic frameworks, how to efficiently organize my code, use Sourcetree "+
	"to manage the project quicker, setting up an architecture, etc. Meanwhile, my manager also showed me how "+
	"to use Jira to manage tasks, properly create documentation, follow material design guidelines, perform QA, "+
	"and other skills required in a professional environment. </p><br/><br/>"+
	"<p><span class='hl'>My work experience as a new graduate is evitably small. However, you can give me the opportunity to expand it! :)</span>"+
	"</p><br/><br/><br/><br/>"+
	"<p><span class='subtitle'>School Projects<span></p><br/><br/><br/>"+
	"<ul>"+
	"<li><span class='hl'>Android:</span> coded a Tic-Tac-Toe game, a quote generator app, an app to see reviews of popular restaurants all compatible with different phone and pad screen sizes</li>"+
	"<li><span class='hl'>C#:</span> programmed games such as Tic-Tac-Toe, Battleship, and usage of the MonoGames framework to assist in running and providing animations for Tetris</li>"+
	"<li><span class='hl'>C#:</span> made a forum engine with ASP.NET</li>"+
	"<li><span class='hl'>Java:</span> built a hospital queue system application for a clinic using OOP to process patient data</li>"+
	"<li><span class='hl'>Java:</span> a client e-mailing program to send and receive e-mails using Google’s Gmail</li>"+
	"<li><span class='hl'>Java:</span> using JSF to create a professional music store website</li>"+
	"<li><span class='hl'>Java:</span> created a Mastermind game that sends small data in bytes to the server and back</li>"+
	"<li><span class='hl'>HTML, PHP, CSS, JavaScript:</span> memory game, portfolio website, a chat room using client to server, a custom search auto-completer, a web scraper to extract data from websites (educational purpose)</li>"+
	"</ul>"
	;
}

function displayEducationText() {

	g.navBtn[g.previousTopic].style.backgroundColor = "#252525";
	g.navBtn[2].style.backgroundColor = "#16B8BF";

	g.titleText.innerHTML = "<h1>MY EDUCATION</h1>";
	g.contentText.innerHTML = "<p>" +
	"I graduated and received my diploma for <span class='hl'>Computer Science</span> in "+
	"<span class='hl'>Dawson College.<span></p><br/><br/>"+
	"<p>While I don't seem impressive or polished as a University graduate, Dawson is <span class='hl'> "+
	"different</span> from other Colleges. Within their <span class='hl'>3 year career path program</span>, "+
	"they give us compressed lessons, teaching us how to start a project from scratch to a professional "+
	"product similar to what you see in the real world. They don't force us to be obsessive with one field, "+
	"they train us to become an <span class='hl'>all round developer</span>, excelling at <span class='hl'>"+
	"adapting</span> to any languages when needed. We've built games, websites, apps, databases, networks, "+
	"and even business and ethics. And that's only a fraction of our work."+
	"</p><br/><br/>"+
	"<p>But I'm not stopping there. Even with my aquired skills, I'm consistently looking for ways to expand "+
	"my knowledge. I've bought top rated online courses, played with my own work, and became <span class='hl'>"+
	"an asset</span> to companies willing to give me a chance. And we all know being a developer is more than "+
	"just a graduation paper."
	"</p>"
	;
}

function displayPassionText() {

	g.navBtn[g.previousTopic].style.backgroundColor = "#252525";
	g.navBtn[3].style.backgroundColor = "#16B8BF";

	g.titleText.innerHTML = "<h1>MY PASSION</h1>";
	g.contentText.innerHTML =
	"<p><span class='myQuote'>\"<span style='color:#16B8BF'>Developer</span> in mind. "+  
	"<span style='color:#16B8BF'>Creator</span> at heart.\" - Me</span></p><br/><br/><br/>"+

	"<p><span class='subtitle'>A little about me<span></p><br/><br/><br/>" +

	"<p>I see myself as a very silly person. I'm usually very calm and collective, but I know how to crack a few "+
	"terrible jokes from time to time. But when work comes to shove, I also know how to concentrate and get serious. "+
	"Despite coming from a very technical background, I see myself much more of a creator than a programmer. "+
	"That leads to my intereset in drawing, designing character concepts and personalities, reading books, writing "+
	"stories, creating game concepts, and composing music one day. My hobbies include those and playing games, "+
	"watching anime, and a strange obsession with looking for creative artworks.</p><br/><br/>"+

	"<p><span class='subtitle'>My ambition<span></p><br/><br/><br/>"+

	"<p>I believe any ambition typical roots back to everybody's childhood. We took in what we thought was cool and "+
	"inspiring and eventually dream to become that someone to inspire others. I don't see games as only a form of escapism. "+
	"Creating a game is another way to share your own creativity and idea of a world far beyond ours and then to experience "+
	"it. That is the stem of my passion. I want to create and share my own game and pride. Even when everybody told me how "+
	"competitive the industry is, I've never had a doubt in my mind of what I wanted to do. That desire led me to "+
	"dream of becoming one of the most well known game designer in the world and I'll do it.</p><br/><br/>"+
	
	"<p><span class='subtitle'>So what now?<span></p><br/><br/><br/>"+

	"<p>I am looking for opportunities to allow me to take the first step into the gaming industry door. I'm aware of "+
	"what is required so I'm learning how to create games using C#, C++, Unity, and Unreal Engine using 2 best-selling "+
	"online courses and skills I've acquired until now. I also plan to apply to a University to get a degree, but I'm not yet entirely sure when. Once I "+
	"start my journey, I plan to take advantage of the countless inspirations I've gathered up until today to show my strength. </p>"
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
	var imgArray = g.iconImages.concat(g.bgImages);

	for(var i=0; i<imgArray.length; i++)
		imgSrc.src = imgArray[i];
}

//window.onload initialize function
function init() {

	//images inside g var
	//gradient*
	g.iconImages = ["images/email_icon.png", "images/phone_icon.png",
					"images/fb_icon.png", "images/twitter_icon.png",
					"images/pixiv_icon.png", "images/blueline.png",
					"images/linkedin_icon.png", "images/github_icon.png"];
	g.bgImages = ["images/landscape_bg.jpg", "images/myface.jpg"];
	/*g.galleryImages = ["gallery/javacode.png", "gallery/mysqlcode.png",
					   "gallery/csharpcode.png", "gallery/webcode.png",
					   "gallery/me1.jpg", "gallery/me2.jpg", 
					   "gallery/me4.jpg", "gallery/work1.jpg",
					   "gallery/hobby1.jpg", "gallery/hobby2.jpg",
					   "gallery/lan1.png", "gallery/lan2.png"];*/

	//cache the images
	CacheImg();

	//global vars
	g.previousTopic = 0;

	//get objects from tags
	g.uncoverBtn = document.getElementById("uncoverBtn");
	g.titleText = document.getElementById("titleText");
	g.contentText = document.getElementById("contentText");
	g.navBar = document.getElementById("navBar");
	g.navBtn = getElementsByClass("navBtn");

	/*g.username = document.getElementById("nameInput");
	g.chatLabel = document.getElementById("chatLabel");
	g.chatBox = document.getElementById("chatbox");
	g.chatMsgBox = document.getElementById("chatMsgBox");
	g.sendMsg = document.getElementById("sendBtn");
	g.msg = document.getElementById("msgbox");

	//create request objects
	g.request = createRequestObject();
	g.requestInterval = createRequestObject();*/

	//init stuff
	//displaySkillsText();
	displaySkillsText();
	g.previousTopic = 0;
	
	/*g.msgNo = 0;
	g.chatBox.style.visibility = 'hidden';
	g.chatMsgBox.style.visibility = 'hidden';
	g.callServer;*/

	//add events
	addEvent(g.uncoverBtn, "click", uncoverTopLayer);

	//not sure if onchange event is appropriate, was running out of time
	//and my friend told me it's the quickiest fix
	/*addEvent(g.username, "change", showChat);
	addEvent(g.sendMsg, "click", sendMsgToChat);*/
	//alert("init");
}

window.onload = init;