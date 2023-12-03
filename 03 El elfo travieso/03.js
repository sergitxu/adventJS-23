function findNaughtyStep(original, modified) {
    for (let i = 0; i <= original.length; i++) {
        // Recorremos los caracteres de original más uno por si hay un paso añadido
        if (original[i] !== modified[i]) {
            // Ha habido un paso cambiado
            if (modified.length > original.length) {
                // se ha añadido un paso al original
                return modified[i];
            }
            // se ha eliminado un paso al original
            return original[i];
        }
    }
    return '';
}

console.log(`Expected 'e': ${findNaughtyStep('abcd', 'abcde')}`); // 'e'
console.log(`Expected '': ${findNaughtyStep('abcde', 'abcde')}`); // ''
console.log(`Expected 'f': ${findNaughtyStep('stepfor', 'stepor')}`); // 'f'
console.log(`Expected 'o': ${findNaughtyStep('xxxx', 'xxoxx')}`); // 'o'