// 🌸 Flower Rain
function flower_rain() {
  const flower = document.createElement("img");
  flower.src = "./flowers/red.png";
  flower.classList.add("flower");

  flower.style.left = Math.random() * window.innerWidth + "px";
  flower.style.animationDuration = (3 + Math.random() * 5) + "s";

  document.body.appendChild(flower);
  setTimeout(() => flower.remove(), 8000);
}
setInterval(flower_rain, 1200);

// 🎈 Balloons
function balloon_float() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");

  balloon.style.left = Math.random() * window.innerWidth + "px";
  balloon.style.background = ["#ff4081", "#ffeb3b", "#4caf50", "#2196f3"][Math.floor(Math.random()*4)];
  balloon.style.animationDuration = (6 + Math.random() * 4) + "s";

  document.body.appendChild(balloon);
  setTimeout(() => balloon.remove(), 10000);
}
setInterval(balloon_float, 2500);

// 🎊 Confetti
function drop_confetti() {
  const conf = document.createElement("div");
  conf.classList.add("confetti");

  conf.style.left = Math.random() * window.innerWidth + "px";
  conf.style.background = ["red","blue","yellow","green","pink","purple"][Math.floor(Math.random()*6)];
  conf.style.animationDuration = (3 + Math.random() * 4) + "s";

  document.body.appendChild(conf);
  setTimeout(() => conf.remove(), 7000);
}
setInterval(drop_confetti, 800);

// ✨ Sparkles
function sparkle_effect() {
  const spark = document.createElement("div");
  spark.classList.add("sparkle");

  spark.style.left = Math.random() * window.innerWidth + "px";
  spark.style.top = Math.random() * window.innerHeight + "px";
  spark.style.animationDuration = (1 + Math.random() * 2) + "s";

  document.body.appendChild(spark);
  setTimeout(() => spark.remove(), 3000);
}
setInterval(sparkle_effect, 500);

// 🎨 Image Slider
const images = document.querySelectorAll(".card img");
const prev_btn = document.querySelector(".prev");
const next_btn = document.querySelector(".next");

const gradients = [
  "linear-gradient(145deg,rgb(203, 85, 85),rgb(106, 92, 196))",
  "linear-gradient(145deg,rgba(220, 131, 23, 1),rgba(241, 221, 199, 1))",
  "linear-gradient(145deg,rgba(47, 64, 159, 1),rgba(231, 202, 135, 1))",
  "linear-gradient(145deg,rgba(39, 6, 65, 1),rgba(203, 71, 181, 1))",
  "linear-gradient(145deg,rgba(6, 11, 65, 1),rgba(211, 57, 67, 1))",
  "linear-gradient(145deg,rgba(50, 116, 203, 1),rgba(225, 212, 213, 1))"
  
];

let index = 0;

function change_slide(i) {
  images.forEach(img => img.classList.remove("active", "fade-in"));
  images[i].classList.add("active", "fade-in");
  document.body.style.background = gradients[i];
  index = i;
}

prev_btn.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  change_slide(index);
});

next_btn.addEventListener("click", () => {
  index = (index + 1) % images.length;
  change_slide(index);
});

// initialize
change_slide(index);
