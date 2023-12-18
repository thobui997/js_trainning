// json: javascript object notation
// biểu diễn theo cú pháp: {"key": "{"key": "value"}", .....}

const URL = "https://jsonplaceholder.typicode.com";

fetch(`${URL}/photos`, { method: "GET" })
	.then((res) => res.json())
	.then((data) => {
		for (let index = 0; index < 2; index++) {
			const photo = data[index];
			const img = document.createElement("img");
			img.src = photo.url;
			document.body.appendChild(img);
		}
	})
	.catch((err) => {
		console.log(err);
	});

const body = {
  id: 102,
  userId: 10,
	title: "test thử xem",
	body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, asperiores pariatur a expedita, accusantium ad unde optio quidem, corporis quam iure ab. Culpa, eveniet suscipit molestias ex sunt iure recusandae?",
};

fetch(`${URL}/posts`, { method: "POST", body: JSON.stringify(body) }).then(
	(res) => {
		console.log(res);
	},
);
