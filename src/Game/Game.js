import { randomSortArray } from '../utils'
import Card from "../Card/Card";

import '../style/style.css';

export default class Game {
  constructor(selector, countCards, sameCardCount, scoreDownSpeed, score) {
    this._playArea = document.querySelector(selector);
    this.tableNode = this.createTableNode();
    this._playArea.appendChild(this.tableNode);
    this.compareArray = [];
    this.score = score;
    this.scoreCoef = 1;
    this.setCards(countCards, sameCardCount);
    this.setScore(0);
    this.scoreDownSpeed = scoreDownSpeed;
    this.startScore();
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

  startScore(){
    //через 1 сек начинаем уменьшать коэф очков
    setTimeout(()=>{
      setInterval(()=>{
        const newScore = this.scoreCoef - 0.1;
        
        //Не меньше 0.5 и не больше 5 + округляем
        this.scoreCoef = Math.min(Math.max(newScore.toFixed(2), 0.5), 5);
        
        this.updateScoreLine();

      }, this.scoreDownSpeed);
    }, 1000)
    
  }

  setScore() {
    const scoreNode = document.createElement('div');
    scoreNode.classList.add('score');

    const scoreCount = document.createElement('div');
    scoreCount.classList.add('scoreCount');
    scoreNode.appendChild(scoreCount);

    const scoreLine = document.createElement('div');
    scoreLine.classList.add('scoreLine');
    scoreNode.appendChild(scoreLine);

    const scoreBonus = document.createElement('div');
    scoreBonus.classList.add('scoreBonus');
    scoreLine.appendChild(scoreBonus);

    const scoreBonusCoef = document.createElement('div');
    scoreBonusCoef.classList.add('scoreBonusCoef');
    scoreBonusCoef.textContent = `x${this.scoreCoef}`
    scoreLine.appendChild(scoreBonusCoef);

    this._playArea.appendChild(scoreNode);
    document.querySelector(".scoreCount").textContent = this.score;
  }

  updateScorePoints(flag) {
    let newScore;
    const points = 10000;

    if(flag) {
      const addPoints = points * this.scoreCoef
      newScore = this.score + addPoints;
      this.scoreCoef++;
      this.score = newScore;

      //нетрудно заметить, что строку ниже можно вынести за условие, но не, она затрет класс сообщения о очках
      document.getElementsByClassName('scoreCount')[0].textContent = this.score;
      this.updateScorePointMessage(addPoints)
    } else {
      let removePoints = points / 10
      newScore = this.score - removePoints;
      this.score = Math.max(newScore, 0);

      document.getElementsByClassName('scoreCount')[0].textContent = this.score;

      if(this.score < removePoints) removePoints = this.score

      this.updateScorePointMessage(-removePoints);
    }

  }

  updateScoreLine() {
    document.getElementsByClassName('scoreBonus')[0].style.width = `${this.scoreCoef*20}%`;
    document.querySelector('.scoreBonusCoef').textContent =  'x' + this.scoreCoef;
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

    document.querySelector('.scoreCount').append(message) ;

    setTimeout(()=> {
      message.classList.add('scoreMessageHide');
    }, 10);
    
    setTimeout(()=> {
      message.remove()
    }, 2000);
  }
}

