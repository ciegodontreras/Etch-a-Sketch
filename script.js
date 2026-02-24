const container = document.querySelector('.container'); 

const grid = (columns, rows) => {
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    let totalBoxes = columns * rows; 
    for (let i = 1; i <= totalBoxes; i++) {
        let newBox = document.createElement('div');
        newBox.textContent = i; 
        newBox.className = `box${i}`; 
        newBox.style.border = '1px solid red'; 
        newBox.style.textAlign = 'center';  
        container.appendChild(newBox); 
    };
}

  
grid(16,16); 