
//grid variables
const container = document.getElementById("mainContainer");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

const clearButton = document.getElementById("clearbtn");


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
            /// function that detects mouseover and changes color
            newCell.addEventListener('mouseover', changeColor)
            function changeColor(){
                newCell.style.backgroundColor="black";
            }

            //clear canvas
            clearButton.addEventListener('click', clearCanvas);
            function clearCanvas(){   
                newCell.style.backgroundColor="white"};
            
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






