// This function creates a new catalogue item - is only accessible for the admin.
function createNewCatalogue(event) {
  event.preventDefault();

  // Er det nu .target.value?
  const catalogueForm = event.target;

  const name = catalogueForm.nameame.value;
  const standardSize = catalogueForm.size.value;
  const standardWeight = catalogueForm.weight.value;
  const itemDescription = catalogueForm.description.value;
  const imageLink = catalogueForm.image.value;
  const catagory = catalogueForm.catergory.value;

  const catalogueItem = createCatalogueItemProduct(
    name,
    standardSize,
    standardWeight,
    itemDescription,
    imageLink,
    catagory
  );
}

function createCatalogueItemProduct(
  name,
  standardSize,
  standardWeight,
  itemDescription,
  imageLink,
  catagory
) {
  return {
    name,
    standardSize,
    standardWeight,
    itemDescription,
    imageLink,
    catagory,
  };

}
