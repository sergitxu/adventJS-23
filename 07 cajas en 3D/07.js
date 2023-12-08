function drawGift(size, symbol) {
    if (size === 1) return '#\n';
    let giftHeight = size * 2 - 1;

    let firstLine = '';
    firstLine = firstLine.padStart(size - 1, " ");
    firstLine = firstLine.padEnd(giftHeight, '#');

    let middleLine = '';
    middleLine = middleLine.padStart(size, '#');
    middleLine = middleLine.padEnd(giftHeight - 1, symbol);
    middleLine += '#';

    let lastLine = '';
    lastLine += lastLine.substring(0).padEnd(size, '#');

    let firstHalfTotal = '';
    for (let i = 0; i < size - 2; i++) {
        let firstHalf = '';
        firstHalf = firstHalf.padStart(size - 2 - i, ' ');
        firstHalf += '#';
        firstHalf = firstHalf.padEnd(firstHalf.length + (size - 2), symbol);
        firstHalf += '#';
        firstHalf = firstHalf.padEnd(firstHalf.length + i, symbol);
        firstHalf += '#\n';
        firstHalfTotal += firstHalf;
    }

    let lastHalfTotal = '';
    for (let i = size - 2; i > 0; i--) {
        let lastHalf = '#';
        lastHalf = lastHalf.padEnd(size - 1, symbol);
        lastHalf += '#';
        lastHalf = lastHalf.padEnd(size + (i - 1), symbol);
        lastHalf += '#\n';
        lastHalfTotal += lastHalf;
    }

    let firstPart = firstLine + '\n' + firstHalfTotal;
    let lastPart = lastHalfTotal + lastLine + '\n';
    let result = firstPart + middleLine + '\n' + lastPart;

    return result;
}

console.log(drawGift(4, '+'));
/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

console.log(drawGift(5, '*'));
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/