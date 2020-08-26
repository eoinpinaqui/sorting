export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const copy = array.slice();
    mergeSortHelper(array, 0, array.length - 1, copy, animations);
    return animations;
}

function mergeSortHelper(array, start, end, copy, animations) {
    if (start >= end) return;
    const middle = Math.floor((start + end) / 2);
    mergeSortHelper(copy, start, middle, array, animations);
    mergeSortHelper(copy, middle + 1, end, array, animations);
    doMerge(array, start, middle, end, copy, animations);
}

function doMerge(array, start, middle, end, copy, animations) {
    let k = start;
    let i = start;
    let j = middle + 1;
    while (i <= middle && j <= end) {
        animations.push([[i, j], false]);

        if (copy[i] <= copy[j]) {
            animations.push([[k, copy[i]], true]);
            array[k++] = copy[i++];
        } else {
            animations.push([[k, copy[j]], true]);
            array[k++] = copy[j++];
        }
    }
    while (i <= middle) {
        animations.push([[i, i], false]);
        animations.push([[k, copy[i]], true]);
        array[k++] = copy[i++];
    }
    while (j <= end) {
        animations.push([[j, j], false]);
        animations.push([[k, copy[j]], true]);
        array[k++] = copy[j++];
    }
}