// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
//Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = Number(document.querySelector("#value").textContent);
// console.log(counterValue)

let chislo = document.querySelector("#value");

const butDecrement = document.querySelector("#counter").firstElementChild;
const butIncement = document.querySelector("#counter").lastElementChild;

const butClick = () => {
    // console.log('Ура +1')
    counterValue += 1;
    chislo.innerHTML = counterValue;
}

butIncement.addEventListener("click", butClick);

const butNotClick = () => {
    // console.log('мінус')
    counterValue -= 1;
    chislo.innerHTML = counterValue;
}

butDecrement.addEventListener("click", butNotClick);
