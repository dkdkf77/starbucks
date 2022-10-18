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
