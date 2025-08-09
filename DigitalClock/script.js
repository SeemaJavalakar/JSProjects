const time = new Date();
const timeDiv = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  timeDiv.innerHTML = date.toLocaleTimeString();
}, 1000);
//timeDiv.innerHTML = time.getHours("hh")+ ":" +time.getMinutes("mm") +':' + time.getSeconds("ss")