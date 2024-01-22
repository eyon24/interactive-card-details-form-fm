const infoContainer = document.getElementById("info-component");
const confirmation = document.getElementById("confirmation");
const form = document.getElementById("form");
const cardName = document.getElementById("cardName");
const cardNumber = document.getElementById("cardNumber");
const mm = document.getElementById("mm");
const yy = document.getElementById("yy");
const cvc = document.getElementById("cvc");
const confirmBtn = document.getElementById("confirmBtn");
const continueBtn = document.getElementById("continueBtn");

form.elements["cardName"].addEventListener("keyup", function (e) {
  if (e.target.value === "") {
    document.getElementById("card-name").textContent = "John Appleseed";
  } else {
    document.getElementById("card-name").textContent = e.target.value;
  }
});

form.elements["cardNumber"].addEventListener("keyup", function (e) {
  if (e.target.value === "") {
    document.getElementById("card-cardNumber").textContent =
      "0000 0000 0000 0000";
  } else {
    const formatted = e.target.value.match(/.{1,4}/g);
    document.getElementById("card-cardNumber").textContent =
      formatted.join(" ");
  }
});

form.elements["mm"].addEventListener("keyup", function (e) {
  if (e.target.value === "") {
    document.getElementById("card-mm").textContent = "00";
  } else {
    document.getElementById("card-mm").textContent = e.target.value;
  }
});

form.elements["yy"].addEventListener("keyup", function (e) {
  if (e.target.value === "") {
    document.getElementById("card-yy").textContent = "00";
  } else {
    document.getElementById("card-yy").textContent = e.target.value;
  }
});

form.elements["cvc"].addEventListener("keyup", function (e) {
  if (e.target.value === "") {
    document.getElementById("card-cvc").textContent = "000";
  } else {
    document.getElementById("card-cvc").textContent = e.target.value;
  }
});

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.remove("error");
};

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
};

const validate = (e) => {
  var nameValue = cardName.value;
  var cardNumberValue = cardNumber.value;
  var mmValue = mm.value;
  var yyValue = yy.value;
  var cvcValue = cvc.value;
  var regExp = new RegExp(/[a-zA-Z-,]/g);
  var valid = true;

  // Validate Name
  if (nameValue === "" || nameValue === null) {
    setError(cardName, "Please Enter a Name");
    valid = false;
  } else {
    setSuccess(cardName);
  }

  // Validate Card Number
  if (cardNumberValue === "" || cardNumberValue === null) {
    setError(cardNumber, "Please Enter a Card Number");
    valid = false;
  } else if (cardNumberValue.length < 16) {
    setError(cardNumber, "Incorrect Card Number");
    valid = false;
  } else if (regExp.test(cardNumberValue)) {
    setError(cardNumber, "Wrong Format, Numbers Only");
    valid = false;
  } else {
    setSuccess(cardNumber);
  }

  //Validate MM and YY and CVC
  if (mmValue === "") {
    setError(mm, "Can't Be Blank");
    valid = false;
  } else if (mmValue.length < 2) {
    setError(mm, "Wrong Format");
    valid = false;
  } else if (regExp.test(mmValue)) {
    setError(mm, "Numbers Only");
    valid = false;
  } else if (parseInt(mmValue) > 12 || parseInt(mmValue) < 1) {
    setError(mm, "Check Date");
    valid = false;
  } else {
    setSuccess(mm);
  }

  if (yyValue === "") {
    setError(yy, "Can't Be Blank");
    valid = false;
  } else if (yyValue.length < 2) {
    setError(yy, "Wrong Format");
    valid = false;
  } else if (regExp.test(yyValue)) {
    setError(yy, "Numbers Only");
    valid = false;
  } else if (parseInt(yyValue) < 1) {
    setError(yy, "Check Date");
    valid = false;
  } else {
    setSuccess(yy);
  }

  if (cvcValue === "") {
    setError(cvc, "Can't Be Blank");
    valid = false;
  } else if (cvcValue.length < 3) {
    setError(cvc, "Wrong Format");
    valid = false;
  } else if (regExp.test(cvcValue)) {
    setError(cvc, "Numbers Only");
    valid = false;
  } else {
    setSuccess(cvc);
  }

  if (valid) {
    infoContainer.classList.add("hide");
    confirmBtn.classList.add("hide");

    confirmation.classList.remove("hide");
  }
};

continueBtn.addEventListener("click", () => {
  // continueBtn.classList.add("hide");
  confirmation.classList.add("hide");

  infoContainer.classList.remove("hide");
  confirmBtn.classList.remove("hide");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
});
