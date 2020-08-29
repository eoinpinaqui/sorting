export function getMergeSortAnimations(array) {
    if (array.length <= 1) return array;
    let copy = array.slice();
    let animations = mergeSort(copy);
    return animations;
}

function mergeSort(array) {
    const animations = [];
    for(let m = 1; m < array.length; m = 2 * m) {
        for(let i = 0; i < array.length; i += 2 * m) {
            let start = i;
            let middle = i + m;
            let end = Math.min(i + 2*m, array.length);
            merge(array, start, middle, end, animations);
        }
    }
    return animations;
}

function merge(array, start, middle, end, animations) {
    console.log("Start: " + start + " Middle: " + middle + " End: " + end);
    let left = array.slice(start, middle);
    let right = array.slice(middle, end);

    let i = 0;
    let j = 0;
    let k = start;
    while(i < left.length && j < right.length) {
        animations.push([[start + i, middle + j], false]);
        if(left[i] <= right[j]) {
            animations.push([[k, left[i]], true]);
            array[k] = left[i];
            i += 1;
        } else {
            animations.push([[k, right[j]], true]);
            array[k] = right[j];
            j += 1;
        }
        k++;
    }
    while(i < left.length) {
        animations.push([[k, left[i]], true]);
        array[k] = left[i];
        i += 1;
        k += 1;
    }
    while(j < right.length) {
        animations.push([[k, right[j]], true]);
        array[k] = right[j];
        j += 1;
        k += 1;
    }
}

