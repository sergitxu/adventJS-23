function manufacture(gifts, materials) {
    const materialsSet = new Set(materials.split(''));
    return gifts.filter(gift => {
        const giftSet = new Set(gift);
        for (char of giftSet) {
            if (!materialsSet.has(char)) return false;
        }
        return true;
    });
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

console.log(manufacture(gifts, materials));