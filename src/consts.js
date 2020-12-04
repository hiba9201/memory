import { randomSortArray } from './utils';

export const CardTypes = {
    AQUA: 'AQUA',
    GROUND: 'GROUND',
    FRUITS: 'FRUITS',
    UKRAINE: 'UKRAINE'
}

const SVGImagesOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const AnimalsSVGImagesOrder = [ ...randomSortArray(SVGImagesOrder)];
export const AquaSVGImagesOrder = [ ...randomSortArray(SVGImagesOrder)];
export const FruitsSVGImagesOrder = [ ...randomSortArray(SVGImagesOrder)];

export const groundBackgroundColors = ['#deb692', '#deb28b', '#c1805f', '#bb7c75', '#bd9e77'];
export const aquaBackgroundColors = ['#d4dde4', '#96c2cc', '#6599aa', '#4b9ac9', '#88bdba'];
export const fruitBackgroundColors = ['#c0da8f', '#a0c166', '#74be5f', '#6aa773', '#9dc73d'];