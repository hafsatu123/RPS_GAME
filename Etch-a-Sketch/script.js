const container = document.querySelector("#container");
const button = document.querySelector("#changeGrid");

function changeGrid(size) {
    container.innerHTML = "";

    const boxSize = 958 / size;

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {

            const boxes = document.createElement("div");

            boxes.style.width = `${boxSize}px`;
            boxes.style.height = `${boxSize}px;`

            boxes.addEventListener("mouseenter", () =>{
                boxes.style.backgroundColor = "pink";
            });

            container.appendChild(boxes);

        }
    }
}
changeGrid(16);

button.addEventListener("click", () => {
    let size = prompt("How many Squares per side?: ");

    size = Number(size);

    if (Number.isInteger(size) && size >= 1 && size <= 100) {
        changeGrid(size);
    } else {
        alert("Please, eneter a whole number between 1 and 100");
    }
})

