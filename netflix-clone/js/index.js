// random background-image

var randomBgNumber = Math.floor(Math.random() * 7);

document.getElementById("hero").style.backgroundImage =
  "url(../img/bg_" + randomBgNumber + ".jpg)";
console.log(randomBgNumber);

var randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

//scroll event coding

console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.outerWidth);
console.log(window.outerHeight);

var scrollPoint = window.scrollY + window.innerHeight;

var tvText = document.getElementById("tv_text_li");
var offlineText = document.getElementById("offline_text_li");
var deviceText = document.getElementById("device_text_li");

function scrollAnimation() {
  // console.log(window.offsetY);
  // console.log(window.scrollY);
  // console.log(document.getElementById("tv_text_li").offsetTop);

  scrollPoint = window.scrollY + window.innerHeight;

  tvText = document.getElementById("tv_text_li");
  offlineText = document.getElementById("offline_text_li");
  deviceText = document.getElementById("device_text_li");

  // document.getElementById("scroll_position").innerHTML = scrollPoint;
  // document.getElementById("tvtext_position").innerHTML = tvText.offsetTop;
  // document.getElementById("offlinetext_position").innerHTML =
  //   offlineText.offsetTop;

  // TV로 즐기세요 텍스트 효과

  if (scrollPoint - tvText.offsetTop > 200) {
    tvText.style = "animation: fade_in_opacity 1.5s forwards";
  }

  if (scrollPoint - offlineText.offsetTop > 200) {
    offlineText.style = "animation: fade_in_opacity 1.5s forwards";
  }

  if (scrollPoint - deviceText.offsetTop > 200) {
    deviceText.style = "animation: fade_in_opacity 1.5s forwards";
  }
}
