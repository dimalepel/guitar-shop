function render() {
  const productsStore = localStorageUtil.getProducts();

  headerPage.render(productsStore.length);
  productsPage.render();
}

let CATALOG = [];

fetch('https://62d6aefa51e6e8f06f104f78.mockapi.io/catalog')
  .then(result => result.json())
  .then(body => {
    CATALOG = body;
    render();
  })
  .catch(error => {
    console.log(error);
  });
