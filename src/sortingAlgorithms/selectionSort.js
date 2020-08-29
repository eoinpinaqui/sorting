export function getSelectionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    let copy = array.slice();
    selectionSortHelper(copy, animations);
    return animations;
}

function selectionSortHelper(array, animations) {
    for(let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for(let j = i + 1; j < array.length; j++) {
            animations.push([[j, i], false]);
            if(array[j] < array[minIndex])
                minIndex = j;
        }
        animations.push([[i, array[minIndex]], true]);
        animations.push([[minIndex, array[i]], true]);
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
}