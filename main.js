// use swiper
new Swiper(".banner-container", {
  effect: 'fade',
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
    clickable: true
  },
  spaceBetween: 0, // 이미지 사이  공백 없애기(= mergin 없앰) 
  // 무한 슬라이드
  loop: true,
  loopAdditionalSlides: 2,
});

// 우클릭 방지
document.addEventListener('contextmenu', (e) => {
    e.preventDefault()
})