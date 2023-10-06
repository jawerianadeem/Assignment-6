// *******************function*******************
// Q1
var randomDate=new Date();
console.log(randomDate)
// Q2
function greet(){
    var firstName=prompt("enter first name");
    var secondName=prompt("enter second name");
    var fullName=firstName+secondName
    console.log(fullName);
}
greet();
// Q3
function sum(numOne,numTwo){
 
         return numOne+numTwo
     }
     var numOne=+prompt("Enter a number")
     var numTwo=+prompt("Enter a number")
     var res = sum(numOne,numTwo)
     console.log(res)
// Q4. Calculator:
function sum(num1,operator,num2){
    if(operator==="+")
    {return num1+num2}
   
else if(operator==="-")
    {return num1-num2}
   
    else if(operator==="*")
    {return num1*num2}
   
    else if(operator==="/")
    {return num1/num2} 
}
var num3=+prompt("Enter first value...");
var operator=prompt("Enter operator value...");
var num4=+prompt("Enter second value...");
var res=(num3,operator,num4);
console.log(res);

// Q5
function sqr(num){
     return num*num
 }
 var num=+prompt("Enter a number")
 var result = sqr(num)
 console.log(result)
    


// Q6
function factorial(numf){
      for (i = 1; i <= numf; i++) {
          numf*= i;    }
 }
var numf=+prompt("Enter a number")
  factorial(numf)
 console.log( factorial(numf))
//  Q7
function count(num1,num2){
   for(i=num1;i<=num2; i++){
            console.log(i)
     }
 }
var num1 =+prompt("Enter starting number")
    var num2 =+prompt("Enter ending number")
     count(num1,num2)


// Q8
// function calcHypotenus(base,  per) { 
//     return Math.sqrt(base*base  + per*per) ; 
// }
// Q9
function area (length, width) {
    return length * width;
    }
var length = prompt("Enter a whole number for the length of your rectangle.");
var width = prompt ("Enter a whole number for the width of your rectangle.");
var res=area(length,width);

console.log(res);

// Q10
// function isPalindrome(str) {}
//     var arr = [1, 2,3];
//     console.log(arr[3]);

//     for (var i = 0; i <= arr.length - 1; i++) {
//       console.log(arr[i]);
//     }
    
//     var userInput = prompt("Enter a word..");
    
//     var check = "";


// for (var i = userInput.length - 1; i >= 0; i--) {
//   check = check + input[i]
// }

// if (userInput === check) {
//   console.log("it is a palindrome word");
// } else {
//   console.log("it is not a palindrome word");
// }
// Q11
var userInput="the quick brown fox"
var firstChar=userInput.slice(0,1).toUpperCase();
var remainChar=userInput.slice(1).toLowerCase();
var complete=firstChar+remainChar;
console.log(complete);
// Q12

    


