let menuTogle = document.querySelector(".Menu-toggle"),
  nav = document.querySelector(".nav-bar > ul"),
  imagesDescr = document.querySelector(".content > .images"),
  scrollTop = document.querySelector(".scroll-top"),
  numberHouses = document.querySelector(".number-housses > p"),
  numberBuy = document.querySelector(".number-buy > p");
let play;
function numberCouteHouses() {
  if (Math.floor(window.scrollY) >= 3890) {
    if (numberHouses.textContent < 300) {
      numberHouses.textContent = +numberHouses.textContent + 1;
    }
    if (numberBuy.textContent < 200) {
      numberBuy.textContent = +numberBuy.textContent + 1;
    }
    if (numberHouses.textContent >= 300) {
      clearInterval(play);
    }
  }
}

window.addEventListener("scroll", () => {
  play = setInterval(numberCouteHouses, 500);
});

scrollTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (Math.floor(window.scrollY) >= 420) {
    for (let i = 0; i < imagesDescr.childElementCount; i++) {
      switch (i) {
        case 0:
          imagesDescr.children[i].classList.add("animated-img");
          setTimeout(() => {
            imagesDescr.children[i].style.opacity = "1";
          }, 1000);
          break;
        case 1:
          imagesDescr.children[i].classList.add("animated-img");
          imagesDescr.children[i].style.animationDelay = "2s";
          setTimeout(() => {
            imagesDescr.children[i].style.opacity = "1";
          }, 2000);
          break;
        case 2:
          imagesDescr.children[i].classList.add("animated-img");
          imagesDescr.children[i].style.animationDelay = "4s";
          setTimeout(() => {
            imagesDescr.children[i].style.opacity = "1";
          }, 4000);
          break;
        case 3:
          imagesDescr.children[i].classList.add("animated-img");
          imagesDescr.children[i].style.animationDelay = "6s";
          setTimeout(() => {
            imagesDescr.children[i].style.opacity = "1";
          }, 6000);

          break;

        default:
          break;
      }
    }
  }
});

window.addEventListener("scroll", () => {
  if (Math.floor(window.scrollY) >= 838) {
    scrollTop.style.opacity = "1";
  } else {
    scrollTop.style.opacity = "0";
  }
});

// window.addEventListener("scroll", setInterval(numberCouteHouses, 20));

menuTogle.addEventListener("click", toggle);

function toggle() {
  if (!nav.classList.contains("toggle")) {
    nav.classList.remove("hidden-togle-menu");
    nav.classList.add("toggle");
    nav.classList.add("show-toggle-menu");
    for (let i = 0; i < nav.childElementCount; i++) {
      nav.children[i].classList.add("li-margin");
      nav.children[i].children[0].classList.remove("link");
      nav.children[i].children[0].classList.add("a-display");
    }
  } else {
    nav.classList.add("hidden-togle-menu");
    setTimeout(() => {
      nav.classList.remove("toggle");
    }, 500);
  }
}
