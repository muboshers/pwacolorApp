let colorInput = document.querySelector("#main___colorInp");
let colorText = document.getElementById("main__disabledInput");
let changeColorButton = document.getElementById("changeColorBtn");
let copyColorButton = document.getElementById("copyColorCodeBtn");
let copyColorInfo = document.getElementById("colorInfo");

function changeColor() {
  document.body.style.backgroundColor = colorInput.value;
  changeColorValue();
}

function changeColorValue() {
  colorText.value = colorInput.value;
}

function copyColor() {
  navigator.clipboard.writeText(colorInput.value).then(() => {
    copyColorInfo.innerText = ` Copied ${colorInput.value}`;
  });
}

changeColorButton.addEventListener("click", changeColor);
copyColorButton.addEventListener("click", copyColor);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/serviceWorker.js");
  });
}
