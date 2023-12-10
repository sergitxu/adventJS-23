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
// Ejemplos de uso:

console.log(createChristmasTree('123', 4));
`
    1
   2 3
  1 2 3
1 2 3 1 2
    |
`

console.log(createChristmasTree('*@o', 3));
`
   *
  @ o
 * @ o
   |
`
