const canvasSide = 576;

const container = document.querySelector("#container");

function initiateGrid() {
    for(let j = 0; j < 16; j++) {
        let row = document.createElement("div");
        row.setAttribute("class", "row");
        for(let i = 0; i < 16; i++) {
            let grid = document.createElement("div");
            grid.setAttribute("class", "grid");
            grid.addEventListener("mouseenter", () => {
                grid.style.backgroundColor = "blue";
            });
            grid.addEventListener("mouseleave", () => {

            })
            row.appendChild(grid);
        }
        container.appendChild(row);
    }
}

initiateGrid();