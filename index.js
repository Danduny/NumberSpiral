function printClock(clock) {
    for (var i = 0; i < clock.length; i++) {
        console.log(clock[i].join(' '));
    }
}

function create2DClock(size) {
    let i = size;
    const clock = [];
    while (i--) clock.push(new Array(size));
    return clock;
}

function createNumberSpiral(n) {
    const spiral = create2DClock(n);
    let currentNumber = 1;
    let i = 0;
    let j = 0;
    let di = 0;
    let dj = 1;

    while (currentNumber <= n * n) {
        spiral[i][j] = currentNumber++;

        if (j + dj === n || i + di === n || j + dj === -1 || spiral[i + di][j + dj]) {
            const tmpDi = di;
            di = dj;
            dj = -tmpDi;
        }
        i += di;
        j += dj;
    }
    return spiral;
}

printClock(createNumberSpiral(3));