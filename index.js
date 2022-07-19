function render() {
  const productsStore = localStorageUtil.getProducts();

  headerPage.render(productsStore.length);
  productsPage.render();
}

spinnerPage.render();

let CATALOG = [];

fetch('https://62d6aefa51e6e8f06f104f78.mockapi.io/guitars')
  .then(result => result.json())
  .then(body => {
    CATALOG = body;
    spinnerPage.handleClear();
    render();
  })
  .catch(error => {
    spinnerPage.handleClear();
    errorPage.render();
  });
