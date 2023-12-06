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

console.log('Expected: hola mundo: ' + decode('hola (odnum)'));
console.log('Expected: santaclaus: ' + decode('sa(u(cla)atn)s'));
console.log('Expected: hello world!: ' + decode('(olleh) (dlrow)!'));
