class ListView extends HTMLElement {
	connectedCallback() {
		let response = fetch("https://swapi.co/api/films?format=json");

		response.then(data => data.json())
				.then(data => this.renderItems(data.results))
				.catch(error => this.showError());
	}

	renderItems(films) {
		this.innerHTML = films.reduce((a, film, i) => a + `
			<a href="/films/${i + 1}">
				<div>${film.title}</div>
			</a>
		`, '')
	}
	showError() {
		this.innerHTML = `
			<p class="error">Ooops! deu erro</p>
		`;
	}
}

export default ListView;