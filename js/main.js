const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
// searchEl 안에서 input을 찾아라

console.log(searchEl);
console.log(searchInputEl);

searchEl.addEventListener('click', function () {
  //Logic 입력
  searchInputEl.focus(); // input 요소에 focus를 강제 적용
});

// Input이 포커스 되면 동작하고 serchEl에 'focused 클래스 추가'
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
  //setAttribute -> serchInputEl에 html 기능을 추가
});

// focus 이벤트 블러
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
  //setAttribute -> serchInputEl에 html 기능을 추가
});

// 일정 값 내려가면 badges가 없어 지게 하는 문법

const badgeEl = document.querySelector('.badges');
//window = 프로젝트 브라우저 창의 하나 window 객체는 브라우저의 명령들을 들고 있다
// 우리가 보고 있는 화면 자체 밑에 명령어 자체는 스크롤 할때 마다 스크롤 출력
// 화면이 버벅이는 것을 표현 될수 있어서  실행되는 여러개의 함수를 외부에서 제어 하는 목적
// lodash cdn 을 검색  _.throttle() 을 사용 할 수 있다
// .3초를 줘서 함수 실행이 우르르 되서 부하가 많이 먹게 만드는 것을 방지
window.addEventListener(
  'scroll',
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      //배지 숨기기
      // badgeEl.style.display = 'none';
      // gsap.to(요소, 지속시간, 옵션);
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: 'none',
      });
    } else {
      // 배지 보이기
      // badgeEl.style.display = 'block';
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: 'block',
      });
    }
  }, 300)
);

// _.throttle(함수, 시간)

//visual title, cup1, cup2, spoon fade-in

const fadeEls = document.querySelectorAll('.visual .fade-in');

console.log(fadeEls);

// fadeEls.각각을 fucntion 시키는데 이 요소 값을 fadeEl로 이름을 붙이고 작동 시킴
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션=>객체 데이터 {opacity:1 , back...});
  gsap.to(fadeEl, 1, {
    // (index + 1) * 0.7, 반복이 되면 0+1 *0.7 => 1+1 *0.7 / 점차 느리게 된다
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// new Swiper(선택자,옵션)  new = 자바스크립트 생성자 자바스크립트 클래스

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});
