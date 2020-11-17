import './style/style.css';
import { randomSortArray } from './utils'

const  noNameCard = "Неизвестная карта";

class Game {
  constructor(selector, countCards, sameCardCount) {
    this._playArea = document.querySelector(selector);
    this.setCards(countCards, sameCardCount);
    this.setScore(0);
    this.clickHandler = this.clickHandler.bind(this);
    this._playArea.addEventListener("click", this.clickHandler);
    this.compareArray = [];
    this.score = 0;
  }

  setCards(count, sameCardCount) {
    let cards = [];
    for (let i = 0; i < count / sameCardCount; i++) {
      for (let j = 0; j < sameCardCount; j++) {
        cards.push(
          `<div class="card" data-id=${
            i * sameCardCount + j
          } data-status="false" data-type="${i}">${noNameCard}</div>`
        );
      }
    }
    randomSortArray(cards);
    this._playArea.innerHTML = `<div id="table">${cards.join("")}</div>`;
  }

  clickHandler(event) {
    const { type, id, status } = event.target.dataset;
    if (type && this.compareArray.length < 2 && status === "false") {
      this.compareArray.push({ cardNumber: type, id });
      event.target.innerHTML = type;
    }
    this.checkSameCards();
  }

  checkSameCards() {
    if (this.compareArray.length === 2) {
      const firstCard = this.compareArray[0].id;
      const secondCard = this.compareArray[1].id;
      if (this.compareArray[0].cardNumber === this.compareArray[1].cardNumber) {
        document.querySelector(`[data-id="${firstCard}"]`).dataset.status = "true";
        document.querySelector(`[data-id="${secondCard}"]`).dataset.status = "true";
        this.updateScore();
      } else {
        setTimeout(() => {
          document.querySelector(`[data-id="${firstCard}"]`).innerHTML = noNameCard;
          document.querySelector(`[data-id="${secondCard}"]`).innerHTML = noNameCard;
        }, 1000);
      }
      this.compareArray = [];
    }
  }

  setScore(score) {
    this._playArea.innerHTML += `<p id="score">${score}</p>`;
  }

  updateScore() {
    this.score += 10;
    document.querySelector("#score").innerHTML = this.score;
  }
}

class Card {
  constructor() {}
}


const game = new Game("#playArea", 20, 4);

console.log(game);
