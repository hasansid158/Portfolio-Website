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
  y: "30vh",
  autoAlpha: 1,
})
  .to(
    ".landing-text span h1",
    {
      duration: 2,
      backgroundImage: "linear-gradient(to top, #fd57bf, #ffe838)",
      backgroundClip: "text",
    },
    "-=2"
  )
  .to(".landing-text", { duration: 2, autoAlpha: 0 })
  .to(
    ".landing-text span h1",
    {
      duration: 2,
      backgroundImage: "linear-gradient(to top, #ffe838, #fd57bf)",
      backgroundClip: "text",
    },
    "-=2"
  )
  .to(".m", { duration: 2, x: "-15vw", scale: 2 }, "-=2")
  .to(".s", { duration: 2, x: "15vw", scale: 2 }, "-=2")
  .to(".h", { duration: 2, y: "-10vh" }, "-=2");
