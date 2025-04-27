let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreBoard();

let isAutoPlayActive = false;
let timerId;

function toggleAutoPlay() {
  if (!isAutoPlayActive) {
    timerId = setInterval(() => {
      const move = getComputerMove();
      playRound(move);
    }, 1000);
    isAutoPlayActive = true;
  } else {
    clearInterval(timerId);
    isAutoPlayActive = false;
  }
}

document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playRound('rock');
  });

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playRound('paper');
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playRound('scissors');
  });

document.body.addEventListener('keydown', event => {
  if (event.key === 'r') {
    playRound('rock');
  } else if (event.key === 'p') {
    playRound('paper');
  } else if (event.key === 's') {
    playRound('scissors');
  }
});

function playRound(playerChoice) {
  const computerChoice = getComputerMove();
  let gameResult = '';

  if (playerChoice === 'scissors') {
    if (computerChoice === 'rock') {
      gameResult = 'You lose.';
    } else if (computerChoice === 'paper') {
      gameResult = 'You win.';
    } else {
      gameResult = 'Tie.';
    }
  } else if (playerChoice === 'paper') {
    if (computerChoice === 'rock') {
      gameResult = 'You win.';
    } else if (computerChoice === 'paper') {
      gameResult = 'Tie.';
    } else {
      gameResult = 'You lose.';
    }
  } else if (playerChoice === 'rock') {
    if (computerChoice === 'rock') {
      gameResult = 'Tie.';
    } else if (computerChoice === 'paper') {
      gameResult = 'You lose.';
    } else {
      gameResult = 'You win.';
    }
  }

  if (gameResult === 'You win.') {
    score.wins++;
  } else if (gameResult === 'You lose.') {
    score.losses++;
  } else {
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));
  updateScoreBoard();

  document.querySelector('.js-result').innerHTML = gameResult;

  document.querySelector('.js-moves').innerHTML = `You
    <img src="images/${playerChoice}-emoji.png" class="move-icon">
    <img src="images/${computerChoice}-emoji.png" class="move-icon">
    Computer`;
}

function updateScoreBoard() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function getComputerMove() {
  const randomVal = Math.random();
  let move = '';

  if (randomVal < 1 / 3) {
    move = 'rock';
  } else if (randomVal < 2 / 3) {
    move = 'paper';
  } else {
    move = 'scissors';
  }

  return move;
}

// Added Clear Score functionality
function clearScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreBoard();
}
