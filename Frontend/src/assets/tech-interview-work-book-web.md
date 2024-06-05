# Web Module Questions

## FUNCTIONAL PATTERNS

### What is a callback function?

- When you give a function to another fuction as an argument, and then it's invoked inside the outer function to
  complete some kind of action.
  Asynchronous callbacks: the callback functions inside a .then() block, chained onto the end of a promise, after that
  promise fulfills or rejects

### What is ECMAScript ? What is the difference between Javascript & ECMAScript ?

- ECMAScript is a Javascript standard, ECMAScript is commonly used for client-side scripting, and it's now being used to
  write server-side applications and services using Node.js, also.

### What is the difference between `let` & `var` ?

- var: can be re-declared, and uptated, can't be a local variable if same name (overwrites it, unneccesary bugs may
  occur), globally scoped or function scoped, can be hoisted
  -let: can't be re-declared, but can be updated, is locally block scoped

### Write an example where using the `var` declaration instead of the `let` could create a hard to debug code.

// VAR
function foo() {

var x = 10;
if (true) {
var x = 20; // same variable as in the function scope
console.log(x); // prints 20
}
console.log(x); // prints 20
}

// LET
function foo() {
let x = 10;
if (true) {
let x = 20; // different variable than in the function scope
console.log(x); // prints 20
}
console.log(x); // prints 10
}

### Give a practical example where you would use the `reduce` function in javascript.

    const nums = [1, 3, 90, 5, 34, 87];

    const result = nums.reduce((previous, current) => {
    	if (current % 2 === 0){
    		previous.push(current);
    	}
    return previous;
    }, []);

const result=nums.reduce

### Give a practical example where you would use the `map` function in javascript.

    const nums = [1, 3, 90, 5, 34, 87];
    const doubles = nums.map((num) => num * 2);
    return doubles;

### Give a practical example where you would use the `filter` function in javascript.

    const nums = [1, 3, 90, 5, 34, 87];
    const result = nums.filter((num) => num > 10);
    return result;

## WEB BASICS

### What is a web server?

- A computer that hosts a website on the Internet.
- On the hardware side: a web server is a computer that stores web server software and a website's component files (HTML
  documents, images, CSS stylesheets, and JavaScript files). A web server connects to the Internet and supports physical
  data interchange with other devices connected to the web.
- On the software side: a web server includes several parts that control how web users access hosted files. At a
  minimum, this is an HTTP server. An HTTP server is software that understands URLs (web addresses) and HTTP (the
  protocol your browser uses to view webpages). An HTTP server can be accessed through the domain names of the websites
  it stores, and it delivers the content of these hosted websites to the end user's device.

### Explain the client-server architecture.

- The client-server model is a way for computers to communicate over a network. The client is the computer that requests
  services or resources from another computer called the server. The server provides the requested services or resources
  to the client.

### What is the difference between synchronous and asynchronous execution?

- Synchronous tasks happen in order, you must finish task one before moving on to the next.
- Asynchronous tasks can be executed in any order, or even simultaneously.

### What is `npm`? Why is it useful?

- Node Package Manager
- npm is the world's largest Software Registry. It is a package manager for the JavaScript programming language. It is
  the default package manager for the JavaScript runtime environment Node.js. (Node.js allows developers to run
  JavaScript on the server-side)
- npm is useful because it allows developers to easily share and reuse code packages. It also makes it easy to manage
  dependencies and keep packages up-to-date.

### What is the difference between the `depdendencies` & `devDependencies` in a `package.json` file?

- In a package.json file, the dependencies field is used to specify the packages that your project depends on in order
  to run. These are packages that are required for your application to function properly in production. (express, cors,
  mongoose)
- The devDependencies field is used to specify packages that are only required during development. These might include
  testing frameworks or build tools that are not needed in production. (nodemon)

### What would be the impact of javascript `fetch` if it was not asyncronous?

- If it was synchronous, it would block the main thread and freeze the browser until the response is received. This
  would make the user interface unresponsive and slow down the application. Asynchronous code allows for better
  performance and a more responsive user interface

### What benefits would bring to a developer to use the `Postman` application?

