const h2 = document.createElement("h2");
const button = document.querySelector("button");
const input = document.querySelector("input");
const content = document.querySelector(".content");

button.addEventListener("click", () => {
    let number = parseInt(document.querySelector(".type").value);
    if (number < 0) {
        h2.innerText = `Factorial doesn't exist for ${number}`;
    } else if (number === 0) {
        h2.innerText = `Factorial for ${number} is 1`
    } else {
        let fact = number;
        for (let i = fact - 1; i > 0; i--) {
            fact *= i;
        }
        h2.innerText = `Factorial is ${fact}`;
    }
    content.appendChild(h2);
})

input.addEventListener("change", () => {
    let number = parseInt(document.querySelector(".type").value);
    button.addEventListener("click", () => {
        if (number < 0) {
            h2.innerText = `Factorial doesn't exist for ${number}`;
        } else if (number === 0) {
            h2.innerText = `Factorial of ${number} is 1`
        } else {
            let fact = number;
            for (let i = fact - 1; i > 0; i--) {
                fact *= i;
            }
            h2.innerText = `Factorial is ${fact}`;
        }
        content.appendChild(h2);
    })
})


