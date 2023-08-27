
let color = "black";
let board_click = document.querySelector(".board");
let mouse = true;


// creates grid and the board size as well inserts it in the html
function cells(size){
let board = document.querySelector(".board");
board.style.gridTemplateRows= `repeat(${size}, 1fr)`;
board.style.gridTemplateColumns= `repeat(${size}, 1fr)`;
size = size * size;
for(let i =0; i<size; i++){
    let square = document.createElement("div");
    square.style.backgroundColor= "white"
    board.insertAdjacentElement("beforeend", square);
    square.addEventListener('mouseover', colorSquare);   
}
};

cells(16);

// alerts the user if the size is not correct
function changeSize (input){
    if(input >= 2 && input <= 150){
            cells(input);
        } else {
       alert("Size Not Valid");
        }
    };
    
   //change the color of the squares inside the grid 
function colorSquare(){
        if(color == 'random'){
            this.style.backgroundColor= `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    };
        
// choose the color of the div's square
function changeColor(choice){
    color = choice;
}

function reset(){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor= 'white');
};



