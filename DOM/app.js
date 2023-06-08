let titleEl = document.getElementById("title");
// console.dir(titleEl);

let pEl = document.querySelector(".cool");
// console.log(pEl);

let commentEls = document.querySelectorAll(".comment");
// console.log(commentEls);

// let li = document.getElementsByTagName('li');
// console.log(li);

for (let commentEl of commentEls) {
  // console.log(commentEl);
}

let li = document.getElementsByTagName("li");

let myArray = Array.prototype.slice.call(li, 0, 3);
// console.log(myArray);

for (let commentEl of commentEls) {
  commentEl.style.fontSize = "30px";
  commentEl.style.color = "red";
  commentEl.style.border = "2px solid yellow";
}

let comment = document.getElementById("comments");

// console.log(comment.firstChild);

const newLi = document.createElement("li");
newLi.innerText = "Hello, Theo!";
// comment.append(newLi);

const body = document.querySelector("body");
const exDiv = document.createElement("div");
const exOL = document.createElement("ol");
const exLI = document.createElement("li");

exDiv.append(exOL);

for (let i = 1; i <= 3; i++) {
  exOL.append(exLI);
}

body.append(exDiv);
