document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(TextPlugin);
});

const textAnimation = document.getElementById("text-animation").textContent;

gsap.to(textAnimation, {
  duration: 2,
  text: "in procurement",
});
