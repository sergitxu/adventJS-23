function travelDistance(map) {
    let counter = 0;
    const rows = map.trim().split('\n');
    const matrix = rows.map(row => row.trim().split(''));
    function findPosition(target) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] === target) {
                    return [i, j];
                }
            }
        }
    }
    let pre = 'S';
    for (let i = 1; i <= 9; i++) {
        i = i.toString();
        if (findPosition(i)) {
            counter += Math.abs(findPosition(i)[0] - findPosition(pre)[0]);
            counter += Math.abs(findPosition(i)[1] - findPosition(pre)[1]);
            pre = i;
        }
    }

    return counter;
}

// TESTS
const assert = require('assert');

try {
    assert.strictEqual(travelDistance(
        `.....1....
        ..S.......
        ..........
        ....3.....
        ......2...`
    ), 12);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.strictEqual(travelDistance(
        `.....2....
        ..S.......
        ..........
        ....1.....
        ......3...`
    ), 13);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.strictEqual(travelDistance(
        `3....1....
        ..S.......
        .........2
        ..........
        ......4...`
    ), 31);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.strictEqual(travelDistance(`S1`), 1);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.strictEqual(travelDistance(`1....S`), 5);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.strictEqual(travelDistance(`S12....3`), 7);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}
