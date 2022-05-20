
const navEl = document.querySelector(`ul#categories`);
// console.log(navEl);
// console.log(navEl.children);
console.log(`Number of categories:`, navEl.children.length);
console.log(`Category:`, navEl.children[0].firstElementChild.textContent);
console.log(`Elements:`,navEl.children[0].lastElementChild.children.length);
console.log(`Category:`, navEl.children[1].firstElementChild.textContent);
console.log(`Elements:`,navEl.children[1].lastElementChild.children.length);
console.log(`Category:`, navEl.children[2].firstElementChild.textContent);
console.log(`Elements:`,navEl.children[2].lastElementChild.children.length);


