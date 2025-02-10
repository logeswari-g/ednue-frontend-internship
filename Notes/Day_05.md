
# Day 5: CSS Box Model and Positioning

## CSS Box Model
The CSS Box Model treats every HTML element as a rectangular box with the following components:

1. **Content**: The actual content inside the element (text, image, etc.).
2. **Padding**: Space between the content and the border.
3. **Border**: Edge around the padding and content.
4. **Margin**: Space outside the border (separates elements).

![image](https://github.com/user-attachments/assets/f8d0be13-efc4-4236-ac80-84513d54970d)

### CSS Example:
```css
div {
  width: 200px;
  height: 100px;
  padding: 10px;
  border: 2px solid #4CAF50;
  margin: 20px;
}
```

---

## CSS Positioning

### Types of Positioning:
1. **Static (Default)**: Default position of the element. It will not support left, right, top and bottom alignment for the element.
    ```css
   div {
     position: static;
     top: 10px;
     left: 20px;
   }
   ```
3. **Relative**: Positioned relative to its normal position. Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position.
   ```css
   div {
     position: relative;
     top: 10px;
     left: 20px;
   }
   ```
4. **Absolute**: Positioned relative to the nearest positioned ancestor.
   ```css
   div {
     position: absolute;
     top: 50px;
     left: 100px;
   }
   ```
5. **Fixed**: Always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.
   ```css
   div {
     position: fixed;
     bottom: 10px;
     right: 20px;
   }
   ```
6. **Sticky**: Toggles between `relative` and `fixed` based on scroll position.  It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place
   ```css
   div {
     position: sticky;
     top: 0;
   }
   ```

---

## Hands-On Practice:
1. Create a styled `<div>` using the box model properties.
2. Experiment with different positioning techniques.
3. Build a sticky navbar and a fixed floating button.
