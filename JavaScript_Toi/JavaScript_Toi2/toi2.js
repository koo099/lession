document.getElementById("view").onclick = function () {
  this.disabled = true;
  let create = document.createElement("p");
  let br = document.createElement("br");
  let parentnode = document.getElementById("result");
  for (let i = 1; i <= 20; i++) {
    if (i % 10 == 0) {
      create.appendChild(document.createTextNode(`${i},`));
      parentnode.appendChild(create);
      br.appendChild(document.createTextNode(""));
      parentnode.appendChild(br);
    } else {
      create.appendChild(document.createTextNode(`${i},`));
      parentnode.appendChild(create);
    }
  }
};
function test() {
  let num = 1;
  console.log(num);
}
