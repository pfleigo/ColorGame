let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");
let resetButton = document.getElementById("reset");
let modeButtons = document.querySelectorAll(".mode")

init();

function init(){
	//mode buttons event listener
	for(let i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			//ternary operator, same like if function
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;

			reset();
		});
	}
	//square button listener
	for (let i = 0; i < squares.length; i++) {
	//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab collor of clicked square
			let clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play again?";
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again!";

			}
		});
	}
	//reset picks random colors
	reset();
}

function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colors of square
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for (let i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});

function changeColors(color) {
	//loop through all squares
	for (let i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	//gives me a number between 1 and 6
	let random = Math.floor(Math.random() * colors.length);
	//tells me which color to pick from our colors array
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	let arr = []
	//repeat num times
	for (let i = 0; i < num; i++) {
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor () {
	//pick a "red" from 0 to 255
	let r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 to 255
	let g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 to 255
	let b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}