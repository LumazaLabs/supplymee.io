import { gsap } from "gsap";

gsap.registerPlugin(TextPlugin);

gsap.to("#textAnimation", {
  duration: 3,
  ease: Power1.out,
  text: {
    value: "in procurement",
    padSpace: true,
  },
});
