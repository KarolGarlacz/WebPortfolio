// NAV

var nav = document.getElementById("nav");

window.onscroll = function () {
  if (window.pageYOffset > 80) {
    nav.style.background = "white";
    nav.style.boxShadow = "0 10px 20px rgba(0,0,0,.2)";
  } else {
    // nav.style.backgroundColor = "transparent";
    nav.style.boxShadow = "none";
  }
};

// SHOW NAV - DISPLAY BLOCK

const hamB = document.querySelector(".burger");

hamB.addEventListener("click", () => {
  document.querySelector(".navbar").classList.toggle("show");
});

// TOGGLE SWITCH BURGER

const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");

hamB.addEventListener("click", () => {
  iconBurger.classList.toggle("up");
  iconX.classList.toggle("up");
});

// HEADER OPACITY

$(document).ready(() => {
  $(window).scroll(() => {
    $(".home").css("opacity", 1 - $(window).scrollTop() / 700);
  });
});

// SEARCHING FOR PROJECTS - FUNCTION

const filterButtons = document.querySelector("#filter-btns").children;

const items = document.querySelector(".portfolio-gallery").children;

for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    for (let j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove("active");
    }
    this.classList.add("active");

    const target = this.getAttribute("data-target");
    for (let k = 0; k < items.length; k++) {
      items[k].style.display = "none";

      if (target == items[k].getAttribute("data-id")) {
        items[k].style.display = "block";
        console.log(target);
      }
      if (target == "all") {
        items[k].style.display = "block";
      }
    }
  });
}
