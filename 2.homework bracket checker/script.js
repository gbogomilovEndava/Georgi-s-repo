const button = document.querySelector("button");
button.addEventListener("click", () => {
  const str = document.querySelector("input").value;
  isBalanced(str);
});
const isBalanced = (str) => {
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const closing = Object.values(map);
  const stack = [];

  for (char of str) {
    if (map[char]) {
      stack.push(char);
    } else if (closing.includes(char) && char !== map[stack.pop()]) {
      return (document.querySelector(".result").textContent = false);
    }
  }
  return (document.querySelector(".result").textContent = !stack.length);
};
