const btnS = document.getElementById("btnS");
const btnE = document.getElementById("btnE");
const text = document.getElementById("text");

btnS.onclick = yes;
btnE.onclick = no;

var globals = {};
globals.t = () => {};

function yes() {
  globals.t = setInterval(() => {
    text.innerText = document.getElementById("tinput").value;
  }, 1000);
}

function no() {
  clearInterval(globals.t);
}
