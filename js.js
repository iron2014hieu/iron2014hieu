let $slider = document.querySelector(".slider");
let $header = document.querySelector(".hiddensl");
window.addEventListener("scroll", function () {
  let scrolltop = document.querySelector("html").scrollTop;
  if (scrolltop > $slider.offsetHeight - $header.offsetHeight) {
    $header.style.background = "rgba(0,0,0,0.8)";
  } else {
    $header.style.background = "none";
  }
});
// let $s = document.querySelector("#test");

// window.addEventListener("click", function () {
//   var docHeight = $(document).height(),
//     docWidth = $(document).width(),
//     $div = $("#test"),
//     divWidth = $div.width(),
//     divHeight = $div.height(),
//     heightMax = docHeight - divHeight,
//     widthMax = docWidth - divWidth;

//   $div.css({
//     left: Math.floor(Math.random() * widthMax),
//     top: Math.floor(Math.random() * heightMax),
//   });
// });

let toTopBtn = document.querySelector(".back-top-img");

toTopBtn.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

let scrolls = 0;
window.addEventListener("scroll", function () {
  if (document.body.getBoundingClientRect().top > scrolls) {
    document.querySelector(".back-topz").classList.remove("active");
  } else {
    document.querySelector(".back-topz").classList.add("active");
  }
  scrolls = document.body.getBoundingClientRect().top;
});
