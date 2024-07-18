// HERO TEXT ANIMATION
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(TextPlugin);

  const words = [
    "Purchasing Manager",
    "Buyer",
    "Property Developer",
    "Facilities Manager",
    "Architect",
    "Interior Designer",
  ];

  // words.forEach((word) => {
  //   gsap.to("#text-animation", {
  //     duration: 3,
  //     text: word,
  //   });
  //   console.log(word);
  // });

  for (let i = 0; i < 6; i++) {
    if (i < 6) {
      text(i);
    }
  }
  function text(i) {
    setTimeout(function () {
      gsap.to("#text-animation", {
        duration: 2,
        text: {
          value: words[i],
        },
      });
      console.log(words[i]);
    }, 3000 * i);
  }
});

// SECTION ANIMATION

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  // WHY SECTION
  gsap.from("#why-h1", {
    scrollTrigger: {
      trigger: "#why-h1",
      toggleActions: "play none none none",
    },
    y: 160,
    duration: 1,
    ease: "back",
  });

  gsap.from("#why-boxes div", {
    scrollTrigger: {
      trigger: "#why-boxes div",
      toggleActions: "play none none none",
    },
    y: 160,
    duration: 1,
    ease: "back",
    stagger: 0.1,
  });

  // WHO SECTION
  gsap.from("#who-section div", {
    scrollTrigger: {
      trigger: "#who-section div",
      toggleActions: "play none none none",
    },
    y: 160,
    duration: 1,
    ease: "back",
    stagger: 0.1,
  });

  // HOW SECTION
  gsap.from("#how-section div", {
    scrollTrigger: {
      trigger: "#how-section div",
      toggleActions: "play none none none",
    },
    y: 160,
    duration: 1,
    ease: "back",
    stagger: 0.1,
  });

  // WHAT SECTION
  gsap.from("#what-section div", {
    scrollTrigger: {
      trigger: "#what-section div",
      toggleActions: "play none none none",
    },
    y: 160,
    duration: 1,
    ease: "back",
    stagger: 0.1,
  });

  // COMPARISON SECTION
  gsap.from("#comparison-section div", {
    scrollTrigger: {
      trigger: "#comparison-section div",
      toggleActions: "play none none none",
    },
    y: 160,
    duration: 1,
    ease: "back",
    stagger: 0.1,
  });

  // PRODUCT SECTION
  gsap.from("#product-h1", {
    scrollTrigger: {
      trigger: "#product-h1",
      toggleActions: "play none none none",
    },
    y: 160,
    duration: 1,
    ease: "back",
    stagger: 0.1,
  });

  gsap.from("#product-1", {
    scrollTrigger: {
      trigger: "#product-1",
      toggleActions: "play none none none",
    },
    y: 160,
    duration: 1,
    ease: "back",
    stagger: 0.1,
  });

  gsap.from("#product-2", {
    scrollTrigger: {
      trigger: "#product-1",
      toggleActions: "play none none none",
    },
    y: 160,
    duration: 1,
    ease: "back",
    stagger: 0.1,
  });

  gsap.from("#cta-text", {
    scrollTrigger: {
      trigger: "#product-1",
      toggleActions: "play none none none",
    },
    y: 160,
    duration: 1,
    ease: "back",
    stagger: 0.1,
  });
});

why - boxes;
