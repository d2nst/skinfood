const scroller = document.querySelector('.header');
const bannerOut = document.querySelector('.banner');
const searchIcon = document.querySelector('.search');
const searchActive = document.querySelector('.search_bg');
const searchClose = document.querySelector('.search_bg i');

searchIcon.addEventListener('click', () => {
  searchActive.classList.toggle('active');
});

searchClose.addEventListener('click', () => {
  searchActive.classList.remove('active');
});

window.addEventListener('scroll', () => {
  if (window.scrollY >= 35) {
    scroller.style.paddingTop = `0`;
    scroller.style.height = `100px`;
    bannerOut.style.display = `none`;
    scroller.style.borderBottom = `1px solid #eaeaea`;
    scroller.style.backgroundColor = `rgba(255, 255, 255, 0.6)`;
  } else {
    scroller.style.paddingTop = `35px`;
    scroller.style.height = `120px`;
    scroller.style.backgroundColor = `#fff;`;
    scroller.style.borderBottom = `none`;
    bannerOut.style.display = `block`;
  }
});

// swiper JS
const swiper = new Swiper('.swiper', {
  spaceBetween: 50, // 슬라이드 사이 여백
  slidesPerView: 3, // 한 슬라이드에 보여줄 갯수
  autoplay: {
    delay: 4000,
  },
  loop: true,
});
