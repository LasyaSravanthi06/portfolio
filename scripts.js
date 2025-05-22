// Initialize Typed.js for the animated subtitle
const typed = new Typed('#typed', {
  strings: [
    "Aspiring Data Scientist.",
    "AI & ML Enthusiast.",
    "Software Developer.",
    "Open Source Contributor.",
    "Lifelong Learner."
  ],
  typeSpeed: 50,
  backSpeed: 40,
  backDelay: 2000,
  loop: true,
  smartBackspace: true,
});

// Initialize particles.js background
particlesJS('particles-js', {
  particles: {
    number: { value: 70, density: { enable: true, value_area: 900 } },
    color: { value: '#58a6ff' },
    shape: { type: 'circle' },
    opacity: { value: 0.6, random: false },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 140,
      color: '#58a6ff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'grab' },
      onclick: { enable: true, mode: 'push' },
      resize: true,
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 0.5 } },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
});

// Scroll fade-in for sections
const sections = document.querySelectorAll('.section');

const observerOptions = {
  threshold: 0.15,
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

sections.forEach(section => {
  sectionObserver.observe(section);
});
