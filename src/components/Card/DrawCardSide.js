import { getSVGImageURL, drawBackground } from './utils';
import { CardTypes } from '../consts';

export default (type, id, count) => {
    const background = document.createElement('div');
    background.classList.add('card_sides_container');
    const glassEffect = document.createElement('div');
    glassEffect.classList.add('card_effect_glass');
    background.appendChild(glassEffect);
    const backgroundImage = drawBackground(id, count);
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
            background.appendChild(backgroundImage);
            imageSVG.src = getSVGImageURL(id, type);
            imageSVGContainer.appendChild(imageSVG);

            return background;
        }
    }
};
