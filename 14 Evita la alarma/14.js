function maxGifts(houses) {
    const n = houses.length;
    let best = [];
    best[0] = houses[0];
    best[1] = Math.max(houses[0], houses[1]);
    console.log(best)
  
    for (let i = 2; i < n; i++) {
      best[i] = Math.max(best[i - 1], best[i - 2] + houses[i]);
      console.log(best)
    }
    return best[n - 1];
  }

// TESTS
const assert = require('assert');

try {
    assert.strictEqual(maxGifts([1, 2, 3, 1]), 4);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}
 // 4 (1 + 3)

try {
    assert.strictEqual(maxGifts([2, 4, 2]), 4);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}
 // 4 (4)

try {
    assert.strictEqual(maxGifts([5, 1, 1, 5]), 10);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}
// 10 (5 + 5)

try {
    assert.strictEqual(maxGifts([4, 1, 1, 4, 2, 1]), 9);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}
// 9 (4 + 4 + 1)

try {
    assert.strictEqual(maxGifts([1, 3, 1, 3, 100]), 103);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}
// 103 (3 + 100)
