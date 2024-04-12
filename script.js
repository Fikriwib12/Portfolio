const hamburgerIcon = document.querySelector(".hamburger-icon");
const navList = document.querySelector("nav ul");
const navLink = document.querySelectorAll("nav ul li a");

hamburgerIcon.addEventListener("click", () => {
  navList.classList.toggle("tampil-nav-ul");
});

navLink.forEach((item) => {
  item.addEventListener("click", () => {
    navList.classList.remove("tampil-nav-ul");
  });
});

// dark mode
const darkModeBtn = document.querySelector(".dark-mode");
darkModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  darkModeBtn.classList.toggle("fa-moon");
  darkModeBtn.classList.toggle("fa-sun");
  const isDarkmode = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", isDarkmode);
});

const toggle = document.getElementById("check");

toggle.addEventListener("change", function () {
  document.body.classList.toggle("dark");
  darkModeBtn.classList.toggle("fa-sun");
  darkModeBtn.classList.toggle("fa-moon");
  const isDarkMode = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", isDarkMode);
});
const isDarkmode = localStorage.getItem("darkMode") === "true";

if (isDarkmode) {
  document.body.classList.add("dark");
  darkModeBtn.classList.toggle("fa-moon");
  darkModeBtn.classList.toggle("fa-sun");
}
