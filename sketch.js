const etchContainer = document.querySelector('.container')

// Default rows function, adding to make them dynamic later
for(i = 0; i < 16; i++) {
    const col = document.createElement('div');
    for(j = 0; j < 16; j++) {
        const row = document.createElement('div');
        etchContainer.appendChild(row).className = 'cell'; 
    }
    etchContainer.appendChild(col).className = 'cell';
}

