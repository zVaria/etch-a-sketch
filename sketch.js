// container element for etcher
const etchContainer = document.querySelector('.container')

/** 
 * Default rows function, adding to make them dynamic later
 * */
for(i = 0; i < 16; i++) {
    const col = document.createElement('div');
    for(j = 0; j < 16; j++) {
        const row = document.createElement('div');
        etchContainer.appendChild(row).className = 'cell'; 
    }
    etchContainer.appendChild(col).className = 'cell';
}

const cell = document.querySelectorAll('.cell');

/** 
 * Highlighting a selected tile & clicking if desired
 * */ 
cell.forEach(cell => cell.addEventListener('mouseover', (e) => {
    if(cell.style.backgroundColor === 'black') 
        return;   
    cell.style.backgroundColor = 'gray';
    clickTile(cell)
    mouseHeldDown(e);
    leavingTile(cell);
}));

/**
 * If tile has not been clicked return tile to white color
 * @param cell - cell to be checked
 */
function leavingTile(cell) {
    cell.addEventListener('mouseout', (e) => {
        if(e.target.style.backgroundColor === 'black') return;
        e.target.style.backgroundColor = 'white'
    })
}

/**
 * Filling the tiles that are clicked
 * @param cell - cell to be clicked
 */ 
function clickTile(cell) {
    cell.addEventListener('mousedown', () => {
        cell.style.backgroundColor = 'black';
    });
}

/**
 * while mouse is held down fill all cells with selected color
 * @param e - mousedown event to check for
 */
function mouseHeldDown(e) {
    if(e.buttons === 1) {
        e.target.style.backgroundColor = 'black';
    }
}

function reGrid() {
    let size = prompt('Enter new grid size');
    parseInt(size)
    for(i = 0; i < size; i++) {
        const col = document.createElement('div');
        for(j = 0; j < size; j++) {
            const row = document.createElement('div');
            etchContainer.appendChild(row).className = 'cell'; 
        }
        etchContainer.appendChild(col).className = 'cell';
    }
}