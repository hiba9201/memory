import { randomSortArray } from '../utils'
import Card from "../Card/Card";
import GameView from "./GameView";

import '../style/style.css';

export default class Game {
  constructor(selector, countCards, sameCardCount, scoreDownSpeed, score) {
    this.view = new GameView(this, selector);
    this.compareArray = [];
    this.score = score;
    this.scoreCoef = 1;
    this.setCards(countCards, sameCardCount);
    this.setScore(scoreDownSpeed);
  }

  setScore(scoreReduceSpeed) {
    this.view.renderScore();
    this.scoreDownSpeed = scoreReduceSpeed;
    this.startScore();
  }

  setCards(count, sameCardCount) {
    const cards = [];
    const { tableNode } = this.view;

    let id = 1;
    for (let i = 1; i <= count / sameCardCount; i++) {
      for (let j = 1; j <= sameCardCount; j++) {
        cards.push(new Card(id++, i, tableNode, this));
      }
    }

    randomSortArray(cards);
    this.view.renderCards(cards);
  }

  startScore() {
    //через 1 сек начинаем уменьшать коэф очков
    setTimeout(() => {
      setInterval(() => {
        const newScore = this.scoreCoef - 0.1;
        
        //Не меньше 0.5 и не больше 5 + округляем
        this.scoreCoef = Math.min(Math.max(newScore.toFixed(2), 0.5), 5);
        
        this.view.updateScoreLine();
      }, this.scoreDownSpeed);
    }, 1000);
  }

  updateScorePoints(flag) {
    let changePoints;
    const points = 10000;

    if (flag) {
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

