const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// information container
ScrollReveal().reveal(".information__card", {
  ...scrollRevealOption,
  interval: 500,
});

// testimonial container
ScrollReveal().reveal(".testimonial__card", {
  ...scrollRevealOption,
  interval: 500,
});

// instructor container
ScrollReveal().reveal(".instructor__card", {
  ...scrollRevealOption,
  interval: 500,
});
