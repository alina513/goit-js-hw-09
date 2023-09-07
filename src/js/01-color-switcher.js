const start = document.querySelector('button[data-start]');
const stop = document.querySelector("button[data-stop]");
const body = document.querySelector("body");
start.addEventListener("click", onClickStart);
stop.addEventListener("click", onClickStop);
let timerId = null;


function onClickStart() {
start.disabled = true;
timerId = setInterval(() => {body.style.backgroundColor = getRandomHexColor()}, 1000); 
 return timerId};

function onClickStop() {
    clearInterval(timerId);
    start.disabled = false;

};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }




