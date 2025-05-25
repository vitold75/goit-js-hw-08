const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach(function(category) {
    const title = category.querySelector("h2").textContent;
    const itemContent = category.querySelectorAll("li").length;

console.log(`Category: ${title}`);
console.log(`Elements: ${itemContent}`);
});

