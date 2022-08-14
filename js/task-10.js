function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumber = document.querySelector('#controls>input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes')


const createBoxes = amount => {
  const allElements = []
  
  for (let i = 0; i < amount; i += 1) { // додаєм div
    const div = document.createElement('div')
    div.style.width = `${30 + 10 * i}px`
    div.style.height = `${30 + 10 * i}px`
    div.style.background = getRandomHexColor();
    allElements.push(div);
  };
  return allElements;
}

const destroyBoxes = () => { //очистили 
  boxes.innerHTML = '';
}

buttonCreate.addEventListener('click', () => {// подія додавання
  let numBox = createBoxes(inputNumber.value)
  boxes.append(...numBox)  
})

buttonDestroy.addEventListener('click', () => {
  destroyBoxes.call()
})

