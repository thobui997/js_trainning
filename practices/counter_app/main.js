const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
const value = document.querySelector("#counter_value");
const reset = document.querySelector("#reset");

value.textContent = "0";

increase.addEventListener("click", function () {
  value.textContent = `${Number(value.textContent) + 1}`;
});

decrease.addEventListener("click", function () {
  value.textContent = `${Number(value.textContent) - 1}`;
});

reset.addEventListener("click", function () {
  value.textContent = "0";
});
