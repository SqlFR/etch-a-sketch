const body = document.querySelector('body');
const container = document.createElement('div');
const button = document.createElement('button');

container.id = "container";

body.appendChild(button); // add button
body.appendChild(container); // add contain squares

// create grid
function createGrid(squareNumberPerSide) {
    const dimensionSquare = 600 / squareNumberPerSide;
    console.log(dimensionSquare);
    for(let i = 0; i < (squareNumberPerSide * squareNumberPerSide); i++) {
        const square = document.createElement('div');    
        container.appendChild(square);
        square.className = "square";
        square.style.height = `${dimensionSquare}px`;
        square.style.width = `${dimensionSquare}px`;
    }
    hoverEffect();
}

// config button
let inputUserForSquareNumber = '';
button.textContent = 'Create a new grid';

function generateNewGrid() {
    inputUserForSquareNumber = parseInt(prompt('How many square per side ?'));
    while(inputUserForSquareNumber > 100 || Number.isNaN(inputUserForSquareNumber)) {
        inputUserForSquareNumber = prompt('Enter a number. (100 max)');
    }
    container.replaceChildren('');
    createGrid(inputUserForSquareNumber);
}
button.addEventListener('click', generateNewGrid);

// Hover effect when mouse passes over squares
function hoverEffect() {
    const squares = document.querySelectorAll('.square');

    function changeColorSquare() {
        this.style.backgroundColor = 'grey';
    }

    squares.forEach(square => square.addEventListener('mouseenter', changeColorSquare));
}

createGrid(16);
