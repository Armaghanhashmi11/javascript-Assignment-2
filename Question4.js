function addListItem(text) {
    const ul = document.querySelector('ul'); // Select the unordered list element
    const li = document.createElement('li'); // Create a new list item element
    li.textContent = text; // Set the text content of the new list item
    ul.appendChild(li); // Append the new list item to the unordered list
  }
  addListItem('This is new item');
