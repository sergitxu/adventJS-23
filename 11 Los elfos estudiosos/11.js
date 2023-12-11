function getIndexsForPalindrome(word) {
    let originalWord = word;
    let wordReverse = word.split('').reverse().join('');
    if (word === wordReverse) {
        return [];
    }
    word = originalWord.split('');
    for (let i = 0; i < word.length; i++) {
        let pre = word[i];
        for (let j = i + 1; j < word.length; j++) {
            word[i] = word[j];
            word[j] = pre;
            let wordCompare = word.join('');
            let wordReversedCompare = wordCompare.split('').reverse().join('');
            if (wordCompare === wordReversedCompare) {
                return [i, j];
            }
            word = originalWord.split('');
        }
    }
    return null;
}

console.log(`Expected: [] - ${getIndexsForPalindrome('anna')}`); // []
console.log(`Expected: [] - ${getIndexsForPalindrome('aaaaaaaa')}`); // []
console.log(`Expected: null - ${getIndexsForPalindrome('abac')}`); // null
console.log(`Expected: null - ${getIndexsForPalindrome('caababa')}`); // null
console.log(`Expected: [0, 1] - ${getIndexsForPalindrome('abab')}`); // [0, 1]
console.log(`Expected: [1,3] - ${getIndexsForPalindrome('aaababa')}`); // [1, 3]
console.log(`Expected: [4,8] - ${getIndexsForPalindrome('rotaratov')}`); // [1, 3]