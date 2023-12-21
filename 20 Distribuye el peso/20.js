function distributeGifts(weights) {
    let distributedGifts = JSON.parse(JSON.stringify(weights));
    for (let i = 0; i < weights.length; i++) {
        for (let j = 0; j < weights[0].length; j++) {
            let result = 0;
            let neighbours = [];
            if (weights[i][j]) { neighbours.push(weights[i][j]) }
            // UP
            if (i > 0) {
                if (weights[i - 1][j] !== null) {
                    neighbours.push(weights[i - 1][j])
                };
            }
            // LEFT
            if (weights[i][j - 1] && weights[i][j - 1] !== null) neighbours.push(weights[i][j - 1]);
            // RIGHT
            if (weights[i][j + 1] && weights[i][j + 1] !== null) neighbours.push(weights[i][j + 1]);
            // DOWN
            if (i < weights.length - 1) {
                if (weights[i + 1][j] !== null) {
                    neighbours.push(weights[i + 1][j]);
                }
            }
            neighbours.forEach(n => {
                result += n;
            });
            distributedGifts[i][j] = Math.round(result / neighbours.length);
        }
    }
    return distributedGifts
}

// TESTS
const assert = require('assert');

try {
    assert.deepStrictEqual(distributeGifts(
        [
            [4, 5, 1],
            [6, null, 3],
            [8, null, 4]
        ]
    ),
        [
            [5, 3, 3],
            [6, 5, 3],
            [7, 6, 4]
        ]);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

// [
//     [(4 + 5 + 6) / 3, (5 + 4 + 1) / 3, (1 + 5 + 3) / 3],
//     [(6 + 4 + 8) / 3, (5 + 6 + 3) / 3, (3 + 1 + 4) / 3],
//     [(8 + 6) / 2, (8 + 4) / 2, (4 + 3) / 2]
// ]

try {
    assert.deepStrictEqual(distributeGifts(
        [
            [2, null],
            [null, 3]
        ]
    ),
        [
            [2, 3],
            [3, 3]
        ]
    );
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(distributeGifts(
        [
            [2, 1, 1],
            [3, 4, null]
        ]
    ),
        [
            [2, 2, 1],
            [3, 3, 3]
        ]
    );
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(distributeGifts(
        [
            [null, 1, null, 1, null],
            [1, null, 1, null, 1]
        ]
    ),
        [
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1]
        ]
    );
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(distributeGifts(
        [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]
    ),
        [
            [2, 3, 4],
            [4, 5, 6],
            [6, 7, 8]
        ]
    );
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(distributeGifts(
        [
            [null, 5],
            [3, null]
        ]
    ),
        [
            [4, 5],
            [3, 4]
        ]
    );
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}