const grid = document.querySelector(".grid");

let dimensions = 16;
let boxes = dimensions * dimensions;
let gridSize = 500;

for (i=1;i<=boxes;i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.height = gridSize/dimensions + "px";
    box.style.width = gridSize/dimensions + "px";
    grid.appendChild(box);
}

const gridBoxes = document.querySelectorAll(".box");
gridBoxes.forEach((box) => {
    box.addEventListener("mouseover", function(e) {
        e.target.style.backgroundColor = "black";
    })
})

const newGrid = document.querySelector(".new");
function resetGrid() {
    let newGridSize = parseInt(prompt("Choose a number up to 100 for a new grid:"));
    if (newGridSize > 100) {
        alert("Please choose a valid number");
    }
}