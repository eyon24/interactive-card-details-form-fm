const form = document.getElementById("form");
const name_input = document.querySelector(".name_input");
const name_error = document.getElementById("n-error");
const card_input = document.querySelector(".card_input");
const card_error = document.getElementById("cn-error");
const mm_input = document.querySelector(".exp-mm");
const mm_error = document.getElementById("mm-error");
const yy_input = document.querySelector(".exp-yy");
const yy_error = document.getElementById("yy-error");
const cvc_input = document.querySelector(".cvc-inp");
const cvc_error = document.getElementById("cvc-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
});

form.elements["nameInput"].addEventListener("keyup", function (e) {
  if (e.target.value === "") {
    document.getElementById("name").textContent = "John Appleseed";
  } else {
    document.getElementById("name").textContent = e.target.value;
  }
});

form.elements["cardNumber"].addEventListener("keyup", function (e) {
  if (e.target.value === "") {
    document.getElementById("cardNumber").textContent = "0000 0000 0000 0000";
  } else {
    const formattedValue = cc_format(e.target.value);
    document.getElementById("cardNumber").textContent = formattedValue;
  }
});

form.elements["exp-mm"].addEventListener("keyup", function (e) {
  if (e.target.value === "") {
    document.getElementById("mm").textContent = "00";
  } else {
    document.getElementById("mm").textContent = e.target.value;
  }
});

form.elements["exp-yy"].addEventListener("keyup", function (e) {
  if (e.target.value === "") {
    document.getElementById("yy").textContent = "00";
  } else {
    document.getElementById("yy").textContent = e.target.value;
  }
});

form.elements["cvc-inp"].addEventListener("keyup", function (e) {
  if (e.target.value === "") {
    document.getElementById("cvc").textContent = "000";
  } else {
    document.getElementById("cvc").textContent = e.target.value;
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

function validate() {
  // console.log(document.myForm.name.value);
  if (document.myForm.nameInput.value === "") {
    console.log("here");
    name_error.textContent = "Please Enter Your Name";
  }
}
