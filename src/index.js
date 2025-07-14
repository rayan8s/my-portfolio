import './styles/main.scss';

const app = document.getElementById('app');

app.innerHTML = `
  <header>
    <h1>Rayyan Salim</h1>
    <p>Computing and Multimedia Graduate | IT Support & Web Development  | Oman</p>
    <nav>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#certifications">Certifications</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <section id="about">
    <h2>About Me</h2>
    <p>I’m a Computing & Multimedia graduate (GPA 3.9), passionate about web development, problem solving, and helping others learn technology.</p>
  </section>

  <section id="projects">
    <h2>Projects</h2>
    <div class="project-card">
      <h3>Portfolio Website</h3>
      <p>A responsive portfolio site built using HTML, Sass, JS, and Webpack.</p>
    </div>
    <div class="project-card">
      <h3>Landing Page Project (DOM Manipulation)</h3>
      <p>A dynamic landing page built from scratch using vanilla JavaScript. Features include dynamic nav generation, scroll-based section highlighting, and responsive design.</p>
      <a href="https://github.com/rayan8s/upgraded-enigma">GitHub</a>
      </div>
      <div class="project-card">
      <h3>Evaluate News with NLP</h3>
      <p>Jun 2025 - Jun 2025
        This is a full-stack JavaScript application that analyzes news article sentiment using an NLP API. Built with Webpack, Express, SCSS, and offline support using Service Workers.</p>
      <a href="https://github.com/rayan8s/evaluate-news-nlp">GitHub</a>
      </div>
  </section>
    <section id="experience">
    <h2>Experience</h2>
    <div class="experience-card">
      <h3>Assistant Lecturer Intern</h3>
      <p><strong>Sohar University</strong> | Oct – Dec 2023</p>
      <ul>
        <li>Taught Arduino circuits and Java programming to 300+ students.</li>
        <li>Prepared lab lessons and facilitated tech workshops.</li>
      </ul>
    </div>
    <div class="experience-card">
      <h3>IT Helpdesk Intern</h3>
      <p><strong>Saham Elementary Court</strong> | Aug 2022</p>
      <ul>
        <li>Recorded events, problems, and solutions in logs.</li>
      </ul>
    </div>
    <div class="experience-card">
      <h3>Web Design Intern</h3>
      <p><strong>Various Projects</strong> | Jun 2022</p>
      <ul>
        <li>Contributed to website layout and content updates.</li>
      </ul>
    </div>
  </section>

  <section id="skills">
    <h2>Skills</h2>
    <ul class="skills-list">
      <li>HTML</li>
      <li>CSS/Sass</li>
      <li>JavaScript (ES6+)</li>
      <li>Java</li>
      <li>WordPress</li>
      <li>Teamwork & Communication</li>
    </ul>
  </section>

  <section id="certifications">
    <h2>Certifications</h2>
    <ul>
      <li>Frontend Web Developer – Udacity (2025)</li>
      <li>Building Websites with WordPress – Mar 2024</li>
      <li>Advanced Excel – Nov 2023</li>
      <li>Java Programming for Beginners – Jun 2021</li>
    </ul>
  </section>

  <section id="contact">
    <h2>Contact</h2>
    <p>Email: <a href="mailto:rayanalbreiki333@gmail.com">rayanalbreiki333@gmail.com</a></p>
    <p>LinkedIn: <a href="https://www.linkedin.com/in/rayyan-salim8" target="_blank">rayyan-salim8</a></p>
    <p>Phone: +968 98237838</p>
  </section>

  <footer>
    <p>© ${new Date().getFullYear()} Rayyan Salim</p>
  </footer>
`;
// Add this at bottom of your index.js
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});