function addNewParagraph(text) {
  const newParagraph = document.createElement('p');
  newParagraph.textContent = text;
  document.body.appendChild(newParagraph);
}
addNewParagraph('This is a new paragraph.');
