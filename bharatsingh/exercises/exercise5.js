// 5. Consider this sentence:

// I will go out to eat if I am hungry and the fridge is empty, or there's not something in it I want to eat.

// Note how this sentence includes an example of "and", "or", and "not" logic.

// Your job is to create a similar sentence of your own. It must include "and", "or", and "not" logic. Now, translate that sentence into code.

// For example, the sentence above might be translated as follows:
var hungry = true;
var fridgeIsEmpty = false;
var fridgeContainsSomethingIWant = false;

/* am I going out to eat? */
console.log(hungry && (fridgeIsEmpty || !fridgeContainsSomethingIWant));



// My answer"
var sunny = true;
var warm = true;
var rain = false;

// am I going outside?
console.log(

	(sunny && (warm || rain))

);

// I will go outside if it's sunny and warm, or if it's not raining.
