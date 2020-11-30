var faqList = document.getElementsByClassName("faq_list");
var openStateIcon = document.getElementsByClassName("openstate_icon");
var openState = [0, 0, 0, 0, 0, 0]; // List 오픈 상태 저장 배열 변수

function accOpen(clickNumber) {
  // if ( openState[clickNumber] == 0)
  //    {
  //    for (i=0; i<6; i++) {
  //       faqList[i].style = "max-height:60px;";
  //       openStateIcon[i].style = "transform:rotate(0deg);";
  //    }

  if (openState[clickNumber] == 0) {
    for (i = 0; i < faqList.length; i++) {
      faqList[i].style = "max-height:60px;";
      openStateIcon[i].style = "transform:rotate(0deg);";
      openState[i] = 0;
    }

    faqList[clickNumber].style = "max-height:600px;";
    openStateIcon[clickNumber].style = "transform:rotate(45deg);";
    openState[clickNumber] = 1; // Click된 List의 오픈 상태를 열려 있는 것으로 저장 (업데이트)
  } else {
    faqList[clickNumber].style = "max-height:60px;";
    openStateIcon[clickNumber].style = "transform:rotate(0deg);";
    openState[clickNumber] = 0; // Click된 List의 오픈 상태를 닫혀 있는 것으로 저장 (업데이트)
  }
}

// document.getElementById('faq_icon').style = "left:" + 360 + "px";

// for (i=0; i<1500; i++) {
//  document.getElementById('faq_icon').style = "left:" + i + "px";
//   }

// var i = 0;

// function aniIcon() {
//    if ( i > 800) { return;}
//    document.getElementById('faq_icon').style = "left:" + i + "px";
//    i = i + 10;
//    setTimeout(aniIcon,10);
// }

// aniIcon();

var randomBgNumber = Math.floor(Math.random() * 10);

document.getElementById("hero").style.backgroundImage =
  "url(img/bg_" + randomBgNumber + ".jpg";

// var randomNumber = Math.floor( Math.random() * 10 );
// console.log(randomNumber);

// if (randomNumber < 4) { document.getElementById('hero').style = "background-image:url('img/poster" + randomNumber + ".jpg'";}

// function snow() {
//    // var randomSize = Math.floor( Math.random() * 10 );
//    // var randomX = Math.floor( Math.random() * window.innerWidth );
//    // var randomY = Math.floor( Math.random() * window.innerHeight );

//    for (i=0; i < 30; i++) {
//       var randomSize = Math.floor( Math.random() * 10 );
//       var randomX = Math.floor( Math.random() * window.innerWidth - 20 );
//       var randomY = Math.floor( Math.random() * window.innerHeight );
//       // document.getElementsByClassName('snowball')[i].style = "width:"+ randomSize + "px;" + "height:" + randomSize + "px;" + "border-radius:" + randomSize/2 + "px;" + "top:" + randomY + "px;" + "left:" + randomX + "px;" + "display:block;";

//       document.getElementsByClassName('snowball')[i].style.display = "block";
//       document.getElementsByClassName('snowball')[i].style.width = randomSize + "px";
//       document.getElementsByClassName('snowball')[i].style.height = randomSize + "px";
//       document.getElementsByClassName('snowball')[i].style.borderRadius = randomSize / 2  + "px";
//       document.getElementsByClassName('snowball')[i].style.top = randomY + "px";
//       document.getElementsByClassName('snowball')[i].style.left = randomX + "px";

//    }
// }

// setInterval(snow, 1000);

// Scroll Event Coding

console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.outerWidth);
console.log(window.outerHeight);

var scrollPoint = window.scrollY + window.innerHeight;

var tvText = document.getElementById("tv_text_li");
var offlineText = document.getElementById("offline_text_li");

function scrollAnimation() {
  console.log(window.pageYOffset);
  console.log(window.scrollY);
  console.log(document.getElementById("tv_text_li").offsetTop);

  // TV로 즐기세요 텍스트 효과

  scrollPoint = window.scrollY + window.innerHeight;

  tvText = document.getElementById("tv_text_li");
  offlineText = document.getElementById("offline_text_li");
  deviceText = document.getElementById("device_text_li");

  document.getElementById("scroll_position").innerHTML = scrollPoint;
  document.getElementById("tvtext_position").innerHTML = tvText.offsetTop;
  document.getElementById("offlintext_position").innerHTML =
    offlineText.offsetTop;

  if (
    scrollPoint - tvText.offsetTop > 200 &&
    scrollPoint - tvText.offsetTop < 400
  ) {
    tvText.style = "animation:fade_in_opacity 2s forwards";
  }

  if (scrollPoint - tvText.offsetTop > 400) {
    tvText.style = "animation:fade_out_opacity 3s forwards";
  }

  if (scrollPoint - offlineText.offsetTop > 200) {
    offlineText.style = "animation:fade_in_opacity 2s forwards";
  }

  if (scrollPoint - deviceText.offsetTop > 200) {
    deviceText.style = "animation:fade_in_opacity 2s forwards";
  }
}
