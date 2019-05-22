window.addEventListener("DOMContentLoaded", () => {
  let $main = document.querySelector(".main-visual").querySelector("img")
  let ua = navigator.userAgent
  if (
    ua.indexOf("iPhone") > 0 ||
    ua.indexOf("iPod") > 0 ||
    (ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0) ||
    ua.indexOf("Windows Phone") > 0
  ) {
    $main.src = "static/assets/main_sp.jpg"
  } else if (ua.indexOf("iPad") > 0 || ua.indexOf("Android") > 0) {
    $main.src = "static/assets/main_pc.jpg"
  } else {
    $main.src = "static/assets/main_pc.jpg"
  }
})
