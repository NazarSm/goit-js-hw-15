const boxes = document.querySelector('div#boxes');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const inputNumber = document.querySelector('input[type="number"]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let defaultWidth = 30;
  let defaultHeight = 30;

  let newDivs = [];

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = defaultWidth + 'px';
    div.style.height = defaultHeight + 'px';

    newDivs.push(div);

    defaultWidth += 10;
    defaultHeight += 10;
  }

  inputNumber.value = '';

  boxes.append(...newDivs);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

const handleClickCreate = () => {
  createBoxes(inputNumber.value);
};

createBtn.addEventListener('click', handleClickCreate);
destroyBtn.addEventListener('click', destroyBoxes);

