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

console.log(`Expected: 1 - returned: ${adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])}`);
// // -> 1 (cambias la cuarta luz a 🔴)

console.log(`Expected: 2 - returned: ${adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])}`);
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

console.log(`Expected: 0 - returned: ${adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])}`);
// // -> 0 (ya están alternadas)

console.log(`Expected: 1 - returned: ${adjustLights(['🔴', '🔴', '🔴'])}`);
// // -> 1 (cambias la segunda luz a 🟢)

console.log(`Expected: 1 - returned: ${adjustLights(['🟢', '🟢', '🔴', '🟢', '🔴'])}`);
// // -> 1 (cambias la segunda luz a 🟢)