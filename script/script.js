$(function(){
  //스크롤 시 헤더 변경
  const header = document.querySelector('#header');

  window.addEventListener('scroll', function() {
    let scroll_offset = window.scrollY;
    console.log(scroll_offset);

    if (scroll_offset > 1) {
        // header에 active클래스 생성
        header.classList.add('scroll_active');
    } else {
        // header에 active 클래스 제거
        header.classList.remove('scroll_active');
    }
  });


  //스크롤시 해당 메뉴 표시
  const $page = $('.page');  // 4개  : 0 1 2 3
  const $link = $('.header_nav li a'); // 4개 : 0 1 2 3

    // 새로고침시 스크롤탑 위치 0
  $(window).on('beforeunload', function() {
      $(window).scrollTop(0);
  });

  $link.eq(0).addClass('active');

  $(window).on('scroll', function() {
      $page.each(function(index) {
          // 현재창의 높이
          let $windowHeight = $(window).height();
          // 각페이지의 offset().top
          let $pageOffsetTop = $('.page').eq(index).offset().top;
          // 스크롤값 구하기
          let $scrollOffset = $(window).scrollTop();
          if ($pageOffsetTop < $windowHeight + $scrollOffset) {
              $link.removeClass('active');
              $link.eq(index).addClass('active');
          }
      });
  });

  //슬라이드
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
      scrollbar: {
          el: ".swiper-scrollbar",
          hide: true,
      },
      breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
  });

  //정지,재생
    $('.start').on('click',function(){
      swiper.autoplay.start();
    });
    $('.stop').on('click',function(){
      swiper.autoplay.stop();
    });

    const btnStop = document.querySelector('.stop');
    const btnStart = document.querySelector('.start');

          btnStop.addEventListener('click', function () {
              this.style.display = 'none';
              btnStart.style.display = 'block';
              // 스와이퍼슬라이드 멈춤
          });
          btnStart.addEventListener('click', function () {
              this.style.display = 'none';
              btnStop.style.display = 'block';
              // 스와이퍼슬라이드 재생
          });




// 스크롤 이벤트
$(window).on('scroll', function() {
            
  let $scroll_offset = $(window).scrollTop();
  let $window_height = $(window).height();

  const $title = $('.main_tit');

// 스크롤이 시작되는 순간 scrolltext 숨기기
 if ( $scroll_offset > 1) {
  $('#index .scrollbox').hide();
  } else {
  $('#index .scrollbox').show();
  }

// 타이틀요소에 반복문 처리
  $title.each(function() {
// 타이틀요소의 offset top 가져오기
  let $top = $(this).offset().top;

// 타이틀요소의 높이값 가져오기
  let $title_height = $(this).outerHeight();

  if ( $window_height + $scroll_offset > $top + $title_height) {
    $(this).addClass('on');
      } else {
    $(this).removeClass('on');
      }
    });
  });

});


///디자인-팝업창
document.addEventListener('DOMContentLoaded', () => {
  const popupTriggers = document.querySelectorAll('.popup-trigger');
  const popups = document.querySelectorAll('.popup');
  
  // 팝업 열기
  popupTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const popupClass = trigger.getAttribute('data-popup');
      const popup = document.querySelector(`.popup[data-popup="${popupClass}"]`);
      
      popup.style.display = 'flex';
      
    });
  });

  // 팝업 닫기
  const closeButtons = document.querySelectorAll('.close');
  closeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const popup = event.target.closest('.popup');

      popup.style.display = 'none';
    });
  });

  // 팝업 외부 클릭 시 닫기
  window.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup')) {
      event.target.style.display = 'none';
    }
  });
});