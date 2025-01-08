### **Day 3: HTML Media Elements, Links, and Semantic Elements**  

---

#### **1. HTML Media Elements**  
Media elements allow us to include images, videos, and audio in a webpage to make it more engaging.  

##### **1.1 Images (`<img>` tag)**  
- The `<img>` tag is used to embed images.  
- Attributes:  
  - **`src`**: Specifies the path to the image file.  
  - **`alt`**: Provides alternative text if the image cannot load.  

**Example**:  
```html
<img src="https://via.placeholder.com/300" alt="Placeholder Image">
```

---

##### **1.2 Videos (`<video>` tag)**  
- The `<video>` tag is used to add videos to a webpage.  
- Attributes:  
  - **`controls`**: Adds play, pause, and volume controls.  
  - **`autoplay`**: Starts the video automatically when the page loads.  
  - **`loop`**: Repeats the video continuously.  

**Example**:  
```html
<video controls width="320">
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

---

##### **1.3 Audio (`<audio>` tag)**  
- The `<audio>` tag is used to embed audio files.  
- Attributes:  
  - **`controls`**: Adds play and pause controls.  
  - **`autoplay`**: Starts the audio automatically when the page loads.  
  - **`loop`**: Repeats the audio continuously.  

**Example**:  
```html
<audio controls>
  <source src="audio.mp3" type="audio/mp3">
  Your browser does not support the audio tag.
</audio>
```

---

#### **2. HTML Links (`<a>` tag)**  
Links enable navigation between web pages or specific sections within the same page.

##### **2.1 External Links**  
- Links to an external webpage.  
**Syntax**:  
```html
<a href="https://google.com" target="_blank">Visit Google</a>
```

##### **2.2 Internal Links**  
- Links to another webpage within the same project folder.  
**Syntax**:  
```html
<a href="about.html">Go to About Page</a>
```

##### **2.3 Anchor Links**  
- Links to a specific section on the same page.  
**Syntax**:  
```html
<a href="#section1">Go to Section 1</a>
<h2 id="section1">Section 1</h2>
```

---

#### **3. Semantic Elements**  
Semantic elements describe the purpose of the content and improve the readability of the HTML code for browsers and developers.  

##### **Common Semantic Tags**  
- **`<header>`**: Represents the page or section's header.  
- **`<footer>`**: Represents the page or section's footer.  
- **`<section>`**: Groups related content.  
- **`<article>`**: Represents a standalone piece of content, such as a blog post.  

**Example**:  
```html
<header>
  <h1>Welcome to My Website</h1>
</header>
<section>
  <article>
    <h2>Article Title</h2>
    <p>This is an article.</p>
  </article>
</section>
<footer>
  <p>&copy; 2025 My Website</p>
</footer>
```

---

#### **Key Points to Remember**  
1. Use appropriate media elements (`<img>`, `<video>`, `<audio>`) to enhance the content.  
2. Links are essential for navigation within and between web pages.  
3. Semantic elements improve the structure and accessibility of a webpage.  

---

#### **What’s Next?**  
- **Day 4:** Introduction to CSS – Styling your HTML content!  
  - Basic selectors.  
  - Inline, internal, and external CSS.  
  - Colors, fonts, and text alignment.  

---