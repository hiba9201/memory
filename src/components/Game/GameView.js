export default class GameView {
    constructor(context, gameSelector) {
        this.context = context;
        this.playArea = document.querySelector(gameSelector);
        this.tableNode = this.renderTable();
    }

    renderTable() {
        const tableNode = document.createElement('div');
        tableNode.classList.add('table');
        this.playArea.appendChild(tableNode);

        return tableNode;
    }

    static renderCards(cards) {
        cards.forEach((card) => {
            card.renderCard();
        });
    }

    renderScore() {
        const scoreNode = document.createElement('div');
        scoreNode.classList.add('score');

        const scoreCountContainer = document.createElement('div');
        scoreCountContainer.classList.add('score-count__container');
        this.scoreCountContainer = scoreCountContainer;

        this.scoreCount = document.createElement('p');
        this.scoreCount.classList.add('score-count');
        this.scoreCount.textContent = this.context.score;
        scoreCountContainer.appendChild(this.scoreCount);

        scoreNode.appendChild(scoreCountContainer);

        const scoreLine = document.createElement('div');
        scoreLine.classList.add('score-line');
        scoreNode.appendChild(scoreLine);

        const scoreBonus = document.createElement('div');
        scoreBonus.classList.add('score-bonus');
        scoreLine.appendChild(scoreBonus);

        const scoreBonusCoef = document.createElement('div');
        scoreBonusCoef.classList.add('score-bonus__coef');
        scoreBonusCoef.textContent = `x${this.context.scoreCoef}`;
        scoreLine.appendChild(scoreBonusCoef);

        this.playArea.appendChild(scoreNode);
    }

    updateScoreLine() {
        document.querySelector('.score-bonus').style.width = `${this.context.scoreCoef * 20}%`;
        document.querySelector('.score-bonus__coef').textContent = `x${this.context.scoreCoef}`;
    }

    updateScore() {
        this.scoreCount.textContent = this.context.score;
    }

    updateScorePointMessage(points) {
        const message = document.createElement('div');
        message.classList.add('score-message');

        if (points > 0) {
            message.classList.add('score-message_color_success');
            message.textContent = `+${points}`;
        } else if (points === 0) {
            message.classList.add('score-message_color_neutral');
            message.textContent = points;
        } else {
            message.classList.add('score-message_color_fail');
            message.textContent = points;
        }

        this.scoreCountContainer.appendChild(message);

        setTimeout(() => {
            message.classList.add('score-message_hide');
        }, 10);

        setTimeout(() => {
            message.remove();
        }, 2000);
    }
}
