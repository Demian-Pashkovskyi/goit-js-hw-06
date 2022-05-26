const decBtn = document.querySelector('[data-action="decrement"]');
const inBtn = document.querySelector('[data-action="increment"]');
let counterValue = document.querySelector('#value');

let valEl = Number(counterValue.textContent);

inBtn.addEventListener('click', event => {
	valEl += 1;
	counterValue.textContent = valEl;
});

decBtn.addEventListener('click', event => {
	valEl -= 1;
	counterValue.textContent = valEl;
});



