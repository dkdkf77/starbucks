# starbucks


site : https://dkdkf77.github.io/starbucks/


### 클론 코딩하기

⭐️ 폴더 안에 파비콘.ico 파일이 있으면 보통의 브라우저 들은 자동 루트 연동되어 연결해준다

<hr/>

오픈 그래프? (The Open Graph protocol)

웹페이지가 소셜 미디어(페이스 북 등)로 공유 될 때 우선적으로 활용되는 정보를 지정 하는 것
ex ) 보통 카톡에서 공유 할때 보이는 이미지랑 정보를 표시 

<hr/>

트위터 카드?

웹페이지가 소셜 미디어(트위터)로 공유될 때 우선적으로 활용되는 정보를 지정합니다.

<hr/>

HTML 클래스 속성의 작명법

BEM(Block Element Modifier)

클래스를 이름 짓다보면 중복되는 부분이 많아 이런 형식으로 만들면 중복 되는 것을 줄일 수 있다

**요소__일부분 Underscore(Lodash) 기호로 요소의 일부분을 표시**

- item → item__name , item __contents → contents__menu

```html
<div class="container">
	<div class="container__name"></div>
	<div class="item">
		<div class="item__name"></div>
	</div>
</div>
```

**요소—상태 Hyphen(Dash) 기호로 요소의 상태를 표시**

```html

	<div class="btn btn--primary"></div>
	<div class="btn btn--success"></div>
	<div class="btn btn--error"></div>

```

**lodash cdn 을 추가 하여 여러개의 함수 출력시 한번에 호출 되는 것을 줄여 주어 부하를 많이 줄여 준다**

```jsx
const badgeEl = document.querySelector('.badges');
//window = 프로젝트 브라우저 창의 하나 window 객체는 브라우저의 명령들을 들고 있다
// 우리가 보고 있는 화면 자체 밑에 명령어 자체는 스크롤 할때 마다 스크롤 출력
// 화면이 버벅이는 것을 표현 될수 있어서  실행되는 여러개의 함수를 외부에서 제어 하는 목적
// lodash cdn 을 검색  _.throttle() 을 사용 할 수 있다
// .3초를 줘서 함수 실행이 우르르 되서 부하가 많이 먹게 만드는 것을 방지
window.addEventListener(
  'scroll',
  _.throttle(function () {
    console.log('scroll!');
  }, 300)
);

// _.throttle(함수, 시간)

//console.log(window.scrollY); 이런 식으로 명령어를 입력하면 스크롤에 따른 위치값 출력
```

**gsap cdn 을 추가 하여 자연스러운 애니메이션을 추가하는 자바스크립트 라이브러리** 

```jsx
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
				display: 'none'
      });
    } else {
      // 배지 보이기
      // badgeEl.style.display = 'block';
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
				display: 'block'
      });
    }
  }, 300)
);
```

https://user-images.githubusercontent.com/88579497/197165806-1e7fe3cd-3e7b-4e48-80d8-0a94cbcbcfa8.mov

Swiper JS 라이브러리 사용 
## **Swiper**

[Swiper](https://swiperjs.com/)는 하드웨어 가속 전환과 여러 기본 동작을 갖춘 현대적인 슬라이드 라이브러리입니다.

[Getting Started With Swiper](https://swiperjs.com/get-started)

> [2021.08.26 Updated]강의와 같이 Swiper 6버전을 사용합니다.7/8버전의 사용법이 다르기 때문에 6버전을 유지합니다.
> 

```jsx
<!-- in HEAD -->
<link rel="stylesheet" href="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.css" />
<script src="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.js"></script>

<!-- in BODY -->
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">1</div>
    <div class="swiper-slide">2</div>
    <div class="swiper-slide">3</div>
  </div>
</div>
```

[Swiper API](https://swiperjs.com/swiper-api)(옵션)을 확인하세요!

`new Swiper(요소, 옵션);`
```jsx
new Swiper('.swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});
```


### Swiper.js 기능 horizon 

```jsx
//swiper horizon 은 기본 값이므로 direction 값을 설정하지 않아도 된다

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 갯수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보기
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true, // 페이지 번호 요소 선택자 
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  },
});
```









