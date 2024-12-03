const targets = document.querySelector(".target h3");
const timer = document.querySelector("#timer");
const score = document.querySelector(".score h3");
let start = document.querySelector("#start");
let reset = document.querySelector("#reset");

let count = 60;
let scoreCount = 10;

function generatebubbles() {
  let bubbles = document.querySelector(".bubbles-container");
  let add = "";
  for (let i = 1; i <= 48; i++) {
    let randomnumber = Math.floor(Math.random() * 9 + 1);
    add += ` <div class="curcle">
        ${randomnumber}
        </div>`;
  }
  bubbles.innerHTML = add;
}
generatebubbles();

function rColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  let color = `rgb(${r},${g},${b})`;
  return color;
}

function scorefun() {
  return (scoreCount += 10);
}

function getRandomNumber() {
  return Math.floor(Math.random() * 9) + 1;
}
getRandomNumber();

targets.textContent = getRandomNumber();

let bubbles = document.querySelector(".bubbles-container");
bubbles.addEventListener("click", (dets) => {
  targets.textContent = getRandomNumber();
  if (parseInt(targets.innerHTML) === parseInt(dets.target.innerHTML)) {
      score.innerHTML = scorefun();
    //   score.style.backgroundColor = "red";
      generatebubbles();
   }else {
    generatebubbles();
  }
});

start.addEventListener("click", function () {
  let answer = setInterval(function () {
    count--;
    timer.textContent = count;
    if (count <= 0) {
      clearInterval(answer);
      timer.textContent = "time is up";
    }
  }, 1000);

  count = 60;
});

reset.addEventListener("click", function () {
  answer.clearInterval(answer);
});
