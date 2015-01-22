### [Primative: Null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

* _symbol_: `null`
* _pronunciation_: "null", "null value", "is null"
* _examples_:
```javascript
null // how exciting
```

### [Primative: Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

*_symbol_: 'true' 'false'
*_pronunciation_"boo-lee-an"
*_examples_:
```javascript
50 < 100 == true
50 > 100 == false

('meh' != meh) == true
```

### [Primative: Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

*_symbol_: 'The numeric value of the object being created.'
*_pronunciation_"number" "integer"
*_examples_:
```javascript
1
2
3
10
```

### [Primative: String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

*_symbol_: 'a sequence of characters'
*_pronunciation_"string" "123456789" "abcdefghijk"
*_examples_:
```javascript
'I like big cats' + '\n and I cannot lie'
```

### [Built in Values: Infinity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity)

*_symbol_: 'Infinity'
*_pronunciation_: "in-fin-it-ee"
*_examples_:
```javascript
3 * infinity == infinity
```

### [Built in Values: NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity)

*_symbol_: 'NaN'
*_pronunciation_: "not a number", "nahn"
*_examples_:
```javascript
"cat" == NaN
```

### [Built in Values: Undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity)

*_symbol_: 'undefined'
*_pronunciation_: "un-defined"
*_examples_:
```javascript

```


### [Operator: Addition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition_(.2B)

* _symbol_: `+`
* _pronunciation_: "plus", "added to"
* _examples_:
```javascript
1 + 2 + 3 // 6, of course
'1' + 2 + 3 // '123', obviously... WTF?
```

### [Operator: Modulus](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic_operators)

*_symbol_: `%`
*_pronunciation_: "mod-u-lus"
*_example_:
```javascript
43 % 10
Returns 3
```

### [Operator: Increment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic_operators)

*_symbol_: '++'
*_pronunciation_: "increment"
*_example_:
```javascript
12++ == 13
```

### [Operator: Decrement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic_operators)

*_symbol_: '--'
*_pronunciation_: "decrement"
*_example_:
```javascript
12-- == 11
```

### [Operator: Unary Negation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic_operators)

*_symbol_: `-`
*_pronunciation_: "unary negation"
*_example_:
```javascript
If x is 10, then -x returns -10
```

### [Operator: Assignment =+](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment_operators)

*_symbol_: '+='
*_pronunciation_: "equals x plus"
*_example_:
```javascript
x += y == x = x + y
```

### [Operator: Assignment -=](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment_operators)

*_symbol_: '-='
*_pronunciation_: "equal x minus"
*_example_:
```javascript
x -= y == x = x - y
```

### [Operator: Assignment *=](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment_operators)

*_symbol_: '*='
*_pronunciation_: "equals x times"
*_example_:
```javascript
x *= y == x = x * y
```

### [Operator: Assignment /=](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment_operators)

*_symbol_: '/='
*_pronunciation_: "equals x divided"
*_example_:
```javascript
x /= y == x = x / y
```

### [Operator: Assignment %=](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment_operators)

*_symbol_: '%='
*_pronunciation_: "equal x modulus"
*_example_:
```javascript
x %= y == x = x % y 
```

### [Statements: If](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#if...else_Statement)

If statement only runs a set of statements if the condition is true:

*_symbol_: 'if'
*_pronunciation_: "if"
*_example_:
```javascript
if (score >= 50) {
    congratulate();
}
```

### [Statements: Else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#if...else_Statement)

If...else statement runs one set of code if the condition is true or a different set if it is false:

*_symbol_: 'else'
*_pronunciation_: "else"
*_example_:
```javascript
if (score >= 50) {
    congratulate();
}
else {
    encourage();
}
```

### [Statements: Switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#switch_Statement)

Statement allows a program to evaluate an expression and attempt to match the expression's value to a case label. If a match is found, the program executes the associated statement:

*_symbol_:'switch'
*_pronunciation_: "switch"
*_example_: 
```javascript
switch (expression) {
   case label_1:
      statements_1
      [break;]
   case label_2:
      statements_2
      [break;]
   ...
   default:
      statements_def
      [break;]
}
```

### [Statements: Return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)

Specifies the value returned by the function:

*_symbol_: 'return'
*_pronunciation_: "return"
*_example_:
```javascript
function blank(A + B){
    return: answer;
}
```

### [Statements: Loops-For](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

Often used to loop through the items in an array:

*_symbol_:'for'
*_pronunciation_: "for"
*_example_: 
```javascript
var score + [24, 32, 17];
var arrayLenght = scores.length;
var roundNumber = 0;
var msg = '';
var i;

for (i = 0; i < arrayLength; i++){
    roundNumber = (i + 1);
    msg += 'Round' + roundNumber + ': ';
    msg =+ scores [i] + '<br>';
}

document.getElementById('answer').innerHTML = msg;
```

### [Statements: Loops-While](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

*_symbol_:'while'
*_pronunciation_: "while"
*_example_: 
```javascript
var i = 1;
var msg = '';

while (i < 10){
    msg += i + 'x 5 =' + (i * 5) + '<br>';
    i++;
}

document.getElementById('answer').innerHTML = msg;
```

