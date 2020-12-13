import {
    CardTypes,
    BackgroundTypes,
    groundBackgroundColors,
    aquaBackgroundColors,
    fruitBackgroundColors,
    AnimalsSVGImagesOrder,
    AquaSVGImagesOrder,
    FruitsSVGImagesOrder,
    spaceBackground,
    starColor,
} from '../consts';

export function getBGColor(id, type) {
    switch (type) {
        case CardTypes.ANIMALS:
            return groundBackgroundColors[id % groundBackgroundColors.length];
        case CardTypes.AQUA:
            return aquaBackgroundColors[id % aquaBackgroundColors.length];
        case BackgroundTypes.SPACE:
            // eslint-disable-next-line no-case-declarations
            const gradient = `linear-gradient(${Math.trunc(Math.random() * 360)}deg,
                ${spaceBackground[id % spaceBackground.length]} ${Math.trunc(Math.random() * 50)}%,
                rgb(22,31,52) ${Math.trunc(Math.random() * 50 + 49)}%)`;
            return gradient;
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

function getRandomCoef() {
    return parseFloat(Math.random().toFixed(2));
}

export function getRandomCardType() {
    const randomCoef = getRandomCoef();

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

export function getRandomBackgroundType() {
    const randomCoef = getRandomCoef();

    if (randomCoef <= 1) {
        return BackgroundTypes.SPACE;
    }
    if (randomCoef > 0.3 && randomCoef <= 0.6) {
        return BackgroundTypes.OCEAN;
    }
    if (randomCoef > 0.6 && randomCoef <= 0.97) {
        return BackgroundTypes.CITY;
    }
    if (randomCoef > 0.97) {
        return BackgroundTypes.PYRAMIDS;
    }

    return BackgroundTypes.SPACE;
}

export const drawBackground = (id) => {
    const backgroundType = getRandomBackgroundType();
    const image = document.createElement('div');
    const imageContainer = document.createElement('div');
    image.appendChild(imageContainer);

    switch (backgroundType) {
        case BackgroundTypes.SPACE:
            const color = getBGColor(id, backgroundType);
            imageContainer.classList.add('image-background__сontainer');
            imageContainer.style.background = color;
            const stars = drawStars(id);
            stars.forEach(star => imageContainer.appendChild(star));
            const planet = drawPlanet(id);
            image.appendChild(planet);
            return image;
        case BackgroundTypes.CITY:
            break;
        case BackgroundTypes.PYRAMIDS:
            break;
        default:
            break;
    }
    return 1;
};

export const drawStars = (id) => {
    const starArray = [];
    const starCount = Math.trunc(Math.random() * 100 + 40);
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.style.fontSize = `${Math.trunc(Math.random() * 14 + 1)}px`;
        star.style.color = starColor[(id + i) % starColor.length];
        star.style.position = 'absolute';
        star.style.transform = `translate(${Math.random() * 250 + 50}px, 
            ${Math.random() * 140 - 50}px) rotate(${Math.random() * 360}deg)`;
        star.style.zIndex = `${i + 10}`;
        star.innerHTML = '&#9733';
        starArray.push(star);
    }
    return starArray;
};

export const drawPlanet = () => {
    const planet = document.createElement('div');
    planet.classList.add('planet');
    planet.style.background = 'linear-gradient(90deg, rgba(45,209,248,1) 14%, rgba(31,150,46,1) 60%)';
    const size = `${Math.trunc(Math.random() * 30 + 20)}px`;
    planet.style.width = size;
    planet.style.height = size;
    planet.style.transform = `translate(${Math.trunc(Math.random() * 200 - 20)}px, -${Math.trunc(Math.random() * 150)}px) 
    rotate(${Math.random() * 360}deg`;
    return planet;
};
