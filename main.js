const canvasSide = 576;

const container = document.querySelector("#container");

function initiateGrid(squarePerSide) {
    container.innerHTML = '';
    let sideOfSquare = canvasSide / squarePerSide;
    for (let j = 0; j < squarePerSide * squarePerSide; j++) {
        let grid = document.createElement("div");
        grid.setAttribute("class", "grid");
        grid.style.width = sideOfSquare + "px";
        grid.style.height = sideOfSquare + "px";
        grid.style.opacity = 0.1;
        grid.addEventListener("mouseenter", () => {
            grid.style.backgroundColor = "#" + (Math.random() * 0xFFFFFF  << 0).toString(16).padStart(6, '0');
            if(grid.style.opacity < 1) {
                grid.style.opacity = ((parseFloat(grid.style.opacity)) + 0.1).toString();
            }
        });
        grid.addEventListener("mouseleave", () => {

        })
        container.appendChild(grid);
    }
}

initiateGrid(16);

document.querySelector("#reset").addEventListener("click", () => {
    let squarePerSide = window.prompt("How many squares per side would you like?");
    while(squarePerSide < 1 || squarePerSide > 100) {
        squarePerSide = window.prompt("Please enter a number between 1 and 100");
    }   
    initiateGrid(squarePerSide);
});