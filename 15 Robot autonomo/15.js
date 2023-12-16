function autonomousDrive(store, movements) {
    let robotCol = -1;
    let robotRow = -1;
    let finalPos = [];

    for (let i = 0; i < store.length; i++) {
        if (store[i].indexOf('!') !== -1) {
            robotRow = i;
            robotCol = store[i].indexOf('!');
            break;
        }
    }
    let initial = store[robotRow].substring(0, robotCol);
    store[robotRow] = initial + '.' + store[robotRow].substring(robotCol + 1);
    for(let movement of movements) {
        switch(movement) {
            case 'L': {
            if(store[robotRow][robotCol-1] === '.') robotCol--;
            break;
            }
            case 'R': {
            if(store[robotRow][robotCol+1] === '.') robotCol++;
            break;
            }
            case 'U':  {
            if(store[robotRow-1][robotCol] === '.') robotRow--;
            break;
            }
            case 'D': {
              if(robotRow+1 < store.length){
                if(store[robotRow+1][robotCol] === '.') robotRow++;
              }
            break;
            }
        }
        finalPos = [robotRow,robotCol]
    }
    let final1 = store[finalPos[0]].substring(0, finalPos[1]);
    let final2 = store[finalPos[0]].substring(finalPos[1] + 1);
    store[finalPos[0]] = final1 + '!' + final2;
    return store
}

// TESTS
const assert = require('assert');

try {
    assert.deepStrictEqual(autonomousDrive(['..!....', '...*.*.'],['R', 'R', 'D', 'L']), 
    [
        ".......",
        "...*!*."
    ]
    );
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(autonomousDrive(['..!....','......*'],['R', 'D', 'L']),
    [
        ".......",
        "..!...*"
    ]);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(autonomousDrive(['*..!..*','*.....*'],['R', 'R', 'R', 'D', 'D']),
    [
        "*.....*",
        "*....!*"
    ]);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(autonomousDrive(['..!....'], ['R', 'L']),
    [
        "..!...."
    ]);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}