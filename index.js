let input = document.getElementById("input");
let btn = document.getElementById("btn");
let st = new Set();
let index = 0;
let handleBtn = () => {
  let n = input.value;

  if (15 - st.size < n) {
    alert("Not enough balls available");
    return;
  }
  let balls = document.getElementsByClassName("ball");
  while (n > 0) {
    index = Math.floor(Math.random() * 15);
    if (st.has(index)) continue;
    else {
      if (balls[index].classList.contains("red"))
        balls[index].classList.toggle("red-animate");
      else if (balls[index].classList.contains("blue"))
        balls[index].classList.toggle("blue-animate");
      else balls[index].classList.toggle("green-animate");
      --n;
      st.add(index);
    }
    console.log(n);
  }
  return;
};
btn.addEventListener("click", handleBtn);
//random sol- consider all arrays as one (done)
// responsive sol- meadia query and change alignment for small screens
// top border visible sol- (done)
//
