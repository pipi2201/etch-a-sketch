const container = document.querySelector("#container");
let numberOfSquares = 16;
makeGrid(numberOfSquares);

// function random_rgb() {
//     function getRandomInt(max) {
//         return Math.floor(Math.random() * max);
//       }
//     return "rgb(" + getRandomInt(255) + ", " + getRandomInt(255) + ", " + getRandomInt(255) + ")";
// }

function makeGrid(numberOfSquares) {
    for (let i = 0; i < numberOfSquares; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "rows");
        container.appendChild(row);

        for (let i = 0; i < numberOfSquares; i++) {
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            row.appendChild(square);
        }
    }
    const pixels = document.querySelectorAll(".square");
    pixels.forEach((pixelNode) => {
        pixelNode.addEventListener("mouseover", () => {
        pixelNode.style.backgroundColor = "black";
        pixelNode.style.opacity = "0.1";
        //doesnt work! check whole conditional!
        if (pixelNode.style.opacity === "0.1") {
            pixelNode.style.opacity = "0.2";
        }
        else if (pixelNode.style.opacity === "0.2") {
            pixelNode.style.opacity = "0.3";
        }
        console.log(pixelNode.style.opacity);
    });    
});
}


const body = document.querySelector("body");
const button = document.createElement("button");
button.setAttribute("class", "button");
button.textContent = "HOW MANY SQUARES?"
body.prepend(button);
button.addEventListener("click", makeNewGrid);

function makeNewGrid() {
    numberOfSquares = Number(prompt("Put in a number from 1 to 100!"));
    console.log(numberOfSquares);
    if (numberOfSquares == "" || numberOfSquares == null || numberOfSquares < 1 || numberOfSquares > 100 || Number.isInteger(numberOfSquares) === false) {
        alert("Please try again");
    }
    else {
        //remove old grid
        const rows = document.querySelectorAll(".rows");
        rows.forEach((row) => {
            row.remove();
        });
        //make new grid
        makeGrid(numberOfSquares);
    }
}