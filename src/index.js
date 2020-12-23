import Game from './components/Game/Game';

import './index.css';
import ScoreboardView from './components/Scoreboard/ScoreboardView';
import { createChoiseLevelModal } from './components/utils';

const modal = document.querySelector('#modal');
const modalBody = document.querySelector('#modalBody');
const scoreboard = new ScoreboardView(modal, modalBody);
const newGameButton = document.querySelector('#newGameButton');

newGameButton.addEventListener('click', () => {
    createChoiseLevelModal(scoreboard);
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

document.addEventListener('DOMContentLoaded', () => {
    createChoiseLevelModal(scoreboard);
});
