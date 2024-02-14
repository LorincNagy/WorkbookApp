# Programming Basics questions

## Data basics

- What are the differences between objects and arrays? What is the purpose of the object and what is the purpose of the
  array?

- Objects and arrays are both data structures in JavaScript. The main difference between them is that an object is a
  collection of key-value pairs, while an array is an ordered list of elements.

- The purpose of an object is to store data in a structured and organized way.(key,value) In JavaScript, objects can
  have properties with any data type, including strings, numbers, booleans, and even other objects or arrays.

-The purpose of an array is to store a list of items. Arrays are used to store collections of data, such as a list of
numbers, strings, or objects. Arrays are commonly used to store data that can be efficiently iterated over, such as a
list of elements to display on a web page.

- How can you access a key's value in an object?
  In JavaScript, you can access a key's value in an object using the following syntax:

- objectName["keyName"]


- objectName.keyName


- For example:

const obj = { key1: 'value1', key2: 'value2' };
console.log(obj.key1); // Output: "value1"
console.log(obj["key2"]); // Output: "value2"

- How can you access the first and the last item of an array?
  You can access the first item of an array in JavaScript using the array's index 0 (array[0]), and the last item using
  the index of the last element (array[array.length - 1]).


- Name all the primitive types in JavaScript.

- String

- Number

- Boolean

- Undefined

- Null

- Symbol (added in ECMAScript 6)

## Algorithm basics

- What are the assignment operators? Name some of them.

- An assignment operator assigns a value to its left operand based on the value of its right operand.

- Assignment = (=)
- Addition assignment = x += y(x=x+y)
- Subtraction assignment = x -= y(x=x-y)


- What are the arithmetic operators? Name some of them.
- An arithmetic operator takes numerical values as their operands and returns a single numerical value.

- Modulus (%)
- Addition (+)
- Subtraction (-)
- Multiply (*)
- Division (/)

- What are the comparison operators? Name some of them.
- A comparison operator compares its operands and returns a logical value based on whether the comparison is true. The
  operands can be numerical, string, logical, or object values.

- Equal (==)
- Not equal (!=)
- Strict equal (===)
- Strict not equal (!==)
- Greater than (>)

- What are the logical operators? Name some of them.
- Logical operators are typically used with Boolean (logical) values;( comparison operators), when they are, they return
  a Boolean value.

- AND (&&)
- OR (||)
- NOT (!)

- What is the difference between `for`, `for of` and `for in`?

- The difference between them is the entities they iterate over: for..in iterates over all enumerable property keys of
  an object. for(by index) and for..of iterates over the values of an iterable object.( for example array).
- for - loops through a block of code a number of times.
- for/of - loops through the values of an iterable object.


- How do you find the average of values in an array if you can’t use any built-in functions or methods?

- We would first count the total number of elements in an array followed by calculating the sum of these elements and
  then dividing the obtained sum by the total number of values(sum/array.length)

## Function basics

- What are the main parts of a function?

- Function declaration: the basic structure of a function.

- The function keyword.
- An optional name ( this is because it can be anonymous ).
- A list of parameters names enclosed in parentheses.
- The statement enclosed in braces.

- What is the difference between parameters and arguments?

- Function parameters are the names listed in the function's definition. Function arguments are the real values passed
  to the function. Parameters are initialized to the values of the arguments supplied.

- Parameter: the name as you can refer to the data inside the function.

- Argument: the data which sent in when the function is called.


- What are the differences between function expression and function statement?

- Function statements use the "function" keyword followed by the name of the function, parameter list, and function body
  enclosed in curly braces.(function myFunction(param1, param2)).
- Function expressions, on the other hand, assign a function to a variable using the assignment operator.(let
  myFunction = function(param1, param2)).

+ Function statements are hoisted , which means they are available for use before they are declared.
+ Function expressions are not hoisted, which means that they cannot be used before they are defined.

## OOP Basics

- What is a method?
- A Javascript method is an action done on an object, and it is a property that holds a function definition.

- Name 3 builtin functions (and/or methods) regarding strings.

- slice() = Extracts a part of a string and returns a new string.
- split() = Splits a string into an array of substrings.
- substring() = The substring() method returns the part of the string from the start index up to and excluding the end
  index, or to the end of the string if no end index is supplied.

- Name 3 builtin functions (and/or methods) regarding arrays.

- push() = Adds new elements to the end of an array, and returns the new length.
- reverse() = Reverses the order of the elements in an array.
- includes() = Check if an array contains the specified element.

- Name 3 builtin functions (and/or methods) regarding numbers.

- toString() = Returns a number as a string.
- Number() = Converts a value to a number.
- parseInt() = Parses a value as a string and returns the first integer.

## FP Basics

- What is a callback function?
  -A callback function is a function passed into another function as an argument, which is then invoked inside the outer
  function to complete some kind of routine or action.

- What are the differences between `for` loops and `forEach`?

- for loops executes a block of code until an expression returns false while forEach() executes a provided function once
  for each array element.

## File basics

