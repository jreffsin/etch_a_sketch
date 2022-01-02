//script file for sketchpad app

//declare eraser as global variable for button handling
let eraser = false;

//define function to populate sketch area with the right number of 'pixels'
function populateGrid(gridSize) {

    //store sketchpad container in variable
    let sketchPadCont = document.querySelector("#sketchPadCont");

    //set number of columns for sketchpad's pixel grid
    sketchPadCont.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`

    //create divs to populate sketchpad then append each one to sketchpad container
    for (let i = 0; i < (gridSize ** 2); i++){
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        sketchPadCont.appendChild(pixel);
    }

    //add mouseover event listener to all pixel divs that changes pixel color
    document.querySelectorAll('.pixel').forEach(element => {element.addEventListener('mouseover', changeColor)});
}

//define function to add all event listeners
function addListeners(){
   
    //add clear button listener
    let clearButton = document.querySelector('.clearButton');
    clearButton.addEventListener('click', clearPixels);

    //add eraser buttoner listener
    let eraserButton = document.querySelector('.eraserButton');
    eraserButton.addEventListener('click', () => {
        eraser = true;
        eraserButton.setAttribute('style', 'background-color:rgb(142, 146, 152)')
        colorButton.setAttribute('style', 'background-color:lightgray')
    });

    //add color buttoner listener
    let colorButton = document.querySelector('.colorButton');
    colorButton.addEventListener('click', () => {
        eraser = false;
        colorButton.setAttribute('style', 'background-color:rgb(142, 146, 152)')
        eraserButton.setAttribute('style', 'background-color:lightgray')
    });

    //add slider display value listener
    let slider = document.getElementById('slider');
    let sliderDisplayVal = document.getElementById('sliderVal');
    slider.addEventListener('input', () => {
        sliderDisplayVal.innerText = `${slider.value} x ${slider.value}`;
    })

    //add slider change value listener
    slider.addEventListener('change', () => {
        document.querySelectorAll('.pixel').forEach(element => element.remove());
        populateGrid(slider.value);
    })

    //add color selecter change listener
    let colorSelector = document.getElementById('colorSelector');
    colorSelector.addEventListener('change', () => {
        eraser = false;
        colorButton.setAttribute('style', 'background-color:rgb(142, 146, 152)')
        eraserButton.setAttribute('style', 'background-color:lightgray')
    })

}

//define function that changes color of div that is passed to it from mouseover event
function changeColor(e){
    //if eraser button is pressed
    if (eraser){
    e.target.style.backgroundColor = 'white';
    } 
    //else if eraser button is not pressed
    else {
        e.target.style.backgroundColor = document.getElementById('colorSelector').value;
    }
}

//define function that clears pixels back to white
function clearPixels(){
    document.querySelectorAll('.pixel').forEach(element => element.style.backgroundColor = 'white');

    //if eraser mode is enabled, switch back to color mode
    if (eraser){
    eraser = false;
    let colorButton = document.querySelector('.colorButton');
    let eraserButton = document.querySelector('.eraserButton');
    colorButton.setAttribute('style', 'background-color:rgb(142, 146, 152)')
    eraserButton.setAttribute('style', 'background-color:lightgray')
    }
}


populateGrid(32);
addListeners();
