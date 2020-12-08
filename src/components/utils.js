import {
    AnimalsSVGImagesOrder,
    AquaSVGImagesOrder,
    FruitsSVGImagesOrder,
    aquaBackgroundColors,
    fruitBackgroundColors,
    groundBackgroundColors,
    CardTypes
} from './consts';

export function randomSortArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

export function getLimitedScoreCoef(coef) {
    const roundedCoef = coef.toFixed(2);

    return Math.min(Math.max(roundedCoef, 0.5), 5);
}

export function getRandomCardType() {
    const randomCoef = parseFloat(Math.random().toFixed(2));

    if (randomCoef <= 0.30) {
        return CardTypes.AQUA;
    } else if (randomCoef > 0.30 && randomCoef <= 0.60) {
        return CardTypes.ANIMALS;
    } else if (randomCoef > 0.60 && randomCoef <= 0.97) {
        return CardTypes.FRUITS;
    } else if (randomCoef > 0.97) {
        return CardTypes.UKRAINE;
    }
}

export function getBGColor(id, type) {
    switch (type) {
        case CardTypes.ANIMALS:
            return groundBackgroundColors[id % groundBackgroundColors.length];
        case CardTypes.AQUA:
            return aquaBackgroundColors[id % aquaBackgroundColors.length];
        case CardTypes.FRUITS:
            return fruitBackgroundColors[id % fruitBackgroundColors.length];
    }
}

export function getSVGImageURL(id, type) {
    const baseURL = '../static/icons/';
    switch (type) {
        case CardTypes.ANIMALS:
            return `${baseURL}animals/${AnimalsSVGImagesOrder[id]}.svg`;
        case CardTypes.AQUA:
            return `${baseURL}aqua/${AquaSVGImagesOrder[id]}.svg`;
        case CardTypes.FRUITS:
            return `${baseURL}fruits/${FruitsSVGImagesOrder[id]}.svg`;
    }
}
