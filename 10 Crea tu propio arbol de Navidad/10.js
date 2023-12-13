function createChristmasTree(ornaments, height) {
    let result = '';
    const ornamentsLength = ornaments.length;
    let ornamentsIndex = 0;

    for (let i = 1; i <= height; i++) {
        let nivel = '';

        for (let j = 1; j <= i; j++) {
            nivel += ornaments[ornamentsIndex % ornamentsLength] + ' ';
            ornamentsIndex++;
        }

        const spaces = ' '.repeat(height - i);
        result += spaces + nivel.trim() + '\n';
    }

    const spacesStem = ' '.repeat(height - 1) + '|';
    result += spacesStem + '\n';

    return result;
}

// TESTS
const assert = require('assert');

try {
    assert.strictEqual(createChristmasTree('123', 4),
        '   1\n' +
        '  2 3\n' +
        ' 1 2 3\n' +
        '1 2 3 1\n' +
        '   |\n'
    );
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}
//    1
//   2 3
//  1 2 3
// 1 2 3 1
//    |

try {
    assert.strictEqual(createChristmasTree('*@o', 3),
        '  *\n' +
        ' @ o\n' +
        '* @ o\n' +
        '  |\n'
    );
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}
//   *
//  @ o
// * @ o
//   |