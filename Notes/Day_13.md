## **Handling API using JavaScript**

1. **Handling HTTP Responses**  
2. **Working with HTTP Response Data**  
3. **Making HTTP POST Requests**  
4. **Displaying API data in HTML** for both GET and POST requests  

---

## **1. Handling HTTP Responses**
When making API requests, we handle responses properly to ensure smooth data flow. The `fetch` API in JavaScript helps in making HTTP requests.

### **Example: Handling HTTP GET Response**
```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1") // Example API
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Convert response to JSON
  })
  .then((data) => console.log("Response Data:", data))
  .catch((error) => console.error("Error fetching data:", error));
```
### **Output (Console)**
```json
Response Data: {
  "userId": 1,
  "id": 1,
  "title": "Sample Title",
  "body": "Sample body text of the post"
}
```
---

## **2. Working with HTTP Response Data**
Once the response is received, we can extract and manipulate it.

### **Example: Extracting and Using Data**
```javascript
fetch("https://jsonplaceholder.typicode.com/users/1") // Fetch user data
  .then((response) => response.json()) // Convert response to JSON
  .then((data) => {
    console.log(`User Name: ${data.name}`);
    console.log(`Email: ${data.email}`);
  })
  .catch((error) => console.error("Error:", error));
```
### **Output (Console)**
```json
User Name: Leanne Graham
Email: Sincere@april.biz
```

---

## **3. Making HTTP POST Requests**
When sending data to an API, we use the `POST` method with a request body.

### **Example: Sending a POST Request**
```javascript
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "New Post",
    body: "This is a new post created using JavaScript",
    userId: 1
  })
})
  .then((response) => response.json()) // Convert response to JSON
  .then((data) => console.log("Created Post:", data))
  .catch((error) => console.error("Error:", error));
```
### **Output (Console)**
```json
Created Post: {
  "title": "New Post",
  "body": "This is a new post created using JavaScript",
  "userId": 1,
  "id": 101
}
```
---

## **4. Display API Data in HTML (GET & POST Requests)**

We will fetch API data and display it on a webpage dynamically.

### **Example: Display GET API Data in HTML**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Fetch API GET Example</title>
</head>
<body>
    <h2>Post Details</h2>
    <div id="post-container"></div>

    <script>
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(response => response.json())
            .then(data => {
                document.getElementById("post-container").innerHTML = `
                    <h3>${data.title}</h3>
                    <p>${data.body}</p>
                `;
            })
            .catch(error => console.error("Error fetching post:", error));
    </script>
</body>
</html>
```
### **Expected Webpage Output**
```
Post Details
---------------------
[Title of Post]
[Post Body]
```
---

### **Example: Display POST API Data in HTML**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Fetch API POST Example</title>
</head>
<body>
    <h2>Create New Post</h2>
    <button onclick="createPost()">Create Post</button>
    <div id="post-result"></div>

    <script>
        function createPost() {
            fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: "Hello World!",
                    body: "This is a dynamically created post.",
                    userId: 1
                })
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById("post-result").innerHTML = `
                    <h3>${data.title}</h3>
                    <p>${data.body}</p>
                `;
            })
            .catch(error => console.error("Error creating post:", error));
        }
    </script>
</body>
</html>
```
### **Expected Webpage Output After Button Click**
```
Create New Post
---------------------
[Title: Hello World!]
[Body: This is a dynamically created post.]
```
---
