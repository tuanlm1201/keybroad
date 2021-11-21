const btn__scrollTop = document.querySelector(".btn__scrollTop");

//when scrolling down, show button scroll top
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    btn__scrollTop.classList.add("show-scroll");
  } else {
    btn__scrollTop.classList.remove("show-scroll");
  }

  //create button scroll top position
  btn__scrollTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const sections__links = document.querySelectorAll(".nav-menu__link");

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  sections.forEach(function (section) {
    const sectionId = section.getAttribute("id");
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop - 100 &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      sections__links.forEach(function (link) {
        link.classList.remove("nav-menu__link--active");
        if (link.getAttribute("href") === "#" + sectionId) {
          link.classList.add("nav-menu__link--active");
        }
      });
    }
  });
});

/*=============== Show menu when click btn toggle menu ===============*/
const btn__toggleMenu = document.querySelector(".nav__toggle");
const nav__menu = document.querySelector(".nav-menu");
const btn__closeMenu = document.querySelector(".nav__close");
const nav__menu__links = document.querySelectorAll(".nav-menu__link");

function showMenu() {
  nav__menu.classList.toggle("show-menu");
}
btn__toggleMenu.addEventListener("click", showMenu);

/*=============== Hide menu when click btn close menu ===============*/
btn__closeMenu.addEventListener("click", showMenu);

/*=============== Hide menu when click btn nav link ===============*/
nav__menu__links.forEach(function (link) {
  link.addEventListener("click", showMenu);
});

