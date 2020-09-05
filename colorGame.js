var numSquares = 6;
var colors = [];
var pickedColor = colors[getRandomInt(0,colors.length)];

var colorDisplay = document.getElementById("colorDisplay");
var squares = document.getElementsByClassName("square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

colorDisplay.textContent = pickedColor;
init();

function init(){
    //mode buttons 
    setUpModeButtons();
    setUpSquares();
    newGame();
}

resetButton.addEventListener("click",function(){
    newGame();
});

function setUpModeButtons(){
    for(var i=0; i<modeButtons.length; i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            newGame();
        });
    }
}

function setUpSquares(){
    //style.backgroundColor is better than style.background (compatibility!)
    for(var i=0; i < squares.length; i++){
        //click listeners
        squares[i].addEventListener("click",function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play again?"
                h1.style.backgroundColor = pickedColor;
                changeColors(pickedColor);
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function newGame(){
    colors = generateRandomColors(numSquares);
    pickedColor = colors[getRandomInt(0,colors.length)];
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    for(var i=0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue"; 
}

function changeColors(color){
    for(var i=0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function generateRandomColors(numColors){
    var colors = [];
    for(var i=0; i<numColors; i++){
      colors.push(getRandomRGB());
    }
    return colors;
}

function getRandomRGB(){
    var R = getRandomInt(0,256);
    var G = getRandomInt(0,256);
    var B = getRandomInt(0,256);
    return `rgb(${R}, ${G}, ${B})`;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
