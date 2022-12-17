const timeRanges: number[][] = [
    [1, 4], 
    [3, 5],
    [4, 9],
    [9, 10],
    [9.30, 11],
    [14, 15]
];

let sameRanges: number[] = [];
let diffRanges: number[] = [];

let inRange = (index: number, ranges: any, skip?: number[]): boolean => {
    const rng = ranges[index];
    for (let i: number=0; i<ranges.length; i++) {
        const cmp = ranges[i];

        if (index === i) {
           // itself
           continue; 
        }
        if (skip && skip.indexOf(i) !== -1) {
            // already in selected
            continue; 
        }

        if (
            rng[0] > cmp[0] && rng[0] < cmp[1] || 
            rng[1] > cmp[0] && rng[1] < cmp[1]
        ) {
            return true;
        }
    }
    return false
};

// sort min/max ranges as numbers!!!
for (let i=0; i<timeRanges.length; i++) {
    const range = timeRanges[i];
    timeRanges[i] = range.sort((a, b) => a-b)
}

for (let i=0; i<timeRanges.length; i++) {
    if (inRange(i, timeRanges)) {
        sameRanges.push(i);
    }
    if (!inRange(i, timeRanges, diffRanges)) {
        diffRanges.push(i);
    }
}

console.log("Index ranges:");

console.log("   Same:", sameRanges);
console.log("   Diff:", diffRanges);

console.log("value ranges:");

console.log("   Same:", sameRanges.map((i) => timeRanges[i]));
console.log("   Diff:", diffRanges.map((i) => timeRanges[i]));