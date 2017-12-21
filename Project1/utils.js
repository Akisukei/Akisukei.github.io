
//Adds event listeners to objects
function addEvent(obj, type, fnc) {
	if(obj.addEventListener) {
		obj.addEventListener(type, fnc, false);
	}
	else if(obj.attachEvent) {
		obj.attachEvent("on"+type, fnc);
	}
}

//Removes event listeners
function removeEvent(obj, type, fnc) {
	if(obj.removeEventListener) {
		obj.removeEventListener(type, fnc, false);
	}
	else if(obj.detachEvent) {
		obj.detachEvent("on"+type, fnc);
	}
}

//Get all elements from class name in an array to return
function getElementsByClass(cn) {
	var allElements = document.getElementsByTagName("*");
	var classArray = [];
	for(var i=0; i<allElements.length; i++)
		if(allElements[i].className == cn) 
			classArray.push(allElements[i]);
	return classArray;
}

