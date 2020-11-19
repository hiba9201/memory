export default class CardView {
    constructor(container, name, id, onClick, game) {
        this.hidden = true;
        this.color = '#ffffff';
        this.container = container;
        this.name = name;
        this.node = null;
        this.id = id;
        this.game = game;
    }

    flipCard() {
        this.hidden = !this.hidden;
        this.updateView();
    }

    handleClickEvent() {
        console.log('dd')
        if (!this.hidden) {
            return;
        }

        this.flipCard();
        setTimeout(() => {
            this.flipCard();
        }, 1000);
    }

    disableFlip() {
        this.node.removeEventListener('click', this.handleClickEvent);
    }

    updateView() {
        if (this.hidden) {
            this.node.classList.remove('open');
            this.node.classList.add('hidden');
            this.node.innerText = '';
        } else {
            this.node.classList.remove('hidden');
            this.node.classList.add('open');
            this.node.innerText = this.name;
        }
    }

    render() {
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card');
        cardContainer.classList.add(this.hidden ? 'hidden' : 'open');
        cardContainer.id = this.id;
        cardContainer.addEventListener('click', () => this.handleClickEvent());

        if (!this.hidden) {
            cardContainer.innerText = this.name;
        }

        this.container.appendChild(cardContainer);
        this.node = cardContainer;
    }
}