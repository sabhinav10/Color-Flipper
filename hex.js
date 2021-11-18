const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener('click',()=>{
    
    let hexNumber ="#" ;
    for(let i=0; i<6; i++){
        const randomNumber = generateRandomNumbers()
        hexNumber += hex[randomNumber];
    }
    document.body.style.backgroundColor = hexNumber;
    color.textContent = hexNumber;
})
function generateRandomNumbers(){
    return Math.floor(Math.random()*hex.length);
}