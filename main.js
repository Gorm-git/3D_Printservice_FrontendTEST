

window.addEventListener("load", start);

function start() {
  activateEventListeners();

  console.log("Hello Team10");
}

function activateEventListeners() {
  document.querySelector("#faq-link").addEventListener("click", showDialogFaq);
  document.querySelector("#handelsbetingelser-link").addEventListener("click", showDialogHandelsbetingelser);
  document.querySelector("#datapolitik-link").addEventListener("click", showDialogDatapolitik);
}

function showDialogFaq() {
  document.querySelector("#dialog-faq").showModal();
}

function showDialogHandelsbetingelser() {
  document.querySelector("#dialog-handelsbetingelser").showModal();
}

function showDialogDatapolitik() {
  document.querySelector("#dialog-datapolitik").showModal();
}