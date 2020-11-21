import CardView from "./CardView";

export default class Card {
    constructor(id, num, container, context) {
        this.num = num;
        this.game = context;
        this.view = new CardView(container, num, id, {
            game: context,
            card: this,
        });
    }

    compareCards(other) {
        return this.num === other.num;
    }

    renderCard() {
        this.view.setOnClick(() => this.onCardClick());
        this.view.render();
    }

    onCardClick() {
        const { compareArray } = this.game;
        const { view } = this;

        if (view.hidden && compareArray.length === 0) {
            compareArray.push(this);
        } else if (view.hidden && compareArray.length === 1) {
            const otherCard = compareArray.pop();
            if (this.compareCards(otherCard)) {
                this.game.updateScorePoints(true);
            } else {
                this.game.updateScorePoints(false); //можно ничего не передавать, но как лучше - х3
                setTimeout(() => {
                    view.flipCard();
                    otherCard.view.flipCard();
                }, 1000);
            }
        }

        if (view.hidden) {
            view.flipCard();
        }
    }
}