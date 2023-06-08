let titleEl = document.getElementById("title");
// console.dir(titleEl);

let pEl = document.querySelector(".cool");
// console.log(pEl);

let commentEls = document.querySelectorAll(".comment");
// console.log(commentEls);

// let li = document.getElementsByTagName('li');
// console.log(li);


for(let commentEl of commentEls) {
	console.log(commentEl);
}

let li = document.getElementsByTagName('li');

let myArray = Array.prototype.slice.call(li, 0, 3);
console.log(myArray);
