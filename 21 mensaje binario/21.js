function findBalancedSegment(message) {
    let maxLength = 0;
    let startIdx = -1;

    for (let i = 0; i < message.length; i++) {
        let countZero = 0;
        let countOne = 0;

        for (let j = i; j < message.length; j++) {
            if (message[j] === 0) {
                countZero++;
            } else {
                countOne++;
            }

            if (countZero === countOne && (j - i + 1) > maxLength) {
                maxLength = j - i + 1;
                startIdx = i;
            }
        }
    }

    if (startIdx !== -1) {
        return [startIdx, startIdx + maxLength - 1];
    } else {
        return [];
    }
}

// TESTS
const assert = require('assert');

try {
    assert.deepStrictEqual(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]), [2, 5]);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(findBalancedSegment([1, 1, 0]), [1, 2]);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(findBalancedSegment([1, 1, 1]), []);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}
