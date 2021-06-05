let menuTogle = document.querySelector(".Menu-toggle");
let nav = document.querySelector(".nav-bar > ul");
let imagesDescr = document.querySelector(".content > .images");
console.log(imagesDescr.children);

window.addEventListener("scroll", () => {
  console.log(Math.floor(window.scrollY));
  if (Math.floor(window.scrollY) >= 420) {
    // for (let i = 0; i < imagesDescr.childElementCount; i++) {
    //   imagesDescr.children[i].classList.add("animated-img");
    // }
    imagesDescr.classList.add("animated-img");
  } else {
    imagesDescr.classList.remove("animated-img");
  }
});

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