- The Postman application makes it easier for developers to conveniently test, configure, and document APIs, thereby
  speeding up the application development process and improving teamwork.

### List the parts of the URL.

- URL (Uniform Resource Locator)
- https://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
  Scheme: https
  Subdomain: www
  Second-level domain: example
  Top-level domain: com
  Port: 80
  Path: /path/to/myfile.html
  Query: ?key1=value1&key2=value2
  Fragment: #SomewhereInTheDocument

### What is query parameter?

- A query parameter is a part of a URL that is used to provide additional information or parameters to a request. It is
  typically used in GET requests to transfer data to the server. Query parameters are added to the URL after the
  question mark "?", and they consist of key-value pairs separated by an ampersand "&". The server accesses and
  processes these parameters to provide a specific response based on the provided values.

### What kind of HTTP status codes do you know?

- 200 OK: The request has succeeded.
- 201 Created: The request has been fulfilled and resulted in a new resource being created.
- 400 Bad Request: The server cannot or will not process the request due to an apparent client error.
- 404 Not Found: The server cannot find the requested resource.
- 500 Internal Server Error: A generic error message, given when an unexpected condition was encountered by the server
  and no more specific message is suitable.

### How does an HTTP Request look like? What are the most relevant HTTP header fields?

- An HTTP request message consists of a request line, headers, and an optional message body. The request line contains
  the method, URL, and HTTP version. The headers contain additional information about the request, such as the user
  agent and the content type of the message body.

  app.get('/', (req, res) => {

res.send('Hello World!')
})

### How does an HTTP Response look like? What are the most relevant HTTP header fields?

- An HTTP response is a message sent by a server to a client in response to an HTTP request. The response contains
  status information about the request and may also contain the requested content.
- (for previous http get request example) The response is a status code of 200 OK with the content type of text/html.
  The body of the response contains the string "Hello World!"

### Why should you ignore the `node_modules` folder in `.gitignore`?

- The node_modules folder contains all the dependencies that your project needs to run. The node_modules folder can be
  very large and can contain thousands of files. You should ignore the node_modules folder in your .gitignore file
  because it can cause issues when you are trying to push your code to a remote repository. If you include the
  node_modules folder in your repository, it can cause your repository to become very large and slow down the cloning
  process for other developers.

## REST API: SERVE AND FETCH

### Why is it recommended for a developer to use the http methods `get`, `put`, `delete`?

- The GET method is used to retrieve information from the server. The PUT method is used to update an existing resource
  on the server. The DELETE method is used to delete a resource on the server.
- It is recommended for developers to use these HTTP methods because they are well-defined and standardized. Using these
  methods helps ensure that your application is consistent and easy to understand for other developers who may be
  working on the same project.

### How does a `POST` request look like when it is made from a web browser (on the front end written)?

try {
const response = await fetch('/api/data', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({
name: 'Nagy Lorinc',
age: 20
})
});

if (!response.ok) {
throw new Error('Hiba történt a kérés során.');
}

const data = await response.json();
console.log(data);
} catch (error) {
console.error(error);
}

### What is an API?

- An API (Application Programming Interface) is a way for two or more computer programs to communicate with each other.
  It is a type of software interface that offers a service to other pieces of software. For example, if you have a
  program that stores information about books, you could create an API that allows other programs to access that
  information. Other programs could use the API to search for books, add new books to the database, or update existing
  books.

### What is REST API?

- A REST API (Representational State Transfer Application Programming Interface) is a type of web service that uses HTTP
  requests to GET (retrieve), PUT (update), POST (create), and DELETE (delete) data. REST is an architectural style that
  is used to create web services.

### What is JSON and how do we use it?

- JSON stands for JavaScript Object Notation. JSON is a lightweight format for storing and transporting data. JSON is
  often used when data is sent from a server to a web page. JSON is “self-describing” and easy to understand.

### What is API versioning ?

- API versioning is the practice of managing changes to an API and ensuring that these changes are made without
  disrupting clients. A good API versioning strategy clearly communicates the changes made and allows API consumers to
  decide when to upgrade to the latest version at their own pace.

### Give 3 examples of HTTP response status codes ? Explain what each number means.

