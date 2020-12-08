import { randomSortArray, getLimitedScoreCoef, getRandomCardType } from '../utils';
import Card from "../Card/Card";
import GameView from "./GameView";

import '../style/style.css';

export default class Game {
  constructor(selector, countCards, sameCardCount, scoreReduceSpeed, score) {
    this.view = new GameView(this, selector);
    this.compareArray = [];
    this.score = score;
    this.scoreCoef = 1;
    this.setCards(countCards, sameCardCount);
    this.setScore(scoreReduceSpeed);
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
        cards.push(new Card(id++, i, tableNode, this, cardType));
      }
    }

    randomSortArray(cards);
    this.view.renderCards(cards);
  }

  startReduceScoreCoef() {
    setTimeout(() => {
      setInterval(() => {
        const newScore = this.scoreCoef - 0.1;

        this.scoreCoef = getLimitedScoreCoef(newScore);

        this.view.updateScoreLine();
      }, this.scoreDownSpeed);
    }, 1000);
  }

  updateScorePoints(isGuessedPair) {
    let changePoints;
    const points = 10000;

    if (isGuessedPair) {
      changePoints = points * this.scoreCoef
      this.scoreCoef++;
      this.score += changePoints;
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
  }
}

