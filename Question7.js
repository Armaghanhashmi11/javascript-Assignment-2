const myObject = getObjectFromLocalStorage("my-object"); // Get the object from localStorage with the key 'my-object'
function getObjectFromLocalStorage(key) {
  const objectString = localStorage.getItem(key);
  return JSON.parse(objectString);
}
console.log(myObject); // Output the object to the console
