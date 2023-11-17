// class: là 1 bản thiết kế để xây dựng nên các đối tượng(object)
// object: là 1 thực thể ví du như: con người, xe, nhà...

// class và obj còn gọi là lập trình hướng đối tượng (OOP) -> tìm hiểu thêm

// syntax: class ten_class {} -> chú ý ten_class phải đặt là danh từ (Person, Car,....)
// khuyến nghị: chữ cái bắt đầu nên bằng chữ viết hoa
// contructor(): là 1 method đặc biệt , nó sẽ chạy tự động khi 1 đối tượng được khởi tạo (new Person())
class Person {
	firstName; // property; tên thuộc tính của bản thiết kế
	lastName;
	age;
	gender;
	address;

	constructor(firstName, lastName, age, gender, address) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.gender = gender;
		this.address = address;
	}

	// method
	getFullName() {
		return this.firstName + " " + this.lastName;
	}
}

// -> new Person(): tạo ra 1 đối tượng dựa trên bản thiết kế có tên là Person
const hien = new Person("hien", "hoang", 27, "nu", "thai binh");

console.log("hien", hien.firstName);
console.log("hien", hien.lastName);
console.log("hien", hien.age);
console.log("hien", hien.gender);
console.log("hien", hien.address);
const fullName = hien.getFullName();
console.log("hien", fullName);

hien.age = 28;
console.log("hien", hien.age);

const hieu = new Person("hieu", "pham", 27, "name", "thuy phong");
// console.log("hieu", hieu.firstName);
// console.log("hieu", hieu.lastName);
// console.log("hieu", hieu.age);
// console.log("hieu", hieu.gender);

const tho = new Person("tho", "bui", 28, "nam", "dong ho");

// console.log("tho", tho.firstName);
// console.log("tho", tho.lastName);
// console.log("tho", tho.age);
// console.log("tho", tho.gender);
