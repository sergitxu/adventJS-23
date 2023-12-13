function adjustLights(lights) {
    let oddLights = [];
    let evenLights = [];
    let refColor = '🟢';
    let refColor2 = '🔴';
    let counter1 = 0;
    let counter2 = 0;
    for (let i = 0; i < lights.length; i++) {
        if (i % 2 === 0) {
            evenLights.push(lights[i]);
        } else {
            oddLights.push(lights[i]);
        }
    };
    for (let light of evenLights) {
        if (light != refColor) {
            counter1++;
        }
    }
    for (let light of oddLights) {
        if (light == refColor) {
            counter1++;
        }
    }
    for (let light of evenLights) {
        if (light != refColor2) {
            counter2++;
        }
    }
    for (let light of oddLights) {
        if (light == refColor2) {
            counter2++;
        }
    }
    if (counter1 < counter2) { return counter1 }
    return counter2;

}

// TESTS
const assert = require('assert');

try {
    assert.strictEqual(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']), 1);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}
// (cambias la cuarta luz a 🔴)

try {
    assert.strictEqual(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']), 2);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}
// (cambias la segunda luz a 🟢 y la tercera a 🔴)

try {
    assert.strictEqual(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']), 0);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}
// ya estan alternadas

try {
    assert.strictEqual(adjustLights(['🔴', '🔴', '🔴']), 1);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}
// (cambias la segunda luz a 🟢)

try {
    assert.strictEqual(adjustLights(['🟢', '🟢', '🔴', '🟢', '🔴']), 1);
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}
// (cambias la segunda luz a 🟢)
