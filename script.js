const toggle = document.querySelector(".toggle_btn");

toggle.addEventListener("click", function () {
  const navbar = document.querySelector(".nav_list_container");
  const logo = document.querySelector(".logo_container");
  navbar.classList.toggle("show");
  logo.classList.toggle("hide");
});
