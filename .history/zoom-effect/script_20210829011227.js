const container = document.getElementById("container");
const img = docuemnt.querySelector("img");

container.addEventListener("mousemove", (e) => {
  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientX - e.target.offsetTop;

  console.log(x, y);

  img.style.transformOrigin = `${x}px ${y}px`;
  img.style.transform = "scale(2)";
});
