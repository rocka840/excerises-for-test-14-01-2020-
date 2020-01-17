"use strict";

function changeVAL(operation) {
    let currentELMT = document.getElementById("TEXTBOX");
    let currentNBR = Number(currentELMT.innerHTML); // "0" -- Number("0")

    if (operation == "PLUS") {
        currentELMT.innerHTML = currentNBR + 1;
        document.getElementById("plusbox").innerHTML = Number(document.getElementById("plusbox").innerHTML) + 1;
    } else
    if (operation == "MIN") {
        currentELMT.innerHTML = currentNBR - 1;
        document.getElementById("minbox").innerHTML = Number(document.getElementById("minbox").innerHTML) + 1;
    } else {
        currentELMT.innerHTML = 0;
        document.getElementById("resbox").innerHTML = Number(document.getElementById("resbox").innerHTML) + 1;
    }
}