// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(button => {
   button.addEventListener("click", (e) => {
       if (e.currentTarget.classList.contains("decrease")) {
           count--;
       } else if (e.currentTarget.classList.contains("increase")) {
          count++;
       } else {
           count = 0;
       }
       if (count > 0) {
           value.style.color = "green";
       } else if (count < 0) {
           value.style.color = "red";
       } else {
           value.style.color = "#222";
       }
       value.textContent = count;
   });
});