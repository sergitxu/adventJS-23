function checkIsValidCopy(original, copy) {
    const upperLetters = new RegExp('[A-Z]');
    const lowerLetters = new RegExp('[a-z]');
    const specialCharacters = new RegExp('[#+:. ]');

    function checkSpecialCharacter(original, copy) {
        let reference = '#+:. ';
        let index = reference.indexOf(original);
        let possibleRef = reference.substring[index, reference.length];
        const possibleSpecialCharacters = new RegExp('[${possibleRef}]');
        if (possibleRef && copy.match(possibleSpecialCharacters)) {
            return true;
        }
        return false;
    }

    if (original.length !== copy.length) {
        return false;
    };

    for (let i = 0; i < original.length; i++) {
        const originalCharacter = original[i];
        const copyCharacter = copy[i];
        if (originalCharacter.match(upperLetters)) {
            if (copyCharacter !== originalCharacter.toLowerCase() && !copyCharacter.match(specialCharacters)) {
                return false;
            }
        } else if (originalCharacter.match(lowerLetters)) {
            if (copyCharacter !== originalCharacter && !copyCharacter.match(specialCharacters)) {
                return false;
            }
        } else if (originalCharacter.match(specialCharacters)) {
            if (originalCharacter === ' ' && copyCharacter !== ' ') {
                return false;
            }
            checkSpecialCharacter(originalCharacter, copyCharacter);
        } else if (originalCharacter !== copyCharacter) {
            return false;
        }
    }
    return true;

}
console.log(`Expected: false - ${checkIsValidCopy('Santa Claus', 's#+:.#c:. s')}`);
console.log(`Expected: true - ${checkIsValidCopy('3 #egalos', '3 .+:# #:')}`);
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
