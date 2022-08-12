//Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
// підставляє його поточне значення в span#name - output.Якщо інпут порожній,
//у спані повинен відображатися рядок "Anonymous"


const nameInput = document.querySelector("#name-input");
const nameOutPut = document.querySelector("#name-output");

nameInput.addEventListener('input', (event) => {
    nameOutPut.textContent = event.currentTarget.value;

    if (nameInput.value === "") {
        return nameOutPut.textContent = "Anonymous";
    }
})
