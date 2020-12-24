import drawCardImage from './DrawCardSide';

export default class CardView {
    constructor(container, name, id, cardType, cardCount) {
        this.hidden = true;
        this.container = container;
        this.name = name;
        this.node = null;
        this.id = id;
        this.type = cardType;
        if (window.view) {
            this.image = window.view;
            window.view = undefined;
        } else {
            this.image = drawCardImage(cardType, name, cardCount);
            window.view = this.image.cloneNode(true);
        }
        this.cardCount = cardCount;
        this.onClick = () => this.flipCard();
    }

    flipCard() {
        this.hidden = !this.hidden;
        this.updateView();
    }

    updateView() {
        if (this.hidden) {
            this.node.classList.remove('open');
            this.node.classList.add('hidden');
            this.node.innerText = '';
        } else {
            this.node.classList.remove('hidden');
            this.node.classList.add('open');
            this.node.appendChild(this.image);
        }
    }

    setOnClick(func) {
        this.onClick = func;
    }

    render() {
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card');
        if (this.cardCount > 24) {
            cardContainer.classList.add('card-height-small');
        } else {
            cardContainer.classList.add('card-height-big');
        }
        cardContainer.classList.add(this.hidden ? 'hidden' : 'open');
        cardContainer.id = this.id;
        cardContainer.addEventListener('click', () => this.onClick());

        if (!this.hidden) {
            cardContainer.innerText = this.name;
        }

        this.container.appendChild(cardContainer);
        this.node = cardContainer;
    }
}