- 200 OK: The request has succeeded.
- 400 Bad Request: The server cannot or will not process the request due to an apparent client error.
- 404 Not Found: The server cannot find the requested resource.

## ADVANCED JAVASCRIPT

### How does the `ternary operator` look like in javascript?

- A condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a
  colon (:), and finally the expression to execute if the condition is falsy.
  let age = 16;
  let lifeSpan = (age >= 18) ? 'adult' : 'child';
  console.log(lifeSpan); // output: child

### How to import a function from another module in JavaScript?

const EmployeeList = () => {
}

export default EmployeeList;

import EmployeeList from "./Pages/EmployeeList";

### What is a shallow copy on an object?

- In JavaScript, a shallow copy of an object is a new object that is created with the same properties as the original
  object.
- the spread syntax {...originalObject}

### What is a callback function? Tell some examples of its usage.

- When you give a function to another fuction as an argument, and then it's invoked inside the outer function to
  complete some kind of action.
- Event handling: Callback functions are often used to handle events such as button clicks or form submissions. (
  addEventListener)
  - Asynchronous programming: Callback functions are commonly used in asynchronous programming to handle the result of
    an asynchronous operation. (setTimeout)
  - Iteration: Callback functions can be used to iterate over arrays or other data structures. (forEach)

### What is object destructuring in javascript?

- Object destructuring is a feature in JavaScript that allows you to extract properties from an object and assign them
  to variables.

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York",
};

