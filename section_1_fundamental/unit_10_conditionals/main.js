// if statement: sử câu lệnh if để chỉ định một khối mã sẽ thực thi khi điều kiện của n là đúng
// syntax: if (condition) { // đoạn code thực thi  }

const number = 10;
if (number > 11) {
	console.log("so lon hon 11");
} else {
	console.log("so nho hon 11");
}

/**
 * if(condition1) {
 *   ...code
 * } else if(condition2) {
 *   ...code
 * } else {
 *   ...code
 * }
 */
const a = "hello1";
if (a === "xin chao") {
	console.log(a);
} else if (a === "hello") {
	console.log(a);
} else {
	console.log("không bằng...");
}

// if...else có thể lồng nhau
const b = 30;
if (b === 5) {
	console.log("b bang 5");
	if (b > 3) {
		console.log("b có lớn hơn 3");
	} else {
		console.log("b nhỏ hơn 3");
	}
} else {
	console.log("b khong bang 5");
	if (b < 2) {
		console.log("b có nhỏ hơn 2");
	} else {
		console.log("b có lớn hơn 2");
	}
}

// sử dụng kết hợp với logic operator (&&, ||, !)
if (b > 50 && b < 60) {
	console.log("điều kiện thỏa mãn &&");
}

if (b > 50 || b > 40) {
	console.log("điều kiện thỏa mãn ||");
}

// \! dấu phủ định điều kiện , ví dụ: !true -> false
const isLogged = false;
if (!isLogged) {
	console.log("bạn phải đăng nhập đi");
}

/**
 * tạo 1 function có chức năng kiểm tra chỉ số BMI
 * function nhận vào 2 tham số chiều cao, cân nặng
 * công thức tính BMI = cân nặng / (chiều cao x chiều cao)
 * hiển thị kết quả nếu:
 *  - BMI < 18,5 -> hiển thị người này là nhẹ cân
 *  - 18,5 <= BMI <= 24,9 -> thì hiển thị người này là bình thường
 *  - 25 <= BMI <= 29,9 -> thì hiển thị người này là thừa cân
 *  - 30 <= BMI <= 34,9 -> thì hiển thị người này là béo phì độ 1
 *  - BMI >= 35 -> thì hiển thị người này là béo phì độ 2 trở lên
 */

// ternary operator
// syxtax: condition ? ...code : ...code
// nên sử dụng khi mà ít điều kiện
b > 20
	? console.log("ternary operator thoa mãn")
	: console.log("ternary operator khong thoa mãn");
const tmp = b === 30 ? 50 : 60;
console.log("tmp: ", tmp);

// ----------------------------------

// switch ... case statement
/**
 * syntax
 * switch (expression) {
    case value1:
      // Code to be executed if expression matches value1
      break;
    case value2:
      // Code to be executed if expression matches value2
      break;
    // and so on...
    default:
      // Code to be executed if expression does not match any case
  }
*/

/**
 * Đây là cách nó hoạt động:
  - Biểu thức trong câu lệnh switch được tính toán một lần.
  - Giá trị của biểu thức được so sánh với các giá trị trong mỗi trường hợp (case).
  - Nếu có trùng khớp, khối mã tương ứng sẽ được thực thi.
  - Nếu không có trùng khớp, khối mã mặc định sẽ được thực thi.
 */

// break: là 1 keyword trong js dùng để thoát khỏi câu lệnh switch

const day = "Monday";
switch (day) {
	case "Tuesday":
		console.log("Today is Tuesday");
		break;
	case "Monday":
		console.log("Today is Monday");
		break;
	case "Wednesday":
		console.log("Today is Wednesday");
		break;
	default:
		console.log("Today is a different day");
}

/**
 * Tạo function kiểm tra học lực
 * function này nhận vào tham số xếp loại học lực (a, b,c...)
 * Hiển thị kết quả:
 * - Nếu học lực đạt loại A thì là xuất sắc
 * - Nếu học lực đạt loại B thì là giỏi
 * - Nếu học lực đạt loại C thì là khá
 * - Nếu học lực đạt loại D thì là yếu
 * - Nếu học lực đạt loại E thì là kém
 */


