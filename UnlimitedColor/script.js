
const generateColor = function(){
let r = Math.floor(Math.random()*100)
let g = Math.floor(Math.random()*100)
let b = Math.floor(Math.random()*100)
let colorcode = `RGB(${r},${g},${b})`
  return colorcode;
}



const setColor = function(color){
   const body = document.querySelector('body')
   body.setAttribute("style",`background-color:${color}`)
}

let intervalId;
let changeColor = function(){
  intervalId = setInterval(() => {
  let color = generateColor();
  setColor(color);
}, 2000);}

const stopChangeColor  = function(){
clearInterval(intervalId);

} 

document.querySelector('#start').addEventListener('click', changeColor)

document.querySelector('#stop').addEventListener('click',stopChangeColor);

