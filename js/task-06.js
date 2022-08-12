//Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
//перевіряє його вміст щодо правильної кількості введених символів.

//Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
//Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
//Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

//<input
    //   type="text"
    //   id="validation-input"
    //   data-length="6"
    //   placeholder="Please enter 6 symbols"
    // />

const inputText = document.querySelector("#validation-input");
// console.log(inputText.getAttribute("data-length"));

inputText.addEventListener('blur', inputBlur) 

function inputBlur() {
    // inputText.value = 'а нема';
    if (Number(inputText.value.length) === Number(inputText.dataset.length)) {
        inputText.classList.remove("invalid");
        inputText.classList.add('valid')
    } else {
        inputText.classList.remove("valid");
        inputText.classList.add("invalid");
    } 
}


