gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const smoother = ScrollSmoother.create({
  smooth: 1.5,
  effects: true,
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const destino = link.getAttribute("href");

    if (!destino || destino === "#") return;

    const secao = document.querySelector(destino);

    if (!secao) return;

    event.preventDefault();

    smoother.scrollTo(secao, true, "top top+=110px");
  });
});

let btnTl;
function initBtn() {
  if (btnTl) {
    btnTl.kill();
  }
  gsap.set("#hoverBtn", { clearProps: "all" });

  btnTl = gsap.timeline({ paused: true }).to(
    "#hoverBtn",
    {
      scale: 1.35,
      duration: 1.2,
      ease: "elastic.out(1.2, 0.3)",
      easeReverse: er("power2.out"),
    },
    0,
  );
}
initBtn();

document.querySelector("#hoverBtn").addEventListener("mouseenter", () => {
  btnTl.timeScale(1).play();
});
document.querySelector("#hoverBtn").addEventListener("mouseleave", () => {
  btnTl.timeScale(erToggle.checked ? exitTs : 1).reverse();
});
