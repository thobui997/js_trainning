// primitive (tham trị): gồm giá trị nguyên thủy (number, string, bool)
// ý nghĩa: tham trị chỉ sao chép giá trị của 1 biến vào 1 biến khác,or truyền giá trị vào 1 function như tham số.

let a = 1;
let b = a;

console.log(a === b); // true

a = 3;

console.log("a: ", a); // 3
console.log("b: ", b); // 1

// reference (tham chiếu): gồm giá trị (object, array)
// ý nghĩa: tham chiếu đến địa chỉ ô nhớ của 1 biến.

const obj1 = { name: "hieu", age: 27 };
const obj2 = obj1;
const obj3 = { name: "hieu", age: 27 };

console.log(obj1 == obj2); // true
console.log(obj1 == obj3); // false
console.log(obj2 == obj3); // false

obj1.name = "hien";
obj2.age = 18;

console.log("obj1", obj1.name); // hien
console.log("obj2", obj2.name); // hien
console.log("obj3", obj3.name); // hieu

console.log("obj1", obj1.age); // 18
console.log("obj2", obj2.age); // 18
console.log("obj3", obj3.age); // 27

const arr1 = [1, 2, 3];
const arr2 = arr1;
const arr3 = [1,2,3];

console.log(arr1 === arr2); // true
console.log(arr2 === arr3); // false
console.log(arr1 === arr3); // false

arr1.push(4);
arr2.unshift(0);

console.log(arr1); // [0,1,2,3,4]
console.log(arr2); // [0,1,2,3,4]
console.log(arr3); // [1,2,3]
