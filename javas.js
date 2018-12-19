var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
//var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init()
{
    setupModeButtons();
    setupSquareColors();
    reset();
}

function setupModeButtons()
{
    for (var i=0; i < modeButtons.length; i++)
    {
    modeButtons[i].addEventListener("click",function()
        {   
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent === "Easy" )
            {
            numSquares = 3;
            }
        else
            {
            numSquares = 6;
            }
        reset();

        });
    }   
}

function setupSquareColors()
{
    for (var i = 0; i < squares.length; i++)
{
    //add intial colors
    //squares[i].style.background = colors[i];

    //add click listeners
    squares[i].addEventListener("click", function()
    {
        //grab color of picked square and compare
        var clickedColor = this.style.backgroundColor;
        console.log(clickedColor + " " + pickedColor );
        if (clickedColor === pickedColor)
        { 
            //alert ("matched");
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
            
        }
        else
        {
            //alert("wrong");
            this.style.backgroundColor="#232323";
            messageDisplay.textContent = "Try again";
        }
        
    });
}
}



function reset()
{
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++)
    {
    //add intial colors
    if (colors[i])
    {
        squares[i].style.display = "block";
        squares[i].style.background = colors[i];
    }
    else
    {
        squares[i].style.display = "none";
    }
    
    }
    h1.style.backgroundColor="steelblue";


}


resetButton.addEventListener("click",function()
{
reset();
})
//colorDisplay.textContent = pickedColor;

function changeColors(color)
{
        for (var i = 0; i < squares.length; i++)
        {
            squares[i].style.backgroundColor = color;
        } 
}

function pickColor()
    {
        var random = Math.floor(Math.random() * colors.length);
        return colors[random];
    }

function generateRandomColors(num)
    {
        //make array and add num random color and then return
        var arr = [];

        for ( var i = 0; i < num; i++)
        {
            arr.push(randomColors());

        }
        return arr;
    }

function randomColors()
    {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        // pick a r b and g  from 0 to 255
        return "rgb(" + r + ", " + g + ", " + b + ")"; 
    }

