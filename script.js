// script.js
gsap.to(".fade-in", {
  opacity: 1,
  duration: 1.2,
  stagger: 0.3,
  delay: 0.5,
  ease: "power2.out"
});
// Animate home section on load
gsap.to(".fade-in", {
  opacity: 1,
  duration: 1.2,
  stagger: 0.3,
  delay: 0.5,
  ease: "power2.out"
});

// Animate reveal elements on scroll
// Animate reveal elements on scroll with slide-in effect
gsap.utils.toArray(".reveal").forEach((elem, index) => {
  const direction = index % 2 === 0 ? -100 : 100; // alternate left/right

  gsap.fromTo(
    elem,
    { opacity: 0, x: direction },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: elem,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      ease: "power2.out"
    }
  );
});

