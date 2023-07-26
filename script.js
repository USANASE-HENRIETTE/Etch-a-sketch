let color = "black";
let click = true;
let gridSize = 16;

// Function to populate the board with squares and attach event listeners
function populateBoard(size){
 gridSize = size;
let board = document.querySelector('.board');
board.innerHTML = ""; // clear existing squares
// let squares = board.querySelectorAll('div');
// squares.forEach((div) => div.remove());
board.style.gridTemplateColumns = "repeat($(size) , 1fr)";
board.style.gridTemplateRows = "repeat($(size) , 1fr)";

let amount = size * size;


for(let i = 0; i< amount; i++){
 let square = document.createElement("div");
 // square.style.width = `${squareSize}%`;
 // square.style.height = `${squareSize}%`;
 square.style.backgroundColor = "skyblue";
  square.addEventListener("mouseover", colorSquare);
  board.appendChild(square);
 // board.insertAdjacentElement("beforeend", square);
}
}

populateBoard(gridSize);

function changeSize(input){
 if (input >= 2 && input <= 100){
   document.querySelector('.error').style.display = 'none';
   gridSize = input;
 }
 else {
   document.querySelector('.error').style.display = 'flex';
 
 }
 }

 // Function to set the background color of the square when the mouse hovers over it
 function colorSquare() {
   if (click){
   if (color === "random") {
   this.style.backgroundColor = `hsl(${Math.random() * 300}, 100%, 50%)`;

 } else if (color === "erasor") {
   this.style.backgroundColor = "white"; // Erasor mode, set the color to white
 }
 
 else {
   this.style.backgroundColor = color;
 }
}
}
 function changeColor(choice) {
   color = choice;
 }

 function resetBoard() {
   let board = document.querySelector('.board');
   let squares = board.querySelectorAll('div');
squares.forEach((div) => (div.style.backgroundColor = "skyblue"));

 }

 function setBoardSize() {
   if (gridSize >= 2 && gridSize <= 100) {
     populateBoard(gridSize);
   } else {
     document.querySelector('>error').style.display = 'flex';
   }
 }

 document.querySelector("body").addEventListener("click", (e) => {
   if (e.target.tagName !== 'BUTTON'){

   click = !click;
   if(click) {
     document.querySelector('.mode').textContent = "Mode : Coloring";
   } else{
     document.querySelector('.mode').textContent = "Mode : Not Coloring";
   }
 } 
 });
