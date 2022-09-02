/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
// variables needed to track the state of the game
let isWinner // is there a winner? true or false
let turn // is it X's turn or O's turn?
let board = [] // state of the board after each turn, will then reveal a winner (end of the game) or a tie


/*------------------------ Cached Element References ------------------------*/
const message = document.getElementById("message") 
// main message that will display whose turn it is, the winner, and if there's a tie

// const topLeft = document.getElementById("sq0")
// const topMid = document.getElementById("sq1")
// const topRight = document.getElementById("sq2")
// const midLeft = document.getElementById("sq3")
// const center = document.getElementById("sq4")
// const midRight = document.getElementById("sq5")
// const bottomLeft = document.getElementById("sq6")
// const bottomMid = document.getElementById("sq7")
// const bottomRight = document.getElementById("sq8")

document.querySelector(".board").addEventListener('click', handleClick)
// allows user to click on the board


/*----------------------------- Event Listeners -----------------------------*/
function handleClick(evt){
  // allow user to click on the board
  // will render next move until there's a winner
  // 
  console.log(evt);
}


/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  // initial game state should:
  // include a message that says it's player X's move
  // have an empty board
  // have no winner
  message.textContent = "Player X, make your move!"
  board = [null, null, null, null, null, null, null, null, null]
  isWinner = false
}

// 1) Define the required variables used to track the state of the game

// 2) Store cached element references

// 3) Upon loading, the game state should be initialized, and a function should be 
//    called to render this game state

// 4) The state of the game should be rendered to the user

// 5) Define the required constants

// 6) Handle a player clicking a square with a `handleClick` function

// 7) Build the `getWinner` function

// 8) Create Reset functionality