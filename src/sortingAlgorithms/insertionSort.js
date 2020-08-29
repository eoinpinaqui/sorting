export function getInsertionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    let copy = array.slice();
    insertionSortHelper(copy, animations);
    return animations;
}

function insertionSortHelper(array, animations) {
    for(let i = 1; i < array.length; i++) {
        animations.push([[i], false]);
        let k = array[i];
        let j = i - 1;
        while(j >= 0 && array[j] > k) {
            animations.push([[j, j + 1, i], false]);
            array[j + 1] = array[j];
            animations.push([[j + 1, array[j]], true]);
            j -= 1;
        }
        array[j + 1] = k;
        animations.push([[j + 1, k], true]);
    }
}