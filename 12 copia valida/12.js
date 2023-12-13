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
        } else if (letter !== copyLetter) {
            return false;
        }
    }
    return true;
}
console.log(`Expected: false - ${checkIsValidCopy('Santa Claus', 's#+:.#c:. s')}`);
console.log(`Expected: true FALSE - ${checkIsValidCopy('3: #egalos', '3+ .+:# #:')}`);
console.log(`Expected: true - ${checkIsValidCopy('Santa Claus', '###:. c:+##')}`);
console.log(`Expected: false - ${checkIsValidCopy('SAOPO]', 's')}`);
console.log(`Expected: true - ${checkIsValidCopy(
    'Santa Claus is coming',
    'sa#ta cl#us is comin#'
)}`);
console.log(`Expected: false - ${checkIsValidCopy(
    'Santa Claus is coming',
    'p#nt: cla#s #s c+min#'
)}`);
console.log(`Expected: true - ${checkIsValidCopy('Santa Claus', 's#+:. c:. s')}`);
console.log(`Expected: false - ${checkIsValidCopy('Santa Claus', 's#+:.#c:. s')}`);
