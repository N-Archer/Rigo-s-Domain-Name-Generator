/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let excuse =
    who[rIndex(who)] +
    action[rIndex(action)] +
    what[rIndex(what)] +
    when[rIndex(when)];
  document.querySelector("#excuse").innerHTML = excuse;
};

function rIndex(array) {
  return Math.floor(Math.random() * array.length);
}

let who = ["The dog ", "My grandma ", "His turtle ", "My bird "];
let action = ["ate ", "peed ", "crushed ", "broke "];
let what = ["my homework ", "the keys ", "the car "];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