- What is the difference between JavaScript data structures and JSON data structures?

- JSON cannot contain functions. JavaScript objects can contain functions. JSON can be created and used by other
  programming languages. JavaScript objects can only be used in JavaScript.

- JavaScript data structures are JavaScript programming language elements.

- JSON data structures refer to the JSON (JavaScript Object Notation) format, which is a simple, text-based data
  exchange format, enables easy storage and transfer of data. The JSON format is designed to be easy to read and write
  for both machines and humans. In JSON data, we only store data, and there are no functions or special language
  constructs.


- How do you create JavaScript data structure from a JSON file's data?

- To create a JavaScript data structure from a JSON file's data, use the JSON.parse() method, which takes a JSON string
  as input and returns a JavaScript object representing the parsed data.

## View Basics

- What is the difference between JavaScript data structures and DOM (HTML document) data structures?

- JavaScript's data structures are used to store and manipulate data within a JavaScript program, while DOM (Document
  Object Model) data structures are used to represent the structure and content of an HTML document and can be accessed
  and manipulated using JavaScript.


- What are the steps of changing a HTML element's content with JavaScript?

- document.getElementById("p1").innerHTML = "New text!";

    - Get a reference to the HTML element using the document.getElementById() method or another method.
    - Access the innerHTML property of the element to modify its content.
    - Assign the new content to the innerHTML property.

## Event basics

- What is an event listener?

- An event listener in JavaScript is a way that you can wait for user interaction like a click or keypress and then run
  some code whenever that action happens. One common use case for event listeners is listening for click events on a
  button.

- Mouse Events: click, dblclick, mousedown, mouseup.
- Keyboard Events: keydown, keyup, keypress.

- What are the steps of changing a HTML element's content when the element clicked?

1.
    - getRootElement().insertAdjacentHTML("beforeend", divElement(`<button id="me">Click me!</button>`));
2.
    - const meButtonElement = document.querySelector("#me");
3.
    - meButtonElement.addEventListener('click', function() {
      getRootElement().insertAdjacentHTML("afterend", divElement("Hello"));
      });

- Inside a `click` event listener, how can you access the element that has been clicked?

- allTheButtonElements.addEventListener('click', function(event) {
  console.log(event.target);     
  });

## Design Basics

- What are the differences between `display: block` and `display: inline` CSS properties?

- Block-level elements start in a new row, fill the entire width of that row and appear one below the other.(
  p,div,h1,h2)
- Inline elements are the opposite of block elements. They do not start in a new line and only take up as much space as
  their content absolutely requires, so they can be placed next to each other.(a,span,strong)

- What are the differences between `position: relative` and `position: absolute` CSS properties?

- Relative - the element is positioned relative to its normal position.
- Absolute - the element is positioned absolutely to its first positioned parent.

- What is the box model, name the CSS properties connecting to it?

- In CSS, the term "box model" is used when talking about design and layout. The CSS box model is essentially a box that
  wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.

- box-sizing: border-box;

- What CSS properties affect font and text appearance?

- font-style, font-weight, color, font-family

- text-decoration (none, underline, overline, line-trough)
- letter-spacing

- What are the steps of adding or removing a HTML element's class name?

- element.classList.add("mystyle");
- element.classList.remove("mystyle");

## JavaScript - language specialties

- What is the difference between value and reference data types in terms of object and primitives?

- The basic difference is that primitive variables store the actual values, whereas reference variables store the
  addresses of the objects they refer to.

- Is `null` an object or a primitive?

- In JavaScript, null is a primitive value, not an object.
  Primitive values are basic data types that represent a single value, and they are not objects and don't have any
  properties or methods.

- What is `undefined`?

- A special value that indicates that a variable has been declared, but it has not been assigned a value.

- When to use `var`, `let`, and `const`?

- var declarations are globally scoped or function scoped while let and const are block scoped. var variables can be
  updated and re-declared within its scope.

- let variables can be updated but not re-declared.
- const variables can neither be updated nor re-declared.

- What is hoisting?

- Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope
  before code execution.

## Git

- What are the advantages of using a version control system?

- VCS allows developers to track changes to code over time, collaborate on code development, and act as a backup system
  for code repositories.


- What’s the difference between Git and GitHub?

- Git is a version control system that lets you manage and keep track of your source code history. GitHub is a
  cloud-based hosting service that lets you manage Git repositories.

- What are remote repositories in Git?

- Remote repositories are versions of your project that are hosted on the Internet or network somewhere.(Github)

- Why does a merge conflict occur?

- Merge conflicts happen when you merge branches that have competing commits, and Git needs your help to decide which
  changes to incorporate in the final merge.

## Terminal

- How do you run a JavaScript file in the terminal?

- For Run javaScript file using “node FileName.js” command.

- How do you stop a running a command in the terminal?

- CTRL + C.

- How go you get the previous command in the terminal?

- Up arrow

- How do you got to the current directory's parent directory in the terminal?

- parent:"cd" or "cd~"
- root:"cd/"

-To navigate to the previous directory (or back), use:  "cd -"

