function App({ $target }) {
  //슬라이드의 갯수지만 이걸 배열로 바꿔야한다.
  const slideLength = 10;

  //기본 배열 이 배열안에 들어가는 것들을 그려준다. 지금은 숫자로 되어 있지만 배열안에 인자를 바꾸는 것으로
  //뭐든 내보낼 수 있다.
  const slideSheet = [];

  //slideSheet 안에 숫자를 넣어주는 배열
  const slideSheetArr = (slideLength) => {
    for (let i = 1; i <= slideLength; i++) {
      slideSheet.push(i);
    }
  };
  //숫자를 배열안에 넣어줌
  slideSheetArr(slideLength);

  // 스와이퍼 한 아이템, 아이템 들을 만들어주고 있다.
  this.$swiperWrapper = document.createElement("div");
  this.$swiperWrapper.className = "swiper-wrapper";
  this.$swiperWrapper.innerHTML = `${slideSheet
    .map((e) => `<div class="swiper-slide"> slid ${e}</div>)`)
    .join("")}
    `;

  //스와이퍼 버튼을 만들어 주고 있어!
  this.$swiperPagination = document.createElement("div");
  this.$swiperPagination.className = "swiper-pagination";

  console.log(this.$swiperScript);
  $target.appendChild(this.$swiperWrapper);
  $target.appendChild(this.$swiperPagination);

  //버튼을 렌더링하는 중이야.
  this.render = () => {
    const swiper = new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + "" + "</span>";
        },
      },
    });
  };
  this.render();
}

export default App;
