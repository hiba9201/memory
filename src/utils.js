import { AnimalsSVGImagesOrder, AquaSVGImagesOrder, FruitsSVGImagesOrder, aquaBackgroundColors, fruitBackgroundColors, groundBackgroundColors, CardTypes } from './consts';

export function randomSortArray(arr) { 
    return arr.sort(() => Math.random() - 0.5); 
}

export function getLimitedScoreCoef(coef) {
    const roundedCoef = coef.toFixed(2);

    return Math.min(Math.max(roundedCoef, 0.5), 5);
}

export function getRandomCardType() {
    const randomCoef = +Math.random().toFixed(2);

    if (randomCoef <= 0.30) {
        return CardTypes.AQUA;
    } else if (randomCoef > 0.30 && randomCoef <= 0.60) {
        return CardTypes.GROUND;
    } else if (randomCoef > 0.60 && randomCoef <= 0.97) {
        return CardTypes.FRUITS;
    } else if (randomCoef > 0.97) {
        return CardTypes.UKRAINE;
    }
}

export function getBGColor (id, type) {
    if (type === CardTypes.GROUND) {
        return groundBackgroundColors[id % groundBackgroundColors.length];
    } else if (type === CardTypes.AQUA) {
        return aquaBackgroundColors[id % aquaBackgroundColors.length];
    } else if (type === CardTypes.FRUITS) {
        return fruitBackgroundColors[id % fruitBackgroundColors.length];
    }
}

export function getSVGImageURL (id, type) {
    const baseURL = '../../public/icons/';

    if (type === CardTypes.GROUND) {
        const url =  baseURL + 'animals/' + AnimalsSVGImagesOrder[id] + '.svg';
        return url;
    } else if (type === CardTypes.AQUA) {
        const url =  baseURL + 'aqua/' + AquaSVGImagesOrder[id] + '.svg';
        return url;
    } else if (type === CardTypes.FRUITS) {
        const url =  baseURL + 'fruits/' + FruitsSVGImagesOrder[id] + '.svg';
        return url;
    }
}
