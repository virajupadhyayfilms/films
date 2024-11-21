const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

const sliders = document.querySelectorAll(".image-comparison");
sliders.forEach((slider) => {
  const input = slider.querySelector(".slider");
  const beforeImage = slider.querySelector(".before");
  const sliderLine = slider.querySelector(".slider-line");
  const sliderIcon = slider.querySelector(".slider-icon");

  input.addEventListener("input", (e) => {
    let sliderValue = e.target.value + "%";

    beforeImage.style.clipPath = `inset(0 ${100 - e.target.value}% 0 0)`;
    sliderLine.style.left = sliderValue;
    sliderIcon.style.left = sliderValue;
  });
});
