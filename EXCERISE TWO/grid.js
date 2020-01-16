"use strict";

function create() {
    var rows = document.getElementById("Row").value; // Select value from row input
    var columns = document.getElementById("Column").value; // Select value from column input
    var colours = document.getElementById("Colour").value; // Select color from dropdown
    generateG(rows, columns, colours); // Run/Call function to generate grid
}

function generateG(rows, columns, colours) {
    var containers = document.getElementById("Container");
    containers.innerHTML = null;

    for (let i = 0; i < Number(rows); i++) {
        var CurrentR = document.createElement("div");
        for (let x = 0; x < Number(columns); x++) {
            var CurrentC = document.createElement("div");
            CurrentC.classList.add(colours);
            CurrentC.classList.add("BOX");
            CurrentR.appendChild(CurrentC);
        };
        containers.appendChild(CurrentR);
    }
}