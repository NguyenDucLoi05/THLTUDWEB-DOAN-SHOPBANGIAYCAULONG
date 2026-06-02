document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("effect-container");

  function createFlake() {
    const flake = document.createElement("span");
    flake.classList.add("flower-flake");

    flake.innerHTML = "🏵️";

    const randomLeft = Math.random() * 100;
    flake.style.left = randomLeft + "vw";

    const randomSize = Math.random() * 15 + 10;
    flake.style.fontSize = randomSize + "px";

    const randomDuration = Math.random() * 5 + 3;
    flake.style.animationDuration = randomDuration + "s";

    flake.style.opacity = Math.random() * 0.6 + 0.4;

    container.appendChild(flake);

    setTimeout(() => {
      flake.remove();
    }, randomDuration * 1000);
  }
  setInterval(createFlake, 300);
});
