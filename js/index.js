function onResize() {
  if (window.innerWidth >= 1000) {
   // console.log("larg");    
    document
      .querySelectorAll(".dropdown-menu .dropdown-toggle")
      .forEach(function (dropdown) {
        dropdown.addEventListener("click", function (e) {
          e.stopPropagation();
        });
      });
    document
      .querySelectorAll(".nav-item.dropdown")
      .forEach(function (dropdown) {
        dropdown.addEventListener("mouseover", function () {
          dropdown.querySelector(".dropdown-menu").classList.add("show");
        });
        dropdown.addEventListener("mouseleave", function () {
          dropdown.querySelector(".dropdown-menu").classList.remove("show");
        });
      });
    document
      .querySelectorAll(".dropdown-menu .dropdown")
      .forEach(function (nestedDropdown) {
        nestedDropdown.addEventListener("mouseover", function () {
          nestedDropdown.querySelector(".dropdown-menu").classList.add("show");
        });
        nestedDropdown.addEventListener("mouseleave", function () {
          nestedDropdown
            .querySelector(".dropdown-menu")
            .classList.remove("show");
        });
      });
  } else {
  //  console.log("small");
    
    document
      .querySelectorAll(".dropdown-menu .dropdown-toggle")
      .forEach(function (dropdown) {
        dropdown.addEventListener("click", function (e) {
          e.stopPropagation();
        });
      });
  }
}
window.addEventListener("resize", onResize);

onResize();

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
