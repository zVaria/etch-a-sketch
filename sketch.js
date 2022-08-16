// container element for etcher
const etchContainer = document.querySelector('.container')

/** 
 * Default rows function
 * */
for(i = 0; i < 16*16; i++) {
    const grid = document.createElement('div');
    etchContainer.appendChild(grid).className = 'cell';
    highlight(grid);
}

/**
 * Adds a highlight element and also adds all the click elements
 * @param toBeHighlighted - item to be highlighted
 */
function highlight(toBeHighlighted) {
    toBeHighlighted.addEventListener('mouseover', (e) => {
        if(toBeHighlighted.style.backgroundColor === 'black') 
            return;   
        toBeHighlighted.style.backgroundColor = 'gray';

        clickTile(toBeHighlighted)
        mouseHeldDown(e);
        leavingTile(toBeHighlighted);
    })
}

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

/**
 * ReGrid the grid after the user inputs a size
 */
function reGrid() {
    let size = prompt('Enter new grid size');
    parseInt(size);
    
    etchContainer.style.cssText = 'grid-template-columns: repeat('+size+', 1fr); grid-template-rows: repeat('+size+',1fr)';
    etchContainer.innerText = '';

    for(i = 0; i < size*size; i++) {
        const grid = document.createElement('div');
        etchContainer.appendChild(grid).className = 'cell';
        highlight(grid);
    }
}


