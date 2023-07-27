const NumberOfCategiries = document.querySelectorAll(".item");
console.log(`Numbers of categories: ${NumberOfCategiries.length}`);

NumberOfCategiries.forEach(function (element) {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
