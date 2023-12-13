function getIndexsForPalindrome(word) {
    function isPalindrome(str) {
        return str === str.split('').reverse().join('');
    }

    if (word.length < 3 || isPalindrome(word)) {
        return [];
    }

    for (let i = 0; i < word.length - 1; i++) {
        for (let j = word.length - 1; j > i; j--) {
            if (word[i] !== word[j]) {
                let modifiedWord = word.substring(0, i) + word[j] + word.substring(i + 1, j) + word[i] + word.substring(j + 1);
                if (isPalindrome(modifiedWord)) {
                    return [i, j];
                }
            }
        }
    }
    return null;
}

// TESTS
const assert = require('assert');

try {
    assert.deepStrictEqual(getIndexsForPalindrome('anna'), []);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(getIndexsForPalindrome('aaaaaaaa'), []);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(getIndexsForPalindrome('abac'), null);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(getIndexsForPalindrome('caababa'), null);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(getIndexsForPalindrome('abab'), [0, 1]);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(getIndexsForPalindrome('aaababa'), [1, 3]);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(getIndexsForPalindrome('rotaratov'), [4, 8]);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}
