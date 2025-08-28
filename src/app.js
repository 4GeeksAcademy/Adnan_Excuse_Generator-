let categories = [
  ["The dog", "My grandma", "The mailman", "My bird"],
  ["ate", "peed on", "crushed", "broke"],
  ["my homework", "my phone", "the car"],
  ["before the class", "when I was sleeping", "while I was exercising", "during my lunch", "while I was praying"]
];

function getRandomExcuse() {
  let excuse = categories.map(arr => arr[Math.floor(Math.random() * arr.length)]).join(" ");
  return excuse + ".";
}

document.addEventListener("DOMContentLoaded", function () {
  const excuseEl = document.querySelector("#excuse");
  const buttonEl = document.querySelector("#generate-btn");


  excuseEl.innerHTML = "Click the button to get an excuse!";

  buttonEl.addEventListener("click", function () {
    excuseEl.innerHTML = getRandomExcuse();
  });
});
