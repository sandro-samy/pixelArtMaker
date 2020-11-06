// Select color input

// Select size input
const pixelCanvas  = document.querySelector('#pixelCanvas');
const colorPicker  = document.querySelector('#colorPicker');
const form  = document.querySelector('#sizePicker');
const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWidth');
// When size is submitted by the user, call makeGrid()
form.addEventListener('submit', e =>{
  pixelCanvas.innerHTML='';
  e.preventDefault();
  makeGrid();
})

pixelCanvas.addEventListener('click', e => {
  if( e.target.nodeName === 'TD'){
    e.target.style.backgroundColor = colorPicker.value;
  }
})
// nested loop to create the grid cells 
function makeGrid() {
  for(let i = 0;i < height.value ; i++){
    const row = pixelCanvas.insertRow(0);
    for(let j=0;j < width.value; j++){
      row.insertCell(0)
    }
  }
  // Your code goes here!
}
