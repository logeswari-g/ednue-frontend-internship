JSON (JavaScript Object Notation) is a lightweight data interchange format that's easy for humans to read and write, and easy for machines to parse and generate. It is often used to transmit data between a server and a web application, as well as to store data in a structured format.

### Key Features of JSON

1. **Simplicity**: JSON is easy to read and write, with a straightforward syntax.
2. **Structured Data**: JSON supports nested data structures, including objects and arrays.

### JSON Syntax

JSON data is written as key/value pairs:
- **Keys**: Strings, enclosed in double quotes.
- **Values**: Can be strings, numbers, objects, arrays, booleans, or null.

### Example JSON Object

Here is an example of a JSON object representing a person:

```json
{
  "name": "John Doe",
  "age": 30,
  "isStudent": false,
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA"
  },
  "hobbies": ["reading", "hiking", "coding"]
}
```

### Parsing JSON in JavaScript

You can convert a JSON string into a JavaScript object using `JSON.parse()`:

```javascript
let jsonString = '{"name": "John Doe", "age": 30, "isStudent": false}';
let jsonObj = JSON.parse(jsonString);
console.log(jsonObj.name); // Output: "John Doe"
```

### Stringifying JavaScript Objects

To convert a JavaScript object into a JSON string, you can use `JSON.stringify()`:

```javascript
let obj = {
  name: "John Doe",
  age: 30,
  isStudent: false
};
let jsonString = JSON.stringify(obj);
console.log(jsonString); // Output: '{"name":"John Doe","age":30,"isStudent":false}'
```

### Use Cases

1. **APIs**: JSON is commonly used in APIs to exchange data between clients and servers.
2. **Configuration Files**: JSON files are used to store configuration settings for various applications.
3. **Data Storage**: JSON is used in NoSQL databases (like MongoDB) to store and query data.
