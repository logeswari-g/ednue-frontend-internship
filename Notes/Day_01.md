# Day 01: Introduction to HTML

## What is HTML?
- **HTML (HyperText Markup Language):** The foundation of any web page, used to structure content.
  - **HyperText:** Refers to the ability to link to other resources or pages.
  - **Markup Language:** A way of annotating content for browsers to display correctly.
- **CSS (Cascading Style Sheets):** Used for styling the content created with HTML.
- **JavaScript (JS):** Adds interactivity and functionality to web pages.

---

## HTML Syntax
The basic structure of an HTML element:
```html
<tagname>Content goes here</tagname>
```
- **Opening Tag:** `<tagname>`  
- **Content:** The text or elements inside the tag.  
- **Closing Tag:** `</tagname>`  
  *(Note: Some tags, like `<img>` and `<br>`, are self-closing.)*

---

## Key Concepts

### Front-End:
- Refers to everything the user sees and interacts with on the browser.
- **Technologies:** HTML, CSS, JavaScript.

### Back-End:
- Handles the logic, database, and server-side functionality.
- **Technologies:** Node.js, PHP, Python, etc.

---

## Development Tools

### IDE (Integrated Development Environment):
- A tool to write, debug, and run your code efficiently.
- **Example:** Visual Studio Code (VS Code).
  - Lightweight, versatile, and supports extensions for web development.
  - **Shortcut to open VS Code:**
    ```bash
    code .
    ```

### Git:
- A **Version Control System (VCS)** for tracking code changes.
- Allows collaboration with other developers and keeps a history of your work.
- **Basic Git commands:**
  - `git init` - Initialize a new Git repository.
  - `git add .` - Stage changes.
  - `git commit -m "message"` - Save changes with a message.
  - `git push` - Upload changes to a remote repository.

---

## HTML Document Structure
An example of a basic HTML document:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>Welcome to HTML!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```
### Explanation:
- **`<!DOCTYPE html>`**: Declares the document type.
- **`<html>`**: Root element of the document.
- **`<head>`**: Contains metadata (like the title and styles).
- **`<body>`**: Contains the visible content.

---

## What’s Next?
- **Hands-on practice:** Create your first HTML page with headings, paragraphs, and links.
- Save the file as `index.html` and open it in a browser.