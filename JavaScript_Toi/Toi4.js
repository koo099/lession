document.getElementById("box").onmouseover = function () {
  document.getElementById("box").innerHTML = "マウスが乗ってる時";
};
document.getElementById("box").onmouseout = function () {
  document.getElementById("box").innerHTML = "マウスが離れてる時";
};
