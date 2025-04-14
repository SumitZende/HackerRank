function countingValleys(steps, path) {
    let altitude =0
    let valley = 0
    
    for(let step of path){
        if(step === "U"){
            altitude++;
        }
        else{
            altitude--;
        }
        if(altitude == 0 && step ==="U"){
            valley=valley+1
        }
    }
    console.log(valley)
}


let steps=8
let path=["U","D","D","D","U","D","U","U"]

countingValleys(steps,path)