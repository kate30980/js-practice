function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animation = math.random() * 5 + "s";

  heart.innerText = `💜`;

  document.body.appendChild(heart);
}
setInterval(createHeart, 300);
