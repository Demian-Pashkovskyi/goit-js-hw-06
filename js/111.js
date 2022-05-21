const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
 ];
 const list = document.querySelector(`ul`);
 
 const option = ingredients[0];
 console.log(list);
 
 // console.log(ingredients);
 // console.log(ingredients[0]);
 
 1
 const navEl = document.createElement(`li`);
 2
 console.log(navEl);
 navEl.textContent = option;
 // navEl.textContent = ingredients[1];
 
 // list.append(navEl);
 
 3
 
 navEl.classList.toggle("item"); 
 
 console.log(document.body.children[1]);
 4
 document.body.children[1].appendChild(navEl);
 // document.body.children[1].after(navEl.ingredients);
 
 // const elements = [];
 // for (let i = 0; i < ingredients.length; i += 1) {
 // 	const option = ingredients;
 // 	const navEl = document.createElement(`li`);
 // 	navEl.textContent = option;
 // 	navEl.classList.add("item"); 
 // 	console.log(navEl);
 // 	document.body.children[1].appendChild(navEl);
 // }
 
 
