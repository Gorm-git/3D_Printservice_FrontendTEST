"use strict";

import { getCatalogueData, getStockData } from "./fetch-data.js";
import { catalogueData, stockData } from "./tempoary-data-doc.js";

// Modules for testing af klasse opbygning...
import { createCatalogClasses } from "./classes-test-doc.js";

window.addEventListener("load", startApp);

function startApp() {
  console.log("Hello Team10");
  // Tester om man kan hente data - Lukas
  getAllData();
}

// Dette er en test funktion der skal se om vi kan hente data:
async function getAllData() {
  // const stockData = await getStockData();
  // const productsData = await getCatalogueData();
  // console.log(stockData);
  // console.log(productsData);

  console.log(catalogueData);
  createCatalogClasses(catalogueData);
}

document.querySelector("#faq-link").addEventListener("click", showDialogFaq);
document
  .querySelector("#handelsbetingelser-link")
  .addEventListener("click", showDialogHandelsbetingelser);
document
  .querySelector("#datapolitik-link")
  .addEventListener("click", showDialogDatapolitik);

function showDialogFaq() {
  document.querySelector("#dialog-faq").showModal();
}

function showDialogHandelsbetingelser() {
  document.querySelector("#dialog-handelsbetingelser").showModal();
}

function showDialogDatapolitik() {
  document.querySelector("#dialog-datapolitik").showModal();
}
