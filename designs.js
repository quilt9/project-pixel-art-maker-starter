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
'use strict'; 
   
    // Select size input
    // The event handler bound to #sizePicker
    $('#sizePicker').on('submit', function(e){
        e.preventDefault();
        let heightNum = $('#input_height').val();
        let widthNum = $('#input_width').val();
        makeGrid(heightNum, widthNum);
    });

    // When size is submitted by the user, call makeGrid()
    // Your code goes here!
    function makeGrid(heightNum, widthNum) {
        // Delete the exsiting grid
        clearGrid();
        let rowNum = parseInt(heightNum);
        let colNum = parseInt(widthNum);
        const oneCol = '<td></td>';
        // Initialize first row after user click submit
        $('#pixel_canvas').append('<tr></tr>');
        // Create rows based on numRow
        for(let i = 1; i <= widthNum; i++) {
             // Add the number of columns based on the input
            $('tr:last-child').append(oneCol);
        }
        for(let i = 2; i <= rowNum; i++) {
            // Add the number of rows based on the input
            $('tr:last-child').clone().appendTo('#pixel_canvas');
        }
    }
    
    // Clear existing grid when user submit different inputs for height and width
    function clearGrid() {
        // Set the height and width inputs back to 1
        $('#input_height').val(1);
        $('#input_width').val(1);
        // Clear the content in #pixel_canvas
        $('#pixel_canvas').empty();
        
    }
    
     // Select color input
    // Listen when a square is clicked
    $('#pixel_canvas').on('mouseover', 'td', function(e) {
        let colorNum = $('#colorPicker').val();
        $(this).css('background-color', colorNum);
        e.stopPropagation();
    });
    
});



