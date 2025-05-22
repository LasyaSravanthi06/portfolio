document.addEventListener('DOMContentLoaded', () => {
  // Typing animation
  const titles = ["AI/ML Developer", "Web Developer", "Tech Enthusiast"];
  let index = 0;
  let charIndex = 0;
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
      }, 2000);
    }
  }

  typeText();

  // Skill bar animation
  const bars = document.querySelectorAll('.bar');
  bars.forEach(bar => {
    const skill = bar.getAttribute('data-skill');
    bar.style.width = skill;
  });

  // Form validation
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Message sent successfully!");
    this.reset();
  });

  // Dark Mode Toggle
  document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.modal').classList.toggle('dark-mode');
  });

  // Project Modals
  const projects = document.querySelectorAll('.project');
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modalContent');
  const modalClose = document.getElementById('modalClose');

  const projectDetails = [
    "AI-Powered Spectral Crop Management System: Uses AI and satellite data to predict crop health, yield, and optimize pesticide use.",
    "Online Railway Reservation System: Full-stack app to search, book, and manage train tickets with real-time updates."
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
