// write a loop thhat prints the numbers from 1 to 100 but for multiples of 3 print "fizz"  instead of the number for the multiples of 5 print "buzz". for numbers which are multiples of both 3 ANDN 5 PRINT "FIZZBUZZ."combine loops with if statements


for (let x=1; x <=100; x++ ){

    if (x % 3  === 0 && x % 5 === 0 ){
        console.log("fizzbbuzz");
    }
    else if (x % 3=== 0){
        console.log("fizz"); 
    }
    else if ( x% 5 === 0){
        console.log("buzz")
    }else{
        console.log(x)
    }
}
