const buttons = document.getElementsByTagName("button");
const reset = document.querySelector("#reset");

const counterValue = document.querySelector("#counter_value");
counterValue.textContent = "0";

[...buttons].forEach((button) => {
	button.addEventListener("click", function () {
		const buttonType = this.dataset.buttonType;
    
		switch (buttonType) {
			case "increase":
        counterValue.textContent = (+counterValue.textContent + 1).toString();
				break;

			case "decrease":
        counterValue.textContent = (+counterValue.textContent - 1).toString();
				break;

			default:
        counterValue.textContent = "0";
				break;
		}
		// if (buttonType === "increase") {
		// 	counterValue.textContent = (+counterValue.textContent + 1).toString();
		// } else if (buttonType === "decrease") {
		// 	counterValue.textContent = (+counterValue.textContent - 1).toString();
		// } else {
		// 	counterValue.textContent = "0";
		// }
	});
});

// increase.addEventListener("click", function () {
// 	value.textContent = `${Number(value.textContent) + 1}`;
// });

// decrease.addEventListener("click", function () {
// 	value.textContent = `${Number(value.textContent) - 1}`;
// });

// reset.addEventListener("click", function () {
// 	value.textContent = "0";
// });
