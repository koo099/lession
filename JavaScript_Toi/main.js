function sendButton() {
  //id属性 "name" を探し、その値を取得。
  //取得した値をid属性 "nameView" の要素に格納。
  document.getElementById("nameView").innerHTML =
    document.getElementById("name").value;
}
