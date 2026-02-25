const container = document.querySelector('.container'); 
const createGrid = document.querySelector('.createGrid'); 
const columnNum = document.getElementById('columns'); 
const rowNum = document.getElementById('rows'); 

const grid = (columns, rows) => {
    // container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    // container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    let totalBoxes = columns * rows; 
    for (let i = 1; i <= totalBoxes; i++) {
        let newBox = document.createElement('div');
        newBox.className = `box${i}`;
        newBox.className = 'boxes'  
        newBox.style.textAlign = 'center'; 
        newBox.style.flex = '1';
        newBox.style.minWidth = `calc(100% / ${columns})`;
        // newBox.style.height = `calc((100% / ${rows}) - 2px)`; 
        container.appendChild(newBox); 
    };
}

createGrid.addEventListener('click', () => {
    let columnValue = columnNum.value; 
    let rowValue = rowNum.value;
    grid(columnValue, rowValue); 
}); 
