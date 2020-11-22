import { randomSortArray } from '../utils';
import { getLimitedScoreCoef } from '../utils'
import Card from "../Card/Card";

import '../style/style.css';

export default class Game {
  constructor(selector, countCards, sameCardCount, scoreReduceSpeed, score) {
    this._playArea = document.querySelector(selector);
    this.tableNode = this.createTableNode();
    this._playArea.appendChild(this.tableNode);
    this.compareArray = [];
    this.score = score;
    this.scoreCoef = 1;
    this.setCards(countCards, sameCardCount);
    this.setScore(0);
    this.scoreReduceSpeed = scoreReduceSpeed;
    this.startReduceScoreCoef();
  }

  createTableNode() {
    const table = document.createElement('div');
    table.setAttribute('id', 'table');

    return table;
  }

  setCards(count, sameCardCount) {
    let cards = [];

    const { tableNode } = this;

    let id = 1;
    for (let i = 1; i <= count / sameCardCount; i++) {
      for (let j = 1; j <= sameCardCount; j++) {
        cards.push(new Card(id++, i, tableNode, this));
      }
    }

    randomSortArray(cards);

    cards.forEach(card => {
      card.renderCard();
    });
  }

  startReduceScoreCoef(){
    setTimeout(()=>{
      setInterval(()=>{
        const newCoef = this.scoreCoef - 0.1;
        
        this.scoreCoef = getLimitedScoreCoef(newCoef)
        
        this.updateScoreLine();
      }, this.scoreReduceSpeed);
    }, 1000)
    
  }

  setScore() {
    const scoreNode = document.createElement('div');
    scoreNode.classList.add('score');

    const scoreCount = document.createElement('div');
    scoreCount.classList.add('score-count');
    scoreCount.textContent = this.score;
    scoreNode.appendChild(scoreCount);

    const scoreLine = document.createElement('div');
    scoreLine.classList.add('score-line');
    scoreNode.appendChild(scoreLine);

    const scoreBonus = document.createElement('div');
    scoreBonus.classList.add('score-bonus');
    scoreLine.appendChild(scoreBonus);

    const scoreBonusCoef = document.createElement('div');
    scoreBonusCoef.classList.add('score-bonus-coef');
    scoreBonusCoef.textContent = `x${this.scoreCoef}`;
    scoreLine.appendChild(scoreBonusCoef);

    this._playArea.appendChild(scoreNode);
    
  }

  updateScorePoints(isGuessedPair) {
    const points = 10000;

    if(isGuessedPair) {;
      const addPoints = points * this.scoreCoef;
      this.score += addPoints;
      this.scoreCoef++;

      document.querySelector('.score-count').textContent = this.score;
      this.updateScorePointMessage(addPoints);
      } else {
      let removePoints = points / 10;
      const newScore = this.score - removePoints;
      this.score = Math.max(newScore, 0);

      document.querySelector('.score-count').textContent = this.score;

      if (this.score < removePoints) {
        removePoints = this.score;
      } 

      this.updateScorePointMessage(-removePoints);
    }

  }

  updateScoreLine() {
    document.querySelector('.score-bonus').style.width = `${this.scoreCoef*20}%`;
    document.querySelector('.score-bonus-coef').textContent =  `x${this.scoreCoef}`;
  }

  updateScorePointMessage(points){
    const message = document.createElement('div');
    message.classList.add('score-message');

    if (points > 0) {
      message.classList.add('scoreMessageGreen');
      message.textContent = `+${points}`;
    } 
    else if (points === 0) {
      message.classList.add('scoreMessageYellow');
      message.textContent = points;
    } 
    else {
      message.classList.add('scoreMessageRed');
      message.textContent = points;
    }

    document.querySelector('.score-count').appendChild(message);

    setTimeout(()=> {
      message.classList.add('score-message-hide');
    }, 10);
    
    setTimeout(()=> {
      message.remove();
    }, 2000);
  }
}

