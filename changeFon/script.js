let block1 = document.getElementById('block1');
let block2 = document.getElementById('block2');
let block3 = document.getElementById('block3');
let block4 = document.getElementById('block4');

const colors = ['blue', 'red', 'yellow', 'green', 'grey', 'black', 'white', 'purple'];


function changeColor() {

const random1 = Math.floor(Math.random() * colors.length);    
const random2 = Math.floor(Math.random() * colors.length);
const random3 = Math.floor(Math.random() * colors.length);
const random4 = Math.floor(Math.random() * colors.length);

block1.addEventListener("click", () => {
    block1.style.backgroundColor = colors[random1]
});
block2.addEventListener("click", () => {
    block2.style.backgroundColor = colors[random2]
});

block3.addEventListener("click", () => {
    block3.style.backgroundColor = colors[random3]
});

block4.addEventListener("click", () => {
    block4.style.backgroundColor = colors[random4]
});}
