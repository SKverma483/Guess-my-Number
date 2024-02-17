'use script';
const showMessage = function (statement) {
  message.textContent = statement;
};
const generatingRandomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
const message = document.querySelector('.message');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const again = document.querySelector('.btn-reset');
const display_score = document.querySelector('.score-display');
//strating conditions
let secretNumber = generatingRandomNumber();

let score = 20;
let highscore = 0;
// setting check button
check.addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.value').value);

  if (!guessNumber) {
    // message.textContent = 'please enter a number';
    showMessage('please enter a number');
  } else if (guessNumber === secretNumber) {
    guess.textContent = secretNumber;
    // message.textContent = ;
    showMessage('Correct number🥳');
    document.querySelector('body').style.backgroundColor = '#60B347';
    if (highscore < score) {
      highscore = score;
      document.querySelector('.mark-score').textContent = highscore;
    }
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      showMessage(guessNumber > secretNumber ? ' Too High ⬆️' : ' Too Low ⬇️');
      score--;
      display_score.textContent = score;
    } else {
      message.textContent = 'You Lost😔';
      display_score.textContent = 0;
      document.querySelector('.value').value = '';
      document.querySelector('body').style.backgroundColor = '#EE4B2B';
    }
  }
});
//resetting the game
again.addEventListener('click', function () {
  score = 20;
  secretNumber = generatingRandomNumber();
  display_score.textContent = score;
  guess.textContent = '?';
  document.querySelector('.value').value = '';
  showMessage('Start Guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
});
