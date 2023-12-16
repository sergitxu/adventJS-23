
function autonomousDrive(store, movements) {
    let robotCol = -1;
    let robotRow = -1;
    let initialPos = [];
    let finalPos = [];

    for (let i = 0; i < store.length; i++) {
        if (store[i].indexOf('!') !== -1) {
            robotRow = i;
            robotCol = store[i].indexOf('!');
            break;
        }
    }
    initialPos = [robotRow, robotCol];
    for(let movement of movements) {
        switch(movement) {
            case 'L': {
            if(store[robotRow][robotCol-1] === '.' || store[robotRow][robotCol-1] === '!') robotCol--;
            break;
            }
            case 'R': {
            if(store[robotRow][robotCol+1] === '.' || store[robotRow][robotCol+1] === '!') robotCol++;
            break;
            }
            case 'U':  {
            if(store[robotRow-1][robotCol] === '.' || store[robotRow-1][robotCol] === '!') robotRow--;
            break;
            }
            case 'D': {
              if(robotRow+1 < store.length){
                if(store[robotRow+1][robotCol] === '.' || store[robotRow+1][robotCol] === '!') robotRow++;
              }
            break;
            }
        }
        finalPos = [robotRow,robotCol]
    }
    if (initialPos === finalPos) {
        return store;
    }
    let initial = store[initialPos[0]].substring(0, initialPos[1]);
    store[initialPos[0]] = initial + '.' + store[initialPos[0]].substring(initialPos[1] + 1);
    let final1 = store[finalPos[0]].substring(0, finalPos[1]);
    store[finalPos[0]] = final1 + '!' + store[finalPos[0]].substring(finalPos[1] + 1);
    
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