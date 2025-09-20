const menuBtn = document.querySelector(".menubtn")
const menu = document.querySelector(".mobile");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active")
  console.log("done")
})
