export function randomSortArray(arr) { 
    return arr.sort(() => Math.random() - 0.5); 
}

export function getLimitedScoreCoef(coef) {
    const roundedCoef = coef.toFixed(2);

    return Math.min(Math.max(roundedCoef, 0.5), 5);
}