function getMoneySpent(keyboards, drives, b) {
    let Finalprice =[-1]
    for(let i=0;i<keyboards.length;i++){
        for(let j=0;j<drives.length;j++){
            let price=keyboards[i]+drives[j]
            console.log(`${price}=${keyboards[i]}+${drives[j]}`)
            if(price < b){
            Finalprice.push(price)
            console.log(Finalprice)
        }
        }
    }
    console.log(Math.max(...Finalprice))
}

let b=10
let keyboards=[3,1]
let drives=[5, 2, 8]

getMoneySpent(keyboards,drives,b)