const colors = ["green", "red", "rgba(133,122,200)", "#f15025","purple","aqua","pink"];
const button = document.getElementById("btn");
const color = document.querySelector(".color");
console.log(button);
button.addEventListener('click',()=>{
    const randomNumber = generateRandomNumbers();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function generateRandomNumbers(){
    return Math.floor(Math.random()*colors.length);
}