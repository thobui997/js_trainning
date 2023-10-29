// array (mảng): là kiểu dữ liệu đặc biệt có thể lưu trữ được nhiều giá trị
// cú pháp của array -> const ten_array = [data,...]
// các giá trị trong 1 array sẽ gọi là 1 element

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const names = ["tho", "hieu", "hien"];
const books = [
	{ name: "tuoi tho du doi", author: "nguyen nhat anh" },
	{ name: "harry porter", author: "thobui" },
];
const mixed = [1, "tho", true, { name: "hieu" }, null, [1, 2, 3]];

// truy cập phần tử trong 1 mảng
// cú pháp array[index] -> index là vị trí của phần tử trong mảng
// index sẽ bắt đầu từ vị trí 0 -> ..
const book2 = books[1];
console.log(books);
console.log(book2.author, book2.name);

// cập nhật giá trị của 1 phần tử trong mảng
console.log("truoc khi cap nhat: ", numbers);
numbers[2] = 100;
console.log("sau khi cap nhat: ", numbers);

// thêm 1 phần tử mới vào mảng
names[3] = "cuong";
console.log(names);

// length: trả về số lượng phần tử trong 1 array
console.log(numbers.length);
console.log(books.length);

// thêm 1 tử vào 1 mảng
numbers.push(1000, 23, 3223, 33434); // push: thêm mới 1 or nhiều phần tử vào cuối mảng
console.log(numbers);

names.unshift("hoa", "hong", "chinh"); // unshift: thêm mới 1 or nhiều phần tử vào dầu mảng
console.log(names);

// convert 1 mảng thành 1 string
console.log(numbers.toString());

// pop: lấy ra phần tử cuối cùng của mảng
console.log(books.pop());

// shift: lấy ra phần tử đầu tiên của mảng
console.log(books.shift());

// join: toàn bộ các phần tử gộp vào thành 1 string
console.log(numbers.join(";"));

// concat: gộp 2 mảng thành 1 mảng duy nhất
const array1 = [1, 23, 3];
const array2 = [34, 5, 5, 3434, 23];
const newArray = array1.concat(array2);
console.log(array1);
console.log(array2);
console.log(newArray);

// flat: [[123, 232,2 323]] -> [123,232,2,323]
console.log([[[123]]].flat());

// splice: thêm or xóa các phần tử trong 1 mảng
// syntax -> splice(index, howmany, item1,...)
// index: chỉ mục của phần từ add/remove
// howmany: số lượng phần tử cần xóa
// item1,...: phần tử mới sẽ được thêm vào mảng

const fruits = ["orange", "apple", "banana", "mango"];
fruits.splice(3, 0, "lemon", "kiwi");
console.log(fruits);

fruits.splice(2, 1);
console.log(fruits);

// slice: trả về 1 mảng mới các phần tử được lựa chọn theo index
// syntax -> slice(start, end)
// start: vị trí của index muốn bắt đầu
// end: vị trí của index muốn kết thúc

const newFruits = fruits.slice(2, 3);
console.log(newFruits);

// sort: dùng để sắp xếp các phần tử trong 1 mảng
fruits.push("abcos");
console.log("mảng được sắp xếp a-z", fruits.sort());
console.log("mảng được sắp xếp z-a", fruits.reverse()); // reverse: đảo ngược các phần tử trong 1 mảng

const numbers1 = [1000, 33, 3424, 12, 1, 0];
console.log("mảng ban đầu: ", numbers1);

// prev - next: sắp xếp theo chiều tăng dần
// next - prev: sắp xếp theo chiều giảm dần
const numbersSorted = numbers1.sort(function (prev, next) {
	return prev - next;
});

console.log("mảng được sắp xếp: ", numbersSorted);

const cars = [
	{ type: "Volvo", year: 2016 },
	{ type: "Saab", year: 2001 },
	{ type: "BMW", year: 2010 },
	{ type: "TOYOTA", year: 2034 },
	{ type: "SUZUKI", year: 2023 },
];

// tạo function tên sorted,
// -> nhận vào tham số là mảng chưa được sắp xếp.
// -> trả về mảng được sắp xếp,
// sắp xếp cars theo năm tăng dần.

function sortedByYear(arr) {
	const compareFunc = function (a, b) {
		return a.year - b.year;
	};
	return arr.sort(compareFunc);
}

function sortedByType(arr) {
	const compareFunc = function (a, b) {
		return a.type.toLowerCase().localeCompare(b.type.toLowerCase());
	};
	return arr.sort(compareFunc);
}

// console.log(sortedByYear(cars));
console.log(sortedByType(cars));
