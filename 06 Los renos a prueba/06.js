function maxDistance(movements) {
    let maxNumber = 0;
    let extra = 0;
    for (const movement of movements) {
        if (movement === '>') {
            maxNumber++;
        } else if (movement === '<') {
            maxNumber--;
        } else {
            extra++
        }
    };
    return Math.abs(maxNumber) + extra;
    // (movements.match(/\>/g) || []).length;
    // let right = (movements.match(/\>/g) || []).length;
    // let left = (movements.match(/\</g) || []).length;
    // let extra = (movements.match(/\*/g) || []).length;
    // return Math.abs(right - left) + extra;
}


const movements = '>>*<'
const result = maxDistance(movements)
console.log(`Expected: 2: ${result}`) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(`Expected: 2: ${result2}`) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(`Expected: 5: ${result3}`) // -> 5