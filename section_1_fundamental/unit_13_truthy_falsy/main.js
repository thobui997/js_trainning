// giá trị falsy gồm 6 giá trị ở phía dưới
if(null) {
  console.log("run 1");
}

if(undefined) {
  console.log("run 2");
}

if(0) {
  console.log("run 3"); 
}

if("") {
  console.log("run 4");
}

if (false) {
  console.log("run 5");
}

if (NaN) {
  console.log("run 6");
}

const name = null;
if(!name) { // name === null
  console.log("khong ton tai gia name");
}

// truthy các giá trị ngược lại với falsy

const name1 = "hieu";
if(name1) {  // name1 === "hieu"
  console.log("name 1 co gia tri");
}