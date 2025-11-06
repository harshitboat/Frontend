const box = document.getElementById("box");
const message = document.getElementById("message");

box.addEventListener("click", () => {
  box.style.backgroundColor = "green";
  message.textContent = "Box clicked!";
});


