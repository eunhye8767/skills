gsap.registerPlugin(ScrollTrigger);

gsap.to(".scale", {
  x: 0,
  y: '-35%',
  rotation: 0,
  scale: 2.5,
  scrollTrigger: {
    trigger: ".scale",
    start: "120px 150px",
    end: "150px 0",
    scrub: true,
    markers: true,
    id: "scrub"
  }
});