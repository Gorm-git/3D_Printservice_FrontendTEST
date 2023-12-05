// This function creates a new catalogue item - is only accessible for the admin.
function createNewCatalogue(event) {
  event.preventDefault();

  // Er det nu .target.value?
  const stockForm = event.target;

  const name = stockForm.name.value;
  const material = stockForm.material.value;
  const colour = stockForm.colour.value;
  const gramInStock = stockForm.inStock.value;
  const minAmountReached = stockForm.minAmount.value;
  const salesPrize = stockForm.price.value;

  return {
    name,
    material,
    colour,
    gramInStock,
    minAmountReached,
    salesPrize,
  };
}

const html =
  /*html*/
  `
<label for="StockName">Produktnavn</label>
                <input
                  type="text"
                  id="catalogueName"
                  name="name"
                  placeholder="Produktnavn"
                  pattern="[0-9]{4}"
                  required
                />

<label for="stockMaterial">Materiale</label>
                <select name="minAmount" id="minAmountStock">
                <option value= "PLA" >PLA</option>
                <option value="ABS">ABS</option>
                <option value="CARBON">Carbon</option>
                <option value="NYLON-CARBOM">ABS</option>


                // Kig på den der mulighed for at tilføje ting til sin liste? Men det resetter jo so why bother... 
                // Burde pris ikke være en attribut der er knyttet materiale ?

<label for="stockColour">Farve</label>
                <input
                  type="text"
                  id="stockColour"
                  name="colour"
                  placeholder=""
                  pattern="[0-9]{4}"
                  required
                />                
                
<label for="amountInStock">Lagerbeholdning</label>
                <input
                  type="text"
                  id="amountInStock"
                  name="inStock"
                  placeholder="..."
                  pattern="[0-9]{4}"
                  required
                />

<label for="salesPrice">salgspris</label>
                <input
                  type="text"
                  id="salesPrice"
                  name="price"
                  placeholder="..."
                  pattern="[0-9]{4}"
                  required
                />

            // Is this supposed to be an option on creation? 
<label for="minAmountStock">Salgs Status</label>
                <select name="minAmount" id="minAmountStock">
                <option value= "true" > Udsolgt </option>
                <option value="false"> På Lager </option>
                </select>
                />

`;
