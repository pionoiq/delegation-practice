const data = [
  {
    id: 1,
    src: "visual1.jpg",
    alt: "모던한 테이블과 화분의 조화를 표현한 공간",
  },
  {
    id: 2,
    src: "visual2.jpg",
    alt: "강렬한 의자의 색상과 따뜻한 느낌의 공간",
  },
  {
    id: 3,
    src: "visual3.jpg",
    alt: "호텔 라운지 느낌의 편안한 의자가 있는 공간",
  },
  {
    id: 4,
    src: "visual4.jpg",
    alt: "물방을 모양의 독특한 디자인의 의자들을 나열한 공간",
  },
];

// 제이쿼리를 안 쓰게 되는 이유

// 1. 너무 무거움
// 2. 자바스크립트가 점점 쉬워짐
// 3. pure javascript를 잘 못 쓰는 사람이 별로 없음
// 4. Single Page Appication 불가능 // react,vue,angular,svelt

// 그나마 제이쿼리가 비동기통신(ajax)이 편했지만 현재 fetch API(+Axios) 등장
// 그래도 생산성 때문에 여전히 많은 회사에서 사용

// $(".navigation").on("click", "li", function (e) {
//   e.preventDefault();

//   const index = $(this).attr("data-index");

//   $(".navigation > li").removeClass("is-active");

//   $(this).addClass("is-active");

//   $(".visual img").attr("src", `./assets/part01/${data[index - 1].src}`);
//   $(".visual img").attr("alt", data[index - 1].alt);

//   // return false;
// });

// const box=document.querySelector('.box');

// jQuery method => jquery object.addClass()

$(".navigation > li").click(function (e) {
  e.preventDefault();

  const index = $(this).index();

  $(".navigation > li").removeClass();
  $(this).addClass("is-active");

  $(".visual img").attr({
    src: `./assets/part01/${data[index].src}`,
    alt: data[index].alt,
  });
});
