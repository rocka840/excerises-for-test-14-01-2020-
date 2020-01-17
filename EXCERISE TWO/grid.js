"use strict";

function create() {
    var rows = document.getElementById("Row").value; // Select value from row input
    var columns = document.getElementById("Column").value; // Select value from column input
    var colours = document.getElementById("Colour").value; // Select color from dropdown
    generateG(rows, columns, colours); // Run/Call function to generate grid
}

function generateG(rows, columns, colours) { // Separate function to generate the table taking input values
    var containers = document.getElementById("Container"); // Selects container to generate grid inside 
    containers.innerHTML = null; // Empties container

    for (let i = 0; i < Number(rows); i++) { // Loops through the table rows
        var CurrentR = document.createElement("div"); // Creates a div for the current row
        for (let x = 0; x < Number(columns); x++) { // Loops through each cell(column) in the row
            var CurrentC = document.createElement("div"); // Generates cell
            CurrentC.classList.add(colours); // Adds selected color to cell
            CurrentC.classList.add("BOX"); // Adds default box class containing width etc.
            CurrentR.appendChild(CurrentC); // Adds cell to current row
        };
        containers.appendChild(CurrentR); // Adds current row to container
    }
}