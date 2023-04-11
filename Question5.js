<button id="my-button" onclick="changeColor()">
  Click me to change color
</button>;
function changeColor() {
  const button = document.getElementById("my-button"); // Get a reference to the button element
  button.style.backgroundColor = "green"; // Change the background color of the button
}
