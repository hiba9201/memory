import { gameMods } from "./consts";
import Game from "./Game/Game";

export function randomSortArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

export function getLimitedScoreCoef(coef) {
    const roundedCoef = coef.toFixed(2);

    return Math.min(Math.max(roundedCoef, 0.5), 5);
}

export function createChoiseLevelModal(scoreboard) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const modalBody = document.createElement('div');
    modalBody.classList.add('modal__body');
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
    gameMods.forEach(mode => {
        const button = document.createElement('button');
        button.classList.add('choise-level__button');
        button.classList.add(`choise-level__button__type-${mode.modeEng}`);
        button.textContent = `${mode.mode} (кол-во карт: ${mode.cardCount}, скорость игры: ${mode.gameSpeedDescription})`;
        buttonsContainer.appendChild(button);
        button.addEventListener('click', () => {
            let game = new Game('#playArea', mode.cardCount, 2, 2000, 0, scoreboard);
            modal.remove();
        });
    });

    modalBody.appendChild(buttonsContainer);
    modal.appendChild(modalBody);
    document.body.appendChild(modal);
}
