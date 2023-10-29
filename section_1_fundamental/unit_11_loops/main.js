/**
 * Vòng lặp for: Nó cho phép lặp qua dãy các giá trị hoặc các phần tử trong 1 mảng với các bước nhất định.
 *
 * syntax: for(let i = 0; i < length; step) { ...code }
 */

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr1.length; i += 2) {
	console.log("index: ", i); // 0
	console.log("gia tri: ", arr1[i]); // arr1[0] -> 1
}

// in ra các giá trị mà chia hết cho 2
for (let index = 0; index < arr1.length; index++) {
	// kiểm tra giá trị có chia hết cho 2 hay không?
	if (arr1[index] % 2 === 0) {
		console.log("cac so chia het cho 2: ", arr1[index]);
	}
}

// tính tổng của mảng trên

// b1: khởi tạo giá trị cho biến sum
let sum = 0; // lưu trữ lại giá trị của tổng

// b2: lặp các phần tử trong 1 mảng
for (let index = 0; index < arr1.length; index++) {
	// lấy các giá trị sau mỗi lần lặp
	const value = arr1[index];
	// tính tổng
	sum += value;
}

// b3: in ra kết quả
console.log("sum= ", sum);

const str1 = "Hello world";
for (let index = 0; index < str1.length; index++) {
	console.log("cac ký tu: ", str1[index]);
}

const cars = [
	{ type: "Volvo", year: 2016 },
	{ type: "Saab", year: 2001 },
	{ type: "BMW", year: 2010 },
	{ type: "TOYOTA", year: 2034 },
	{ type: "SUZUKI", year: 2023 },
];

// while: dùng khi chưa biết số vòng lặp cần thực hiện
let i = 1;
while (i <= 10) {
	console.log(i);
	i++;
}

// do ... while: sẽ thực ít nhất 1 lần lặp
let t = 2;
do {
	console.log(t);
	t++;
} while (t < 1);

// câu lệnh break: kết thúc vòng lặp khi gặp lệnh break
for (let index = 0; index < arr1.length; index++) {
	if (arr1[index] === 3) {
		break; // kết thúc luôn vòng lặp với điều kiện = 3
	}
	console.log(arr1[index]);
}

// câu lệnh continue: bỏ qua lần lặp hiện tại, nhưng vẫn thực hiện các lần lặp tiếp theo
for (let index = 0; index < arr1.length; index++) {
	if (arr1[index] === 3) {
		continue;
	}
	console.log(arr1[index]);
}

const car = { type: "Volvo", year: 2016 };
// for ... of: dùng với array or string
for (const element of arr1) {
	console.log("for...of", element); // arr1[index]
}

for (const key of Object.keys(car)) {
	console.log(key);
}

// for ... in: dùng lặp 1 giá trị có kiểu dữ liệu là object
for (const key in car) {
	console.log("for...in", key);
}

// foreach: là 1 method của array.
arr1.forEach(function (value, index) {
	console.log("for...each value: ", value);
	console.log("for...each index: ", index);
});

// map(), filter(), find(), some(), include(), reduce(): tìm hiểu thêm

// map: ánh xạ các giá trị cũ thành các giá trị mới, trả về 1 mảng mới
const newArr1 = arr1.map(function (value) {
	return value * 2;
});

console.log(newArr1);

// filter: lọc các phần tử theo điều kiện, và trả mảng mới
const filterArr = arr1.filter(function (value) {
	return value % 2 === 0;
});

console.log("filter", filterArr);
