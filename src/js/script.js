const form = document.getElementById("form");
const inputTicket = document.getElementById("inputTicket");
const resetBtn = document.getElementById("resetApp");
const isElectron = navigator.userAgent.indexOf("Electron") !== -1;

function changeContainer() {
  const containerActive = document.querySelector(
    ".js-container.container-active"
  );
  const containerInactive = document.querySelector(
    ".js-container:not(.container-active)"
  );

  containerActive.classList.remove("container-active");
  containerInactive.classList.add("container-active");
}

form.onsubmit = (event) => {
  event.preventDefault();
  console.log(event);
  changeContainer();
  setTimeout(resetApp, 500);
};

function resetApp() {
  inputTicket.value = "";
}

resetBtn.onclick = changeContainer;

if (isElectron) {
  document.body.classList.add("electron");
}
