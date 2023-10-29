/// document: đối tượng document đại diện cho trang web hay ứng dụng web.
// - Nếu muốn truy cập bất kỳ phần tử nào trong HTML , thì ta luôn bắt đầu truy cập bằng document

// Truy cập 1 phần tử bằng thuộc tính id.
const h2Element = document.getElementById("h2"); // <=> querySelector("#h2");
console.log(h2Element);
const pElement = document.getElementById("paragraph");
console.log(pElement);

// Truy cập phần tử bằng tag name (tên thẻ html)
const h3List = document.getElementsByTagName("p"); // <=> querySelectorAll("p");
console.log(h3List);

// Truy cập phần tử bằng class name
const span = document.getElementsByClassName("test"); // <=> querySelectorAll(".test");
console.log(span); //

// Truy cập phần tử bằng CSS Selector
// querySelector sẽ trả về phần tử đầu tiên mà nó tìm thấy
const el1 = document.querySelector("div > p");
console.log(el1);
const el2 = document.querySelectorAll("#div > p");
console.log(el2);

/// thay đổi đổi nội dung của HTML
const menu = document.querySelector("#menu");
console.log(menu.innerHTML);
// innerHTML: là thuộc tính dùng để set or get các phần tử HTML vào phần tử mà nó đang tham chiếu đến
menu.innerHTML = `<li>gao</li>
                  <li>xoi</li>
                  <li>kem</li>
                  `;
const p1 = document.getElementById("p1");
p1.innerHTML = "<strong>lorem lorem lorem</strong>";

const p2 = document.getElementById("p2");
// textContent: là thuộc tính set or get nội dung văn bản thuần túy vào phần tử mà nó đang tham chiếu
p2.textContent = "lorem lorem lorem";
console.log(p1.textContent);

const menu1 = document.getElementById("menu1");
// createElement: tạo 1 phần tử html theo tag name
const li = document.createElement("li");
// thêm nội dung vào phần tử vừa tạo
li.textContent = "xoi xeo";
// appendChild: thêm 1 node (là phần tử html mà m tạo ra) vào cuối phần tử cha của nó
menu1.appendChild(li);

/// Thay đổi giá trị của 1 attribute trong 1 phần tử html
// attributes: là các thuộc tính trong 1 thẻ html (href, src, class, id, style,....)
const img = document.querySelector("#image");
img.src =
	"https://ik.imagekit.io/tvlk/blog/2021/09/du-lich-anh-8-1024x576.jpg?tr=dpr-2,w-675";

const link = document.getElementById("link");
link.href = "https://facebook.com";

console.dir(link);
console.log(img);

/// DOM css: m có thay đổi kiểu dáng, hình dạng, style của phần tử html bằng js
// vd: thay màu nền, thay đổi font,....
const body = document.body;
// css: background-color -> js: backgroundColor (camelCase)
body.style.backgroundColor = "green";
body.style.color = "#fff";

const box = document.getElementById("box");
box.textContent = "center";
// box.style.width = "100px";
// box.style.height = "100px";
// box.style.backgroundColor = "blue";
// box.style.display = "flex";
// box.style.justifyContent = "center";
// box.style.alignItems = "center";
body.style.cssText = "width: 100px; height: 100px; background-color: blue;";

const box1 = document.getElementById("box1");
const rmBtn = document.getElementById("rm");
console.dir(box1);

box1.addEventListener("click", function () {
	// classList truy cập đến danh sách class của phần tử html
	// add thêm các class css vào phần tử html
	this.classList.add("box1", "rounded");
});

rmBtn.addEventListener("click", function() {
  // remove: đê xóa các class trong phần tử html
  box1.classList.remove("rounded");
})


const box2 = document.getElementById("box2");
box2.addEventListener("click", function () {
  // toggle: remove class nếu có trong phần tử html và ngược lại.
	this.classList.toggle("box1");
	this.classList.toggle("rounded");
});