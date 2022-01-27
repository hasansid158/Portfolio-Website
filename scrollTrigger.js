window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

gsap.registerPlugin(ScrollTrigger);

const t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".landing-text",
    start: "center center",
    end: "500px 0",
    scrub: 0.3,
  },
});

t1.to(".landing-text", {
  duration: 2,
  y: "35vh",
  autoAlpha: 1,
})
  .to(
    ".landing-text span h1",
    {
      duration: 2,
      backgroundImage: "linear-gradient(to top, #fd57bf 25%, #ffe838 50%)",
      backgroundClip: "text",
    },
    "-=2"
  )
  .to(".landing-text h6", { duration: 0.65, autoAlpha: 0 }, "-=2")
  .to(".landing-text", { duration: 2, autoAlpha: 0 })
  .to(".m", { duration: 2, x: "-6vw", scale: 0.85 }, "-=2")
  .to(".s", { duration: 2, x: "6vw", scale: 0.85 }, "-=2")
  .to(".h", { duration: 2, scale: 1.5 }, "-=2");
