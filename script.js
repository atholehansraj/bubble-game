const targets = document.querySelector(".target h3");
const timer = document.querySelector("#timer");
const score = document.querySelector(".score h3");
let start = document.querySelector("#start");
let reset = document.querySelector("#reset");

let count = 60;
let scoreCount = 0;

function generatebubbles() {
  let bubbles = document.querySelector(".bubbles-container");
  bubbles.innerHTML = ""
  let add = "";
  for (let i = 1; i <= 48; i++) {
    let randomnumber = Math.floor(Math.random() * 9 + 1);
      let circle = document.createElement("div")
      circle.setAttribute("class","circle");
      circle.innerText = randomnumber;


      circle.style.backgroundColor = rColor()
      bubbles.appendChild(circle);
  }
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
  if (parseInt(targets.innerText) === Number(dets.target.innerText)) {
      targets.textContent = getRandomNumber();
      score.innerText = scorefun();
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
      alert("Time up...")
      timer.textContent = "time is up";
    }
  }, 1000);

  count = 60;
});

reset.addEventListener("click", function () {
   clearInterval(answer);
   timer.textContent = "00";

});