const { firstName, lastName } = person;
console.log(firstName); // Output: John
```

### What is array destructuring in javascript?

- Array destructuring is similar to object destructuring in that it allows you to extract values from an array and
  assign them to variables.

  const numbers = [1, 2, 3];

  const [firstNumber, secondNumber] = numbers;

  console.log(firstNumber); // Output: 1

### What is the spread operator in `js` ?

- In JavaScript, the spread operator is represented by three dots ...

  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = [...arr1, ...arr2];

  console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]

### What are the differences between the `arrow` function and the regular `function`?

- Syntax: Arrow functions have a shorter syntax than regular functions. They use the => operator instead of the function
  keyword.
- Flexibility: Arrow functions are more flexible and intuitive for functional programming, while regular functions are
  more suitable for object-oriented programming.
- Return statement: Arrow functions won't need the return keyword if the function body consists of a single expression.

### What is the `import` keyword used for?

- In JavaScript, the import keyword is used to import modules or objects defined in other files1. This allows you to use
  code from one file in another without copying and pasting the code into the new file.

  // one.js
  export const name = "John";

  // other.js
  import { name } from "./one.js";

  console.log(name); // Output: John

### What is the `required` used for?

- In JavaScript, the require keyword is used to include external files and libraries in your code. When you include a
  file or library using the require keyword, the contents of that file or library are made available to your code. The
  require() function is a built-in CommonJS module function supported in Node.js that lets you include modules within
  your project.

### What are template literals?

- Template literals are a way to write strings in JavaScript that can include variables. They use backticks (``) instead
  of quotes and you can put variables inside them by using ${variable}.

## TESTING BASICS

### What is code coverage? Why is it used?

- Code coverage is a measure or a metric that shows how much of the code is tested by automated tests.Code coverage
  helps to measure the effectiveness and quality of tests, spot problems, and reduce the chance of bugs. It can help you
  understand how much of your source is tested and spot problems.

### What is a test case? What is an assertion? Give examples!

- A test case is a set of conditions or variables under which a tester will determine whether an application, software
  system or one of its features is working as it was originally established for it to do.
- An assertion is a statement in the Java programming language that enables you to test your assumptions about your
  program.

### What are the unit testing best practices? (Eg. how many assertion should a test case contain?)

- Write tests for a number of scenarios.
- Write good test names.
- Keep tests independent of each other.

### What is arrange/act/assert pattern?

- The Arrange-Act-Assert (AAA) pattern is a pattern for organizing and writing unit tests. It divides tests into three
  steps: Arrange, which sets up the conditions for the test; Act, which runs the test; and Assert, which verifies the
  expected results.

### How do you test asynchronous code with `jest`?

- To test asynchronous code with Jest, you can use the done callback. The done callback is used to let Jest know when
  the asynchronous code has finished executing.

### What is `setup` & `teardown` in jest?

- In Jest, setup and teardown are functions that are used to do some setup work that needs to happen before tests run
  and some finishing work that needs to happen after tests run.

### Give an example when you would use in `jest` the `toBe` & `toEqual` assertions.

- In Jest, the toBe assertion is used to test for exact equality.
- The toEqual assertion is used to test for deep equality.

## REACT BASICS

### What benefits does it bring for a developer to use `components` (opposed of writing all the code in a single file)?

- Faster development: Component-based methodologies can help teams develop high-quality software up to 60% faster than
  those who do not utilize this method.
- Code reusability: Components can be reused across different projects and applications, which saves time and effort in
  development.
- Improved collaboration: Components can be developed independently by different teams or developers, which improves
  collaboration and reduces conflicts.

### What is the difference between Element and Component?

- In web development, an element is a single UI element that can be rendered on the page. An element is created by
  invoking a React component with some props.
- On the other hand, a component is a reusable piece of code that can generate one or more elements. A component is
  created by defining a JavaScript class or function.

### How do you pass values between components in `react`?

- In React, you can pass values between components using props. Props are short for properties and are used to pass data
  from one component to another.

### What is `key` prop?

- In React, the key prop is used to help React identify which items have changed, been added, or been removed from a
  list of components. When you render a list of components in React, each component needs a unique key prop.

### How does a child component pass data to it's parent component ?

- In React, data can be passed from a child component to its parent component using callbacks. The parent component
  passes a function as a prop to the child component. The child component then calls this function with the data as an
  argument when it needs to pass data back to the parent component.

### Write the code to create in JSX an HTML DIV element that has the innerText the contents of the variable `let name = 'Andrew'`

    import React from 'react';

    function App() {

let name = 'Andrew';
return (

<div>{name}</div>
);
}

    export default App;

### Write the code to create in JSX an unordered list from the array `let names = ["Mathew", "John", "Maverik"]`

    import React from 'react';

    function App() {

let names = ["Mathew", "John", "Maverik"];
return (

<ul>
{names.map((name) => (
<li key={name}>{name}</li>
))}
</ul>
);
}

    export default App;

### Write the code to set the background color red of a div in JSX.

    ```
    import React from 'react';

    function App() {

return (

<div style={{ backgroundColor: 'red' }}>Hello World!</div>
);
}

    export default App;
    ```

## TESTING REACT

### What are unit tests, integration tests? What is the major difference between these two?

- Unit tests and integration tests are two types of software testing that are used to ensure that software is working as
  expected. The main difference between unit testing and integration testing is that they are used at different stages
  of the development process and have different goals. Unit testing focuses on individual code units, while integration
  testing focuses on how they work together.

### What is unit testing?

- Unit testing is a type of software testing where individual units or components of a software are tested. The purpose
  is to validate that each unit of the software code performs as expected. Unit testing is done during the development (
  coding phase) of an application by the developers.

### What does `mocking` mean from a testing perspective ? Give an example when you would use it.

- Mocking is a process used in unit testing when the unit being tested has external dependencies. The purpose of mocking
  is to isolate and focus on the code being tested and not on the behavior or state of external dependencies.
- For example, if you are testing a function that uses a database connection, you can use a mock object to simulate the
  database connection instead of using an actual database connection. This allows you to test the function without
  worrying about the state of the database or any other external dependencies.

### How do you test that function was called `at least` 2 times using `jest`?

- You can use the jest.fn() method to create a mock function and then use the .toHaveBeenCalledTimes() method to check
  how many times the function was called.

### Name 4 benefits a developer gets from writing tests.

- Spot ambiguities early: Writing tests helps you anticipate edge cases and identify ambiguities in your code early on.
- Write better code in the first place: Writing tests forces you to think about how your code should work before you
  write it.
- Better design: Writing tests can help you design better software by forcing you to think about how different parts of
  your code interact with each other.
- Easier debugging: Writing tests can make it easier to debug your code because you can isolate the problem and test
  different parts of your code independently.

## REACT PATTERNS

### What is the difference between Real DOM and Virtual DOM?

- The main difference between the Real DOM and the Virtual DOM is that the Real DOM is the actual representation of a
  web page’s structure and content that you see on your browser screen, while the Virtual DOM is an abstract,
  lightweight copy of the real DOM that can be used to optimize and speed up web development and rendering.

### When adding an item to an array, why is it necessary to pass a new array to the `useState` hook?

- It is necessary to pass a new array to the hook because React does not automatically detect changes made to the
  original array. When you pass a new array to the useState hook, React will compare the new array with the previous one
  and update the component accordingly. This is because React uses shallow comparison to determine whether two objects
  are equal.

### Describe what techniques or tools you use to debug a react app.

- Console statements: One of the classic ways to debug an application is to log it. In the web, you can achieve this by
  using console.log, console.warn, console.error, and similar statements.
- React Developer Tools: React Developer Tools offers a solution to debug your React apps by letting you
  inspect/manipulate React component internals, such as props and state.

### What is the difference between a react `class` component & a `functional` component ?

- The main difference is the syntax.
- A functional component is just a plain JavaScript function that accepts props as an argument and returns a React
  element.
- A class component requires you to extend from React.Component and create a render function which returns a React
  element.

### Name 3 lifecycle states in a react `functional` component.

- Functional components do not have lifecycle methods like class components do1. However, they can use React hooks like
  useEffect to achieve similar functionality.
- Here are the three lifecycle states in a React class component:
  Mounting: This is when the component is created and inserted into the DOM.
  Updating: This is when the component is updated due to changes in props or state.
  Unmounting: This is when the component is removed from the DOM.

### What is conditional rendering in `react` ? Give an example.

    - Conditional rendering is a feature in React that allows you to render different content based on certain conditions.
    ```

