const keys = [
    "a",
    "d",
    "h",
    "r",
    "k",
    "c",
    "b",
    "p",
    "q",
    "n",
]

let currentKeyIndex = Math.floor(Math.random() * keys.length);

const text = document.getElementById("text")
const key = document.getElementById("key")
key.textContent = keys[currentKeyIndex]

//  if (!keys.includes(pressedKey)) {
//     layoutHint.classList.add("visible");
//     return; // виходимо, щоб не показувати PNotify
//   } else {
//     layoutHint.classList.remove("visible");
//   }

  
document.addEventListener("keydown", (event) => {
    if(event.key === keys[currentKeyIndex]) {
        PNotify.success({ 
            text: "Правильно!"
        })
        currentKeyIndex = Math.floor(Math.random() * keys.length);
        key.textContent = keys[currentKeyIndex]
    } else {
        PNotify.error({ 
            text: "Неправильна клавіша!"
        })
    }
})

const newGameButton = document.getElementById("new__game")
newGameButton.addEventListener("click", () => {
    currentKeyIndex = Math.floor(Math.random() * keys.length);
    key.textContent = keys[currentKeyIndex]
})


document.addEventListener('keypress', e => e.preventDefault());