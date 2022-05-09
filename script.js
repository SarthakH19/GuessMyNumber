'use strict';
// Generating a random number and truncate it. WE used *20 so that the number is between 0 to 20 (not including 20) and + 1 so the numbers are between 0 and 20 (including 20)
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Score
let score = 20;

//Highscore
let highScore = 0;

//function for message class
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Selecting the input field's value when the check button is clicked.
document.querySelector('.check').addEventListener('click', function () {
  //Selecting the value of input field and converting it to number because input field returns a string
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //Whenever we are taking a input from the user the first thing is we need to check if the input is valid or if we have any kind of input.
  //To check if their is no guess
  if (!guess) {
    displayMessage('⛔ No Number');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when the guess is wrong
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the Game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Reset the game

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
