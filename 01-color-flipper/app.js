const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const mainContainer = document.querySelector('.main-container');
const colors = ["red", "green", "blue", "rgb(255, 255, 0)", "#f15025"];

btn.addEventListener("click", () => {
    const randomNumber = getRandomNumber();
    color.textContent = colors[randomNumber]
    color.style.color = colors[randomNumber]
    mainContainer.style.backgroundColor = colors[randomNumber]
    console.log(randomNumber)
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}