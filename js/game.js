class Game{
    constructor(selector, countCards, sameCardCount){
        this._playArea = document.querySelector(selector);
        this.setCards(countCards, sameCardCount);
        this.setScore(0);
        this.clickHandler = this.clickHandler.bind(this);
        this._playArea.addEventListener('click', this.clickHandler);
        this.compareArray = []
        this.score = 0
    }

    setCards(count, sameCardCount){
        let cards = [];

        for(let i = 0; i < count/sameCardCount; i++){
            for(let j = 0; j < sameCardCount; j++){
                cards.push(`<div class="card" data-id=${i*sameCardCount+j} data-status="false" data-type="${i}">${'Неизвестная карта'}</div>`);
            }
        }
        cards.sort(() => Math.random() - 0.5) //случайно кидаем на поле
        this._playArea.innerHTML = `<div id="table">${cards.join('')}</div>`;
    }

    clickHandler(event){
        const cardNumber = event.target.dataset.type //(id)
        //const time = 3000; //время, пока карта открыта
        if(cardNumber && this.compareArray.length < 2 && event.target.dataset.status === "false") {
            this.compareArray.push({cardNumber, id:event.target.dataset.id})
            //console.log(event);
            event.target.innerHTML = cardNumber
        } 
        this.checkSameCards()
    }

    checkSameCards(){
        if(this.compareArray.length === 2){
            const firstCard = this.compareArray[0].id;
            const secondCard = this.compareArray[1].id;
            if(this.compareArray[0].cardNumber === this.compareArray[1].cardNumber){
                document.querySelector(`[data-id="${firstCard}"]`).dataset.status = "true"
                document.querySelector(`[data-id="${secondCard}"]`).dataset.status = "true"
                this.updateScore()
            }
            else{
                setTimeout(()=> {
                    document.querySelector(`[data-id="${firstCard}"]`).innerHTML = 'Неизвестная карта'
                    document.querySelector(`[data-id="${secondCard}"]`).innerHTML = 'Неизвестная карта'
                }, 1000)
            }
            this.compareArray = []
        }
    }

    setScore(score){
        this._playArea.innerHTML += `<p id="score">${score}</p>`
    }

    updateScore(){
        this.score += 10
        document.querySelector("#score").innerHTML = this.score
    }
}

//--------------
// Потом xD
//--------------
class Card{
    constructor(){
        
    }
}


const game = new Game("#playArea", 20, 4);

console.log(game);

