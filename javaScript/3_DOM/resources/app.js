/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let scores, roundScore, activePlayer, whoWinGame, lastDice;

init();

// Update Current scores
document.querySelector('.btn-roll').addEventListener('click', function() {
  if (whoWinGame) {
    // Random Number generate
    let dice = Math.floor(Math.random() * 6) + 1;

    // Display the result
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'resources/dice-' + dice + '.png';

    // Updating the round Scores if dice number was not equal 1
    if (dice === 6 && lastDice === 6) {
      scores[activePlayer] = 0;
      document.querySelector('#score-' + activePlayer).textContent = '0';
      nextPlayer();
    }
    else if (dice !== 1) {
      // Add scoures
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else {
      // next player
      nextPlayer();
    }
    lastDice = dice;
  }
})

// Update Global scores
document.querySelector('.btn-hold').addEventListener('click', function() {
  if (whoWinGame) {
    // Add current scoure to Global scoures
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // Check if player win the game
    if (scores[activePlayer] >= 10) {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner :)';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      whoWinGame = false;
    }
    else {
      // next player
      nextPlayer();
    }
  }
})

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

// Initial data for Game
function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  whoWinGame = true;

  document.querySelector('.dice').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}