const toggle = document.querySelector(".toggle_btn");
const skill_btn = document.querySelector(".skill_link");
const tab_links = document.querySelector(".tab_links");
const tab_content = document.querySelector(".tab_content");
const skill = document.querySelector(".skill_co");
const experience = document.querySelector(".exp_co");
const education = document.querySelector(".edu_co");
const ski = document.getElementById("skills");
const exp = document.getElementById("experience");
const edu = document.getElementById("education");

toggle.addEventListener("click", function () {
  const navbar = document.querySelector(".nav_list_container");
  const logo = document.querySelector(".logo_container");
  const header = document.querySelector(".header_text_container");
  navbar.classList.toggle("show");
  logo.classList.toggle("hide");
  header.classList.toggle("blur");
});

// skill.addEventListener("click", () => {
//   if (skill == tab_content) {
//     ski.classList.add("skill_con");
//   }
// });
// experience.addEventListener("click", () => {
//   if()
// })

skill.addEventListener("click", () => {
  tab_links.classList.remove("skill_link");
  tab_content.classList.remove("skill_con");
  event.currentTarget.classList.add("skill_link");
  ski.classList.add("skill_con");
});

experience.addEventListener("click", () => {
  tab_links.classList.remove("skill_link");
  tab_content.classList.remove("skill_con");
  event.currentTarget.classList.add("skill_link");
  exp.classList.add("skill_con");
});
education.addEventListener("click", () => {
  tab_links.classList.remove("skill_link");
  tab_content.classList.remove("skill_con");
  event.currentTarget.classList.add("skill_link");
  edu.classList.add("skill_con");
});

// function openTab(tabName) {
//   event.currentTarget.classList.add("skill_link");
//   document.getElementById(tabName).classList.add("skill_con");
// }
