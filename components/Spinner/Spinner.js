class Spinner {
  handleClear() {
    ROOT_SPINNER.innerHTML = '';
  }

  render() {
    ROOT_SPINNER.innerHTML = `
      <div class="spinner-container">
        <svg class="spinner__img" xmlns="http://www.w3.org/2000/svg" style="margin:auto;background:0 0;display:block;shape-rendering:auto" width="200" height="200" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" r="30" stroke-width="3" stroke="#1d3f72" stroke-dasharray="47.12388980384689 47.12388980384689" fill="none" stroke-linecap="round" transform="rotate(315.565 50 50)"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1.7241379310344827s" keyTimes="0;1" values="0 50 50;360 50 50"/></circle></svg>
      </div>
    `;
  }
}

const spinnerPage = new Spinner();
