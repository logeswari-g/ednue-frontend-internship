**What is a Regular Expression?**

   A regular expression is a sequence of characters that forms a search pattern. This pattern can be used for searching, replacing, and extracting parts of strings. Regular expressions are enclosed within slashes (/pattern/) in JavaScript.

**Creating a Regular Expression**

   1) **Literal Notation**: This is the most common way and is written between two slashes.

      ```
         let regex = /pattern/;
      ```
   
   2) **Constructor Function**: This allows you to create a regex dynamically.

      ```
      // User input
      let userInput = "hello";
      
      // Create a regex pattern dynamically
      let pattern = new RegExp(userInput, 'i'); // 'i' flag makes the search case-insensitive
      
      // Test the regex
      let str = "Hello, world!";
      console.log(pattern.test(str)); // Output: true

      ```

**Common Metacharacters**

      * . (Dot): Matches any single character except newline.
      * \d: Matches any digit (0-9).
      * \w: Matches any word character (alphanumeric and underscore).
      * \s: Matches any whitespace character (space, tab, newline).
      * ^: Matches the beginning of the string.
      * $: Matches the end of the string.

      **1) Searching for a pattern:**
         
        ```
           let str = "Hello, world!";
           let regex = /world/;
           console.log(regex.test(str)); // Output: true
        ```
      
      **2) Replacing a pattern:**
      
         ```
           let str = "Hello, world!";
           let regex = /world/;
           let newStr = str.replace(regex, "universe");
           console.log(newStr); // Output: "Hello, universe!
         ```
         
     ** 3) Extracting a pattern:**
      
         ```
          let str = "The price is $100";
          let regex = /\d+/;
          let match = str.match(regex);
          console.log(match[0]); // Output: "100"
         ```

**Modifiers**

   * g: Global search (find all matches).
   * i: Case-insensitive search.
   * m: Multi-line search.

```
let regex = /hello/i; // Case-insensitive search for "hello"
let regex = /hello/g; // Global search for "hello"
let regex = /^hello/m; // Multi-line search for "hello" at the beginning of a line
```

