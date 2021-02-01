//const { Capacitor } = require("@capacitor/core");

const forms = Array.from(document.querySelectorAll(".content"));
const resetBtn = document.getElementById("resetApp");
const isElectron = navigator.userAgent.indexOf("Electron") !== -1;
// const isAndroid = Capacitor.getPlatform() === "android";
// const isIos = Capacitor.getPlatform() === "ios";
const containers = Array.from(document.querySelectorAll(".js-container"));

//выключает текущий контейнер и включает следующий
function changeContainer() {
  for (let index = 0; index < containers.length; ++index) {
    if (containers[index].classList.contains("container-active")) {
      let newIndex = index + 1;
      // если контейнер последний, включает первый
      if (newIndex === containers.length) {
        newIndex = 0;
      }
      containers[index].classList.remove("container-active");
      containers[newIndex].classList.add("container-active");
      break;
    }
  }
}
//добавляет события на все формы
forms.forEach((form) => {
  //отправка формы и её обновление
  form.onsubmit = (event) => {
    const { target } = event;
    event.preventDefault();
    changeContainer();
    setTimeout(resetApp(event.srcElement), 500);
  };

  //блокировка и разблокировка кнопки
  form.addEventListener("input", (event) => {
    const { target } = event;
    const button = event.path[2].querySelector(".button");
    const { minLen } = target.dataset; //минимальное количество вводимых символов
    const { maxLen } = target.dataset; //максимальное количество вводимых символов
    const len = target.value.length;
    if (len >= minLen && len <= maxLen) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });
});

//очистка ввода и блокировка кнопки
function resetApp(resetForm) {
  resetForm.querySelector(".input").value = "";
  resetForm.querySelector(".button").disabled = true;
}

resetBtn.onclick = changeContainer;

if (isElectron) {
  document.body.classList.add("electron");
}
// if (isAndroid) {
//   document.body.classList.add("android");
// }
// if (isIos) {
//   document.body.classList.add("ios");
// }
