document.addEventListener('DOMContentLoaded', () => {
  // Typing animation
  const titles = ["AI/ML Developer", "Web Developer", "Tech Enthusiast"];
  let index = 0, charIndex = 0;
  const typingTarget = document.querySelector("header p span");

  function typeText() {
    if (charIndex < titles[index].length) {
      typingTarget.textContent += titles[index].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, 100);
    } else {
      setTimeout(() => {
        typingTarget.textContent = "";
        charIndex = 0;
        index = (index + 1) % titles.length;
        typeText();
      }, 1500);
    }
  }

  typeText();

  // Skill bar animation
  const bars = document.querySelectorAll('.bar');
  bars.forEach(bar => {
    const skill = bar.getAttribute('data-skill');
    bar.style.width = skill;
  });

  // Dark mode toggle
  document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.modal').classList.toggle('dark-mode');
  });

  // Contact form
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    form.reset();
  });

  // Project modals
  const projects = document.querySelectorAll('.project');
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modalContent');
  const modalClose = document.getElementById('modalClose');

  const projectDetails = [
    "This system uses satellite and UAV spectral imagery with ML algorithms (Random Forest, CNN, k-NN) to detect diseases, estimate yield, and optimize resources for over 500 users.",
    "A full-stack web platform for train reservations allowing users to search, book, and cancel tickets in real time, with 99.9% uptime and 40% faster processing."
  ];

  projects.forEach((project, i) => {
    project.addEventListener('click', () => {
      modal.style.display = 'block';
      modalContent.textContent = projectDetails[i];
    });
  });

  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});
