function utopianTree(n) {
    let height = 1
  
    for(let i=0 ; i<n ; i++){
        if(i %2 ==0){
            height=height*2;
            console.log(height);
            
        }
        else{
            height= height+1;
            console.log(height);
            
            
        }
    }
    console.log(height);
    

  }


let n=5

utopianTree(n)