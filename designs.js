//#region Helper functions

/** 
 * @description Builds the drawing grid to the dimensions specified by the user. 
*/
function makeGrid() {
    // Get elements. 
    const table = $("#pixel-canvas");
    // Get table dimensions. 
    const rows = $("#input-height").val();
    const columns = $("#input-weight").val();

    for (let i = 0; i < rows; i++) {
        // Add rows. 
        table.append("<tr id=\"row" + i + "\"></tr>");
        let row = $("#row" + i);

        // Add columns. 
        for (let j = 0; j < columns; j++) {
            row.append("<td></td>");
        }
    }
}

/** 
 * @description Resets the grid so that it can be redrawn. 
*/
function resetGrid() {
    $("#pixel-canvas").empty();
}

/** 
 * @description Adds a button to to the page to clear the grid.
*/
function addClearButton() {
    if ($("#button-clear").length === 0)
        $("#drawing-area").after("<button type=\"button\" id=\"button-clear\">Clear</button>");
}

//#endregion Helper functions

//#region Event Handlers

/**
 * @description Handles the "Submit" button click.
 */
$("#size-picker").submit(function (e) {
    resetGrid();
    makeGrid();
    addClearButton();
    // Prevent submission of form. 
    e.preventDefault();
})

/**
 * @description Handles the click event for the "Clear" button that was dynamically added. 
 */
$("body").on("click", "#button-clear", function () {
    // Clear grid.
    $("#pixel-canvas").find("td").css("background-color", backgroundColor);
})

/**
 * @description Handles the click event for the cells that were dynamically added to the table. 
 */
$("#pixel-canvas").on("click", "td", function (e) {
    $(this).css("background-color", drawColor);
})

/**
 * @description Handles the selection of a new draw color via the color picker. 
 */
$("#draw-color-picker").change(function () {
    drawColor = ($(this).val());
})

/**
 * @description Handles the selection of a new background color via the color picker. 
 */
$("#background-color-picker").change(function () {
    backgroundColor = ($(this).val());
    // Set the table background color.
    $("#pixel-canvas").css("background-color", backgroundColor);
})

//#endregion Event Handlers

//#region Global members

let drawColor = $("#draw-color-picker").val();
let backgroundColor = $("#background-color-picker").val();

//#endregion Global members