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
        if (road[cyberPosition + 1] !== '|') {
            road = road.replace(road[cyberPosition], backStep);
            road = road.slice(0, cyberPosition + 1) + 'S' + road.slice(cyberPosition + 2);
            cyberPosition++;
            backStep = nextStep;
        }
        roadArray.push(road);
    }
    return roadArray;
}

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
console.log(cyberReindeer(road, time));
console.log(`
Expected: 
[
    'S..|...|..', // estado inicial
    '.S.|...|..', // avanza el trineo la carretera
    '..S|...|..', // avanza el trineo la carretera
    '..S|...|..', // el trineo para en la barrera
    '..S|...|..', // el trineo para en la barrera
    '...S...*..', // se abre la barrera, el trineo avanza
    '...*S..*..', // avanza el trineo la carretera
    '...*.S.*..', // avanza el trineo la carretera
    '...*..S*..', // avanza el trineo la carretera
    '...*...S..', // avanza por la barrera abierta
  ]
`);