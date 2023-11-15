const submitButton = document.querySelector(".submit-btn");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

const emailPattern =
	/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

submitButton.addEventListener("click", function (event) {
	// ngăn chặn hành vi mặc định của phần tử
	event.preventDefault();

	// xác thực dữ liệu user nhập vào ô input có hợp lệ hay không
	if (!username.value) {
		const errorMessage = username.parentElement.querySelector(".error");
		username.parentElement.classList.add("error");
		errorMessage.textContent = "username la thong tin bat buoc";
	} else {
		const errorMessage = username.parentElement.querySelector(".error");
		username.parentElement.classList.remove("error");
		username.parentElement.classList.add("success");
		errorMessage.textContent = "";
	}
	
	if (!email.value) {
		const errorMessage = email.parentElement.querySelector(".error");
		email.parentElement.classList.add("error");
		errorMessage.textContent = "email la thong tin bat buoc";
	} else if (!emailPattern.test(email.value)) {
		const errorMessage = email.parentElement.querySelector(".error");
		email.parentElement.classList.add("error");
		errorMessage.textContent = "email la khong dung dinh dang";
	} else {
		const errorMessage = email.parentElement.querySelector(".error");
		errorMessage.parentElement.classList.remove("error");
		errorMessage.parentElement.classList.add("success");
		errorMessage.textContent = "";
	}

	if (!password.value) {
		const errorMessage = password.parentElement.querySelector(".error");
		password.parentElement.classList.add("error");
		errorMessage.textContent = "password la thong tin bat buoc";
	} else if (password.value.length < 8) {
		const errorMessage = password.parentElement.querySelector(".error");
		password.parentElement.classList.add("error");
		errorMessage.textContent = "password it nhat phai co 8 ky tu";
	} else {
		const errorMessage = password.parentElement.querySelector(".error");
		password.parentElement.classList.remove("error");
		password.parentElement.classList.add("success");
		errorMessage.textContent = "";
	}

	if (!confirmPassword.value) {
		const errorMessage = confirmPassword.parentElement.querySelector(".error");
		confirmPassword.parentElement.classList.add("error");
		errorMessage.textContent = "confirmPassword la thong tin bat buoc";
	} else if (confirmPassword.value !== password.value) {
		const errorMessage = confirmPassword.parentElement.querySelector(".error");
		confirmPassword.parentElement.classList.add("error");
		errorMessage.textContent = "mat khau khong khop";
	} else {
		const errorMessage = confirmPassword.parentElement.querySelector(".error");
		confirmPassword.parentElement.classList.remove("error");
		confirmPassword.parentElement.classList.add("success");
		errorMessage.textContent = "";
	}

	// Gủi thông tin hợp lệ cho máy chủ
	//.......
	console.log({
		username: username.value,
		email: email.value,
		password: password.value,
	});
});
