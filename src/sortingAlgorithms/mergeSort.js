export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const copy = array.slice();
    mergeSortHelper(array, 0, array.length - 1, copy, animations);
    return animations;
}

function mergeSortHelper(array, start, end, copy, animations) {
    if (start === end) return;
    const middleIdx = Math.floor((start + end) / 2);
    mergeSortHelper(copy, start, middleIdx, array, animations);
    mergeSortHelper(copy, middleIdx + 1, end, array, animations);
    doMerge(array, start, middleIdx, end, copy, animations);
}

function doMerge(array, start, middleIdx, end, copy, animations) {
    let k = start;
    let i = start;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= end) {
        // Change the colour of the bars we are checking
        animations.push([i, j]);
        // Change the colours back after checking
        animations.push([i, j]);

        if (copy[i] <= copy[j]) {
            animations.push([k, copy[i]]);
            array[k++] = copy[i++];
        } else {
            animations.push([k, copy[j]]);
            array[k++] = copy[j++];
        }
    }
    while (i <= middleIdx) {
        // Change the colour of the bars we are checking
        animations.push([i, i]);
        // Change the colours back after checking
        animations.push([i, i]);

        animations.push([k, copy[i]]);
        array[k++] = copy[i++];
    }
    while (j <= end) {
        // Change the colour of the bars we are checking
        animations.push([j, j]);
        // Change the colours back after checking
        animations.push([j, j]);

        animations.push([k, copy[j]]);
        array[k++] = copy[j++];
    }
}