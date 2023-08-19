const toggle = document.querySelector(".toggle_btn");
const nav = document.querySelector("nav");
const navbar = document.querySelector(".nav_list_container");
const contactBtn = document.getElementById("contact_btn");

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

contactBtn.addEventListener("click", () => {
  var params = {
    name: document.getElementById("name_input").value,
    email: document.getElementById("email_input").value,
    message: document.getElementById("msg_input").value,
  };

  const serviceID = "service_d2az4he";
  const template1D = "template_iwejtd5";

  emailjs
    .send(serviceID, template1D, params)
    .then((res) => {
      document.getElementById("name_input").value = "";
      document.getElementById("email_input").value = "";
      document.getElementById("msg_input").value = "";
      console.log(res);
      alert("your message sent successfully");
    })
    .catch((err) => console.log(err));
});
// function sendMail() {}