### [Statements: Loops-do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#do...while_Statement)

Statements in the code block come before the condition. This means that those statements are run once whether or not the condition is met:

*_symbol_:'do while'
*_pronunciation_: "do while"
*_example_: 
```javascript
var n = 0;
var x = 0;

while (n < 3) {
  n++;
  x += n;
}
```

### [Statements: Label](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#label_Statement)

A statement with an identifier that lets you refer to it elsewhere in your program:

*_symbol_:'word'
*_pronunciation_: "label"
*_example_: 
```javascript
markLoop:
while (theMark == true) {
   doSomething();
}
```

### [Statements: Break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#break_Statement)

Statement to terminate a loop, switch, or in conjunction with a label statement
* When you use break without a label, it terminates the innermost enclosing while, do-while, for, or switch immediately and transfers control to the following statement.
* When you use break with a label, it terminates the specified labeled statement:

*_symbol_:'break' 'break label'
*_pronunciation_: "break" "break label"
*_example_: 
```javascript
Break:
for (i = 0; i < a.length; i++) {
   if (a[i] == theValue)
      break;
}


Break Label:

var x = 0;
var z = 0
labelCancelLoops: while (true) {
    console.log("Outer loops: " + x);
    x += 1;
    z = 1;
    while (true) {
        console.log("Inner loops: " + z);
        z += 1;
        if (z === 10 && x === 10) {
            break labelCancelLoops;
        } else if (z === 10) {
            break;
        }
    }
}
```

### [Statements: Continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#continue_Statement)

Statement can be used to restart a while, do-while, for, or label statement

*_symbol_:'continue'
*_pronunciation_: "continue"
*_example_: 
```javascript
i = 0;
n = 0;
while (i < 5) {
   i++;
   if (i == 3)
      continue;
   n += i;
}
```

### Literal: `Array`

Stores a list of values:

* *symbol:* `[ ]`
* *pronunciation:* "array", "new array"
* *examples:*
```javascript

emptyArray = ['x', 'y', 'z']

filledArray = ['white', 'black', 'blue'];

anotherArray = [['white', 'black'] ['black', 'white'] ['white', 'blue']];
```

#### `Array.length`

* *value:* `Number` of items in array
* *examples:*
```javascript
var numSomething;
numSomething = colors.length ();
```

#### [`Array.prototype.pop()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

* *result:* removes the last element from an array and returns that element.
* *parameters:* Objects which do not contain a length property reflecting the last in a series of consecutive, zero-based numerical properties may not behave in any meaningful manner.
* *returns:* call pop() == undefined, returns the last element
```javascript
var myLife = ['html', 'css', 'javascript'];

var popped = myLife.pop();

console.log(popped); // 'javascript'
```

#### `Array.prototype.push()'
* *result:* Adds one or more elements to the end of an array and returns the new length of the array.
* *parameters:* elementN: The elements to add to the end of the array.
* *returns:* what types? The new length property of the object upon which the method was called.
```javascript
var love = ['cats', 'kittens'];
var total = love.push('dogs', 'puppies');

console.log(love); // ['cats', 'kittens', 'dogs', 'puppies']
console.log(total);  // 4
```

#### `Array.prototype.reverse()'

* *result:* reverses an array in place. The first array element becomes the last and the last becomes the first.
* *parameters:* none
* *returns:* transposes the elements of the calling array object in place, mutating the array, and returning a reference to the array.
```javascript
var myArray = ['one', 'two', 'three'];
myArray.reverse(); 

console.log(myArray) // ['three', 'two', 'one']
```

#### `Array.prototype.shift()'
* *result:* Removes the first element from an array and returns that element.
* *parameters:* n/a
* *returns:* If the length property is 0, undefined is returned.
```javascript
var myLove = ['cats', 'kittens', 'dogs', 'puppies'];

console.log('myLove before: ' + myLove);

var shifted = myLove.shift();

console.log('myLove after: ' + myLove);
console.log('Removed this element: ' + shifted);
```

#### `Array.prototype.sort()'
* *result:* Sorts the elements of an array in place and returns the array.
* *parameters:* compareFunction
* *returns:*  
```javascript
var fruit = ['apples', 'bananas', 'Cherries'];
fruit.sort(); // ['Cherries', 'apples', 'bananas'];

var scores = [1, 2, 10, 21]; 
scores.sort(); // [1, 10, 2, 21]

var things = ['word', 'Word', '1 Word', '2 Words'];
things.sort(); // ['1 Word', '2 Words', 'Word', 'word']
```

#### `Array.prototype.splice()'
* *result:* Changes the content of an array by removing existing elements and/or adding new elements.
* *parameters:* start, deleteCount, itemN
* *returns:* An array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.
```javascript

```

#### `Array.prototype.unshift()'
* *result:* Adds one or more elements to the beginning of an array and returns the new length of the array.
* *parameters:* elementN 
* *returns:* The new length property of the object upon which the method was called.
```javascript
var arr = [1, 2];

arr.unshift(0); // result of call is 3, the new array length
// arr is [0, 1, 2]

arr.unshift(-2, -1); // = 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-3]);
// arr is [[-3], -2, -1, 0, 1, 2]
```

