export function getQuickSortAnimations(array) {
    const animations = [];
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
}

function quickSortHelper(array, start, end, animations) {
    if(start < end) {
        const pi = partition(array, start, end, animations);
        quickSortHelper(array, start, pi - 1, animations);
        quickSortHelper(array, pi + 1, end, animations);
    }
}

function partition(array, start, end, animations) {
    let i = start;
    let j = end + 1;
    const pivot = array[start];
    while(true) {
        while(array[++i] <= pivot ) {
            if(i === end) break;
            animations.push([[i], false]);
        }
        while(array[--j] >= pivot) {
            if(j === start) break;
            animations.push([[j], false]);
        }
        if(j <= i) break;
        animations.push([[i, array[j]], true]);
        animations.push([[j, array[i]], true]);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    animations.push([[start, array[j]], true]);
    animations.push([[j, array[start]], true]);
    const temp = array[start];
    array[start] = array[j];
    array[j] = temp;
    return j;
}