const [showText, setShowText] = useState(false);

return (

<div>
<button onClick={() => setShowText(!showText)}>
{showText ? "Hide text" : "Show text"}
</button>
{showText && <p>This is the text to be shown.</p>}
</div>
);

### Write the code that prints to the console `component destroyed` when the component it is part of is removed from the DOM tree.

    function MyComponent() {

useEffect(() => {
return () => {
console.log("component destroyed");
};
}, []);

return <div>Hello, world!</div>;
}

### Why is there an infinite loop in this code

    function App() {
    	const [count, setCount] = useState(0); //initial value of this
    	useEffect(() => {
    		setCount((count) => count + 1); //increment this Hook
    	}); //no dependency array.
    	return (
    		<div className="App">
    		<p> value of count: {count} </p>
    		</div>
    	);
    }

- Since the useEffect hook has no dependency array, it will run on every render.

### Why is there an infinite loop in this code

    async function App() {
    	const [count, setCount] = useState("");
    	setCount(count + 1);
    	return (
    		<div className="App">
    		<p> value of count: {count} </p>
    		</div>
    	);
    }

- The infinite loop is caused by the useState hook updating the state variable count on every render. The count variable
  is a string, and now trying to add a number to it. This causes the string to be converted to a number, which triggers
  a re-render of the component.

## MONGO & MONGOOSE

### What is a database schema ?

- A database schema is a blueprint of how data is organized and stored in tables, functions, and relations within a
  database. It does not contain data itself, but describes the properties and the controls of the data. It can be
  visualized as a map of the database structure.

### Why is the `id` unique in a database ?

- The id is unique in a database because it is used as a primary key. This ensures that each record in the table can be
  uniquely identified.

### What are the advatanges & disadvatages of using `lean()` function in a mongo query ?

- The lean() function in MongoDB is used to return plain JavaScript objects instead of Mongoose documents.
- Advantages:
  Faster queries
  Reduced memory usage
- Disadvantages:
  No Mongoose features
  No schema validation

### Write the code to store the object `{name: "Andrew", age: 10}` to a mongo database. You can ignore the part of connection parameters.

- Define the schema, create the model, create new user and save the user to the database.

  const mongoose = require('mongoose');

  const userSchema = new mongoose.Schema({
  name: String,
  age: Number
  });

  const User = mongoose.model('User', userSchema);

  const user = new User({ name: 'Andrew', age: 10 });

  user.save(function (err) {
  if (err) {
  console.log(err);
  } else {
  console.log('User saved successfully!');
  }
  });

