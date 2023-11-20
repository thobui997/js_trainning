const tabItems = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content");
const articles = document.querySelector(".articles");

articles.addEventListener("click", function (e) {
	const id = e.target.dataset.id;
	if (id) {
		tabItems.forEach((tabItem) => {
			tabItem.classList.remove("active");
		});
		e.target.classList.add("active");

		tabContents.forEach((content) => {
			content.classList.remove("active");
		});

		const content = document.querySelector(`#${id}`);
		content.classList.add("active");
	}
});
