/* global $ */
/* global let */
/* global html */
/**
APP: Pixel Art Maker
User Stories:
1. Dynamically set the size of the table as an N by M grid.
2. Choose a color.
3. Click a cell in the grid to fill that cell with the chosen color
===================================================================
Project Objective
Implement the makeGrid() function that dynamically creates a grid that the user can interact with.
===================================================================
Project Tasks
1. Capture the value of the inputs for both number of columns and rows.
2. Listen for keypress event.
3. Insert the number of columns and rows based on the value of the inputs.
**/

$(document).ready(function() {
    
    // Select color input

    // Select size input
    // The event handler bound to #sizePicker
    $(':submit').on('click', function(e){
        let heightNum = $('#input_height').val();
        let widthNum = $('#input_width').val();
        makeGrid(heightNum, widthNum);
    });

    // When size is submitted by the user, call makeGrid()
    // Your code goes here!
    function makeGrid(heightNum, widthNum) {
        let rowNum = parseInt(heightNum);
        let colNum = parseInt(widthNum);
        // Create rows based on numRow
        for(let i = 1; i <= rowNum; i++) {
             // What needs to happen to create the table columns and rows
            $('#pixel_canvas').append('<tr><td>i+1</td></tr>');
        }
    }
   
});



