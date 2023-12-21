function revealSabotage(store) {
    let count = 0;
    for (let i = 0; i < store.length; i++) {
        for (let j = 0; j < store[0].length; j++) {
            count = ' ';
            console.log(i, j)
            console.log(store[i][j])
            if (store[i][j] === ' ') {
                if (i > 0) { // CHECK UP
                    if (store[i - 1][j - 1] === '*') { count++ }
                    if (store[i - 1][j] === '*') { count++ }
                    if (store[i - 1][j + 1] === '*') { count++ }
                }

                if (j > 0) {
                    if (store[i][j - 1] === '*') { count++ } // CHECK LEFT
                }

                if (store[i][j + 1] === '*') { count++ } // CHECK RIGHT

                // CHECK BOTTOM
                if (i < store.length - 1) {
                    if (store[i + 1][j - 1] === '*') { count++ }
                    if (store[i + 1][j] === '*') { count++ }
                    if (store[i + 1][j + 1] === '*') { count++ }
                }
                store[i][j] = count.toString();
            }
        };
    };
    return store
}

console.log(revealSabotage([
    ['*', ' ', ' ', ' '],
    [' ', ' ', '*', ' '],
    [' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ']
]));

// // TESTS
// const assert = require('assert');

// try {
//     assert.deepStrictEqual(revealSabotage([
//         ['*', ' ', ' ', ' '],
//         [' ', ' ', '*', ' '],
//         [' ', ' ', ' ', ' '],
//         ['*', ' ', ' ', ' ']
//     ]),
//         [
//             ['*', '2', '1', '1'],
//             ['1', '2', '*', '1'],
//             ['1', '2', '1', '1'],
//             ['*', '1', ' ', ' ']
//         ]);
//     console.log('Test ok!');
// } catch (error) {
//     console.error('Failed test:', error);
// }
