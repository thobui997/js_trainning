// sync: đồng bộ -> nghĩa là thực hiện các công việc 1 cách tuần tự, ví dụ cv1 phải xong thì được thực cv2.

// async: bất đồng bộ -> nghĩa là thực hiện các công việc 1 cách không tuần tự, ví dụ trong khi chờ cơm chín thì m có thể đi tắm.

function test1() {
	console.log(1);
	console.log(2);
	console.log(3);
}

test1(); // 1 - 2 - 3

function test2() {
	// setTimeout(func, 1000) là function B
	// () => console.log(1) là function A
	const print = () => console.log(1);
	setTimeout(print, 0);
	console.log(2);
	console.log(3);
}

test2(); // 2 - 3 - 1

// callback: là 1 function A được truyền vào function B như 1 tham số của function B. B sẽ gọi đến A để thực hiện 1 chức năng nào đó mà A đang nắm giữ.
function A(message) {
	console.log(message);
}

function testCallback(callback) {
	callback("message gi gi day");
}

testCallback(A);
// testCallback(function(message) {
//   console.log(message);
// });

const getImageFromServer = (url, callback) => {
	const httpClient = new XMLHttpRequest();
	httpClient.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			callback(httpClient.responseURL);
		}
	};
	httpClient.open("GET", url, true);
	httpClient.send();
};

// callback hell:
getImageFromServer("https://picsum.photos/200/300", (imageUrl) => {
	document.querySelector("#img1").src = imageUrl;

	getImageFromServer("https://picsum.photos/200/300", (imgUrl) => {
		document.querySelector("#img2").src = imgUrl;

		getImageFromServer("https://picsum.photos/200/300", (imgUrl) => {
			document.querySelector("#img3").src = imgUrl;

			// getImageFromServer("https://picsum.photos/200/300", (imgUrl) => {
			// 	document.querySelector("#img4").src = imgUrl;

			// 	getImageFromServer("https://picsum.photos/200/300", (imgUrl) => {
			// 		document.querySelector("#img5").src = imgUrl;

			// 		getImageFromServer("https://picsum.photos/200/300", (imgUrl) => {
			// 			document.querySelector("#img6").src = imgUrl;
			// 		});
			// 	});
			// });
		});
	});
});

// promise: là một đối tượng đại diện cho một giá trị chưa được biết trước, có thể là giá trị hoặc lỗi, và sẽ được trả về trong tương lai sau khi một tác vụ bất đồng bộ hoàn thành. Promise giúp chúng ta xử lý bất đồng bộ một cách sáng sủa hơn, tránh callback hell và làm mã nguồn dễ đọc hơn.

// đăng ký lời hứa
const myPromise = new Promise((resole, reject) => {
	const condition = false;

	if (condition) {
		setTimeout(() => {
			resole("toi da thuc hien loi hua thanh cong");
		}, 3000);
	} else {
		reject("toi ban nen khong the giu loi hua");
	}
});

myPromise
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log(err);
	}); // chaining

const getImageFromServerv2 = (url, resole, reject) => {
	const httpClient = new XMLHttpRequest();
	httpClient.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			resole(httpClient.responseURL);
		}
	};
	httpClient.open("GET", url, true);
	httpClient.send();
};

const promise1 = new Promise((resole, reject) => {
	getImageFromServerv2("https://picsum.photos/200/300", resole, reject);
});

const promise2 = new Promise((resole, reject) => {
	getImageFromServerv2("https://picsum.photos/200/300", resole, reject);
});

const promise3 = new Promise((resole, reject) => {
	getImageFromServerv2("https://picsum.photos/200/300", resole, reject);
});

// promise1
// 	.then((data) => {
// 		document.querySelector("#img4").src = data;
// 		return promise2;
// 	})
// 	.then((data) => {
// 		document.querySelector("#img5").src = data;
// 		return promise3;
// 	})
// 	.then((data) => {
// 		document.querySelector("#img6").src = data;
// 	})
// 	.catch((error) => {
// 		document.querySelector("#message").textContent = error;
// 	});

/// async/await function: async , await là 2 keyword được dụng cùng với function. để xử lý các công việc bất đồng bộ (promise)
// giúp thực các công việc bất đồng bộ trở thành đồng bộ,

async function test() {

	try {
		const img1 = await promise1;
		document.querySelector("#img4").src = img1;
		const img2 = await promise2;
		document.querySelector("#img5").src = img2;
		const img3 = await promise3;
		document.querySelector("#img6").src = img3;
	} catch (err) {
		console.log(err);
	}
}

test();
