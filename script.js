const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
let counter = document.querySelector(".password-length-input");

add.addEventListener("click", () => {
    if (counter.value >= 20) return;
  counter.value = parseInt(counter.value) + 1;
});

subtract.addEventListener("click", () => {
    if (counter.value <= 1) return;
  counter.value = parseInt(counter.value) - 1;
});
