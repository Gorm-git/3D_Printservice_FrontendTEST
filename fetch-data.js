const endpoint = "https://3dprintservice.azurewebsites.net/";

async function getCatalogueData() {
  const response = await fetch(`${endpoint}/products`);
  const catalogueData = await response.json();
  return catalogueData;
}

async function getStockData() {
  const response = await fetch(`${endpoint}/stock`);
  const stockData = await response.json();
  return stockData;
}

export { getCatalogueData, getStockData };
