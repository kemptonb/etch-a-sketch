//Header
const head = document.createElement('h1');
head.textContent = "Etch-a-Sketch";
document.body.appendChild(head);

//Container
const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

//Create Div
for (let i = 0; i < 256; i++) {
    const row = document.createElement('div');
    row.classList.add("row-div");
    row.classList.add("write");
    container.appendChild(row);  
}

//Mark grid black on hover
document.querySelectorAll('.write').forEach(item => {
    item.addEventListener('mouseover', event => {
        item.style.cssText ="background-color: black;"
    })
  });


//Reset background color to white
 //const reset = document.querySelector(".container");
 const reset = document;

 reset.addEventListener("click", () => {
    document.querySelectorAll('.write').forEach(item => {
     item.style.cssText ="background-color: white;"
    })
 });

//Instructions
const inst = document.createElement('h3');
inst.textContent = "CLICK ANYWHERE TO RESET";
document.body.appendChild(inst);









