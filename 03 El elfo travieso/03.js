function findNaughtyStep(original, modified) {
    for (let i = 0; i <= original.length; i++) {
        if (original[i] !== modified[i]) {
            if (modified.length > original.length) {
                return modified[i];
            }
            return original[i];
        }
    }
    return '';
}

console.log(`Expected 'e': ${findNaughtyStep('abcd', 'abcde')}`); // 'e'
console.log(`Expected '': ${findNaughtyStep('abcde', 'abcde')}`); // ''
console.log(`Expected 'f': ${findNaughtyStep('stepfor', 'stepor')}`); // 'f'
console.log(`Expected 'o': ${findNaughtyStep('xxxx', 'xxoxx')}`); // 'o'