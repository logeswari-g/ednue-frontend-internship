
# Day 5: CSS Box Model and Positioning

## CSS Box Model
The CSS Box Model treats every HTML element as a rectangular box with the following components:

1. **Content**: The actual content inside the element (text, image, etc.).
2. **Padding**: Space between the content and the border.
3. **Border**: Edge around the padding and content.
4. **Margin**: Space outside the border (separates elements).

![image](https://github.com/user-attachments/assets/0333cc52-8a33-4170-8829-0254e1414a59)

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
1. **Static (Default)**: Normal flow of the document.
2. **Relative**: Positioned relative to its normal position.
   ```css
   div {
     position: relative;
     top: 10px;
     left: 20px;
   }
   ```
3. **Absolute**: Positioned relative to the nearest positioned ancestor.
   ```css
   div {
     position: absolute;
     top: 50px;
     left: 100px;
   }
   ```
4. **Fixed**: Positioned relative to the viewport; doesn’t move when scrolling.
   ```css
   div {
     position: fixed;
     bottom: 10px;
     right: 20px;
   }
   ```
5. **Sticky**: Toggles between `relative` and `fixed` based on scroll position.
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
