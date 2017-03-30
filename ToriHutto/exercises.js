Exercises JS2

//Complete each exercise to the best of your ability. Follow the instructions and save your files to your week_4_lecture_2_exercises Github repository. Any short answer questions may require some additional research on your part.

//List the five falsey values in JavaScript.
0 and -0
null
NaN
undefined
"" and ''
false


//List five truthy values in JavaScript.

All values are truthy unless they are defined as falsey. 



//Take a look at the code example below and state what the variable sameAge will be set to and explain why.

var myAge = 33;
var yourAge = "33";

var sameAge = (myAge === yourAge) ? "Yes!" : "No!";

"No!"
because  myAge is a number and yourAge is a string, so they cannot be === if they are not of the same type.



//Write a small program that has a line of code that does each of the following and prints out the result:

//Add two numbers together.
//EG: eight plus fifteen
var firstNumber = 8;
var secondNumber = 15;

var sum = firstNumber + secondNumber;
console.log(sum);

//Add three numbers together using the addition operator.
//EG: eight plus fifteen plus negative one hundred
var firstNumber = 8;
var secondNumber = 15;
var thirdNumber = -100;
var sum = (firstNumber + secondNumber + ( -100) );
console.log = (sum);

//Add a positive and a negative number.
//EG: negative five plus thirty two point eight

var firstNumber = -5;
var secondNumber = 32.8;
var sum = (secondNumber + (firstNumber));
console.log(sum);


//Subtract two numbers.
//EG: thirty five minus two point eight
var firstNumber = 35;
var secondNumber = 2.8;
var sum = (firstNumber - secondNumber);
console.log(sum);



//Subtract three numbers.
//EG: thirty five minus two point eight minus seventeen
var firstNumber = 35;
var secondNumber = 2.8;
var thirdNumber = 17;
var sum = (firstNumber - secondNumber - (thirdNumber));
console.log(sum);

//Subtract a positive and a negative number.
//EG: negative five plus thirty two minus eight
var firstNumber = -5;
var secondNumber = (32 - 8);
var sum = (firstNumber + secondNumber);
console.log(sum);

//Combine the addition and subtraction operators with three numbers.
//EG: seventy five plus negative thirty five minus two point eight
var firstNumber = 75;
var secondNumber = -35;
var thirdNumber = 2.8;
var sum = firstNumber + (secondNumber) - thirdNumber;
console.log(sum);


// Multiply two numbers
//EG: six times negative zero point one

console.log( 6 * (-0.1));



//Multiply three numbers where one is negative
//EG: negative eight times five times one billion point eight
console.log( (-8 * 5) * 1000000000.8);

//Divide two numbers
//EG: five divided by negative twelve.
console.log( 5 / (-12));


//Divide three numbers
//EG: twenty five divided by negative twelve divided by two
console.log( (25 / -12) / 2);


//Find the remainder of dividing two integers
//EG: The remainder left when dividing twenty five by four

console.log( 25 % 4);


//An expression that uses each of the following: Negative and Positive Numbers, Integers and Doubles, Parenthesis, Addition, Subtraction, Multiplication, Division, and Modulo.
//EG: The remainder of five plus negative four minus negative four times three divided by two point three, divided by nine

(5 + (-4)) - (-4 * (3 / 2.3) % 9


//Consider this sentence:

//I will go out to eat if I am hungry and the fridge is empty, or there's not something in it I want to eat.

//Note how this sentence includes an example of "and", "or", and "not" logic.

//Your job is to create a similar sentence of your own. It must include "and", "or", and "not" logic. Now, translate that sentence into code.

//For example, the sentence above might be translated as follows:
var hungry = true;
var fridgeIsEmpty = false;
var fridgeContainsSomethingIWant = false;

/* am I going out to eat? */
console.log(hungry && (fridgeIsEmpty || !fridgeContainsSomethingIWant));



my answer:
//I will wash my car if it is sunny and warm outside, or if my car is very dirty.//
var sunny = true;
var warm = false;
var dirtyCar = false;
//* am i going to wash my car?//
console.log(sunny && (warm || !dirtyCar));




