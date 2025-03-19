//your JS code here. If required.

let text = document.querySelector("#text");
let delay = document.querySelector("#delay");
let submitBtn = document.querySelector("#btn");
let outputMsg = document.querySelector("#output");

submitBtn.addEventListener("click", (e) => {
	e.preventDefault();
	setTimeout(() => {
		outputMsg.textContent = text.value;
	}, delay.value);
});
