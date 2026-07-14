// logical operatorsare used to combine two or more conditions. they are often used with conditional statements  to control the flow of a program based on certain conditions.


const age = 83
const height = 182

 console .log(age==80)

 if(age>80 || height>180){
    console.log("this is a well exercised peron")}

// && and (Operator)
// || or 
// ! not     !true = false


if(!(age < 40)){
    console.log("Mature adult")
}



if(height < 140){
    console.log("this person is short");
}
else {
    console.log("this person is tall");
}





// create a marks variable, then write an if else statement  that grades the marks into A, B, C, D, F based on the following criteria

const marks = 82
 if ( marks >= 80){
    console.log("A grade")
 }
 else if(marks >= 60){
    console.log("B grade")
 }
 else if(marks >= 40){
    console.log("C grade")
 }
 else{
    console.log("E grade")
 }




//loops- used to repeat a block os code multiple times. iften used to iterrate over arrays or perform a task until a certain conditioon is met



for (let indexNumber = 0; indexNumber < 100; indexNUmber + 3) {
   console.log(indexNumber + "is a multiple of 3");
   console.log("The marsk above is " + marks);
}





// explore the truth table
// write a loop thhat prints the numbers from 1 to 100 but for multiples of 3 print "fizz"  instead of the number for the multiples of 5 print "buzz". for numbers which are multiples of both 3 ANDN 5 PRINT "FIZZBUZZ."combine loops with if statements