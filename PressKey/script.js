const key = document.querySelector('#key');
const container = document.querySelector('#container');

window.addEventListener('keypress',function(e){
  key.innerHTML += `<div> <p>${e.key}</p>` ;
})