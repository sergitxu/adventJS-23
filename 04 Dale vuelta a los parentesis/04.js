function decode(message) {
    let parenthesisText = '';
    let pre = '';
    let post = '';
    // Contar cuántos ( hay.
    let parenthesisNumber = message.split("(").length - 1;
    // Por cada uno, tomar el siguiente ) inmediato, y darle la vuelta al texto.
    for (let i = 0; i < parenthesisNumber; i++) {
        parenthesisText = message.substring(message.lastIndexOf('(') + 1, message.length);
        parenthesisText = parenthesisText.substring(0, parenthesisText.indexOf(')'));
        parenthesisText = parenthesisText.split('').reverse().join('');
        pre = message.substring(0, message.lastIndexOf('('));
        post = message.substring(
            pre.length +
            parenthesisText.length + 2,
            message.length
        );
        message = pre + parenthesisText + post;
    }
    return message;
}

// TESTS
const assert = require('assert');

try {
    assert.deepStrictEqual(decode('hola (odnum)'), 'hola mundo');
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(decode('sa(u(cla)atn)s'), 'santaclaus');
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(decode('(olleh) (dlrow)!'), 'hello world!');
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}
