import { getBGColor, getSVGImageURL } from '../utils';
import { CardTypes } from '../consts';


export const drawCardImage = (type, id) => {

    const background = document.createElement('div');
    background.classList.add('card_sides-container');

    switch (type) {
        case CardTypes.UKRAINE: {
            const topSide = document.createElement('div');
            const botSide = document.createElement('div');
    
            topSide.classList.add('card_side-top');
            topSide.style.backgroundColor = '#0057b8';
            background.appendChild(topSide);
    
            botSide.classList.add('card_side-bot');
            botSide.style.backgroundColor = '#ffd700';
            background.appendChild(botSide);
            return background;
        }
        default: {
            const imageSVGContainer = document.createElement('div');
            imageSVGContainer.classList.add('image-SVG-Container');
            background.appendChild(imageSVGContainer);

            const imageSVG = document.createElement('img');
            imageSVG.classList.add('image-SVG');

            if (type === CardTypes.GROUND) {
                background.style.backgroundColor = getBGColor(id, type);
                console.log(getSVGImageURL(id, type));
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