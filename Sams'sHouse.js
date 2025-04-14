let s = 7, t = 11;  // House range
let a = 5, b = 15;  // Apple and orange tree positions
let apples = [-2, 2, 1];  // Apples falling distances
let oranges = [5, -6];  // Oranges falling distances




function countApplesAndOranges (s,t,a,b,apples,oranges){

    let DistanceApples = apples.map(apple=>a+apple);
    let DistanceOrange = oranges.map(orange=>b+orange);

    let appleCount = DistanceApples.filter(pos => pos >=s && pos <=t).length
    let orangeCount = DistanceOrange.filter(pos => pos >= s && pos <= t).length

    console.log(appleCount);
    console.log(orangeCount);
} 

countApplesAndOranges(s, t, a, b, apples, oranges);