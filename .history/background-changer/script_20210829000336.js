const btn = getElementById("btn");

btn.addEventListener("click", () => {
  document.body.background = randomBg();
});

function randomBg() {
  return `hs1(${Math.floor(Math.random() * 360)}, 100% , 50%)`;
}
