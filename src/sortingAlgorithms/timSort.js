export function getTimSortAnimations(array, chunkSize) {
    const animations = [];
    if (array.length <= 1) return array;
    timSortHelper(array, chunkSize, animations);
    return animations;
}

function timSortHelper(array, chunkSize, animations) {
    for(let i = 0; i < array.length; i += chunkSize) {
        insertionSort(array, i, Math.min((i + chunkSize - 1), (array.length - 1)), animations);
    }

    console.log(array);

    let sorted = false;
    while(!sorted) {
        sorted = true;
        let start = 0;
        let middle = -1;
        for(let i = 0; i < array.length; i++) {
            if(i + 1 === array.length && sorted) {
                return;
            } else if(array[i] > array[i + 1] || i + 1 === array.length) {
                sorted = false;
                if(middle === -1) {
                    middle = i + 1;
                } else {
                    merge(array, start, middle, i + 1, animations);
                    start = i + 1;
                    middle = -1;
                }
            }
        }
        middle = -1;

    }
}

function insertionSort(array, start, end, animations) {
    for(let i = start + 1; i <= end; i++) {
        let k = array[i];
        let j = i - 1;
        while(j >= start && array[j] > k) {
            animations.push([[j, j + 1], false]);
            array[j + 1] = array[j];
            animations.push([[j + 1, array[j]], true]);
            j -= 1;
        }
        array[j + 1] = k;
        animations.push([[j + 1, k], true]);
    }
}

function merge(array, start, middle, end, animations) {
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