### Write the code to delete from a mongo database all employees that are over 18 years. The scheme for an employee is `{name: string, age: int}`. You can ignore the part of connection parameters.

    const mongoose = require('mongoose');

    const employeeSchema = new mongoose.Schema({
    	name: String,
    	age: Number
    });

    const Employee = mongoose.model('Employee', employeeSchema);

    // Delete all employees over 18 years old
    Employee.find({ age: { $gt: 18 } }, function (err, employees) {
    	if (err) {
    		console.log(err);
    	} else {
    			employees.forEach(function (employee) {
    				employee.remove();
    			});
    		console.log('Employees deleted successfully!');
    	}
    });

### Write the code to display in the console from a mongo database the employees who are over 18 years. The scheme for an employee is `{name: string, age: int}`. You can ignore the part of connection parameters.

    const mongoose = require('mongoose');

    const employeeSchema = new mongoose.Schema({
    	name: String,
    	age: Number
    });

    const Employee = mongoose.model('Employee', employeeSchema);

    // Find all employees over 18 years old
    Employee.find({ age: { $gt: 18 } }, function (err, employees) {
    	if (err) {
    		console.log(err);
    	} else {
    		console.log(employees);
    	}
    });

### Write the code to update from a mongo database the employees with name='John' and set the new age to 8. The scheme for an employee is `{name: string, age: int}`. You can ignore the part of connection parameters.

    const mongoose = require('mongoose');

    const employeeSchema = new mongoose.Schema({
    	name: String,
    	age: Number
    });

    const Employee = mongoose.model('Employee', employeeSchema);

    // Update all employees with name 'John' and set their new age to 8
    Employee.find({ name: 'John' }, function (err, employees) {
    	if (err) {
    		console.log(err);
    	} else {
    			employees.forEach(function (employee) {
    				employee.age = 8;
    				employee.save();
    			});
    		console.log('Employees updated successfully!');
    	}
    });

## AUTHENTICATION (cookies + google)

### How to properly store passwords?

    - One way is to use a password manager which allows you to store and protect your passwords in a secure, cloud-based digital vault or on your internet browser. Another way is to use a physical device such as an encrypted USB thumb drive which can store your passwords offline. A paper notebook is also a low-tech solution that cannot be hacked.

### What is encryption and decryption?

- Encryption and decryption are the two essential functionalities of cryptography. Encryption is the process of
  converting normal data into an unreadable form whereas decryption is a method of converting the unreadable/coded data
  into its original form. Encryption is done by the person who is sending the data to the destination, but the
  decryption is done at the person who is receiving the data.

### What is hashing?

- Hashing is the process of taking input data (in this case a password) and transforming it into a fixed-size string of
  characters that is different every time. Hashing is used to protect passwords because it ensures that if someone gains
  access to the database where the passwords are stored, they won’t be able to see the actual passwords.

### What is OAuth2?

- OAuth2 is an authorization framework that enables applications to access user accounts or resources on other web
  services on behalf of the user. It works by delegating user authentication to the service that hosts the user account
  and authorizing third-party applications to access that user account.

### What is the difference between encryption and hashing? When would you use which?

- Hashing and encryption are both ways of transforming plain text into unreadable forms.
- However, hashing is a one-way function that cannot be reversed, while encryption is a two-way function that can be
  decrypted with a key.
- Encryption is used when you want to keep data confidential and prevent unauthorized access. Hashing is used when you
  want to verify that data has not been tampered with.

### How/where would you store sensitive data (like db password, API key, ...) of your application?

- I would use a password manager which allows you to store and protect your passwords in a secure, cloud-based digital
  vault or on your internet browser.

### What would you use a session for?

- A session is a way to store information about a user across multiple requests. It allows the server to remember who
  the user is and what they have done on the website.

### What would you use a cookie for?

- A cookie is a small piece of data that a website stores on a user’s computer. It is used to remember information about
  the user and their preferences.

## MERN STACK

### What does `MERN` stand for in the context of web development ?

- MERN stands for MongoDB, Express, React, and Node.js. It is a popular stack used in web development to build
  full-stack web applications. Together, these technologies provide developers with a powerful set of tools for building
  scalable and efficient web applications.
