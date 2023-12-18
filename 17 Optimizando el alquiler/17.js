function optimizeIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let mergedIntervals = [];
    let currentInterval = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        let nextInterval = intervals[i];

        if (currentInterval[1] >= nextInterval[0]) {
            currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
        } else {
            mergedIntervals.push(currentInterval);
            currentInterval = nextInterval;
        }
    }
    mergedIntervals.push(currentInterval);

    return mergedIntervals;
}

// TESTS
const assert = require('assert');

try {
    assert.deepStrictEqual(optimizeIntervals([[3, 3], [1, 2], [5, 6]]), [[1, 2], [3, 3], [5, 6]]);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(optimizeIntervals([[1, 1], [8, 10], [2, 2]]), [[1, 1], [2, 2], [8, 10]]);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(optimizeIntervals([[3, 4000], [1, 2], [2, 6000]]), [[1, 6000]]);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(optimizeIntervals([[3, 4], [1, 2], [5, 6]]), [[1, 2], [3, 4], [5, 6]]);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(optimizeIntervals([[1, 15], [8, 12], [4, 7]]), [[1, 15]]);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(optimizeIntervals([[1, 3], [8, 10], [2, 6]]), [[1, 6], [8, 10]]);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(optimizeIntervals([[5, 8], [2, 7], [3, 4]]), [[2, 8]]);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}
