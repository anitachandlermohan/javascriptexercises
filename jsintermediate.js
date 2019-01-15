// fizzbuzz //
for(let i = 0 ; i <= 100; i++){
    if(i%3 == 0 && i%5 == 0){
        console.log("FizzBuzz");
    }
    else if(i%3 == 0 && i%5 !== 0){
        console.log("Fizz");
    }
    else if(i%5 == 0 && i%3 !== 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}

//iteration 4//

function getToOne(n1){
    while(n1%3 !== 0){
        n1++;
        console.log(n1);
        while(n1/3 !== 1){
        n1 = n1/3;
        console.log(n1);
    }
    }
    

    
}