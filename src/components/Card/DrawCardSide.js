import {getBGColor, getSVGImageURL} from '../utils';
import {CardTypes} from '../consts';

export const drawCardImage = (type, id) => {
    const background = document.createElement('div');
    background.classList.add('card_sides-container');

    switch (type) {
        case CardTypes.UKRAINE: {
            const topSide = document.createElement('div');

            const bottomSide = document.createElement('div');

            topSide.classList.add('card_side-top');
            topSide.style.backgroundColor = '#0057b8';
            background.appendChild(topSide);

            bottomSide.classList.add('card_side-bottom');
            bottomSide.style.backgroundColor = '#ffd700';
            background.appendChild(bottomSide);
            return background;
        }
        default: {
            const imageSVGContainer = document.createElement('div');
            imageSVGContainer.classList.add('image-svg-сontainer');
            background.appendChild(imageSVGContainer);

            const imageSVG = document.createElement('img');
            imageSVG.classList.add('image-svg');


            if (type === CardTypes.ANIMALS) {
                background.style.backgroundColor = getBGColor(id, type);
                imageSVG.src = getSVGImageURL(id, type);
            } else if (type === CardTypes.AQUA) {
                background.style.backgroundColor = getBGColor(id, type);
                imageSVG.src = getSVGImageURL(id, type);
            } else if (type === CardTypes.FRUITS) {
                background.style.backgroundColor = getBGColor(id, type);
                imageSVG.src = getSVGImageURL(id, type);
            }

            imageSVGContainer.appendChild(imageSVG);

            return background;
        }
    }
}