
# Day 2: HTML Lists, Tables, and Forms

## 1. HTML Lists
Lists are used to group related items.

### Types of Lists:
- **Ordered List (`<ol>`)**: Items are numbered.
  ```html
  <ol>
    <li>Item 1</li>
    <li>Item 2</li>
  </ol>
  ```

- **Unordered List (`<ul>`)**: Items are bulleted.
  ```html
  <ul>
    <li>Item A</li>
    <li>Item B</li>
  </ul>
  ```
  Output:  
  - Item A  
  - Item B

- **Description List (`<dl>`):** Used for key-value pairs.
  ```html
  <dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
  </dl>
  ```

---

## 2. HTML Tables
Tables are used to display data in rows and columns.

### Basic Table Structure:
```html
<table>
  <caption>Class Timetable</caption>
  <tr>
    <th>Day</th>
    <th>Subject</th>
  </tr>
  <tr>
    <td>Monday</td>
    <td>Math</td>
  </tr>
</table>
```
- **`<table>`**: Creates the table.  
- **`<tr>`**: Defines a row.  
- **`<th>`**: Table header (bold and centered).  
- **`<td>`**: Table data (regular cells).  

---

## 3. HTML Forms
Forms are used to collect user input.

### Basic Form Structure:
```html
<form action="submit.html" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  <br><br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  <br><br>
  <button type="submit">Submit</button>
</form>
```
- **`<form>`**: Wraps all form elements.  
- **`<input>`**: Used for user input (e.g., text, email).  
- **`<label>`**: Describes input fields.  
- **`<button>`**: Creates a clickable button.

---

## What’s Next?
- Practice creating lists, tables, and forms.  
- Experiment with different input types in forms.