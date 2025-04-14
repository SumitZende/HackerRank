    function divisibleSumPairs(n, k, ar) {
        let ways=0;
        
        for(let i=0 ; i<n ; i++){
            let sumArr = 0
            for(let j=i+1 ;j<n ; j++){
                sumArr = ar[i]+ar[j]
                console.log(`${sumArr}=${ar[i]}+${ar[j]}`);
                if(sumArr % k ==0){
                    ways++
                console.log(`${sumArr} = ${ways}`)
                }
            }
            
            
        }
        console.log(ways);

    }

n=6;
k=3;
ar = [1, 3, 2, 6, 1, 2];
divisibleSumPairs(n,k,ar)