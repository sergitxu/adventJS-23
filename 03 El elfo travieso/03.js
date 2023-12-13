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

// TESTS
const assert = require('assert');

try {
    assert.deepStrictEqual(findNaughtyStep('abcd', 'abcde'), 'e');
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(findNaughtyStep('abcde', 'abcde'), '');
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(findNaughtyStep('stepfor', 'stepor'), 'f');
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(findNaughtyStep('xxxx', 'xxoxx'), 'o');
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}