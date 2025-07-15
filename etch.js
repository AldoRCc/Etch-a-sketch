let grid = document.createElement("div");
let indicator = document.createElement("div");
let num = 16;

grid.className = "container";
indicator.className = "indicator";
indicator.textContent = "Current grid size is : " + num + "x" + num

document.body.appendChild(grid);
document.body.insertBefore(indicator,grid);

//choose grid size
let gridSize = document.createElement("button");
gridSize.className = "size"
gridSize.textContent = "Change grid size."

gridSize.addEventListener("click", () =>{
    num = prompt("Choose grid size");
    if (num > 0 && num < 101){
        grid.innerHTML = "";
        gridCreate();
        indicator.textContent = "Current grid size is : " + num + "x" + num
    }
    else{
        alert("error");
    }
    let colorChange = document.querySelectorAll(".cell")
    Array.from(colorChange).forEach(element =>{
        let opacity = 0;
        element.addEventListener("mouseenter", () =>{
            let randomRgb = 255;
            opacity = Math.min(opacity + 0.1, 1);
            element.setAttribute("style", "background-color: rgba(" + Math.floor(randomRgb*Math.random()) + "," + Math.floor(randomRgb*Math.random()) + "," + Math.floor(randomRgb*Math.random()) + "," + opacity + ")")
        })
    })
})
document.body.insertBefore(gridSize, grid)

//create multiple rows and cells inside container;
function gridCreate(){for (i = 0; i < num; i++){
    rowAppend();
}};

gridCreate();

//create rows and cells
function rowAppend(){
    let row = document.createElement("div");
    row.className = "row";
    grid.appendChild(row);
    for (j = 0; j < num; j++){
        let cell = document.createElement("div");
        cell.className = "cell";
        row.appendChild(cell);}
}

//change color randomly
let colorChange = document.querySelectorAll(".cell")
let randomColor = Array.from(colorChange).forEach(element =>{
    let opacity = 0;
    element.addEventListener("mouseenter", () =>{
        let randomRgb = 255;
        opacity = Math.min(opacity + 0.1, 1);
        element.setAttribute("style", "background-color: rgba(" + Math.floor(randomRgb*Math.random()) + "," + Math.floor(randomRgb*Math.random()) + "," + Math.floor(randomRgb*Math.random()) + "," + opacity + ")")
    })
})
