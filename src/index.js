import Game from './components/Game/Game';

import './index.css';
import ScoreboardView from './components/Scoreboard/ScoreboardView';

const modal = document.querySelector('#modal');
const modalBody = document.querySelector('#modalBody');
const scoreboard = new ScoreboardView(modal, modalBody);
let game = new Game('#playArea', 20, 2, 2000, 0, scoreboard);

console.log(game);

const newGameButton = document.querySelector('#newGameButton');

newGameButton.addEventListener('click', () => {
    clearInterval(game.scoreReduceInterval);
    game = new Game('#playArea', 20, 2, 2000, 0);
});

const scoreboardButton = document.querySelector('#scoreboardButton');

scoreboardButton.addEventListener('click', () => {
    scoreboard.render();
});

const modalClose = document.querySelector('#modalClose');

modalClose.addEventListener('click', () => {
    modal.classList.add('modal_hidden');
    modalBody.innerHTML = '';
});
