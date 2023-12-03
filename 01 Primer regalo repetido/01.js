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

// Some tests
console.log('expected 7: ' + findFirstRepeated([5, 1, 7, 3, 7, 5, 1]));
console.log('expected -1: ' + findFirstRepeated([]))
console.log('expected -1: ' + findFirstRepeated([1, 2]))
console.log('expected 2: ' + findFirstRepeated([2, 2]))
