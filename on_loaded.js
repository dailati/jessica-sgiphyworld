window.addEventListener("DOMContentLoaded", function () {
  let loading_div = document.querySelector(".loading-div");
  let div_image = document.querySelector(".loading-div-image");
  function StartAnimation() {
    console.log("nice");
    console.log("yes");
    div_image.style.transform = "translate(0px, calc(-250% - 20vh))";
    loading_div.style.transform = "translate(0px, calc(-100%))";
    document.body.style.overflow = "visible";
    setTimeout(() => {
      document.querySelector(".navbar-logo").children[0].style.transform =
        "translate(0px, 0%)";
    }, 900);
  }

  div_image.style.transform = "scale(1.1)";
  div_image.style.opacity = "1";
  setTimeout(() => {
    div_image.style.transition = "all .9s cubic-bezier(1,-1.75,.7,.99)";
  }, 500);
  window.addEventListener("load", function () {
    setTimeout(() => {
      StartAnimation();
    }, 500);
  });
});
