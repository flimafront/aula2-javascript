class MyApp extends HTMLElement {

	connectedCallback() {
		this.addEventListener('click', this.clickHandler);
		window.addEventListener('popstate', this.updateVisiblePage.bind(this));
		this.updateVisiblePage();
	}

	updateVisiblePage() {
		if (window.location.pathname.match('^/films')) {
			document.body.classList.add('detail-view-active')
		} else {
			document.body.classList.remove('detail-view-active')
		}
	}

	clickHandler(event) {
		if (event.button !== 0 || event.metaKey || event.ctrlKey)
			return;

		let element = event.target;

		while(element !== this) {
			if (element. tagName === 'A') {
				event.preventDefault();
				window.history.pushState(null, '', element.href);
				this.updateVisiblePage();
				return;
			}
			element = element.parentNode;
		}
	}

	constructor() {
		super();

	}

}

export default MyApp;