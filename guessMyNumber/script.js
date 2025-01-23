'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displaymessage=function(message)
{
    document.querySelector('.message').textContent=message
}

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displaymessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener(
  'click',
  function () {
    const guess = Number(document.querySelector('.guess').value);

    //when no input
    if (!guess) {
      displaymessage('🔴 No Number')
    } else if (guess === secretNumber) {
      displaymessage('🎉 correct number!');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }
    //when guess is wrong
    else if (guess !== secretNumber) {
      if (score > 1) {
        displaymessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score = score - 1;
        document.querySelector('.score').textContent = score;
      } else {
        displaymessage('😔 you lost the game!');
        document.querySelector('.score').textContent = 0;
      }
    }
  }
  //when input is high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Too high!';
  //       score = score - 1;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😔 you lost the game! ';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
  //   // when input is low
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Too low!';
  //       score = score - 1;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😔 you lost the game! ';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
  // }
);
