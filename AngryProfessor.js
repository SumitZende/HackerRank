function angryProfessor(k, a) {
    let threshould = 0
    for(let i=0;i<a.length;i++){
        a[i] <= 0 ? (threshould++) : null;
    }    
    return threshould === k ? "NO" : "YES";
}
 //optimized this code
function angryProfessor_Optimized(k,a){
    let student = a.filter(time=>time <= 0).length;
    return student >=k ?"NO":"YES"
}


let k= 2
let a=[0 ,-1 ,2 ,1]

console.time("Execution Time")
const result1 =angryProfessor(k,a)
console.log(`Result of simple code : ${result1}`);
console.timeEnd("Execution Time")

console.time("Execution Time")
const result2=angryProfessor_Optimized(k,a)
console.log(`Result of optimzed code : ${result2}`);
console.timeEnd("Execution Time")