const container = document.querySelector('.container');
const cellInput = document.querySelector('#cells');
const resetButton = document.querySelector('.reset-btn');
const colorPicker = document.querySelector('.color-picker');

let width = 800;
let height = 800;
let gap = 1;
let color = '#0000FF';

const hexCode = '0123456789ABCDEF';

container.style.height = height + 'px';
container.style.width = width + 'px';
container.style.gap = gap + 'px';

resetButton.addEventListener('click', redrawGrid);

colorPicker.addEventListener('click', (event) => {
    let target = event.target;

    console.log(target);
    console.log(target.className)
    if (target.className == 'color-btn') {
        console.log('Changing color to: ' + target.style.backgroundColor);
        color = target.style.backgroundColor;
    }
});

function redrawGrid() {
    let side = cellInput.value;
    cellInput.value = '';

    if(Number.isNaN(side) || side == ''){
        alert('Please enter a number!');
    } else if (side < 1) {
        alert('That is too small!');
    } else if (side > 100) {
        alert('That is too big!');
    } else {
        container.textContent = '';

        for (let i = 0; i < side * side; i++){
            let square = document.createElement('div');
            square.style.backgroundColor = "gray";
            square.style.width = ((width - (side * gap)) / side) + 'px';
            square.style.height = ((width - (side * gap)) / side) + 'px';
            // square.style.border = '1px solid black';
            square.addEventListener('mouseover', () => {
                // color = '#'
                // for (let i = 0; i < 6; i++)
                //     color += hexCode[(Math.floor(Math.random() * 16))];
                square.style.backgroundColor = color;
            });
            container.append(square);
        }
    }
}