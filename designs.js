const colorPick = document.getElementById("colorPicker");

const sizePick = document.getElementById("sizePicker");
sizePick.addEventListener("submit", makeGrid);

function makeGrid(event) {
    
    event.preventDefault();

    const gridHeight = document.getElementById("inputHeight");
    const gridWidth = document.getElementById("inputWidth");
    const artGrid = document.getElementById("pixelCanvas");
    const gridBody = document.createElement("tbody");
    artGrid.innerHTML = "";

    for (let y = 1; y <= gridHeight.value; y++) {
        const tableRow = document.createElement("tr");
        for (let x = 1; x <= gridWidth.value; x++) {
            const tableCell = document.createElement("td");
            tableRow.appendChild(tableCell);
        }
        gridBody.appendChild(tableRow);
    }

    artGrid.appendChild(gridBody);

    artGrid.addEventListener("click", function(event) {
        if (event.target.nodeName === "TD"){
            event.target.style.backgroundColor = colorPick.value;
        }
    });
}


// Udacity Knowledge forum used
// https://www.w3schools.com/jsref/dom_obj_table.asp used
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener used
