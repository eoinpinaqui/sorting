export function getInsertionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    insertionSortHelper(array, animations);
    return animations;
}

function insertionSortHelper(array, animations) {
    for(let i = 1; i < array.length; i++) {
        let k = array[i];
        let j = i - 1;
        while(j >= 0 && array[j] > k) {
            animations.push([[j, j + 1], false]);
            array[j + 1] = array[j];
            animations.push([[j + 1, array[j]], true]);
            j -= 1;
        }
        array[j + 1] = k;
        animations.push([[j + 1, k], true]);
    }
}