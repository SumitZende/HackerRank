
function catAndMouse(x, y, z) {

    let s1 = Math.abs(x-z);
    let s2 = Math.abs(y-z);

    if(s1 == s2){
        console.log("Mouse C")
    }
    else if(s1 > s2){
        console.log("Cat A");
    }
    else {
        console.log("Cat B");
        
    }

}
