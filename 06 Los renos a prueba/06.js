function maxDistance(movements) {
    let maxNumber = 0;
    let extra = 0;
    for (const movement of movements) {
        if (movement === '>') {
            maxNumber++;
        } else if (movement === '<') {
            maxNumber--;
        } else {
            extra++
        }
    };
    return Math.abs(maxNumber) + extra;
    // (movements.match(/\>/g) || []).length;
    // let right = (movements.match(/\>/g) || []).length;
    // let left = (movements.match(/\</g) || []).length;
    // let extra = (movements.match(/\*/g) || []).length;
    // return Math.abs(right - left) + extra;
}

// TESTS
const assert = require('assert');

try {
    assert.deepStrictEqual(maxDistance('>>*<'), 2);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(maxDistance('<<<>'), 2);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(maxDistance('>***>'), 5);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}
