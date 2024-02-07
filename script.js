body = document.querySelector("body");
container = document.querySelector(".container");
const containerWidth = 960;
let x;
button = document.querySelector("button");
button.addEventListener("click", (e) => {
  container.replaceChildren();
  x = prompt("How may squares per side of the grid?");
  const squareSize = containerWidth / x;
  for (i = 0; i < x; i++) {
    row = document.createElement("div");
    row.classList.add("row");
    for (j = 0; j < x; j++) {
      square = document.createElement("div");
      square.classList.add("square");
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;

      square.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "blue";
      });
      row.appendChild(square);
      container.appendChild(row);
    }
  }
});
