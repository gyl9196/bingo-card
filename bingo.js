window.onload=initAll;
var usedNums = new Array(76);


function initAll(){
	
	if (document.getElementById) {
		document.getElementById("reload").onclick = anotherCard;
		newCard();
	}else{
		alert("Sorry, you browser does not support this script")
	}
	
}

function newCard(){
	for (var i = 0; i < 24; i++) {
		setSquare(i);
	}
}

function setSquare(thisSquare){
	var currSquare = "square" + thisSquare;
	var colPlace = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
	var colBase = colPlace[thisSquare]*15;
	var newNum;
	// if (!usedNums[newNum]) {
	// 	usedNums[newNum] = true;
	// 	document.getElementById(currSquare).innerHTML = newNum;
	// }
	do{
		newNum = colBase + getNewNum() + 1;
	}while(usedNums[newNum]);
	usedNums[newNum] = true;
	document.getElementById(currSquare).innerHTML = newNum;
}

function getNewNum(){
	return Math.floor(Math.random()*15);
}

function anotherCard(){
	// to reset the boolean value to false
	for (var i = 0; i < usedNums.length; i++) {
		usedNums[i] = false;
	}
	newCard();
	return false;
}