"use strict";

function calc() {
    var firsT = Number(document.getElementById("first").value);
    var seconD = Number(document.getElementById("second").value);
    if (firsT == 0 || seconD == 0) {
        alert("ERROR");
        return;
    }
    document.getElementById("output").innerHTML = firsT / seconD;
}