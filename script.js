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

const toggle = document.getElementById("check");
const darkModeBtn = document.querySelector(".dark-mode");

function darkMode() {
  document.body.classList.toggle("dark");
  darkModeBtn.classList.toggle("fa-moon");
  darkModeBtn.classList.toggle("fa-sun");
  const isDarkMode = document.body.classList.contains("dark");
  // Save dark mode preference to localStorage
  localStorage.setItem("darkMode", isDarkMode);
  // Update the checkbox state
  toggle.checked = isDarkMode;
}

// dark mode

darkModeBtn.addEventListener("click", darkMode);

toggle.addEventListener("change", darkMode);
const isDarkmode = localStorage.getItem("darkMode") === "true";

if (isDarkmode) {
  document.body.classList.add("dark");
  darkModeBtn.classList.toggle("fa-moon");
  darkModeBtn.classList.toggle("fa-sun");
  toggle.checked = true;
}
