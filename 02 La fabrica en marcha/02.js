function manufacture(gifts, materials) {
    const materialsSet = new Set(materials);
    return gifts.filter(gift => {
        const giftSet = new Set(gift);
        for (char of giftSet) {
            // Si no hay material para fabricar el regalo, 
            //el regalo no pasa el filtro y se elimina de gifts
            if (!materialsSet.has(char)) return false;
        }
        // Si hay material, se deja el regalo en gifts
        return true;
    });
}

// TESTS
const assert = require('assert');

try {
    assert.deepStrictEqual(manufacture(['tren', 'oso', 'pelota'], 'tronesa'),
        ['tren', 'oso']
    );
    console.log('Test ok.');
} catch (error) {
    console.error('Failed test:', error);
}
