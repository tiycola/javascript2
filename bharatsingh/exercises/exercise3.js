// 3. Take a look at the code example below and state what the variable sameAge will be set to and explain why.

var myAge = 33;
var yourAge = "33";

var sameAge = (myAge === yourAge) ? "Yes!" : "No!";

// sameAge will be set to "No!" because a strict equality is used. '33' is a string and 33 is a number, therefore the strict equality doesn't consider the comparison to be true.