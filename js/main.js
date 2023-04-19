const scroller = document.querySelector('.header');
const mobileScroller = document.querySelector('.mobile-header');
const bannerOut = document.querySelector('.banner');
const searchIcon = document.querySelector('.search');
const searchActive = document.querySelector('.search__bg');
const searchClose = document.querySelector('.search__bg i');

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
  autoplay: {
    delay: 4000,
  },
  loop: true,

  // Default parameters
  spaceBetween: 50, // 슬라이드 사이 여백
  slidesPerView: 3, // 한 슬라이드에 보여줄 갯수
  // Responsive breakpoints
  breakpoints: {
    1170: {
      slidesPerView: 3,
      spaceBetween: 10,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    480: {
      slidesPerView: 1,
      spaceBetween: 50,
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
  },
});

const newSwiper = new Swiper('.new-swiper', {
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한 슬라이드에 보여줄 갯수
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: true,
  loopAdditionalSlides: 1,

  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },

  breakpoints: {
    1170: {
      spaceBetween: 30, // 슬라이드 사이 여백
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    320: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

// hamburger menu-bar

const hamburgerBar = document.querySelector('.hamburger-button');
const overlay = document.querySelector('.overlay');

hamburgerBar.addEventListener('click', () => {
  hamburgerBar.classList.toggle('.on');
  overlay.classList.toggle('visible');
});
