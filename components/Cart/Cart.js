class Cart {
  handleClear() {
    ROOT_CART.innerHTML = '';
  }

  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = '';
    let sumCatalog = 0;

    CATALOG.forEach(({ id, name, price }) => {
      if (productsStore.indexOf(id) !== -1) {
        htmlCatalog += `
        <tr>
          <td class="cart-element__name">⚡ ${name}</td>
          <td class="cart-element__price">${price.toLocaleString()} USD</td>
        </tr>
      `;
        sumCatalog += price;
      }
    });

    ROOT_CART.innerHTML = `
      <div class="cart-container">
        <button class="cart__close" type="button" onClick="cartPage.handleClear();">
          <svg class="cart__close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409.806 409.806" style="enable-background:new 0 0 409.806 409.806" xml:space="preserve"><path d="M228.929 205.01 404.596 29.343c6.78-6.548 6.968-17.352.42-24.132-6.548-6.78-17.352-6.968-24.132-.42-.142.137-.282.277-.42.42L204.796 180.878 29.129 5.21c-6.78-6.548-17.584-6.36-24.132.42-6.388 6.614-6.388 17.099 0 23.713L180.664 205.01 4.997 380.677c-6.663 6.664-6.663 17.468 0 24.132 6.664 6.662 17.468 6.662 24.132 0l175.667-175.667 175.667 175.667c6.78 6.548 17.584 6.36 24.132-.42 6.387-6.614 6.387-17.099 0-23.712L228.929 205.01z"/></svg>
        </button>
        <table>
          ${htmlCatalog}
          <tr>
            <td class="cart-element__name">💥 Сумма:</td>
            <td class="cart-element__price">${sumCatalog.toLocaleString()} USD</td>
          </tr>
        </table>
      </div>
    `;
  }
}

const cartPage = new Cart();
