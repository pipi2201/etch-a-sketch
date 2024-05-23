const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "rows");
    container.appendChild(row);

    for (let i = 0; i < 16; i++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        row.appendChild(square);
    }
}

const pixels = document.querySelectorAll(".square");
pixels.forEach((pixelNode) => {
    pixelNode.addEventListener("mouseover", () => {
        pixelNode.style.backgroundColor = "black";
    });    
});

const body = document.querySelector("body");
const button = document.createElement("button");
button.setAttribute("class", "button");
button.textContent = "HOW MANY SQUARES?"
body.prepend(button);
button.addEventListener("click", () => {
    let numberOfSquares = prompt("Put in a number from 1 to 100!");
    //fix conditional: if input != an int please try again
    if (numberOfSquares == "" || numberOfSquares == null || numberOfSquares < 1 || numberOfSquares > 100) {
        alert("Please try again");
    }
});