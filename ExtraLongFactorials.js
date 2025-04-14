function extraLongFactorials(n) {
    let f = BigInt(1);
    for(let i=BigInt(n);i>1;i--){
      f=(f*i);
    }
    console.log(f.toString());

}

let n=25
extraLongFactorials(n)