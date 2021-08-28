function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animation = Math.random() * 2 + 3 + "s";

  heart.innerText = `💜`;

  document.body.appendChild(heart);
}
setInterval(createHeart, 300);
