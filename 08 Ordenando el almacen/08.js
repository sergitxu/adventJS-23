function organizeGifts(gifts) {
    let result = ''
    gifts = gifts.split('');
    let giftsMap = new Map();

    let giftAmount = '';
    for (const item of gifts) {
        if (isNaN(item)) {
            giftsMap.set(item, giftAmount);
            giftAmount = ''
        } else {
            giftAmount += item;
        }
    }

    for (const gift of giftsMap) {
        let packedGift = '';
        let package50 = Math.floor(gift[1] / 50);
        for (let i = 0; i < package50; i++) {
            packedGift += `[${gift[0]}]`;
        }
        let remainder = gift[1] % 50;
        let package10 = Math.floor(remainder / 10)
        if (remainder) {
            for (let i = 0; i < package10; i++) {
                packedGift += `{${gift[0]}}`;
            }
        }
        let remainderUnits = remainder % 10;
        if (remainderUnits) {
            packedGift += '(';
            for (let i = 0; i < remainderUnits; i++) {
                packedGift += `${gift[0]}`;
            }
            packedGift += ')';
        }
        result += packedGift;
    }

    return result;
}

const result1 = organizeGifts(`76a11b`)
console.log(`Expected: '[a]{a}{a}(aaaaaa){b}(b)' ${result1}`);
// '[a]{a}{a}(aaaaaa){b}(b)'