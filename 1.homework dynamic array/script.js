const arr = [];
let buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (event.target.id === "button1") {
      addEle(arr);
    }
    if (event.target.id === "button2") {
      removeEle(arr);
    }
  });
});
const addEle = (arr) => {
  arr.push(document.querySelector("input").value);
  toList(arr);
};
const removeEle = (arr) => {
  if (arr.length > 0) {
    arr.pop();
    toList(arr);
  } else alert("Array is already empty");
};
const toList = (element) => {
  const node = document.createElement("li");
  node.appendChild(document.createTextNode(`${element}`));
  document.querySelector("ul").appendChild(node);
};
const clearInput = () => {
  document.querySelector("input").value = "";
};
