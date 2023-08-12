const toggle = document.querySelector(".toggle_btn");
const nav = document.querySelector("nav");

toggle.addEventListener("click", function () {
  const navbar = document.querySelector(".nav_list_container");
  const logo = document.querySelector(".logo_container");
  const header = document.querySelector(".header_text_container");
  navbar.classList.toggle("show");
  logo.classList.toggle("hide");
  header.classList.toggle("blur");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.classList.add("windows_scroll");
  } else nav.classList.remove("windows_scroll");
});
