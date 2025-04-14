function pickingNumbers(a) {
    const freq = new Array(101).fill(0); // Since values range from 0 to 100

    for (let num of a) {
        freq[num]++;
    }

    let maxLen = 0;

    for (let i = 0; i < 100; i++) {
        const currentLen = freq[i] + freq[i + 1];
        if (currentLen > maxLen) {
            maxLen = currentLen;
        }
    }

    console.log(maxLen);
     maxLen;
}

let a=[1,2,2,3,1,2]

pickingNumbers(a)