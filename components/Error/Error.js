class Error {
  render() {
    ROOT_ERROR.innerHTML = `
      <div class="error-container">
          <div class="error-message">
              <h3>Нет доступа!</h3>
              <p>Попробуйте зайти позже</p>
          </div>
      </div>
  `;
  }
}

const errorPage = new Error();
