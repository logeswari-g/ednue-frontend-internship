# Day 7: Introduction to JavaScript

---

## What is JavaScript?

- JavaScript (JS) is a programming language used to add interactivity to web pages.
- **Role in Web Development**:
  - HTML: Provides structure.
  - CSS: Adds styling.
  - JavaScript: Adds interactivity and functionality.

---

## Setting Up JavaScript

1. **Inline JavaScript**: Directly inside an HTML element.
   ```html
   <button onclick="alert('Hello, World!')">Click Me</button>
   ```

2. **Internal JavaScript**: Inside a `<script>` tag in the HTML file.
   ```html
   <script>
     console.log('Internal JavaScript Example');
   </script>
   ```

3. **External JavaScript**: Linked via a `.js` file.
   ```html
   <script src="script.js"></script>
   ```

---

## JavaScript Basics

1. **Variables**:  
   - Declare using `let`, `const`, or `var`.
   ```javascript
   let name = "Guru";
   const pi = 3.14;
   ```

2. **Data Types**:  
   - String, Number, Boolean.
   ```javascript
   let age = 25;
   let isStudent = true;
   ```

3. **Operators**:  
   - Arithmetic: `+`, `-`, `*`, `/`
   - Comparison: `==`, `!=`, `<`, `>`
   ```javascript
   let a = 10, b = 5;
   console.log(a + b); // 15
   ```

4. **Functions**:
   - A block of reusable code.
   ```javascript
   function greet() {
     console.log("Welcome to JavaScript!");
   }
   greet();
   ```

**## Variable Hoisting**

console.log(hoistedVar); // Outputs: undefined
var hoistedVar = 'This variable is hoisted!';

console.log(nonHoistedLet); // Throws ReferenceError: nonHoistedLet is not defined
let nonHoistedLet = 'This variable is not hoisted!';

1) The var declaration for hoistedVar is hoisted to the top, resulting in undefined being logged because only the declaration is hoisted, not the initialization. 
2) let and const declarations are not hoisted in the same way and will throw a ReferenceError if accessed before declaration.
---

## Hands-On Practice

1. Declare a variable and print its value:
   ```javascript
   let name = "Atchaya";
   console.log(name);
   ```

2. Perform a simple calculation:
   ```javascript
   let sum = 10 + 5;
   console.log(sum); // 15
   ```

3. Create a function to display a greeting:
   ```javascript
   function greet() {
     alert("Hello, Student!");
   }
   greet();
   ```

---
