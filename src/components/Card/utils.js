import {
    CardTypes,
    BackgroundTypes,
    AnimalsSVGImagesOrder,
    AquaSVGImagesOrder,
    FruitsSVGImagesOrder,
    spaceBackground,
    starColor,
    mountainColors,
    buildingColors,
    treesColors,
} from '../consts';

export function getBGColor(id, type) {
    switch (type) {
        case BackgroundTypes.PYRAMIDS:
            return `linear-gradient(180deg,
                rgba(115,221,246,1) 65%, rgba(${Math.trunc(Math.random() * 170)},196,119,1) 66%)`;
        case BackgroundTypes.SPACE:
            return `linear-gradient(${Math.trunc(Math.random() * 360)}deg,
                ${spaceBackground[id % spaceBackground.length]} ${Math.trunc(Math.random() * 50)}%,
                rgb(22,31,52) ${Math.trunc(Math.random() * 50 + 49)}%)`;
        case BackgroundTypes.CITY:
            return `linear-gradient(0deg, rgba(63,188,96,1) 10%,
                rgba(189,184,174,1) 11%, rgba(189,184,174,1) 30%, 
                rgba(35,203, ${Math.trunc(Math.random() * 50 + 200)} ,1) 33%`;
        case BackgroundTypes.OCEAN:
            return `linear-gradient(${Math.trunc(Math.random() * 360)}deg,
            rgba(115,221,255,1) 0%, rgba(110,139,${Math.trunc(Math.random() * 100 + 155)},1) 100%)`;
        default:
            return 0;
    }
}

export function getSVGImageURL(id, type) {
    const baseURL = 'src/components/icons/';
    const order = Math.floor(id % 12);
    switch (type) {
        case CardTypes.ANIMALS:
            return `${baseURL}animals/${AnimalsSVGImagesOrder[order]}.svg`;
        case CardTypes.AQUA:
            return `${baseURL}aqua/${AquaSVGImagesOrder[order]}.svg`;
        case CardTypes.FRUITS:
            return `${baseURL}fruits/${FruitsSVGImagesOrder[order]}.svg`;
        default:
            return `${baseURL}grass/${id}.svg`;
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
    if (randomCoef <= 0.25) {
        return BackgroundTypes.SPACE;
    }
    if (randomCoef > 0.25 && randomCoef < 0.50) {
        return BackgroundTypes.PYRAMIDS;
    }
    if (randomCoef >= 0.50 && randomCoef < 0.75) {
        return BackgroundTypes.OCEAN;
    }
    if (randomCoef >= 0.75 && randomCoef <= 1) {
        return BackgroundTypes.CITY;
    }
    return 0;
}

export const drawBackground = (id, count) => {
    const backgroundType = getRandomBackgroundType();
    const image = document.createElement('div');
    const imageContainer = document.createElement('div');
    image.appendChild(imageContainer);
    let color;

    switch (backgroundType) {
        case BackgroundTypes.SPACE:
            color = getBGColor(id, backgroundType);
            imageContainer.classList.add('image-background__сontainer-roll');
            imageContainer.style.background = color;
            const stars = drawStars(id, count);
            stars.forEach(star => imageContainer.appendChild(star));
            const planet = drawPlanet(id);
            image.appendChild(planet);
            return image;
        case BackgroundTypes.CITY:
            color = getBGColor(id, backgroundType);
            imageContainer.classList.add('image-background__сontainer');
            imageContainer.style.background = color;
            const sunCIty = drawSun(id);
            imageContainer.appendChild(sunCIty);
            const buildings = drawBuildings(id);
            buildings.forEach(building => imageContainer.appendChild(building));
            const tree = drawTrees();
            imageContainer.appendChild(tree);
            return image;
        case BackgroundTypes.PYRAMIDS:
            color = getBGColor(id, backgroundType);
            imageContainer.classList.add('image-background__сontainer');
            imageContainer.style.background = color;
            const mountains = drawMountains(id);
            mountains.forEach(mountain => imageContainer.appendChild(mountain));
            const sun = drawSun(id);
            imageContainer.appendChild(sun);
            return image;
        case BackgroundTypes.OCEAN:
            color = getBGColor(id, backgroundType);
            imageContainer.classList.add('image-background__сontainer');
            imageContainer.style.background = color;
            const bubbles = drawBubles();
            bubbles.forEach(bubble => imageContainer.appendChild(bubble));
            const grass = drawGrass(count);
            grass.forEach(oneGrass => imageContainer.appendChild(oneGrass));
            return image;
        default:
            break;
    }

    return 1;
};

const drawStars = (id, count) => {
    const starArray = [];
    const starCount = Math.trunc(Math.random() * 40 + 30);
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        if (count > 24) {
            star.style.fontSize = `${Math.trunc(Math.random() * 10 + 2)}px`;
        } else {
            star.style.fontSize = `${Math.trunc(Math.random() * 14 + 2)}px`;
        }
        star.style.color = starColor[(id + i) % starColor.length];
        star.style.position = 'absolute';
        star.style.transform = `translate(${Math.random() * 200 + 50}px,
            ${Math.random() * 140 - 50}px) rotate(${Math.random() * 360}deg)`;
        star.style.zIndex = `${i + 10}`;
        star.innerHTML = '&#9733';
        starArray.push(star);
    }

    return starArray;
};

