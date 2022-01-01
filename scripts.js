//script file for sketchpad app

//store sketchpad container in variable
let sketchPadCont = document.querySelector("#sketchPadCont");

//TODO: add toggle so user can set sketch area

//define function to populate sketch area with the right number of divs
function populateGrid(gridSize) {

    //set number of columns for sketchpad's grid template
    sketchPadCont.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`

    //create divs to populate sketchpad then append each one to sketchpad container
    for (let i = 0; i < (gridSize ** 2); i++){
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        sketchPadCont.appendChild(pixel);
    }

    //add mouseover event listener to all pixel divs that changes color
    document.querySelectorAll('.pixel').forEach(element => {element.addEventListener('mouseover', changeColor)});
}

//function that changes color of div that is passed to it from mouseover event
function changeColor(e){
    e.target.style.backgroundColor = document.getElementById('colorSelector').value;
}

function addButtonListeners(){
    let clearButton = document.querySelector('.clearButton');
    clearButton.addEventListener('click', clearPixels);
}

//function that clears pixels back to white
function clearPixels(){
    document.querySelectorAll('.pixel').forEach(element => element.style.backgroundColor = 'white');
}

populateGrid(32);
addButtonListeners();


//give abiltiy to change hover color
//give abiltiy to customize number of divs in sketchpad
