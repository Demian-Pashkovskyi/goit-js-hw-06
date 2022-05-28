

const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);

for (const item of totalCategories) {
	console.log(`Category: ${item.firstElementChild.textContent}`);
	const countItems = item.querySelectorAll("li").length;
	console.log(`Elements: ${countItems}`);
}