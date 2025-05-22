/* Reset and base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body, html {
  height: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #0b1522;
  color: #e0e0e0;
  scroll-behavior: smooth;
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
}

/* Particle.js background container */
#particles-js {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

/* Nav bar */
nav {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(20, 20, 20, 0.85);
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  z-index: 100;
  box-shadow: 0 2px 5px rgba(0,0,0,0.5);
}
nav a {
  color: #eee;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.3s ease;
}
nav a:hover,
nav a:focus {
  color: #58a6ff;
  outline: none;
}

/* Sections & Parallax */
.section {
  max-width: 900px;
  margin: 5rem auto 4rem auto;
  padding: 1rem 2rem;
  background: rgba(20, 20, 20, 0.7);
  border-radius: 8px;
  box-shadow: 0 0 30px #0f192f inset;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.7s ease;
}
.section.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Parallax effect */
.parallax {
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

/* Header */
header.section {
  text-align: center;
  padding-top: 10rem;
  padding-bottom: 6rem;
  background: rgba(10, 20, 40, 0.75);
  border-radius: 12px;
  box-shadow: 0 0 40px #3067f7 inset;
  user-select: none;
}
header h1 {
  font-size: 2.5rem;
  letter-spacing: 0.12em;
  margin-bottom: 0.25rem;
  font-weight: 800;
  color: #d6d9dc;
}
.typed-subtitle {
  font-size: 1.3rem;
  color: #58a6ff;
  margin-bottom: 1rem;
  min-height: 1.5em;
}

/* Social logos container */
.social-logos {
  margin: 1rem 0 1.5rem 0;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}
.social-link svg {
  filter: drop-shadow(0 0 1.5px rgba(0,0,0,0.2));
  cursor: pointer;
  transition: transform 0.3s ease, filter 0.3s ease;
  width: 28px;
  height: 28px;
}
.social-link:hover svg,
.social-link:focus svg {
  filter: drop-shadow(0 0 6px #58a6ff);
  transform: scale(1.3);
  outline: none;
}

/* Contact info */
.contact-email {
  font-size: 1rem;
  font-weight: 600;
  color: #a0a7b8;
}

/* Lists */
ul {
  list-style-type: disc;
  padding-left: 1.3rem;
  margin-top: 0.75rem;
}
ul li {
  margin-bottom: 0.6rem;
  line-height: 1.4;
}
article h3 {
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #58a6ff;
}

/* Headings */
h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #a0c0ff;
  border-bottom: 2px solid #58a6ff;
  padding-bottom: 0.3rem;
  letter-spacing: 0.05em;
}

/* Footer */
footer {
  background: rgba(10, 10, 10, 0.85);
  padding: 1rem 0;
  text-align: center;
  font-size: 0.9rem;
  color: #777;
  margin-top: 3rem;
}

/* Accessibility focus */
a:focus-visible {
  outline: 2px solid #58a6ff;
  outline-offset: 2px;
}

/* Scroll fade-in effect handled by JS */
