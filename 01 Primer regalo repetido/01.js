function findFirstRepeated(gifts) {
    const toCompare = new Set();
    for (const gift of gifts) {
        if (toCompare.has(gift)) {
            // Si el set para comparar tiene el juguete, es el primer repetido
            return gift;
        }
        toCompare.add(gift);
    }
    return -1;
}

// TESTS
const assert = require('assert');

try {
    assert.strictEqual(findFirstRepeated([5, 1, 7, 3, 7, 5, 1]), 7);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.strictEqual(findFirstRepeated([]), -1);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.strictEqual(findFirstRepeated([1, 2]), -1);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.strictEqual(findFirstRepeated([2, 2]), 2);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}
