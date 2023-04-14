const navMenu = document.getElementById("navbar");
const menuBar = document.getElementById("menu-bar");
const menuList = document.getElementById("nav-links");

menuBar.addEventListener("click", function (e) {
  console.log("changing  menu display");

  if (menuList.style.display == "flex") {
    menuList.style.display = "none";
    navbar.style.height = "6vh";
  } else {
    menuList.style.display = "flex";
    navbar.style.height = "25vh";
  }
});
