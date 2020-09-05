var numSquares = 6;
var colors = generateRandomColors(numSquares);

var pickedColor = colors[getRandomInt(0,colors.length)];
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var squares = document.getElementsByClassName("square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function(){
    //new game with 3 colors
    this.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    newGame();
    for(var i = 0; i < squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click",function(){
    //new game with 6 colors
    this.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    newGame();
    for(var i = 0; i < squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
    }
    
});

resetButton.addEventListener("click",function(){
    //generate all new colors
    newGame();
    for(var i=0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
});

//style.backgroundColor is better than style.background (compatibility!)
for(var i=0; i < squares.length; i++){
    //initial colors
    squares[i].style.backgroundColor = colors[i];

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

function newGame(){
    colors = generateRandomColors(numSquares);
    pickedColor = colors[getRandomInt(0,colors.length)];
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "#232323";
    resetButton.textContent = "New Colors";
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
