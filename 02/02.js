function manufacture(gifts, materials) {
    materials = new Set(materials.split(''));
    const impossibleGifts = new Set();
    for (const gift of gifts) {
        for (let i = 0; i < gift.length; i++) {
            if (!materials.has(gift[i])) {
                impossibleGifts.add(gift);
            }
        }
    }
    return gifts.filter(gift => !impossibleGifts.has(gift));
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

console.log(manufacture(gifts, materials));