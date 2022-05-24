const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const list = document.querySelector('#ingredients');


// ingredients.forEach(item => {
//     const itemEl = document.createElement('li');
//     itemEl.textContent = item;
//     itemEl.classList.add('item');

//     list.append(itemEl);
// });
// console.log(list);

// const list = document.querySelector(`#ingredients`);
// const elements = [];
// for (let i = 0; i < ingredients.length; i +1) {
// 	const option = ingredients[i];
// 	const navEl = document.createElement(`li`);
// 	navEl.classList.add("item");
// 	navEl.textContent = option;
// }	

// console.log(elements);
// list.append(...elements);

const list = document.querySelector(`#ingredients`);	
const elements = ingredients.map(option => {
	const navEl = document.createElement(`li`);
	navEl.classList.add("item");
	navEl.textContent = option;

	return navEl;
});

console.log(list);
list.append(...elements);
