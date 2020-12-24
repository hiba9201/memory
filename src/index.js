import Game from './components/Game/Game';

import './index.css';
import ScoreboardView from './components/Scoreboard/ScoreboardView';
import { gameMods } from './components/consts';

const modal = document.querySelector('#modal');
const modalBody = document.querySelector('#modalBody');
const scoreboard = new ScoreboardView(modal, modalBody);
const newGameButton = document.querySelector('#newGameButton');
let game;

newGameButton.addEventListener('click', () => {
    createChooseLevelModal(scoreboard);
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
    createChooseLevelModal(scoreboard);
});

function createChooseLevelModal(board) {
    const greetings = document.createElement('h2');
    greetings.classList.add('choise-level__modal__description');
    greetings.textContent = 'Добро пожаловать в игру мемори!';
    modalBody.appendChild(greetings);

    const choiseText = document.createElement('h4');
    choiseText.classList.add('choise-level__modal__description');
    choiseText.textContent = 'Выбери уровень:';
    modalBody.appendChild(choiseText);

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('choise-level__buttons__container');

    gameMods.forEach((mode) => {
        const button = document.createElement('button');
        button.classList.add('choise-level__button');
        button.classList.add(`choise-level__button__type-${mode.modeEng}`);
        button.textContent = `${mode.mode} (кол-во карт: ${mode.cardCount}, скорость игры: ${mode.gameSpeedDescription})`;
        buttonsContainer.appendChild(button);
        button.addEventListener('click', () => {
            if (game) {
                clearInterval(game.scoreReduceInterval);
            }

            game = new Game('#playArea', mode.cardCount, 2, 2000, 0, board);
            modal.classList.add('modal_hidden');
            modalBody.innerHTML = '';
        });
    });

    modalBody.appendChild(buttonsContainer);
    modal.classList.remove('modal_hidden');
}
