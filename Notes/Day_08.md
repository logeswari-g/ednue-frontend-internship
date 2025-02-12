Day 8: **Introduction to Error Handling**

**Try and Catch block**

The try...catch block in JavaScript is used to handle errors gracefully and prevent the script from crashing.
```
try {
    // Code that may cause an error
} catch (error) {
    // Code to handle the error
} finally {
    // (Optional) Code that will always execute
}
```
**1. Basic try and catch handling**

```
try {
    let x = undefinedVariable; // This will throw an error
    console.log("This will not run if an error occurs.");
} catch (error) {
    console.log("An error occurred:", error.message);
}
```

**2. Handling JSON Parsing Errors**

```
let jsonString = '{ "name": "John", "age": 30, }'; // Invalid JSON due to extra comma

try {
    let user = JSON.parse(jsonString); // This will throw an error
    console.log(user.name);
} catch (error) {
    console.log("JSON Parsing Error:", error.message);
}
```

**3. Custom Errors with throw**

```
function checkAge(age) {
    try {
        if (age < 18) {
            throw new Error("You must be 18 or older.");
        }
        console.log("Access granted!");
    } catch (error) {
        console.log("Error:", error.message);
    }
}

checkAge(15); // Output: Error: You must be 18 or older.
checkAge(20); // Output: Access granted!

```

**Promises in JavaScript**

A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation. It is used to handle asynchronous code like API calls, file reading, or database queries, making code cleaner and more manageable.

**Promise Syntax**

```
let myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation (e.g., fetching data)
    let success = true; // Change to false to simulate failure

    setTimeout(() => {
        if (success) {
            resolve("Operation Successful ✅");
        } else {
            reject("Operation Failed ❌");
        }
    }, 2000);
});

myPromise
    .then(response => console.log(response))  // Handles success
    .catch(error => console.log(error))      // Handles failure
    .finally(() => console.log("Done!"));    // Runs always
```

**why to use promise?**
1. Better for Asynchronous Chaining (not wait for another process to complete)
2. Handles Parallel Async Tasks
3. With try...catch, an error must be caught manually inside but with Promises, error handling is automatic with .catch().

