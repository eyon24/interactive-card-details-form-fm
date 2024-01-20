const form = document.getElementById("form");
const cardName = document.getElementById("cardName");
const cardNumber = document.getElementById("cardNumber");
const mm = document.getElementById("mm");
const yy = document.getElementById("yy");
const cvc = document.getElementById("cvc");

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
    const formattedValue = cc_format(e.target.value);
    document.getElementById("card-cardNumber").textContent = formattedValue;
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

function validateCC(CC) {
  const regex = new RegExp("[0-9]{16}");
  return regex.test(CC);
}

function cc_format(value) {
  var v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  var matches = v.match(/\d{4,16}/g);
  var match = (matches && matches[0]) || "";
  var parts = [];

  for (i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
}

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
};

const validate = () => {
  const nameValue = cardName.value;
  const cardNumberValue = cardNumber.value;
  //   const mm = cardNumber.value;
  //   const yy = cardNumber.value;
  //   const cvc = cardNumber.value;

  if (nameValue === "" || nameValue === null) {
    setError(cardName, "Please Enter a Name.");
  }

  if (cardNumberValue.contains("[a-z,A-Z]")) {
  }

  return;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
});
