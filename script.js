var flag = 0;
function showmenu() {
  if (window.matchMedia("(max-width: 1000px)").matches) {
    if (flag == 0) {
      document.getElementById("menu").style.display = "block";
      flag = 1;
    } else {
      document.getElementById("menu").style.display = "none";
      flag = 0;
    }
  } else {
    document.getElementById("menu").style.display = "none";
  }
}
var onresize = function (e) {
  document.getElementById("menu").style.display = "none";
};
window.addEventListener("resize", onresize);
