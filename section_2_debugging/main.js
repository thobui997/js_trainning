// Bug: nó ám chỉ các lỗi xảy ra trong các đoạn code mà mình viết, hoặc có thể bất cứ vấn đề gì làm cho ứng dụng của không thể chạy được , hoặc thể hoạt động sai so với yêu cầu.

// Debug: Tìm kiến những vấn đề gây ra lỗi trong ứng dụng, để có mình hướng giải quyết, sửa các lỗi cho ứng dụng (fix bug)

// Printlining: sử dụng các hàm như consle.log(), console.table(), .....
// Debug Devtool: sử dụng ở trình duyệt.trong tab source
//  - break point (điểm dừng): khi chương trình gặp cái break point thì sẽ dừng hoạt động tại điểm break point đó.

const arr = [1, 2, 3, 4, 5, 6];
for (let index = 0; index < arr.length; index++) {
	const element = arr[index];
	const a = 1;
}

function calculateSum(a, b) {
	const sum = a + b;
	return sum;
}

function tinhGpa(gpa) {
	let a;
	if (5.5 <= gpa && gpa <= 7) {
		a = "kha";
	} else if (7 <= gpa && gpa <= 9) {
		a = "gioi";
	} else {
		a = "dot";
	}

	return a;
}

const sum = calculateSum(1, 2);
const gpa = tinhGpa(8);
console.log(gpa);

function divide( a, b) {
	const divi = a / b;
	return divi;
}

divide(100, 0);

function findLargestElement(arr) {
	let max = arr1[0];
	for (let index = 0; index < arr.length; index++) {
		const element = arr1[index];
		if (max > element) {
			max = element;
		}
	}

	return max;
}

findLargestElement([100, 1000, 9999, 873, 32349, 473734]);
