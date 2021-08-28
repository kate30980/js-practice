const container = docuemnt.getElementById("container");
const img = docuemnt.querySelector("img");

container.addEventListener("mousemove", (e) => {
  const x = e.clientX - e.target.offsetTop;
  const y = e.clientX - e.target.offsetLeft;

  img.style.transformOrigin = `${x}px ${y}px`;
  img.style.transform = "scale(2)";
});
