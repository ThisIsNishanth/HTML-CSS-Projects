const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const p1Total = document.querySelector('#p1Score');
const p2Total = document.querySelector('#p2Score');
const playTo = document.querySelector('#maxValues');
let p1Score = 0;
let p2Score = 0;
let winningScore =  3;
let isGameOver = false;


playTo.addEventListener('change', () => {
    winningScore = parseInt(playTo.value);
    reset();
})

p1Button.addEventListener('click', () => {
    if (!isGameOver) {
        p1Score++;
        p1Total.textContent = p1Score;
        if (p1Score === winningScore) {
           isGameOver = true;
           p1Button.disabled = true;
           p2Button.disabled = true;
           p1Total.style.color = "green";
           p2Total.style.color = "red";
        }
    }
});

p2Button.addEventListener('click', () => {
    if (!isGameOver) {
        p2Score++;
        p2Total.textContent = p2Score;
        if (p2Score === winningScore) {
           isGameOver = true;
           p1Button.disabled = true;
           p2Button.disabled = true;
           p2Total.style.color = "green";
           p1Total.style.color = "red";
        }
    }
});

resetButton.addEventListener('click',reset);


function reset(){
    p1Score = 0;
    p2Score = 0;
    isGameOver = false;
    p1Button.disabled = false;
    p2Button.disabled = false;
    p1Total.textContent = p1Score;
    p2Total.textContent = p2Score;
    p1Total.style.color = 'black';
    p2Total.style.color = 'black';

}