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

// promise: 
