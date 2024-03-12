const menuIcon = document.getElementById("menu-icon");
const Lines = document.querySelectorAll(".no-animation");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");

  Lines.forEach((line) => {
    Line.classList.remove("no-animation");
  });
});
