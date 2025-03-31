// script.js
let count = 0;

function clickEvent() {
  count++;
  console.log(count);
  document.getElementById("clickCount").textContent = "Click count: " + count;
  
  if (count % 2 === 0) {
  alert("Count is even: " + count);
  }
  }
  
  document.getElementById("myButton").onclick = clickEvent;