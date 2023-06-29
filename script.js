const navMenu = document.getElementById("navbar");
const menuBar = document.getElementById("menu-bar");
const menuList = document.getElementById("nav-links");

menuBar.addEventListener("click", function (e) {
  if (menuList.style.display == "flex") {
    menuList.style.display = "none";
    navbar.style.height = "6vh";
  } else {
    menuList.style.display = "flex";
    navbar.style.height = "25vh";
  }
});

const project1ReadMore = document.getElementById("project1-read-more");

project1ReadMore.addEventListener("click", function() {
  const project1MoreInfo = document.getElementById("project1-more-info");

  if (project1MoreInfo.style.display == "block") {
    project1ReadMore.innerText = "Read More...";
    project1MoreInfo.style.display = "none";
  } else {
    project1ReadMore.innerText = "Read Less...";
    project1MoreInfo.style.display = "block";
  }

})
