function bonAppetit(bill, k, b) {
    let sum = bill.reduce((accumulator, current) => accumulator + current, 0);
    let bActual = (sum-bill[k])/2

    if(b === bActual){
        console.log("true");
    }
    else if(b > bActual){
        let refund = b-bActual;
        console.log(refund);
        
    }


}


let bill =[3 ,10, 2, 9]
let k= 1;
let b =12
bonAppetit(bill, k, b)