let grid = document.querySelector(".grid");

let gridNumber = 16;

for (let i = 0; i < gridNumber; i++){
    let newRow = document.createElement("div");
    newRow.className = "line";
    grid.appendChild("newRow");

    for (let j = 0; j < gridNumber; j++){
        let newItem = document.createElement("div");
        newItem.className = "item";
        newRow.appendChild(newItem);
    }
}