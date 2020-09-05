var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]

var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var squares = document.getElementsByClassName("square");

//style.backgroundColor is better than style.background (compatibility!)
for(var i=0; i < squares.length; i++){
    //initial colors
    squares[i].style.backgroundColor = colors[i];

    //click listeners
    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            alert("WIN");
        }
        else{
            alert("LOOSE");
        }
    });
}