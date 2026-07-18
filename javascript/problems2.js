// problem 7

/*## Problem 7: Check if Age is Adult
- Declare `age = 20`
- Use an `if` statement to check if the person is 18 or older
- `console.log` either "You are an adult" or "You are a minor"*/

let age =20;
 if (age>=18) {
    console.log("You are an adult")}
 else{
console.log("You are a minor")
 }

 //problem 8

 /*## Problem 8: Calculate Discount Price
- Declare `originalPrice = 100`
- Declare `discountPercent = 20`
- Calculate the discount amount and the final price
- `console.log` both values*/

/*var originalPrice=100;
var discountPercent=20;
var finalPrice;
var discountAmount;
//%discount= discount/selling price*100
//discount= cost-sellingPrice  
/* original item cost=100
selling price=80
discount=20
20(d)=cost(100)-sellingprice(80) 
discount is also 
discount =sprice*100 */

/*discountAmount= 
finalPrice
*/

//problem 9
/*## Problem 9: Working with Strings and Variables
- Declare `productName = "Laptop"`
- Declare `price = 999`
- Declare `quantity = 3`
- Calculate total cost and create a message like: "3 Laptop(s) cost $2997"
- `console.log` the message */


let productName="laptop";
let price= 999;
let quantity=3;
var cost;
cost= price*quantity
console.log(quantity)
console.log( productName)
console.log("cost")
console.log(cost)

//problem 10
/* ## Problem 10: Boolean Logic
- Declare `score = 75`
- Declare `passed = score >= 60`
- Declare `excellent = score >= 90`
- `console.log` the values of `passed` and `excellent`*/

let score=75;
let passed=score>=60;
let excellent=score>=90;

console.log(passed)
console.log(excellent)

//problem 11
/**## Problem 11: Simple Banking
- Declare `accountBalance = 500`
- Declare `depositAmount = 150`
- Declare `withdrawAmount = 75`
- Update the balance with deposits and withdrawals
- `console.log` the final balance */


let accountBalance=500;
let depositAmount=150;
let withdrawAmount=75;
let finalBalance;
finalBalance= (accountBalance+depositAmount)-(withdrawAmount)
 console.log(finalBalance)

 //problem 12 
 /**## Problem 12: Age Difference Calculator
- Declare `person1Age = 25` and `person2Age = 19`
- Calculate the age difference and store it in a variable
- Determine who is older and create a message like "Person 1 is 6 years older"
- `console.log` the message
 */

var person1Age=25;
var person2Age=19;
var ageDiff

ageDiff=person1Age-person2Age
 console.log('person1Age is older by')
 console.log(ageDiff )
 console.log('years' )
