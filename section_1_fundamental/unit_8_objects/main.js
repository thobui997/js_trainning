// objects (đối tượng) là kiểu dữ liệu cơ bản và quan trọng trong js
// objects sẽ tổ chức dữ liệu theo cặp key và value

// cú pháp của object sẽ biểu diễn bằng cặp dấu {}
// cú pháp -> const ten_doi_tuong = { key: value,..... }
// 1 object luôn khai báo với keyword là const
const car = {
	name: "honda",
	year: 2022,
	color: "black",
	author: {
		name: "hieu",
		age: 100,
	},
}; // là 1 object

// truy cập giá trị của 1 properties
// cách 1: dot notation (sử dụng dấu .)
console.log(car.name);
console.log(car.year);
console.log(car.author.name);

// cách 2: bracket (dấu [])
console.log(car["year"]);
console.log(car["author"]["age"]);

// cách 3: kết hợp cả 2 cách trên
console.log(car.author["name"]);

// cập nhật giá trị của 1 properties(thuộc tính biểu diễn bằng key: value)
car.name = "yamaha";
console.log(car.name);

car.author.name = "hien";
console.log(car.author.name);

// thêm 1 thuộc tính cho object
console.log("truoc khi them thuoc tinh width: ", car.width);
car.width = 1000;
console.log("sau khi them thuoc tinh width: ", car.width);

// xóa 1 thuộc tính của đối tượng
delete car.color;
console.log("thuoc tinh sau khi xoa: ",car.color);
delete car.author.age;
console.log(car.author.age);

// object methods
console.log(Object.keys(car)); // lấy ra danh sách các keys của đối tượng
console.log(Object.keys(car.author)); // lấy ra danh sách các keys của đối tượng
console.log(Object.values(car)); // lấy ra danh sách giá trị của object

// method trong 1 object
const person = {
  firstName: "hieu",
  lastName: "pham",
  age: 27,
  printFullName: function () {
    // body ....
    console.log("toi ten la: " + this.firstName + " " + this.lastName + " " + this.age + " " + "tuoi");
  },
  getName: function(gender) {
    return this.firstName + " " + gender;
  }
}

person.printFullName();
const firstName1 = person.getName("nam");
const firstName2 = person.getName("nu");
console.log(firstName1);
console.log(firstName2);

// keyword this
// trong 1 object this sẽ đại diện cho object đó
// person.name <-> this.name (this chỉ sử dụng trong object đó)

console.log(this); // khi this đứng 1 mình sẽ đại diện cho đối tượng window