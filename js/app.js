/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let isWinner
let turn
let board = [null, null, null, null, null, null, null, null, null]


/*------------------------ Cached Element References ------------------------*/
const message = document.getElementById("message")
const topLeft = document.getElementById("sq0")
const topMid = document.getElementById("sq1")
const topRight = document.getElementById("sq2")
const midLeft = document.getElementById("sq3")
const center = document.getElementById("sq4")
const midRight = document.getElementById("sq5")
const bottomLeft = document.getElementById("sq6")
const bottomMid = document.getElementById("sq7")
const bottomRight = document.getElementById("sq8")


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  message.textContent = "Player X, make your move!"
  board = []
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