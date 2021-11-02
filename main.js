//Header
const head = document.createElement('h1');
head.textContent = "Etch-a-Sketch";
document.body.appendChild(head);

//Container
const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

//Create Div
createGrid();

//Reset background text
const inst = document.createElement('h3');
inst.textContent = "CLICK ANYWHERE TO RESET";
document.body.appendChild(inst);

//Change grid instructions
const inst2 = document.createElement('h3');
inst2.textContent = "DOUBLE-CLICK TO CHANGE GRID SIZE";
document.body.appendChild(inst2);


const reset = document;

reset.addEventListener("click", () => {
    document.querySelectorAll('.write').forEach(item => {
        item.style.cssText = "background-color: white;"
    })
});

//Double click to change grid size
const changeGrid = document;

reset.addEventListener("dblclick", () => {
    //remove node children
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    //Add new grid
    calculateGrid();
});

//Create grid function
function createGrid() {
    for (let i = 0; i < 256; i++) {
        const row = document.createElement('div');
        row.classList.add("row-div");
        row.classList.add("write");
        container.appendChild(row);
    }
    markGrid();
}

//Change grid function
function calculateGrid() {
    let gridWidth = prompt("Enter grid width:");
    if (gridWidth > 100){
        gridWidth = 100;
    } else if (gridWidth < 0) {
        gridWidth = prompt("Invalid Answer. Enter grid width:");
    }

    console.log(gridWidth);
    let gridWidth2 = gridWidth * gridWidth;
    for (let i = 0; i < gridWidth2; i++) {
        let toCss = `grid-template-columns: repeat(${gridWidth}, 1fr);`
        const row = document.createElement('div');
        row.classList.add("row-div");
        row.classList.add("write");
        container.style.cssText = toCss;
        container.appendChild(row);
    }
    markGrid();

    function gridWidthMax(){
        
    }
}

//Hover to mark grid function
function markGrid(){
document.querySelectorAll('.write').forEach(item => {
    item.addEventListener('mouseover', event => {
        item.style.cssText = "background-color: black;"
    })
});
}