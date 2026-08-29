let score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      loses: 0,
      ties: 0
    };

    updateScoreElement();


    function pickComputerMove() {

      const randomNumber = Math.random();

      let computerMove = '';

      if (randomNumber < 1 / 3) {

        computerMove = 'rock';

      } else if (randomNumber < 2 / 3) {

        computerMove = 'paper';

      } else {

        computerMove = 'scissors';

      }

      return computerMove;
    }


    let isAutoPlaying = false;
    let intervalId ;
    function autoPlay() {
      if (!isAutoPlaying) {
        intervalId = setInterval(function() {
        const playerMove = pickComputerMove();
        playGame(playerMove);
      }, 1000);
      isAutoPlaying = true;
      } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
      }
    }

    const rockElement = document.querySelector('.js-rock-btn')
    function playGame(playerMove) {

      const computerMove = pickComputerMove();

      let result = '';


      if (playerMove === 'scissors') {

        if (computerMove === 'rock') {

          result = 'You lose.';

        } else if (computerMove === 'paper') {

          result = 'You win.';

        } else if (computerMove === 'scissors') {

          result = 'Tie.';

        }

      } else if (playerMove === 'rock') {

        if (computerMove === 'paper') {

          result = 'You lose.';

        } else if (computerMove === 'scissors') {

          result = 'You win.';

        } else if (computerMove === 'rock') {

          result = 'Tie.';

        }

      } else if (playerMove === 'paper') {

        if (computerMove === 'scissors') {

          result = 'You lose.';

        } else if (computerMove === 'rock') {

          result = 'You win.';

        } else if (computerMove === 'paper') {

          result = 'Tie.';

        }

      }


      if (result === 'You win.') {

        score.wins += 1;

      } else if (result === 'You lose.') {

        score.loses += 1;

      } else if (result === 'Tie.') {

        score.ties += 1;

      }


      localStorage.setItem('score', JSON.stringify(score));

      updateScoreElement();


      document.querySelector('.js-result').innerHTML = result;


      document.querySelector('.js-moves').innerHTML = `
        You
        <img src="images/${playerMove}-emoji.png" class="img-result">

        <img src="images/${computerMove}-emoji.png" class="img-result">

        Computer
      `;
    }


    function updateScoreElement() {

      document.querySelector('.js-score')
        .innerHTML = `
          Wins: ${score.wins},
          Loses: ${score.loses},
          Ties: ${score.ties}
        `;
    }