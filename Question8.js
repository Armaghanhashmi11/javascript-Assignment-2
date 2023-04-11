const myObject = { name: "John", age: 30, city: "New York" }; // Create an example object
const newObject = saveObjectPropertiesToLocalStorage(myObject); // Save each property to localStorage and return the object

function saveObjectPropertiesToLocalStorage(object) {
  // Loop through each property of the object
  for (const [key, value] of Object.entries(object)) {
    // Save the property value to localStorage using the property name as the key
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Create a new object to hold the retrieved values
  const newObject = {};

  // Loop through each property of the original object
  for (const key of Object.keys(object)) {
    // Retrieve the property value from localStorage using the property name as the key
    const value = JSON.parse(localStorage.getItem(key));

    // Add the property value to the new object using the property name as the key
    newObject[key] = value;
  }

  // Return the new object
  return newObject;
}
console.log(newObject); // Output the new object to the console
