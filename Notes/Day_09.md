# **Day 08: JavaScript - DOM Manipulation**


## **What is DOM?**

- **DOM (Document Object Model):**  
  The DOM is a programming interface for web documents. It represents the structure of a webpage as a tree of objects that can be manipulated using JavaScript.

---

## **Key Concepts of DOM**

### 1. **DOM Tree Structure**  
- The DOM represents the HTML document as a tree of nodes.
- Example:  
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Sample Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```
Tree Structure:  
- `html` (root element)  
  - `head`  
    - `title`  
  - `body`  
    - `h1`  
    - `p`

---

### 2. **Selecting Elements in the DOM**

- **`document.getElementById(id)`**  
  Selects an element by its `id`.  
  ```javascript
  const element = document.getElementById("header");
  ```

- **`document.querySelector(selector)`**  
  Selects the first matching element using a CSS selector (#id, .class, tag).
  ```javascript
  const element = document.querySelector(".className");
  ```

- **`document.querySelectorAll(selector)`**  
  Selects all elements that match the selector.  
  ```javascript
  const elements = document.querySelectorAll("p");
  ```

---

### 3. **Manipulating Elements**

- **Change Content:**  
  ```javascript
  document.getElementById("demo").innerHTML = "Hello, JavaScript!";
  ```

- **Change Styles:**  
  ```javascript
  document.getElementById("demo").style.color = "blue";
  ```

- **Add/Remove Classes:**  
  ```javascript
  element.classList.add("new-class");
  element.classList.remove("old-class");
  ```

- **Hide/Show Elements:**  
  ```javascript
  element.style.display = "none"; // Hide
  element.style.display = "block"; // Show
  ```

---

### 4. **Creating and Appending Elements**

- **Create an Element:**  
  ```javascript
  const newElement = document.createElement("p");
  newElement.textContent = "This is a new paragraph.";
  ```

- **Append to an Existing Element:**  
  ```javascript
  document.body.appendChild(newElement);
  ```

- **Remove an Element:**  
  ```javascript
  const elementToRemove = document.getElementById("remove-me");
  elementToRemove.remove();
  ```

---

### 5. **Event Handling**

- **Add an Event Listener:**  
  ```javascript
  button.addEventListener("click", function () {
    alert("Button clicked!");
  });
  ```

- **Common Events:**  
  - `click`: Triggered when an element is clicked.
  - `mouseover`: Triggered when the mouse hovers over an element.
  - `keydown`: Triggered when a key is pressed.

---

## **Practical Example: Counter App**

HTML:  
```html
<div>
  <button id="decrement">-</button>
  <span id="counter">0</span>
  <button id="increment">+</button>
</div>
```

JavaScript:  
```javascript
let count = 0;

const counterElement = document.getElementById("counter");

document.getElementById("increment").addEventListener("click", () => {
  count++;
  counterElement.textContent = count;
});

document.getElementById("decrement").addEventListener("click", () => {
  count--;
  counterElement.textContent = count;
});
```

---

## **What We Covered**

1. What is DOM?  
2. Selecting elements using JavaScript.  
3. Manipulating elements (content, style, and classes).  
4. Creating, appending, and removing elements.  
5. Handling events to make pages interactive.  

---

