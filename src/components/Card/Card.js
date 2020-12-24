import CardView from './CardView';

export default class Card {
    constructor(id, num, container, context, cardType, cardCount) {
        this.type = cardType;
        this.num = num;
        this.game = context;
        this.view = new CardView(container, num, id, cardType, cardCount);
    }

    compareCards(other) {
        return this.num === other.num;
    }

    renderCard() {
        this.view.setOnClick(() => this.onCardClick());
        this.view.render();
    }

    onCardClick() {
        const { compareArray, guessedCardTypesArray } = this.game;
        const { view } = this;

        if (view.hidden && compareArray.length === 0) {
            compareArray.push(this);
        } else if (view.hidden && compareArray.length === 1) {
            const otherCard = compareArray.pop();
            if (this.compareCards(otherCard)) {
                guessedCardTypesArray.push(this.type);
                this.game.updateScorePoints(true, guessedCardTypesArray);
            } else {
                this.game.updateScorePoints(false);
                setTimeout(() => {
                    view.flipCard();
                    otherCard.view.flipCard();
                }, 800);
            }
        }

        if (view.hidden) {
            view.flipCard();
        }
    }
}
