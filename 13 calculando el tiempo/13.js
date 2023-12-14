function calculateTime(deliveries) {
    let deliveryTime = 0;
    let isNegative = false;
    const MAXTIME = 25200;

    for (let delivery of deliveries) {
        delivery = toSeconds(delivery);
        deliveryTime += delivery;
    }

    if (deliveryTime - MAXTIME < 0) { isNegative = true; }
    let result = toHours(Math.abs(deliveryTime - MAXTIME));
    if (isNegative) { result = '-' + result }

    function toSeconds(time) {
        let [hours, minutes, seconds] = time.split(':');
        return hours * 3600 + minutes * 60 + seconds * 1;
    }
    function toHours(time) {
        let hours = addZero(Math.floor(time / 3600));

        let minutes = addZero(Math.floor((time % 3600) / 60));

        let seconds = addZero(time - hours * 3600 - minutes * 60);
        return `${hours}:${minutes}:${seconds}`;
    }
    function addZero(time) {
        if (time < 10) {
            time = '0' + time;
        }
        return time;
    }
    return result;
}

// TESTS
const assert = require('assert');

try {
    assert.strictEqual(calculateTime(['00:10:00', '01:00:00', '03:30:00']), '-02:20:00');
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.strictEqual(calculateTime(['02:00:00', '05:00:00', '00:30:00']), '00:30:00');
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.strictEqual(calculateTime([
        '00:45:00',
        '00:45:00',
        '00:00:30',
        '00:00:30'
    ]), '-05:29:00');
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.strictEqual(calculateTime(['01:01:01', '09:59:59', '01:01:01']), '05:02:01');
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}