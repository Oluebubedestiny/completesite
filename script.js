const toggle = document.querySelector(".toggle_btn");
const nav = document.querySelector("nav");
const navbar = document.querySelector(".nav_list_container");

toggle.addEventListener("click", () => {
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

// navbar.querySelectorAll("a li").forEach((navLink) => {
//   navLink.addEventListener("click", () => {});
// });
