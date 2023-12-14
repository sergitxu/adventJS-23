function checkIsValidCopy(original, copy) {
    const upperLetters = new RegExp('[A-Z]');
    const lowerLetters = new RegExp('[a-z]');
    const otherChars = new RegExp('[#+:. ]');

    if (original.length !== copy.length) {
        return false;
    };
    original.split(' ');
    for (let letter of original) {
        const copyLetter = copy[original.indexOf(letter)];
        if (copyLetter != letter && copyLetter !== letter.toLowerCase()) {
            // Original upperCase
            if (letter.match(upperLetters)) {
                if (!copyLetter.match(otherChars)) {
                    return false;
                }
                // Original lowerCase
            } else if (letter.match(lowerLetters)) {
                if (!copyLetter.match(otherChars)) {
                    return false;
                }
                // Original otherChars
            } else if (letter.match(otherChars)) {
                if (letter === ' ' && copyLetter !== ' ') {
                    return false;
                }
                let isValidCharacter = checkSpecialChar(letter, copyLetter);
                return isValidCharacter;
            }
        }
    }
    function checkSpecialChar(original, copy) {
        let reference = '#+:. ';
        let index = reference.indexOf(original);
        let possibleRef = reference.substring(index, reference.length);
        const possibleSpecialCharacters = new RegExp(`[${possibleRef}]`);
        if (possibleRef && copy.match(possibleSpecialCharacters)) {
            return true;
        }
        return false;
    }
    return true;
}
// checkIsValidCopy('Santa Claus', '###:. c:+##')
// console.log(checkIsValidCopy('Santa Claus', '###:. c:+##') + '\n')
// checkIsValidCopy('Santa Claus', 's#+:.#c:. s')
// console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s'))
// TESTS
const assert = require('assert');

try {
    assert.strictEqual(checkIsValidCopy('Santa Claus', 's#+:.#c:. s'), false);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.strictEqual(checkIsValidCopy('3: #egalos', '3+ .+:# #:'), false);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.strictEqual(checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s'), false);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.strictEqual(checkIsValidCopy('Santa Claus', '###:. c:+##'), true);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.strictEqual(checkIsValidCopy('SAOPO]', 's'), false);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.strictEqual(checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#'), true);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.strictEqual(checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#'), false);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.strictEqual(checkIsValidCopy('Santa Claus', 's#+:. c:. s'), true);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.strictEqual(checkIsValidCopy('Santa Claus', 's#+:.#c:. s'), false);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.strictEqual(checkIsValidCopy('S#n:a Claus', 'S#+:. c:. s'), true);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

