const wrapper = document.querySelector(".wrapper");
const generateBtn = wrapper.querySelector(".form button");
const qrImg = wrapper.querySelector(".qr-code img");
const qrInput = wrapper.querySelector(".form input");

generateBtn.addEventListener("click", () => {
  let qrVal = qrInput.value;
  if (!qrVal) return; // If the input is empty, return from here

  generateBtn.innerHTML = "Generating QR Code..."; // While loading this text will appear

  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrVal}`; // Update qr-code with user Input

  qrImg.addEventListener("load", () => {   // Once `QR Code image` loaded then add active class in wrapper
    wrapper.classList.add("active");
    generateBtn.innerHTML = "Generate QR Code"; // Change the text with previous stage
  });
});

qrInput.addEventListener("keyup", () => { // Remove the active class from wrapper if the input field is empty
  if (!qrInput.value) {
    wrapper.classList.remove("active");
  }
});
