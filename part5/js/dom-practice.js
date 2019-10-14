/*eslint-env browser*/

//STEP 1
function step1Listener() {
  window.alert("I have been clicked")
}

//STEP 2
let btn2 = window.document.getElementById("step-2-button")
btn2.onclick = function() {window.alert("I have been clicked")}

//STEP 3
let alertMe3 = () => window.alert("I have been clicked")

let btn3 = window.document.getElementById("step-3-button")
btn3.addEventListener("click", alertMe3)



//STEP 4
let btn4 = window.document.getElementById("step-4-button")
btn4.addEventListener("click", () => window.alert("I have been clicked"))

//STEP 5
window.document.addEventListener("DOMContentLoaded", init5, false)

function init5() {
  let btn5 = window.document.getElementById("step-5-button")
  btn5.addEventListener("click", () => window.alert("I have been clicked"))
}
