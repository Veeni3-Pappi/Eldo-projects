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







// explore the truth table