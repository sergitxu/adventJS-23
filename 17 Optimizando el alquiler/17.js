function optimizeIntervals(intervals) { 
    intervals.sort((a,b) => a[0] - b[0]);
    let intLength = intervals.length;
    let orderedIntervals = [];
    if ([intervals[0][0]]) orderedIntervals.push([intervals[0][0]]);
    // for (let interval of intervals) {
        let ref = intervals[0][1];
    // intervals.forEach(interval => {
        for(let i = 0; i < intLength; i++) {
        console.log('intervals: ' + intervals);
        console.log('i: ' + i);
        console.log('ref: ' + ref);
        console.log('intervals[0][1]: ' + intervals[0][1]);
        if (intervals[0][0] <= ref ) {
            if (intervals[0][1] >= ref) orderedIntervals[0][1] = intervals[0][1];
            console.log('MENOR QUE LA REF intervals: ' + intervals);            
        } else {
            console.log('Mayor que la ref intervals: ' + intervals);
            orderedIntervals.push(intervals[0]);
            ref = intervals[0][1];
        }
        intervals.splice(0, 1);
        console.log('orderedIntervals: ' + orderedIntervals);

        // intervals = intervals.filter(interval => interval[0] >= ref);
        console.log('intervals: ' + intervals);
        console.log('\n');

    };
    console.log(orderedIntervals)
    // return []
}

optimizeIntervals([[1, 15], [8, 12], [4, 7]])

// [[ 1, 15 ]]


optimizeIntervals([
    [1, 3],
    [8, 10],
    [2, 6]
  ])
  // [[1, 6], [8, 10]]

  optimizeIntervals([
    [5, 8],
    [2, 7],
    [3, 4]
  ]) // [[2, 8]]

  optimizeIntervals([
    [3, 4],
    [1, 2],
    [5, 6]
  ]) // [[1, 2], [3, 4], [5, 6]]