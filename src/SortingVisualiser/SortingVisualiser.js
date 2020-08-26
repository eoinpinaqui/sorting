import React from 'react';
import './SortingVisualiser.css';
import {getMergeSortAnimations} from "../sortingAlgorithms/mergeSort";
import {getBubbleSortAnimations} from "../sortingAlgorithms/bubbleSort";
import {getQuickSortAnimations} from "../sortingAlgorithms/quickSort";

// Constants used
const ANIMATION_SPEED_MS = 1;
const PRIMARY_COLOR = '#ff59ac';
const SECONDARY_COLOR = 'blue';

export default class SortingVisualiser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bars: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {

        const array = [];
        // Determine amount of bars to create
        const width = window.innerWidth;
        const container_width = width - 100;
        const numBars = container_width / 4;

        // Determine how tall to make the bars
        const height = window.innerHeight;
        const maxBarHeight = (height - 200)

        for (let i = 0; i < numBars; i++) {
            array.push(randomIntFromInterval(5, maxBarHeight));
        }
        this.setState({
            bars: array
        });
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.bars);
        this.animate(animations);
    }

    quickSort() {
        const animations = getQuickSortAnimations(this.state.bars);
        this.animate(animations);
    }

    heapSort() {
    }

    bubbleSort() {
        const animations = getBubbleSortAnimations(this.state.bars);
        this.animate(animations);
    }

    animate(animations) {
        let k = 0
        for(let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
            const colorChange = !animations[i][1];
            if(colorChange) {
                const bars = animations[i][0];
                setTimeout(() => {
                    for(let j = 0; j < bars.length; j++) {
                        arrayBars[bars[j]].style.backgroundColor = SECONDARY_COLOR;
                    }
                }, k++ * ANIMATION_SPEED_MS);
                setTimeout(() => {
                    for(let j = 0; j < bars.length; j++) {
                        arrayBars[bars[j]].style.backgroundColor = PRIMARY_COLOR;
                    }
                }, k++ * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [bar1, newHeight] = animations[i][0];
                    const bar1style = arrayBars[bar1].style;
                    bar1style.height = `${newHeight}px`;
                }, k++ * ANIMATION_SPEED_MS);
            }
        }
    }

    render() {
        const array = this.state.bars

        return (
            <div className="array-container">
                {array.map((value, idx) => (
                    <div
                        className="array-bar"
                        key={idx}
                        style={{height: `${value}px`}}/>
                ))}
                <div style={{display: "block"}}>
                    <button onClick={() => this.resetArray()}>Generate New Array!</button>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button onClick={() => this.quickSort()}>Quick Sort</button>
                    <button onClick={() => this.heapSort()}>Heap Sort</button>
                    <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                </div>
            </div>
        );
    }
}

// Returns a random integer between the given interval.
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
