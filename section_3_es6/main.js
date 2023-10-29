/// spread operator (syntax: sử dụng dấu ...)
// đối với mảng [...arr] -> ý nghĩa: phân giải các phần tử trong mảng thành phần tử riêng lẻ
const a = [1, 2, 3, 4];
const b = [5, 6, 7, 8];
const c = a.concat(b);
const d = [...a, ...b];

console.log(c);
console.log(d); // [1....8]

const e = [...a]; // reference

// đối với object {...obj} -> ý nghĩa: phân giải các thuộc tính trong trong 1 obj
const f = { name: "tho", age: 26 };
const g = { ...f };

g.name = "hieu";
console.log(g);
console.log(f);

// rest operator: (sử dụng ...) -> ý nghĩa: gom nhóm các phần tử
function test(...restParam) {
	// [1,2,3]
	console.log("rest operator: ", restParam);
}

test(1, 2, 3);

/// Destructuring: cho phép chúng ta trích xuất giá trị từ các mảng hoặc đối tượng vào các biến riêng biệt một cách dễ dàng
// destructuring array
const h = ["hello", "xin chao", "nj hao"];
const [h1, h2, h3] = h; // <=> tạo ra 3 biến h1, h2, h3 riêng biệt
console.log(h1);
console.log(h2);
console.log(h3);

const j = ["hello", "xin chao", "nj hao", "abc", "hdhd", "sdsd"];
const [j1, j2, ...j3] = j;
console.log(j1);
console.log(j2);
console.log(j3);

// destructuring object
const obj1 = { name: "hieu", age: 27, model: "handsome" };

// const key1 = obj1.name;
// const key2 = obj1.age;
// const key3 = obj1.model;

const { name: firstName, age: birthday, model } = obj1;
console.log("detruct", firstName);
console.log("detruct", birthday);
console.log("detruct", model);

const obj2 = {
	name: "hien",
	address: { city: "thai binh", district: "dong hung" },
};

const {
	address: { city },
} = obj2; // <=> obj2.address.city
console.log(city);

// ví dụ: đổi chỗ 2 giá trị sử dụng tính năng destructuring
let sw1 = 10;
let sw2 = 100;

// => muốn đổi chỗ 2 giá cho nhau sw1 = 100, sw2 = 10;
// c1: tạo 1 biến temp
let temp = sw1; // 10
//sw1 = sw2; // 100
//sw2 = temp; // 10
console.log("sw1", sw1);
console.log("sw2", sw2);

// c2
const arrTemp = [sw2, sw1]; // [100, 10]
[sw1, sw2] = arrTemp; // [sw1, sw2] = [sw2, sw1];

console.log("sw1", sw1);
console.log("sw2", sw2);

/// Arrow function: là cách khai báo function nhưng cú pháp của nó sẽ ngắn gọn hơn.

// function declaration
function a1(p1, p2) {
	// code...
}

// function expression
const a2 = function (p1, p2) {
	// code ...
};

// arrow function
const a3 = (p1, p2) => {
	// code ...
};

const calculateTotalV1 = (a, b) => {
	const sum = a + b;
	return sum;
};

const calculateTotalV2 = (a, b) => a + b; // <==> return a + b;
const isOddNumber = (a) => (a % 2 !== 0 ? true : false);

// sử khác nhau giữa arrow function và function thông thường

const obj3 = {
	firstName: "hiéu",
	lastName: "pham",
	getFullName: function () {
		console.log("obj3", this);
		console.log(this.firstName + this.lastName);
		return this.firstName + this.lastName;
	},
};


const obj4 = {
	firstName: "hiéu",
	lastName: "pham",
	// không được phép sử dụng arrow function làm method trong 1 object
	getFullName: () => {
		console.log("obj4", this);
		console.log(this.firstName + this.lastName);
	},
};

obj3.getFullName(); // hieu pham
obj4.getFullName(); // NaN

/// Default Parameters: cho phép chúng ta định nghĩa giá trị mặc định cho các tham số của hàm. Nếu giá trị tham số không được truyền vào khi gọi hàm, thì giá trị mặc định sẽ được sử dụng thay vì giá trị undefined

function testDefaultParamV1(p1) {
	console.log(p1);
}

function testDefaultParamV2(p1, p2 = "xin chao") {
	console.log("v2", p1);
	console.log("v2", p2);
}

testDefaultParamV1("hello");
testDefaultParamV1(); // undefined

testDefaultParamV2("hello"); // hello, xin chao
testDefaultParamV2(); // undefined, xin chao


/// Template Literals: cho phép bạn tạo chuỗi một cách dễ dàng và linh hoạt hơn bằng cách nhúng biến và biểu thức vào bên trong dấu backticks (``).

const str1 = "xin";
const str2 = "chao";

const str3 = str1 + str2;
const str4 = str1.concat(str2);

// template literals
const str5 = `Lorem Ipsum is simply 
					${str1} dummy text of the printing 
					and typesetting industry. Lorem  ${str2}`;
const str6 = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ${str1} ${str2}';
const str7 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ${str1} ${str2}";
console.log(str5, str6, str7);

const isMan = true;
const str8 = `toi co gioi tinh: ${isMan ? 'đàn ông' : 'đàn bà'}`;
console.log(str8);

const str9 = `tổng của  3 + 9: ${3 + 9}`;
console.log(str9);

const str10 = `hien thi ten day du: ${obj3.getFullName()}`;
console.log(str10);