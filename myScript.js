const cardNumber = document.querySelector(".cardNumber");
const expMM = document.querySelector(".exp-mm");
const expYY = document.querySelector(".exp-yy");
const cvc = document.querySelector("cvc-inp");
const btnConfirm = document.querySelector(".confirm");
const btnContinue = document.querySelector(".continue");
const form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(validateCC("1111222233334444"));
});

form.addEventListener("change", handleChange);

function handleChange(e, id) {
  document.getElementById(id).textContent = e.target.value;
}

function validateCC(CC) {
  const regex = new RegExp("[0-9]{16}");
  return regex.test(CC);
}
