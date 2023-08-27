let lists = document.querySelectorAll(".list");
let rightBox = document.querySelector("#right");
let leftBox = document.querySelector("#left");
let selected = null;

// Set up dragstart event listeners for the items
lists.forEach((list) => {
  list.addEventListener("dragstart", (e) => {
    selected = e.target;
  });
});

// Set up dragover and drop event listeners for the right box
rightBox.addEventListener("dragover", (e) => {
  e.preventDefault();
});

rightBox.addEventListener("drop", (e) => {
  e.preventDefault();
  rightBox.appendChild(selected);
  selected = null;
});

// Set up dragover and drop event listeners for the left box
leftBox.addEventListener("dragover", (e) => {
  e.preventDefault();
});

leftBox.addEventListener("drop", (e) => {
  e.preventDefault();
  leftBox.appendChild(selected);
  selected = null;
});
