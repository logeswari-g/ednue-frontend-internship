# Day 6: CSS Flexbox

## What is Flexbox?
Flexbox is a CSS layout model used to create responsive, flexible, and one-dimensional layouts.

- **Main Axis**: Direction items are laid out (row or column).
- **Cross Axis**: Perpendicular to the main axis.

---

## Flex Container Properties

1. **`display: flex;`**  
   Enables Flexbox for the container.

2. **`flex-direction`**  
   Defines the direction of items:
   - `row` (default), `row-reverse`, `column`, `column-reverse`.

3. **`justify-content`**  
   Aligns items along the main axis:
   - `flex-start` (default), `center`, `flex-end`, `space-between`, `space-around`.

4. **`align-items`**  
   Aligns items along the cross axis:
   - `stretch` (default), `flex-start`, `center`, `flex-end`.

5. **`flex-wrap`**  
   Controls whether items wrap onto multiple lines:
   - `nowrap` (default), `wrap`.

---

## Flex Item Properties

1. **`flex`**  
   Shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.

2. **`align-self`**  
   Aligns a single item differently from the others.

---

## Example Code:

### Flex Container Example:
```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
```

### Flex Item Example:
```css
.item {
  flex: 1; /* Takes equal space */
  align-self: flex-end; /* Aligns to the bottom */
}
```

---

## Hands-On Practice

1. **Navigation Bar:**
   - Horizontally aligned links using `justify-content`.
   - Center alignment using `align-items`.

2. **Responsive Card Layout:**
   - Cards wrap using `flex-wrap`.
   - Equal spacing with `justify-content: space-between`.

