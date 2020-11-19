import CardView from "./CardView";

export default class Card {
    constructor(id, num, container, context) {
        this.id = id;
        this.num = num;
        this.game = context;
        const compareCards = this.compareCards.bind(this);
        this.view = new CardView(container, num, id, compareCards, context);
    }

    compareCards(other) {
        console.log(other, this);
        return this.num === other.num;
    }
}