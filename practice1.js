/******** Practicing JavaScript ********/

// document.write("<h1>Hello World</h1>");

let x = 10;
// document.write(x);

/******** Variable naming rules  ********/ 
// 1. Must start with letter, underscore or dollar sign
let example1;
let _example1;
let $example1;
// 2. Must only contain letters, digits, underscores and dollar signs
// 3. Must not contain mathematical or logical operator
// 4. Must not contain symbols other than underscore and dollar sign, therefore no hyphen which is reserved for subtraction
// 5. Must not contain spaces
let example2;
let example_2;
let example$2;
// 6. Must not use any JavaScript reserved words for variable names. Some examples include;
// abstract, boolean, case, debugger, export, final, goto, import, long, native, private, super, throw, void, with

/******** Data Types  ********/
// Number (JS does not differentiate between integer, float, short, long etc.
let num1 = 10;
let num2 = 4.2;
// String
const str1 = "example";
const str2 = "this is a sentence";
const str3 = "using an escape \'character\'";
// document.write("<br>"+str3);
// Array
const arr1 = ["item1", "item2", "item3"];
// Boolean
const bool1 = true;
const bool2 = false;

/******** Math Operators  ********/ 
// Addition
const add1 = num1 + num2
// document.write("<br>"+add1);
// Subtraction
const sub1 = num1 - num2;
// document.write("<br>"+sub1);
// Multiplication
const mult1 = num1 * num2;
// document.write("<br>"+mult1);
// Division
const div1 = num1 / num2;
// document.write("<br>"+div1);
// Modulus
const mod1 = num1 % num2;
// document.write("<br>"+mod1);
// Increment
let num3 = 5;
let inc1 = ++num3;
// document.write("<br>"+inc1);
// Decrement
let num4 = 5;
let dec1 = --num4;
// document.write("<br>"+dec1);

/******** Assignment operators ********/ 
// Assignment
let assign = 1;
// Addition assignment
assign += 1;
// Subtraction assignment
assign -= 1;
// Multiplication assignment
assign *= 1;
// Division assignment
assign /= 1;
// Remainder assignment
assign %= 1;

/******** Comparison operators  ********/
// Equal to
if ( num1 == num2 ) {}
// Identical to
if ( num1 === num2 ) {}
// Not equal to
if ( num1 != num2 ) {}
// Not identical to
if ( num1 !== num2 ) {}
// Greater than
if ( num1 > num2 ) {}
// Greater than or equal to
if ( num1 >= num2 ) {}
// Less than
if ( num1 < num2 ) {}
// Less than or equal to
if ( num1 <= num2 ) {}

/******** Boolean operators aka logical operators  ********/ 
// Logical AND 
if ( num1 && num2 ) {}
// Logical OR
if ( num1 || num2 ) {}
// Logical NOT
if ( !num1 ) {}

/******** Conditional (ternary) operator  ********/ 
let price = ( num1 > 5 ) ? "Too expensive": "Affordable";

/******** String operator (concatenation) ********/ 
console.log(str1+str2);

/******** Conditionals and loops  ********/
// if statement
if ( num1 == num2 ) {
    document.write("yes");
}
// if else statement
if ( num1 == num2 ) {
    document.write("yes");
} else {
    document.write("no");
}
// if else if else statement
if ( num1 == num2 ) {
    document.write("yes");
} else if ( num1 > num2 ) {
    document.write("no");
} else {
    document.write("maybe");
}
// switch statement
switch ( num1 ) {
    case 1:
        document.write("It is number 1");
        break;
    case 2:
        document.write("It is number 2");
        break;
    case 3:
        document.write("It is number 3");
        break;
    default: //optional, as required
        document.write("It's another number");
}
// For loop
for ( i=1 ; i<10 ; i++ ) {
    document.write(i);
}

// While loop
let a = 10;
while ( a < 20 ) {
    document.write("Add one more to a");
    ++a;
}

// Do...while loop
let a=10
do {
    document.write("do while loop statement executed");
    ++a;
} while ( a < 20 )

// Break statement - breaks out of the for loop
for ( i=0 ; i<10 ; i++ ) {
    if ( i == 5 ) {
        break;
    }
    document.write("i is less than 5");
}

// Continue statement - skips one iteration of the loop when i == 5
for ( i=0 ; i<10 ; i++ ) {
    if ( i == 5 ) {
        continue;
    }
    document.write("i is less than or greater than 5");
}

/******** Functions ********/ 
// User-defined functions
function name() {
    document.write("function called");
}

// Calling the function
name();

// Function parameters
function myFunction(param1, param2) {
    result1 = param1 * param2;
    document.write(result1);
}

// Calling function with parameters
myFunction (10, 5); // outputs result1 = 50

// Return statement
function mySecondFunction (param1, param2) {
    return param1 * param2;
} // function returns the resulting value of param1 * param2

/******** Alert, prompt and confirm boxes ********/
// The alert box
alert("This is an alert box");

// The prompt box
let username = prompt("Please enter your username");

// The confirm box
let leaving = confirm("Do you want to leave this page?");
if ( leaving == true) {
    alert("Thanks for visiting");
} else {
    alert("Thanks for staying");
}