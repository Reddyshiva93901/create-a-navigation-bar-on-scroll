const navbar = document.getElementById("navbar");
let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    navbar.classList.add("show-navbar");
  } else {
    navbar.classList.remove("show-navbar");
  }
  prevScrollPos = currentScrollPos;
});
