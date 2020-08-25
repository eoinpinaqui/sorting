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
    const pivot = array[end];
    let i = (start - 1);
    for(let j = start; j <= end - 1; j++) {

        if(array[j] <= pivot) {
            i++;
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    let temp = array[i + 1];
    array[i + 1] = array[end];
    array[end] = temp;
    return i + 1;
}