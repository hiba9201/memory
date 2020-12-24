import { randomSortArray, getLimitedScoreCoef } from '../utils';
import { getRandomCardType } from '../Card/utils';
import Card from '../Card/Card';
import GameView from './GameView';

import '../style/style.css';

export default class Game {
    constructor(selector, countCards, sameCardCount, scoreReduceSpeed, score, scoreboard) {
        this.view = new GameView(this, selector, countCards);
        this.compareArray = [];
        this.countCards = countCards;
        this.score = score;
        this.scoreCoef = 1;
        this.setCards(countCards, sameCardCount);
        this.setScore(scoreReduceSpeed);
        this.openCards = countCards;
        this.guessedCardTypesArray = [];
        this.scoreboard = scoreboard;
    }

    setScore(scoreReduceSpeed) {
        this.view.renderScore();
        this.scoreDownSpeed = scoreReduceSpeed;
        this.startReduceScoreCoef();
    }

    setCards(count, sameCardCount) {
        const cards = [];
        const { tableNode } = this.view;
        let id = 1;
        let cardType;
        for (let i = 1; i <= count / sameCardCount; i++) {
            cardType = getRandomCardType();
            for (let j = 1; j <= sameCardCount; j++) {
                cards.push(new Card(id++, i, tableNode, this, cardType, this.countCards));
            }
        }
        randomSortArray(cards);
        GameView.renderCards(cards);
    }

    startReduceScoreCoef() {
        setTimeout(() => {
            this.scoreReduceInterval = setInterval(() => {
                const newScore = this.scoreCoef - 0.1;
                this.scoreCoef = getLimitedScoreCoef(newScore);

                this.view.updateScoreLine();
            }, this.scoreDownSpeed);
        }, 1000);
    }

    updateScorePoints(isGuessedPair, typesArray) {
        let changePoints;
        const points = 10000;

        if (isGuessedPair) {
            changePoints = points * this.scoreCoef;
            if (typesArray[typesArray.length - 1] === typesArray[typesArray.length - 2]) {
                if (typesArray[typesArray.length - 2] === typesArray[typesArray.length - 3]) {
                    changePoints *= 2;
                    this.scoreCoef = 5;
                }
                changePoints *= 1.5;
                this.scoreCoef++;
            }
            this.scoreCoef++;
            this.score += changePoints;
            this.openCards -= 2;
        } else {
            changePoints = -points / 10;
            const newScore = this.score + changePoints;

            if (this.score < Math.abs(changePoints)) {
                changePoints = -this.score;
            }
            this.score = Math.max(newScore, 0);
        }

        this.view.updateScorePointMessage(changePoints);
        this.view.updateScore();

        if (this.openCards === 0) {
            this.stopGame();
        }
    }

    stopGame() {
        clearInterval(this.scoreReduceInterval);

        this.view.renderScoreForm();
    }
}
