import { randomSortArray } from './utils';

export const gameMods = [
    {
        modeEng: 'veryease',
        mode: 'Легчайший',
        cardCount: 20,
        gameSpeed: 1.1,
        gameSpeedDescription: 'медленная',
    },
    {
        modeEng: 'ease',
        mode: 'Легкий',
        cardCount: 24,
        gameSpeed: 1.1,
        gameSpeedDescription: 'медленная',
    },
    {
        modeEng: 'normal',
        mode: 'Средний',
        cardCount: 32,
        gameSpeed: 1.1,
        gameSpeedDescription: 'средняя',
    },
    {
        modeEng: 'hard',
        mode: 'Сложный',
        cardCount: 40,
        gameSpeed: 1.1,
        gameSpeedDescription: 'быстрая',
    },
    {
        modeEng: 'veryhard',
        mode: 'Чел, ты...',
        cardCount: 48,
        gameSpeed: 1.1,
        gameSpeedDescription: 'быстрая',
    },];

export const cardSize = {
    XS: 32,
    M: 24,
    XL: 20,
    NANO: 40,
    AHAHHAHAHA: 48,
};

export const CardTypes = {
    AQUA: 'AQUA',
    ANIMALS: 'ANIMALS',
    FRUITS: 'FRUITS',
    UKRAINE: 'UKRAINE',
};

export const BackgroundTypes = {
    SPACE: 'SPACE',
    OCEAN: 'OCEAN',
    CITY: 'CITY',
    PYRAMIDS: 'PYRAMIDS',
};

const SVGImagesOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const AnimalsSVGImagesOrder = [...randomSortArray(SVGImagesOrder)];
export const AquaSVGImagesOrder = [...randomSortArray(SVGImagesOrder)];
export const FruitsSVGImagesOrder = [...randomSortArray(SVGImagesOrder)];

export const aquaBackgroundColors = ['#d4dde4', '#96c2cc', '#6599aa', '#4b9ac9', '#88bdba'];

export const spaceBackground = ['#0d2c62', '#2c2a64', '#4b1a4a', '#4a1320', '#232327', '#2c2632'];
export const starColor = ['#fe6543', '#ffaa51', '#fff567', '#dac655'];

export const mountainColors = ['#deb692', '#deb28b', '#c1805f', '#bb7c75', '#bd9e77'];
export const buildingColors = ['#4c3838', '#4c4638', '#484c38', '#515150', '#384c49', '#383d4c', '#40384c', '#4c384c'];

export const treesColors = ['#c0da8f', '#a0c166', '#74be5f', '#6aa773', '#9dc73d', '#cece1f'];
