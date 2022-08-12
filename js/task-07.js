//Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
// і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
//В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.


const text = document.getElementById("text");

const fontSizeControl = document.getElementById("font-size-control");
// console.log(fontSizeControl)

fontSizeControl.addEventListener("input", (event) => {
    const size = fontSizeControl.value;
    text.style.fontSize = size + "px";
});

