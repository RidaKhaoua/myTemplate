let menuTogle = document.querySelector(".Menu-toggle");
let nav = document.querySelector(".nav-bar > ul");
console.log(nav);
console.log(menuTogle);
menuTogle.addEventListener("click", toggle);

function toggle() {
  if (!nav.classList.contains("toggle")) {
    nav.classList.remove("hidden-togle-menu");
    nav.classList.add("toggle");
    nav.classList.add("show-toggle-menu");
    for (let i = 0; i < nav.childElementCount; i++) {
      nav.children[i].classList.add("li-margin");
      nav.children[i].children[0].classList.add("a-display");
    }
  } else {
    nav.classList.add("hidden-togle-menu");
    setTimeout(() => {
      nav.classList.remove("toggle");
    }, 3000);
  }
}
