function getStaircasePaths(steps, maxJump) {
    let result = [];

    function explorePath(currentStep, path) {
        if (currentStep === steps) {
            result.push(path.slice());
            return;
        }

        for (let jump = 1; jump <= maxJump; jump++) {
            if (currentStep + jump <= steps) {
                path.push(jump);
                explorePath(currentStep + jump, path);
                path.pop();
            }
        }
    }

    explorePath(0, []);

    return result;
}

// TESTS
const assert = require('assert');

try {
    assert.deepStrictEqual(getStaircasePaths(4, 2), [
        [1, 1, 1, 1],
        [1, 1, 2],
        [1, 2, 1],
        [2, 1, 1],
        [2, 2]
    ]);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(getStaircasePaths(0, 0), [[]]);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(getStaircasePaths(1, 1), [[1]]);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(getStaircasePaths(7, 3), [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 2],
        [1, 1, 1, 1, 2, 1],
        [1, 1, 1, 1, 3],
        [1, 1, 1, 2, 1, 1],
        [1, 1, 1, 2, 2],
        [1, 1, 1, 3, 1],
        [1, 1, 2, 1, 1, 1],
        [1, 1, 2, 1, 2],
        [1, 1, 2, 2, 1],
        [1, 1, 2, 3],
        [1, 1, 3, 1, 1],
        [1, 1, 3, 2],
        [1, 2, 1, 1, 1, 1],
        [1, 2, 1, 1, 2],
        [1, 2, 1, 2, 1],
        [1, 2, 1, 3],
        [1, 2, 2, 1, 1],
        [1, 2, 2, 2],
        [1, 2, 3, 1],
        [1, 3, 1, 1, 1],
        [1, 3, 1, 2],
        [1, 3, 2, 1],
        [1, 3, 3],
        [2, 1, 1, 1, 1, 1],
        [2, 1, 1, 1, 2],
        [2, 1, 1, 2, 1],
        [2, 1, 1, 3],
        [2, 1, 2, 1, 1],
        [2, 1, 2, 2],
        [2, 1, 3, 1],
        [2, 2, 1, 1, 1],
        [2, 2, 1, 2],
        [2, 2, 2, 1],
        [2, 2, 3],
        [2, 3, 1, 1],
        [2, 3, 2],
        [3, 1, 1, 1, 1],
        [3, 1, 1, 2],
        [3, 1, 2, 1],
        [3, 1, 3],
        [3, 2, 1, 1],
        [3, 2, 2],
        [3, 3, 1]
    ]
    );
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(getStaircasePaths(3, 3), [[1, 1, 1], [1, 2], [2, 1], [3]]);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(getStaircasePaths(2, 1), [[1, 1]]);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(getStaircasePaths(5, 2), [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 2],
        [1, 1, 2, 1],
        [1, 2, 1, 1],
        [1, 2, 2],
        [2, 1, 1, 1],
        [2, 1, 2],
        [2, 2, 1],
    ]);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}
