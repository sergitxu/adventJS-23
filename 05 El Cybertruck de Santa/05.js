function cyberReindeer(road, time) {
    let roadArray = [road];
    let cyberPosition = 0;
    let backStep = '.';
    let nextStep = '';

    for (let i = 0; i < time - 1; i++) {
        if (i === 4) {
            road = road.replaceAll('|', '*');
        }
        nextStep = road[cyberPosition + 1];
        if (nextStep !== '|') {
            road = road.replace(road[cyberPosition], backStep);
            let roadPre = road.slice(0, cyberPosition + 1);
            let roadPost = road.slice(cyberPosition + 2);
            road = roadPre + 'S' + roadPost;
            cyberPosition++;
            backStep = nextStep;
        }
        roadArray.push(road);
    }
    return roadArray;
}

// TESTS
const assert = require('assert');

try {
    assert.deepStrictEqual(cyberReindeer('S..|...|..', 10),
        [
            'S..|...|..',
            '.S.|...|..',
            '..S|...|..',
            '..S|...|..',
            '..S|...|..',
            '...S...*..',
            '...*S..*..',
            '...*.S.*..',
            '...*..S*..',
            '...*...S..',
        ]
    );
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}


// 'S..|...|..', // estado inicial
// '.S.|...|..', // avanza el trineo la carretera
// '..S|...|..', // avanza el trineo la carretera
// '..S|...|..', // el trineo para en la barrera
// '..S|...|..', // el trineo para en la barrera
// '...S...*..', // se abre la barrera, el trineo avanza
// '...*S..*..', // avanza el trineo la carretera
// '...*.S.*..', // avanza el trineo la carretera
// '...*..S*..', // avanza el trineo la carretera
// '...*...S..', // avanza por la barrera abierta
