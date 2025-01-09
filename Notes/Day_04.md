### **Day 4 - Introduction to CSS**

---

#### **1. What is CSS?**  
- CSS stands for **Cascading Style Sheets**.  
- It is used to control the presentation of HTML elements, such as layout, colors, fonts, and more.  
- It separates **content (HTML)** from **design (CSS)**, making it easier to maintain and update webpages.  

**Example:**  
HTML (structure):  
```html
<p>Hello, World!</p>
```  
CSS (style):  
```css
p {
  color: blue;
  font-size: 20px;
}
```

---

#### **2. CSS Syntax**  
- CSS is written in **rules**:  
```css
selector {
  property: value;
}
```  
- **Selector:** Targets the HTML element(s).  
- **Property:** The style property to be applied (e.g., color, font-size).  
- **Value:** The specific value for the property (e.g., blue, 20px).  

---

#### **3. Types of CSS Selectors**  
1. **Universal Selector (`*`)**: Targets all elements.  
   ```css
   * {
     margin: 0;
     padding: 0;
   }
   ```
2. **Type Selector (e.g., `p`, `h1`)**: Targets elements by tag name.  
   ```css
   h1 {
     color: green;
   }
   ```
3. **Class Selector (`.classname`)**: Targets elements with a specific class.  
   ```css
   .highlight {
     background-color: yellow;
   }
   ```
4. **ID Selector (`#id`)**: Targets an element with a specific ID.  
   ```css
   #main-title {
     font-size: 30px;
   }
   ```

---

#### **4. Ways to Add CSS to a Webpage**  
1. **Inline CSS**  
   - Directly add style to an element using the `style` attribute.  
   ```html
   <p style="color: red;">This is red text.</p>
   ```

2. **Internal CSS**  
   - Write CSS in a `<style>` tag within the `<head>` of the HTML file.  
   ```html
   <head>
     <style>
       p {
         color: blue;
       }
     </style>
   </head>
   ```

3. **External CSS**  
   - Write CSS in a separate `.css` file and link it to the HTML file using the `<link>` tag.  
   ```html
   <head>
     <link rel="stylesheet" href="styles.css">
   </head>
   ```  

**Example of `styles.css`:**  
```css
body {
  background-color: lightgray;
}
p {
  font-size: 18px;
}
```

---

#### **5. Practical Demonstration**  
- Create a simple HTML file (`index.html`) and style it with CSS in all three ways.  
- Example HTML file:  
```html
<!DOCTYPE html>
<html>
<head>
  <title>CSS Basics</title>
  <style>
    h1 {
      color: navy;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>Welcome to CSS</h1>
  <p class="highlight">This paragraph is styled using a class.</p>
  <p style="color: purple;">This paragraph uses inline CSS.</p>
</body>
</html>
```

---

#### **Key Points to Remember**  
1. CSS makes webpages visually appealing and user-friendly.  
2. Always separate CSS from HTML as much as possible (prefer external stylesheets).  
3. Learn to use selectors effectively for targeted styling.  

---

#### **What’s Next?**  
- Day 5: Exploring CSS Properties – Colors, Fonts, and Text Alignment.  
- Hands-on styling your first webpage!    
--- 