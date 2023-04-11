function saveObjectToLocalStorage() {
  const key = prompt("Enter a key for storing the object:");
  const object = JSON.parse(prompt("Enter an object to store:"));

  localStorage.setItem(key, JSON.stringify(object));
}
saveObjectToLocalStorage();
