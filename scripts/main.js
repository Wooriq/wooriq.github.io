var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/sample-image2.jpeg') {
		myImage.setAttribute('src' , 'images/sample-image.jpeg') 
	} else {
		myImage.setAttribute('src' , 'images/sample-image2.jpeg')
		}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	
	var myName = prompt('Please enter a new title.');
	localStorage.setItem('name' , myName);
	myHeading.innerHTML = myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = storedName;
}

myButton.onclick = function() {
  setUserName();
}
