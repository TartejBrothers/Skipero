var flag = 0;
function showmenu() {
  if (flag == 0) {
    document.getElementById("menu").style.display = "block";
    flag = 1;
  } else {
    document.getElementById("menu").style.display = "none";
    flag = 0;
  }
}