- MongoDB: is a NoSQL database that stores data in JSON-like documents.
- Express: is a web application framework for Node.js that provides features like routing and middleware.
- React: is a JavaScript library for building user interfaces.
- Node.js: is a JavaScript runtime built on Chrome’s V8 JavaScript engine that allows developers to run JavaScript on
  the server.

### What is routing in the context of a `react` app ?

- In the context of a react app, routing refers to the process of determining which component should be rendered based
  on the current URL.
  This allows developers to create single-page applications that feel like traditional multi-page websites. There are
  several libraries available for routing in react, including react-router-dom. These libraries provide developers with
  a powerful set of tools for building complex client-side applications.

### What is routing in the context of an `express` app ?

- In the context of an express app, routing refers to the process of determining which function should handle a
  particular HTTP request.
  There are several libraries available for routing in express, including express.Router(). These libraries provide
  developers with a powerful set of tools for building scalable and efficient web applications.

### What is `CORS` policy ?

- CORS stands for Cross-Origin Resource Sharing. It is a security policy implemented by web browsers that restricts web
  pages from making requests to a different domain than the one that served the original page. To allow cross-origin
  requests, the server must include specific headers in its response. These headers tell the browser that it is safe to
  make requests to a different domain.

### What advantages does a developer have for using `bootstrap` or `material ui` ?

- Both Bootstrap and Material UI are popular front-end frameworks that provide developers with a set of pre-built
  components and styles that can be used to quickly build responsive and visually appealing web applications. (rapid
  development, accessibility, consistency)

### Cookies

- A sütik (cookie-k) kis adatfájlok, amelyeket a weboldalak hoznak létre és tárolnak a látogató számítógépén vagy mobil eszközén. Ezek a fájlok számos funkciót látnak el, mint például a felhasználói beállítások megjegyzése, a bejelentkezési adatok tárolása, vagy az oldalon végzett tevékenységek nyomon követése marketing célokra.

- Hol jönnek létre a sütik?
  A sütik létrejötte többnyire a böngészőben történik:

- Látogatáskor: Amikor meglátogatsz egy weboldalt, a szerver elküldhet egy vagy több sütit a böngésződbe, amelyeket a böngésző tárol.
  Interakció során: Egyes sütik akkor jönnek létre, amikor bizonyos műveleteket végzel egy weboldalon, például kitöltesz egy űrlapot, vagy megváltoztatod a beállításaidat.
  Harmadik féltől származó sütik: Ezeket nem az általad meglátogatott weboldal, hanem egy harmadik fél szervere hozza létre, például egy hirdetési hálózat vagy szolgáltatás, amely a látogatott weboldalon működik.

- A sütik (cookie-k) élettartama változó lehet, attól függően, hogy milyen típusúak és milyen célból kerültek létrehozásra. Általában két fő típusát különböztetjük meg:

- Munkamenet-sütik (session cookies):
  Ezek a sütik csupán addig élnek, amíg a böngésző ablaka nyitva van.
  Amint a felhasználó bezárja a böngészőt, ezek a sütik automatikusan törlődnek.
  Főként arra használják őket, hogy nyomon kövessék a felhasználó tevékenységét egy adott weboldalon belül egy munkamenet alatt, például egy online vásárlási kosár tartalmának megőrzésére.
  Állandó sütik (persistent cookies):
  Ezek a sütik meghatározott lejárati idővel rendelkeznek, amely akár néhány naptól több évig is terjedhet.
  Ezeket a sütiket a böngésző tárolja még a böngésző bezárása után is, és csak a lejáratuk időpontjában, vagy ha a felhasználó manuálisan törli őket, akkor kerülnek eltávolításra.
  Gyakori felhasználásuk az, hogy megjegyezzék a felhasználói preferenciákat, beállításokat vagy bejelentkezési adatokat, így nem kell minden egyes látogatáskor újra beírni őket.
  A süti lejárati idejét általában a weboldal fejlesztője állítja be az adott süti létrehozásakor. Ez a lejárat lehet specifikusan meghatározott dátum, vagy egy adott időtartam (például 30 nap). Ha a süti lejárati ideje eléri a végét, a böngésző automatikusan törli azt.
