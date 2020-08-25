export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    bubbleSortHelper(array, animations);
    return animations;
}

function bubbleSortHelper(array, animations) {
    for(let i = 0; i < array.length - 1; i++) {
        for(let j = 0; j < array.length - i - 1; j++) {
            // Change the colour of the bars we are checking
            animations.push([j, j + 1]);
            // Change the colours back after checking
            animations.push([j, j + 1]);

            if(array[j] > array[j + 1]) {
                animations.push([j, array[j + 1]]);
                animations.push([j + 1, array[j]]);
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            } else {
                animations.push([-1, -1]);
                animations.push([-1, -1]);
            }
        }
    }
}



