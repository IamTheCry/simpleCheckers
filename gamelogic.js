// 0 = empty square
// 1 = black checker
// 2 = red checker

const initialBoard = [
  [0,1,0,1,0,1,0,1],
  [1,0,1,0,1,0,1,0],
  [0,1,0,1,0,1,0,1],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [2,0,2,0,2,0,2,0],
  [0,2,0,2,0,2,0,2],
  [2,0,2,0,2,0,2,0]
]
let currentBoard;

function validMoveChecker(board) {
  // checks if the board submitted by the client is valid or not by comparing it to the current board
  // if valid
  return currentBoard = board
}

// send the currentBoard back to the client