const button = document.querySelector(".change-color");
// console.log(button)

const colorBody = document.querySelector(".color");
// console.log(colorBody)

const body = document.querySelector('body')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener('click', (event) => {
  // console.log('зміна кольору')
  let color = getRandomHexColor(); // визначити колір
  body.style.backgroundColor = color; // змінити колір
  colorBody.textContent = color; // записати колір
})