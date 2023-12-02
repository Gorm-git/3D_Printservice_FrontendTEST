


// Denne funktion laver klasserne for vores katalog-vare
export function createCatalogClasses(dataList) {
  // Opret en tom liste så hvert objekt vi fetcher kan komme ind som en instans af en klasse
  const classList = [];

  // Loop på listen af vores fetchede data:
  for (const object of dataList) {
    // Hvert objekt i listen bliver nu lavet til en ny instans.
    const newInstance = new catalogueItem(object);

    // Enstansen bliver puttet i vores nye liste.
    classList.push(newInstance);
  }

  console.log(classList);
  callRenderMethod(classList);
}

// Note til os selv. Denne klasse skal vel kun rigtigt ses af Admin, som skal kunne opdatere dem... - Lukas

// Eksempel på en klasse.
class catalogueItem {
  // Klassens constructor tager vores fetchede-data-objekt som argument og sætter Klassens Atrributter lig Objektets properties.
  constructor(catalogueObject) {
    this.Id = catalogueObject.Id;
    this.Title = catalogueObject.Title;
    this.StandardSize = catalogueObject.StandardWeight;
    this.StandardWeight = catalogueObject.StandardSize;
    this.ItemDescription = catalogueObject.ItemDescription;
    this.ImageLink = catalogueObject.ImageLink;
    this.Category = catalogueObject.Category;
  }

  // I klassens render-metode bliver HTML'en til vores DOM lavet.
  render() {
    const catalogueHTML =
      /*html*/
      `
    <article>
    <img href=${this.ImageLink}>
    <h3>Produkt Navn: ${this.Title}</h3>
    <p>Kategori: ${this.Category}</p>
    <p>Standard Størrelse: ${this.StandardSize} cm</p>
    <p>Standard Vægt: ${this.StandardWeight} gram</p>
    <p>Produkt Beskrivelse: ${this.ItemDescription} </p>
    </article>
    `;

    return catalogueHTML;
  }
  // Vi skal have en metode til at kunne ændre i samtlige Attirbutter og opdatere databasen der efter - Lukas.
}

function callRenderMethod(listOfInstances) {
  for (const instance of listOfInstances) {
    const classHTML = instance.render();
    console.log(classHTML);
  }

  // her laver jeg en instance af en produkt-klasse, bare lige for at teste den.
  const produktObjekt = {
    // Attributterne fra det catalog-varen
    Catalogue_Id: "17",
    Title: "Gherkin Skyskraber",
    ItemDescription:
      "Her har du muligheden for at få den verdenskendte Gherkin skyskraber til at pynte dit hjem",
    ImageLink:
      "https://img.thingiverse.com/cdn-cgi/image/fit=contain,quality=95,width=976,height=500/https://cdn.thingiverse.com/renders/78/ef/02/76/7a/Gherkin_Shell_display_large.jpg",
    Category: "Bygninger",
    StandardSize: 18,
    StandardWeight: 40,
    Stock_Id: "21",
    ProductSize: 20,
  };
  // Her laves instansen...
  const productInstance = new product(produktObjekt);
  // Her kalder jeg render-metoden for produkt klassen for at se HTML'en som metoden returnere.
  console.log(productInstance.render());
}

// Produkt klassen skal (ned)arve fra catalogItem (og StockMaterial) klassen - derfor skal der skrives "extends"
class product extends catalogueItem {
  constructor(productObjekt) {
    // super - refferere til superklassen ...ER IKKE SIKKER PÅ PRÆCIS HVAD DER FOREGÅR DER - Lukas
    super(catalogueItem);
    // Attributterne fra det catalog-varen
    this.Catalogue_Id = productObjekt.Id;
    this.Title = productObjekt.Title;
    this.ItemDescription = productObjekt.ItemDescription;
    this.ImageLink = productObjekt.ImageLink;
    this.Category = productObjekt.Category;
    // Redundante attriubtter fra catalog-varen?
    this.StandardSize = productObjekt.StandardWeight;
    this.StandardWeight = productObjekt.StandardSize;
    // Attributterne fra stock-materialet burde være her
    this.Stock_Id = productObjekt.Stock_Id;
    // Attributterne unikke for produktet:
    this.ProductSize = productObjekt.ProductSize;
    // Denne her bør være private og skal have en metode der udregner den - Lukas.
    this.CalculatedPrize = this.prizeCalculator(
      this.StandardWeight,
      this.ProductSize
    );
  }

  render() {
    const productHTML =
      /*html*/
      `
    <article>
    <img href=${this.ImageLink}>
    <h3>Produkt Navn: ${this.Title}</h3>
    <p>Kategori: ${this.Category}</p>
    <p>Standard Størrelse: ${this.StandardSize} cm</p>
    <p>Standard Vægt: ${this.StandardWeight} gram</p>
    <p>Produkt Beskrivelse: ${this.ItemDescription} </p>
    <p>Produktets ønskede størrelse: ${this.ProductSize} cm</p>
    <p>Produktets beregnede pris: ${this.CalculatedPrize} dkk</p>
    </article>
    `;
    return productHTML;
  }

  // Her er en metode som giver en attirbut, så en setter?
  prizeCalculator(weight, height) {
    return weight + height * 20;
  }
}
