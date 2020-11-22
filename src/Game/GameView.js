export default class GameView {
    constructor(context, gameSelector) {
        this.context = context;
        this._playArea = document.querySelector(gameSelector);
        this.tableNode = this.renderTable();
    }

    renderTable() {
        const tableNode = document.createElement('div');
        tableNode.classList.add('table');
        this._playArea.appendChild(tableNode);

        return tableNode;
    }

    renderCards(cards) {
        cards.forEach(card => {
            card.renderCard();
        });
    }

    renderScore() {
        const scoreNode = document.createElement('div');
        scoreNode.classList.add('score');

        const scoreCountContainer = document.createElement('div');
        scoreCountContainer.classList.add('scoreCount-container');

        this.scoreCount = document.createElement('p');
        this.scoreCount.classList.add('scoreCount');
        this.scoreCount.textContent = this.context.score;
        scoreCountContainer.appendChild(this.scoreCount);

        scoreNode.appendChild(scoreCountContainer);

        const scoreLine = document.createElement('div');
        scoreLine.classList.add('scoreLine');
        scoreNode.appendChild(scoreLine);

        const scoreBonus = document.createElement('div');
        scoreBonus.classList.add('scoreBonus');
        scoreLine.appendChild(scoreBonus);

        const scoreBonusCoef = document.createElement('div');
        scoreBonusCoef.classList.add('scoreBonusCoef');
        scoreBonusCoef.textContent = `x${this.context.scoreCoef}`
        scoreLine.appendChild(scoreBonusCoef);

        this._playArea.appendChild(scoreNode);
    }

    updateScoreLine() {
        document.querySelector('.scoreBonus').style.width = `${this.context.scoreCoef * 20}%`;
        document.querySelector('.scoreBonusCoef').textContent =  `x${this.context.scoreCoef}`;
    }

    updateScore() {
        this.scoreCount.textContent = this.context.score;
    }

    updateScorePointMessage(points){
        const message = document.createElement('div');
        message.classList.add('scoreMessage');

        if(points > 0) {
            message.classList.add('scoreMessageGreen');
            message.textContent = '+' + points;
        }
        else if(points === 0) {
            message.classList.add('scoreMessageYellow');
            message.textContent = points;
        }
        else {
            message.classList.add('scoreMessageRed');
            message.textContent = points;
        }

        document.querySelector('.scoreCount-container').appendChild(message);

        setTimeout(()=> {
            message.classList.add('scoreMessageHide');
        }, 10);

        setTimeout(()=> {
            message.remove()
        }, 2000);
    }
}