const submitButton = document.querySelector(".submit-btn");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

const emailPattern =
	/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const setError = (element, message) => {
	const errorMessage = element.parentElement.querySelector(".error");
	element.parentElement.classList.add("error");
	errorMessage.textContent = message;
};

const setSuccess = (element) => {
	const errorMessage = element.parentElement.querySelector(".error");
	element.parentElement.classList.remove("error");
	element.parentElement.classList.add("success");
	errorMessage.textContent = "";
};

const validate = () => {
	if (!username.value) {
		setError(username, "username la thong tin bat buoc");
	} else {
		setSuccess(username);
	}

	if (!email.value) {
		setError(email, "email la thong tin bat buoc");
	} else if (!emailPattern.test(email.value)) {
		setError(email, "email la khong dung dinh dang");
	} else {
		setSuccess(email);
	}

	if (!password.value) {
		setError(password, "password la thong tin bat buoc");
	} else if (password.value.length < 8) {
		setError(password, "password it nhat phai co 8 ky tu");
	} else {
		setSuccess(password);
	}

	if (!confirmPassword.value) {
		setError(confirmPassword, "confirmPassword la thong tin bat buoc");
	} else if (confirmPassword.value !== password.value) {
		setError(confirmPassword, "mat khau khong khop");
	} else {
		setSuccess(confirmPassword);
	}
};

submitButton.addEventListener("click", function (event) {
	// ngăn chặn hành vi mặc định của phần tử
	event.preventDefault();

	validate();

	// Gủi thông tin hợp lệ cho máy chủ
	//.......
	console.log({
		username: username.value,
		email: email.value,
		password: password.value,
	});
});
