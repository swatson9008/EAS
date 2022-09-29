//grid variables

const container = document.getElementById("mainContainer");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");



const clearButton = document.getElementById("clearbtn");
const gridChange = document.getElementById("gridSize");
const rainbowC = document.getElementById("rainbowBtn");

let colorValue = "black"

//const rainbowValue = ["green", "blue", "red", "yellow", "cyan", "orange", "magenta"];

//let startingSize = 30;

//lets make a row
function makeRows(rowNum){
    for (r = 0; r < rowNum; r++){
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    }
}

//lets make a column 
function makeColumns (cellNum){
    for (i = 0; i < rows.length; i++){
        for (g = 0; g < cellNum; g++){
            let newCell = document.createElement("div");
            rows[g].appendChild(newCell).className = "cell";
            //function that detects mouseover and changes color
            newCell.addEventListener('mouseover', changeColor)
            function changeColor(){
                newCell.style.backgroundColor=colorValue;
            }

            //clear canvas
            clearButton.addEventListener('click', clearCanvas);
            function clearCanvas(){   
                newCell.style.backgroundColor="white"};

            //rainbow colors
            rainbowC.addEventListener('click', rainbowRandomize);
            function rainbowRandomize() {
            let rainbowValue = '#'+Math.floor(Math.random()*16777215).toString(16);
            newCell.addEventListener('mouseover', changeColor)
            function changeColor(){
                newCell.style.backgroundColor=rainbowValue;
            }
            
            
            }
            
        }
    }
}



//lets make a standard sized grid
function standardGrid () {
    makeRows(16);
    makeColumns(16);
}

//makes a grid
standardGrid();

//clear grid function
function clearGrid() {
    const gridMap = Array.from(container.childNodes);
    gridMap.forEach((element) => {
      container.removeChild(element);
    });
  }

//changes grid size
gridChange.addEventListener('click', sizeChange);
function sizeChange(){
    let newSize = prompt("Enter the size of the canvas");
    let wantedSize = parseInt(newSize);
    if (wantedSize <= 100 && wantedSize > 1) {
       function alteredGrid(){
        makeRows(wantedSize)
        makeColumns(wantedSize)
       };
       clearGrid();
       alteredGrid();
    }
    if (wantedSize > 100){
        alert("Please choose a smaller size")
    }
    else if (isNaN(wantedSize)){
        alert("Please enter a number between 1 and 100")
    }
}




//rainbow colors


