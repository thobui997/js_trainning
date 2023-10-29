// b1: khởi tạo 1 danh sách màu sắc bất kỳ
const colors = ["green", "red", "#098abc", "rgb(122, 90, 10)", "#fde456"];

// b2: đăng ký sự kiện cho nút thay đổi màu sắc.
const btnChangeColor = document.getElementById("color-flipper");
const textColor = document.getElementById("color");

// event listener: mouses (click, context menu, dbclick,...), keyboards, window,...
// addEventListener: là method để đăng ký 1 event cho 1 phần tử
// addEventListener: nhận vào 2 tham số gọi p1, p2
//    - p1: tên sự kiện muốn đăng ký cho phần tử html (click, dbclick,...)
//    - p2: là function sẽ được thực thi khi sự kiện xảy ra.

const getColor = () => {
	const randomIndex = Math.floor(Math.random() * colors.length);
	return colors[randomIndex];
};

const changeColor = function () {
  const color = getColor();
	document.body.style.backgroundColor = color;
  textColor.textContent = color;
  textColor.style.color = color;
};

btnChangeColor.addEventListener("click", changeColor);
