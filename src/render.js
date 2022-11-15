const btnS = document.getElementById("btnS");
const btnE = document.getElementById("btnE");
const text = document.getElementById("text");

const socket = new WebSocket("ws://localhost:1234");
socket.addEventListener("message", ({ data }) => {
  text.innerHTML = data;
});

btnS.onclick = yes;
btnE.onclick = no;

var globals = {};
globals.t = () => {};

function yes() {
  globals.t = setInterval(() => {
    const socket = new WebSocket("ws://localhost:1234");
    socket.addEventListener("message", ({ data }) => {
      text.innerHTML = data;
    });
  }, 500);
}

function no() {
  clearInterval(globals.t);
}
