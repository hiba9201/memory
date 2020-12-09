import {
    CardTypes,
    groundBackgroundColors,
    aquaBackgroundColors,
    fruitBackgroundColors,
    AnimalsSVGImagesOrder,
    AquaSVGImagesOrder,
    FruitsSVGImagesOrder,
} from '../consts';

export function getBGColor(id, type) {
    switch (type) {
        case CardTypes.ANIMALS:
            return groundBackgroundColors[id % groundBackgroundColors.length];
        case CardTypes.AQUA:
            return aquaBackgroundColors[id % aquaBackgroundColors.length];
        default:
            return fruitBackgroundColors[id % fruitBackgroundColors.length];
    }
}

export function getSVGImageURL(id, type) {
    const baseURL = 'src/components/icons/';
    switch (type) {
        case CardTypes.ANIMALS:
            return `${baseURL}animals/${AnimalsSVGImagesOrder[id]}.svg`;
        case CardTypes.AQUA:
            return `${baseURL}aqua/${AquaSVGImagesOrder[id]}.svg`;
        default:
            return `${baseURL}fruits/${FruitsSVGImagesOrder[id]}.svg`;
    }
}

export function getRandomCardType() {
    const randomCoef = parseFloat(Math.random().toFixed(2));

    if (randomCoef <= 0.3) {
        return CardTypes.AQUA;
    }
    if (randomCoef > 0.3 && randomCoef <= 0.6) {
        return CardTypes.ANIMALS;
    }
    if (randomCoef > 0.6 && randomCoef <= 0.97) {
        return CardTypes.FRUITS;
    }
    if (randomCoef > 0.97) {
        return CardTypes.UKRAINE;
    }

    return CardTypes.UKRAINE;
}
