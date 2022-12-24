// swiper(image slide)
new Swiper(".banner-container", {
  effect: "fade",
  fadeEffect: {
    slideShadows: false,
  },
  speed: 400,
  spaceBetween: 100,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".banner-pagination",
    clickable: true,
  },
  spaceBetween: 0, // 이미지 사이  공백 없애기(= mergin 없앰)
  // 무한 슬라이드
  loop: true,
});

// 우클릭 방지
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

// scroll effect
const headerInner = document.querySelector(".header-inner");
const bannerWrap = document.querySelector(".banner_wrap");
const bannerWrapHeight = bannerWrap.getBoundingClientRect().height;
const arrowBtn = document.querySelector(".arrow-btn");

document.addEventListener("scroll", () => {
  if (window.scrollY > bannerWrapHeight / 2) {
    arrowBtn.classList.add("visible");
    headerInner.classList.add("active");
  } else {
    arrowBtn.classList.remove("visible");
    headerInner.classList.remove("active");
  }
});

arrowBtn.addEventListener("click", (e) => {
  document.body.scrollIntoView({ behavior: "smooth" });
});
