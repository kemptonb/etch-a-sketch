# etch-a-sketch
Javascript Etch-a-Sketch 

Skills demonstrated:

--DOM manipulation
--Loops, conditionals
--Flexbox UI
--Interpolation of prompt input var assigned to DOM style alteration

All content is rendered using JavaScript DOM manipulation. A loop renders a 16 x 16 square grid ordered with flexbox. Each div in the grid has a mouse-over event listener that marking black any square the mouse hovers over. 

If the user clicks once, the div squares receive a background of white, returning the grid to its default, unmarked state.  

Upon a double-click, the DOM rendering of the 16 x 16 grid is erased. A prompt appears asking for the new grid width, only accepting numbers greater than 0. If greater than 100, 100 is set as the default width.

Once the grid width is selected, the new grid is rendered conforming to the prompt’s input value. A new mouse-over event listener is placed upon the grid, allowing it be marked, drawn upon. 
