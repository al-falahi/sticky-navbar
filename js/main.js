const navbar = document.getElementById("navbar");
const topOfNavbar = navbar.offsetTop;
const body = document.querySelector("body");

function stickyNavbar() {
  if (window.scrollY >= topOfNavbar) {
    body.style.paddingTop = navbar.offsetHeight + "px";
    body.classList.add("fixed");
  } else {
    body.style.paddingTop = 0;
    body.classList.remove("fixed");
  }
}

window.addEventListener("scroll", stickyNavbar);
