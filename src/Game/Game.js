import { randomSortArray } from '../utils'
import Card from "../Card/Card";

import '../style/style.css';

export default class Game {
  constructor(selector, countCards, sameCardCount) {
    this._playArea = document.querySelector(selector);
    this.tableNode = this.createTableNode();
    this._playArea.appendChild(this.tableNode);
    this.compareArray = [];
    this.score = 0;
    this.setCards(countCards, sameCardCount);
    this.setScore(0);
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

  setScore(score) {
    const scoreNode = document.createElement('p')
    scoreNode.setAttribute('id', 'score');
    scoreNode.innerText = score;

    this._playArea.appendChild(scoreNode);
  }

  updateScore() {
    this.score += 10;
    document.querySelector("#score").innerHTML = this.score;
  }
}

