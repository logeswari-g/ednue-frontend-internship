# **Day 9 : JavaScript Events & Bootstrap Basics**  


## **JavaScript Events**  

#### **Introduction to Events**  
  
   - **What are Events?**  
     Events are user interactions with the webpage, such as clicks, typing, or scrolling.  
   - **Common Events:**  
     - `click`: Triggered when an element is clicked.  
     - `keyup`: Triggered when a key is released.  
     - `mouseover`: Triggered when the mouse hovers over an element.  

---

#### **Event Listeners**   
   - Event listeners are used to attach event-handling code to elements.  
   - Syntax: 

     ```javascript
     element.addEventListener(event, function);
     ```  

 **Example 1: Click Event** 

   HTML:

   ```html
   <button id="btn">Click Me</button>
   <p id="msg"></p>
   ```  
   JavaScript: 

   ```javascript
   document.getElementById("btn").addEventListener("click", function () {
     document.getElementById("msg").textContent = "Button Clicked!";
   });
   ```  


**Example 2: Keyup Event** 

   HTML:  

   ```html
   <input type="text" id="inputField" placeholder="Type here">
   <p id="preview"></p>
   ```  
   JavaScript: 

   ```javascript
   document.getElementById("inputField").addEventListener("keyup", function () {
     const value = this.value;
     document.getElementById("preview").textContent = value;
   });
   ```

---
#### Create a webpage with a button. When clicked, it changes the background color of the webpage. 

Example Code:

   ```javascript
   document.getElementById("changeBg").addEventListener("click", function () {
     document.body.style.backgroundColor = "lightblue";
   });
   ```  


## **Bootstrap Basics**  

#### **What is Bootstrap?**    
   - **Bootstrap** is a CSS framework for building responsive and mobile-first websites.  
   - It provides pre-designed components and grid systems.  
   - It saves time by reducing the need to write custom CSS for layout and styling.  

2. Show the official Bootstrap website: https://getbootstrap.com/  

---

#### **Setting Up Bootstrap**  
1. **CDN Method:**  
   - Include the Bootstrap CSS file in the `<head>` of your HTML.  

     ```html
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
     ```  

---

#### **Bootstrap Components**  

1. **Buttons:**  

   ```html
   <button class="btn btn-primary">Primary Button</button>
   <button class="btn btn-danger">Danger Button</button>
   ```  
---
2. **Alerts:** 

   ```html
   <div class="alert alert-success" role="alert">
     This is a success alert!
   </div>
   ```  
---
3. **Grid System:** 

   ```html
   <div class="container">
     <div class="row">
       <div class="col-md-6">Column 1</div>
       <div class="col-md-6">Column 2</div>
     </div>
   </div>
   ```  
---
4. **Cards:**

   ```html
   <div class="card" style="width: 18rem;">
     <img src="https://via.placeholder.com/150" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">Card Title</h5>
       <p class="card-text">Some example text for this card.</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
   </div>
   ```  


---