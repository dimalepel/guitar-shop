class Header {
  handleOpenCartPage() {
    cartPage.render();
  }

  render(count) {
    ROOT_HEADER.innerHTML = `
      <div class="header-container">
        <div class="header-counter" onclick="headerPage.handleOpenCartPage()">
          🔥 ${count}
        </div>
      </div>
    `;
  }
}

const headerPage = new Header();


