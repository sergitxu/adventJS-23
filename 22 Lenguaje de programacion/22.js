function compile(code) {
    let output = 0;
    let backPoint;

    for (let i = 0; i < code.length; i++) {
        switch (code[i]) {
            case '+':
                output++;
                break;
            case '-':
                output--;
                break;
            case '*':
                output = output * 2;
                break;
            case '%':
                backPoint = i;
                break;
            case '<':
                if (backPoint) {
                    code = code.slice(0, i) + code.slice(i + 1, code.length);
                    i = backPoint;
                }
                break;
            case '¿':
                if (output <= 0) {
                    code = code.replace(/¿[^?]*\?/, '');
                    i--;
                    break;
                }
                break;
        }
    }
    return output;
}

// TESTS
const assert = require('assert');

try {
    assert.strictEqual(compile('++*-'), 3);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.strictEqual(compile('++%++<'), 6);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.strictEqual(compile('++<--'), 0);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.strictEqual(compile('++¿+?'), 3);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.strictEqual(compile('--¿+++?'), -2);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.strictEqual(compile('++%++<++¿*?'), 16);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.strictEqual(compile('--¿+++?+++¿--?'), -1);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}
