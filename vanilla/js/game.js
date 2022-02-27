const boxes = document.querySelectorAll(".box");
let playerChoice, computerChoice;
const winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let nodeIndex = Array(9).fill(null);

//player's turn
function playerTurn() {
  let el = this;
  let ind = parseInt(el.getAttribute("data-index"));

  //return if already drawn
  if (el.innerText) {
    return;
  }

  nodeIndex[ind] = playerChoice;

  el.innerText = playerChoice;

  let result = winnerCheck(playerChoice);

  if (result) {
    return gameOver(result, playerChoice);
  }

  return computerTurn();
}

//computer's turn
function computerTurn() {
  let key;

  //return if no empty box left
  if (!nodeIndex.includes(null)) {
    return gameDraw();
  }

  //checking who is winning
  winningCombination.forEach((elem) => {
    let userCount = 0;

    elem.map((ind) => {
      //blocking if the player is winning
      if (nodeIndex[ind] === playerChoice) {
        userCount++;
        if (userCount === 2) {
          elem.map((i) => {
            if (nodeIndex[i] === null) {
              return (key = i);
            }
          });
        }
      }
    });
  });

  winningCombination.forEach((elem) => {
    let computerCount = 0;

    elem.map((ind) => {
      //if the computer has chance make it first
      if (nodeIndex[ind] === computerChoice) {
        computerCount++;
        if (computerCount === 2) {
          elem.map((i) => {
            if (nodeIndex[i] === null) {
              return (key = i);
            }
          });
        }
      }
    });
  });

  if (key !== undefined) {
    nodeIndex[key] = computerChoice;
    boxes[key].innerText = computerChoice;

    let result = winnerCheck(computerChoice);

    if (result) {
      return gameOver(result, computerChoice);
    }

    return;
  }

  //random index to draw x
  let random = () => {
    return Math.floor(Math.random() * 9);
  };
  key = random();

  while (nodeIndex[key] !== null) {
    key = random();
  }

  nodeIndex[key] = computerChoice;
  boxes[key].innerText = computerChoice;

  let result = winnerCheck(computerChoice);

  if (result) {
    return gameOver(result, computerChoice);
  }

  return;
}

function winnerCheck(turn) {
  if (!nodeIndex.includes(null)) {
    return gameDraw();
  }
  let res = null;

  winningCombination.map((elem) => {
    let turnCount = 0;

    elem.map((ind) => {
      if (nodeIndex[ind] === turn) {
        turnCount++;
        if (turnCount === 3) {
          res = elem;
        }
      }
    });
  });

  return res;
}

function gameOver(elem, turn) {
  elem.map((ind) => {
    boxes[ind].style.backgroundColor = "#a7bcb9";
    boxes[ind].style.color = "#fff";
  });

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].onclick = null;
  }

  return whoWon(turn);
}

function whoWon(turn) {
  const dialogBox = document.querySelector(".dialog-box");
  dialogBox.style.display = "block";
  
  if (turn === playerChoice) {
    dialogBox.innerText = "You Won";
    return;
  }

  dialogBox.innerText = "Computer Won";
  return;
}

function gameDraw() {
  const dialogBox = document.querySelector(".dialog-box");
  dialogBox.style.display = "block";
  dialogBox.innerText = "Game Draw";
  return;
}

function addEvent() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].onclick = playerTurn;
  }
}

const chooseTurn = (e) => {
  let choosen = e.target.innerText;

  if (choosen === "x") {
    playerChoice = "x";
    computerChoice = "o";
    document.querySelector(".option-box").style.display = "none";
    return addEvent();
  }

  playerChoice = "o";
  computerChoice = "x";
  document.querySelector(".option-box").style.display = "none";
  addEvent();
  return computerTurn();
};

window.addEventListener("DOMContentLoaded", startGame);

function startGame() {
  document.querySelector(".option-box").style.display = "flex";
  let options = document.querySelectorAll(".option");
  options[0].onclick = chooseTurn;
  options[1].onclick = chooseTurn;
}

document.getElementById("reset").onclick = () => {
  const dialogBox = document.querySelector(".dialog-box");
  dialogBox.style.display = "none";
  playerChoice = null;
  computerChoice = null;
  nodeIndex = Array(9).fill(null);
  for (let i = 0; i < 9; i++) {
    boxes[i].innerText = "";
    boxes[i].style.backgroundColor = "transparent";
    boxes[i].style.color = "#3e0d80";
    boxes[i].onclick = null;
  }
  return startGame();
};