const drawPlanet = () => {
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

const drawMountains = (id) => {
    const mountainsArray = [];
    const mountainCount = Math.trunc(Math.random() * 3 + 2);
    for (let i = 0; i < mountainCount; i++) {
        const mountain = document.createElement('div');
        mountain.classList.add('mountain');
        mountain.style.borderBottom = `${Math.trunc(Math.random() * 120 + 120)}px solid
        ${mountainColors[(id + i) % mountainColors.length]}`;
        mountain.style.borderLeft = `${Math.trunc(Math.random() * 30 + 75)}px solid transparent`;
        mountain.style.borderRight = `${Math.trunc(Math.random() * 30 + 75)}px solid transparent`;
        mountain.style.transform = `translate(${200 / (i + 1) - 150}px, ${Math.trunc(Math.random() * 70 + 25)}px)`;
        mountainsArray.push(mountain);
    }

    return mountainsArray;
};

const drawSun = (id) => {
    const sun = document.createElement('div');
    sun.classList.add('sun');
    sun.style.background = starColor[(id) % starColor.length];
    const size = `${Math.trunc(Math.random() * 20 + 15)}px`;
    sun.style.width = size;
    sun.style.height = size;

    return sun;
};

const drawBuildings = (id) => {
    const buildingsArray = [];
    const mountainCount = Math.trunc(Math.random() * 3 + 2);
    for (let i = 0; i < mountainCount; i++) {
        const building = document.createElement('div');
        building.classList.add('building');
        const floors = Math.trunc(Math.random() * 4 + 3);
        const rows = Math.trunc(Math.random() * 2 + 2);
        building.style.background = buildingColors[(id + i) % buildingColors.length];
        const windows = floors * rows;
        building.style.height = `${floors * 20}px`;
        building.style.width = `${rows * 20 - 2}px`;
        for (let j = 0; j < windows; j++) {
            const oneWindow = document.createElement('div');
            oneWindow.classList.add('window');
            if (Math.random() > 0.5) {
                oneWindow.style.background = '#827184';
            } else {
                oneWindow.style.background = '#c3bd14';
            }
            setInterval(() => {
                // eslint-disable-next-line eqeqeq
                // только двойным, по другому никак
                if (oneWindow.style.background.toString() === 'rgb(130, 113, 132)') {
                    oneWindow.style.background = '#c3bd14';
                } else {
                    oneWindow.style.background = '#827184';
                }
            }, Math.random() * 20000 + 5000);
            building.appendChild(oneWindow);
        }
        building.style.transform = `translate(${200 / (i + 1) - 50}px,
         ${140 - floors * 20 - Math.trunc(Math.random() * 20)}px)`;
        buildingsArray.push(building);
    }
    return buildingsArray;
};

const drawTrees = () => {
    const tree = document.createElement('div');
    tree.classList.add('tree');

    const treeLeaf = document.createElement('div');
    treeLeaf.classList.add('tree_leaf');
    treeLeaf.style.background = treesColors[Math.trunc(Math.random() * 4)];
    const size = `${Math.trunc(Math.random() * 20 + 30)}px`;
    treeLeaf.style.height = size;
    treeLeaf.style.width = size;
    tree.appendChild(treeLeaf);
    const treeTrunk = document.createElement('div');
    treeTrunk.classList.add('tree_trunk');
    tree.style.transform = `translate(${50 + Math.trunc(Math.random() * 100)}px,
    ${100 - Math.trunc(Math.random() * 20)}px)`;
    tree.appendChild(treeTrunk);
    return tree;
};

const drawBubles = () => {
    const bubblesArray = [];
    const bubblesCount = Math.trunc(Math.random() * 20 + 10);
    for (let i = 0; i < bubblesCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        const size = `${Math.trunc(Math.random() * 10 + 5)}px`;
        bubble.style.width = size;
        bubble.style.height = size;
        bubble.style.bottom = `-${Math.trunc(Math.random() * 50 + 10)}px`;
        bubble.style.left = `${Math.trunc(Math.random() * 200)}px`;
        bubble.style.animationDuration = `${Math.trunc(Math.random() * 10 + 7)}s`;
        bubblesArray.push(bubble);
    }
    return bubblesArray;
};

const drawGrass = (count) => {
    const grassArray = [];
    const grassCount = Math.trunc(Math.random() * 5 + 6);
    for (let i = 0; i < grassCount; i++) {
        const grass = document.createElement('div');
        grass.classList.add('grass');
        const grassImgSrc = getSVGImageURL(Math.trunc(Math.random() * 4));
        const imageSVG = document.createElement('img');
        imageSVG.src = grassImgSrc;
        if (count > 24) {
            imageSVG.style.width = '40px';
            imageSVG.style.height = '40px';
            grass.style.left = `${20 * i + Math.random() * 20}px`;
            grass.style.bottom = '-10px';
        } else {
            grass.style.transform = `translate(${20 * i + Math.random() * 20}px, 70px)`;
        }
        grass.appendChild(imageSVG);
        grassArray.push(grass);
    }
    return grassArray;
};
