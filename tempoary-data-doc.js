const catalogueData = [
  {
    Id: 17,
    Title: "Gherkin Skyskraber",
    StandardSize: 18,
    StandardWeight: 40,
    ItemDescription:
      "Her har du muligheden for at få den verdenskendte Gherkin skyskraber til at pynte dit hjem",
    ImageLink:
      "https://img.thingiverse.com/cdn-cgi/image/fit=contain,quality=95,width=976,height=500/https://cdn.thingiverse.com/renders/78/ef/02/76/7a/Gherkin_Shell_display_large.jpg",
    Category: "Bygninger",
  },
  {
    Id: 18,
    Title: "Statue of Liberty",
    StandardSize: 15,
    StandardWeight: 166,
    ItemDescription:
      "Vil du også gerne have den kendte frihedsgudinde til at være en del af den hjemmelige hygge? Her har du muligheden",
    ImageLink:
      "https://img.thingiverse.com/cdn-cgi/image/fit=contain,quality=95,width=976,height=500/https://cdn.thingiverse.com/renders/f3/c5/de/5d/1e/6621de0c72320f5f4fc0ee3f9c47d450_display_large.jpg",
    Category: "Bygninger",
  },
  {
    Id: 19,
    Title: "Colosseum",
    StandardSize: 8,
    StandardWeight: 377,
    ItemDescription:
      "Savner du lidt romersk kultur i dagligdagen? Colosseum må være svaret",
    ImageLink:
      "https://img.thingiverse.com/cdn-cgi/image/fit=contain,quality=95,width=976,height=500/https://cdn.thingiverse.com/renders/e8/a0/bc/91/e6/colosseum_display_large.jpg",
    Category: "Bygninger",
  },
];

const stockData = [
  {
    Id: 20,
    Name: "Hård",
    Material: "ABS",
    Colour: "Hvid",
    GramInStock: 10000,
    MinAmountReached: {
      type: "Buffer",
      data: [48],
    },
    SalesPrize: 155,
  },
  {
    Id: 21,
    Name: "Elastisk",
    Material: "TPU",
    Colour: "Rød",
    GramInStock: 5000,
    MinAmountReached: {
      type: "Buffer",
      data: [48],
    },
    SalesPrize: 550,
  }
];

export {catalogueData, stockData}