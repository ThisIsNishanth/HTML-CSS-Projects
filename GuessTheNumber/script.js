let maximumValue = document.querySelector("#maxValues").value;
let actualNumber = Math.floor(Math.random() * maximumValue);
let input = document.querySelector("input");
const submit = document.querySelector("#submit-button");
const content = document.querySelector(".card-content");
const h3 = document.createElement("h3");
const h4 = document.createElement("h4");
const checkbox = document.querySelector("#maxValues");

checkbox.addEventListener("change" , () => {
    maximumValue = document.querySelector("#maxValues").value;
    actualNumber = Math.floor(Math.random() * maximumValue);
})


let count = 0;

input.addEventListener("change", () => {
    inputValue = parseInt(input.value);
    submit.addEventListener("click", () => {
        if (inputValue === actualNumber) {
            h3.innerText = "Guessed it";
            content.append(h3);
            h4.innerText = "Reset the page to play it again"
            content.append(h4);
            return;
        } else {
            const frequency = document.querySelector("#freq");
            const noOfGuesses = document.querySelector("#no-of-guesses");
            if (count === 0) {
                frequency.innerText = '2 guesses';
                noOfGuesses.innerText = '2';
                count++;
            } else if (count != 0 && count <= 3) {
                frequency.innerText = '1 guess';
                noOfGuesses.innerText = '3';
                count++;
            } else {
                frequency.innerText = " 0 Guesses";
                noOfGuesses.innerText = 'over';
                input.value = null;
                h3.innerText = 'Reset the page to play the game again'
                content.append(h3);
                return;
            }
        }
    })
})









