let input = document.getElementById("input");
let btn = document.getElementById("btn");
let i = 0,
  j = 0,
  k = 0;
let handleBtn = () => {
  let n = input.value;

  let red = document.getElementsByClassName("red");
  let blue = document.getElementsByClassName("blue");
  let green = document.getElementsByClassName("green");
  while (n > 0) {
    let flag = true;
    if (n > 0 && i < 5) {
      red[i].classList.toggle("red-animate");
      ++i;
      --n;
      flag = false;
    }
    if (n > 0 && j < 5) {
      blue[j].classList.toggle("blue-animate");
      ++j;
      --n;
      flag = false;
    }
    if (n > 0 && k < 5) {
      green[k].classList.toggle("green-animate");
      ++k;
      --n;
      flag = false;
    }
    if (flag) break;
  }
};
btn.addEventListener("click", handleBtn);
