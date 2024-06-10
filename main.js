const canvasSide = 576;

const container = document.querySelector("#container");

function initiateGrid(squarePerSide) {
    let sideOfSquare = canvasSide / squarePerSide;
    for (let j = 0; j < squarePerSide * squarePerSide; j++) {
        let grid = document.createElement("div");
        grid.setAttribute("class", "grid");
        grid.style.width = sideOfSquare + "px";
        grid.style.height = sideOfSquare + "px";
        grid.addEventListener("mouseenter", () => {
            grid.style.backgroundColor = "blue";
        });
        grid.addEventListener("mouseleave", () => {

        })
        container.appendChild(grid);
    }
}

initiateGrid(64);