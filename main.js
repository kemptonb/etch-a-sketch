//container
const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

//row
//const container = document.createElement('div');
//container.classList.add('container');
//document.body.appendChild(container);


//let e = document.body;
for (let i = 0; i < 256; i++) {
    const row = document.createElement('div');
    row.className = "row-div";
    container.appendChild(row);
}
