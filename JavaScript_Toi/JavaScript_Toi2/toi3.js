function getNum1() {
  let num1 = Number(document.getElementById("num1").value);
  return num1;
}

function getNum2() {
  let num2 = Number(document.getElementById("num2").value);
  return num2;
}
const box = document.getElementById("box");
function showResult(num) {
  box.innerHTML = num;
}

document.getElementById("add-button").onclick = function () {
  num = getNum1() + getNum2();
  if (isNaN(num)) {
    box.innerHTML =
      "左右どちらかの値が数値ではありません！数値を入力してください";
    return;
  }
  showResult(num);
};

document.getElementById("sub-button").onclick = function () {
  num = getNum1() - getNum2();
  if (isNaN(num)) {
    box.innerHTML=
      "左右どちらかの値が数値ではありません！数値を入力してください";
    return;
  }
  showResult(num);
};

document.getElementById("mul-button").onclick = function () {
  num = getNum1() * getNum2();
  if (isNaN(num)) {
    box.innerHTML =
      "左右どちらかの値が数値ではありません！数値を入力してください";
    return;
  }
  showResult(num);
};

document.getElementById("div-button").onclick = function () {
  num = getNum1() / getNum2();
  if (isNaN(num)) {
    box.innerHTML =
      "左右どちらかの値が数値ではありません！数値を入力してください";
    return;
  }
  showResult(num);
};
