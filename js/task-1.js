const categories = document.querySelectorAll('.item');

console.log('Number of categories:', categories.length);

categories.forEach(category => {
  const title = category.querySelector('h2');
  console.log('Category:', title.textContent);

  const element = category.querySelectorAll('li');
  console.log('Elements:', element.length);
});
