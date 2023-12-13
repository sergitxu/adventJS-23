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
        // Original upperCase
        if (letter.match(upperLetters)) {
            if (copyLetter !== letter.toLowerCase() && !copyLetter.match(otherChars)) {
                return false;
            }
            // Original lowerCase
        } else if (letter.match(lowerLetters)) {
            if (copyLetter !== letter && !copyLetter.match(otherChars)) {
                return false;
            }
            // Original otherChars
        } else if (letter.match(otherChars)) {
            if (letter === ' ' && copyLetter !== ' ') {
                return false;
            }
            return checkSpecialCharacter(letter, copyLetter);
        } else if (letter !== copyLetter) {
            return false;
        }
    }
    /* 
    Without this function the code still works 
    because there are no examples with '#+:.' characters 
    in the original message
    */
    function checkSpecialCharacter(original, copy) {
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
