function dayOfProgrammer(year) {
    if (year === 1918) {
        console.log( "26.09.1918");
    }

    // Julian calendar (1700 - 1917)
    if (year >= 1700 && year <= 1917) {
        if (year % 4 === 0) {
            console.log (`12.09.${year}`);
        } else {
            console.log (`13.09.${year}`);
        }
    }

    // Gregorian calendar (1919 - 2700)
    if (
        (year % 400 === 0) ||
        (year % 4 === 0 && year % 100 !== 0)
    ) {
        console.log( `12.09.${year}`);
    } else {
        console.log (`13.09.${year}`);
    }

}


dayOfProgrammer(1980)