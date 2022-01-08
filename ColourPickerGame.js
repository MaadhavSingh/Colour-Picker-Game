var squares = document.querySelectorAll(".square");
var colorName = document.getElementById("rgb");
var tryAgain = document.getElementById("tryAgain");
var h1 = document.querySelector("h1");
var newColor = document.querySelector("button");
var modeButton = document.querySelectorAll(".mode")
var colors = generateRandomColor(6);
var pickedColor = pickColor(colors);
init();

function init(){
	
	setupMode();
	colorSquares();
	newGame(6);
	newColor.addEventListener("click", function(){
		newGame(6);
	});
}


function setupMode(){
	for(var i=0; i<modeButton.length; i++){
	modeButton[i].addEventListener("click", function(){
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected")
		this.classList.add("selected");
		if(this.textContent === "Easy"){
			num = 3;
		} else{
			num = 6;
		}
		newColor.addEventListener("click", function(){
			newGame(num);
		});
		newGame(num);
	});
}
}

function colorSquares(){
	for(var i=0; i<squares.length; i++){
	//square Colors
	squares[i].style.background = colors[i];
	//click square check 
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor){
			tryAgain.textContent = "Correct";
			AllSquares(clickedColor);
			h1.style.background = clickedColor;
			newColor.textContent = "Try Again!";
		} else {
			tryAgain.textContent = "Try Again";
			this.style.background = "#232323";
		}
});
}
}

function AllSquares(color){
	for(var i = 0; i<squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(colors){
	var random = Math.floor(Math.random()*colors.length)
	return colors[random];
	}

function generateRandomColor(num){
	arr = []
	for(var i=0; i<num ; i++){
		arr.push(randomColor());
		
	}
	return arr;
}

function randomColor(){
	r = Math.floor(Math.random()*256);
	g = Math.floor(Math.random()*256);
	b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function newGame(num){
	colors = generateRandomColor(num);
	pickedColor = pickColor(colors);
	colorName.textContent = pickedColor;
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
		//square Colors
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "rgb(23, 110, 200)";
	tryAgain.textContent = "";
	newColor.textContent = "New Colors";
}
