const scroller = document.querySelector('.header');
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
  spaceBetween: 50, // 슬라이드 사이 여백
  slidesPerView: 3, // 한 슬라이드에 보여줄 갯수
  autoplay: {
    delay: 4000,
  },
  loop: true,
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
});

// product.html - 상세페이지 펼쳐보기
window.onload = function () {
  // 초기 이미지 높이 설정

  const detail = document.querySelector('.detail');
  detail.style.height = '900px';

  // 상세보기 버튼 클릭 시 이미지 높이 전체/1000px로 설정
  document.querySelector('.btn-open').addEventListener('click', function (e) {
    e.preventDefault();
    const detail = document.querySelector('.detail');
    const currentHeight = parseInt(window.getComputedStyle(detail).height);
    const newHeight =
      currentHeight === 900
        ? parseInt(
            window.getComputedStyle(detail.querySelector('.content')).height
          )
        : 1000;
    detail.style.transition = 'height 0.5s ease-in-out';
    detail.style.height = newHeight + 'px';

    const scrollY = window.scrollY;
    window.scrollTo(0, scrollY);
  });
};

// product.html - rating__bar
const progressBars = document.querySelectorAll('.progress-bar');

progressBars.forEach((progressBar) => {
  const targetRate = progressBar.getAttribute('data-num');
  const progressValue = progressBar.querySelector('.progress-value');
  progressValue.style.width = `${targetRate}%`;
});
