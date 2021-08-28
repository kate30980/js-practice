const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sound.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  document.body.appendChild(btn);
});
