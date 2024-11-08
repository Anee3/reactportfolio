                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 m 
import './App.css';
export default App;
function App() {              

    <>
    <meta charset="UTF-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <title>Your Portfolio</title>
    <link rel="stylesheet" href="style.css"></link>
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;800&display=swap" rel="stylesheet"></link>
      <header className="header">
        <h1 className="logo">ANEESHA ABUBAKKAR</h1>
        <nav className="navbar">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#hobbies">Hobbies</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Technical Skills</a>
          <a href="#soft-skills">Soft Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about" className="about">
        <p>Welcome to my portfolio! I am a student looking forward to my first work experience in an organization that helps me explore and upgrade my skillset.</p>
        <img src="C:\Users\anees\Pictures\aneesha (Medium).cropped.jpg" alt="Profile Picture" className="profile-pic" />
      </section>

      <section id="education" className="education">
        <h2>Education</h2>
        <ul>
          <li><strong>B.E-CSE</strong> - Bharathiyar Institute of Engineering for Women (2021-2025)</li>
          <li><strong>HSC</strong> - Kanchana Devi Matric. Hr. Sec. School (2020-2021)</li>
          <li><strong>SSLC</strong> - Kanchana Devi Matric. Hr. Sec. School (2018-2019)</li>
        </ul>
      </section>

      <section id="experience" className="experience">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Internship at NSIC, Chennai</h3>
          <p>I focused on learning real-world applications of AI & ML.</p>
          <span>Duration: [June 2024 - July 2024]</span>
        </div>
        <div className="experience-item">
          <h3>Internship at Emiglitz Technology</h3>
          <p>I developed a DBMS project during my internship.</p>
          <span>Duration: [July 2024 - August 2024]</span>
        </div>
      </section>

      <section id="hobbies" className="hobbies">
        <h2>Hobbies</h2>
        <p>I enjoy reading books, crafting, and playing chess. These activities keep me creative and inspired.</p>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>AUTOMATED E-MAIL GENERATOR</h3>
          <p>The Automated E-mail Generator is a software application designed to streamline and automate the creation of personalized email messages. This tool is intended for use by businesses, marketers, and individuals who need to send out bulk emails efficiently while maintaining a high level of personalization. Tools used include Python, Jinja2, smtplib, pandas, and JSON.</p>
        </div>
        <div className="project-card">
          <h3>PERSONAL PORTFOLIO WEBSITE</h3>
          <p>The Personal Portfolio Website is a dynamic, responsive web application designed to showcase my skills, projects, and experiences as a web developer. It serves as both an online resume and a platform for potential employers and clients to view my work. This involved crafting the front-end interface with HTML and CSS while building the back-end with Node.js.</p>
        </div>
        <div className="project-card">
          <h3>RANDOM PASSWORD GENERATOR</h3>
          <p>The Random Password Generator is a Python-based project designed to generate strong and secure passwords with customizable criteria. This generator provides a convenient tool to create complex passwords that are difficult to guess, enhancing overall security. Tools used include the Random module.</p>
        </div>
      </section>

      <section id="skills" className="skills">
        <h2>Technical Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Java</li>
          <li>Python</li>
          <li>SQL</li>
          <li>Node.js</li>
        </ul>
      </section>

      <section id="soft-skills" className="soft-skills">
        <h2>Soft Skills</h2>
        <ul>
          <li>Communication</li>
          <li>Teamwork</li>
          <li>Problem-Solving</li>
          <li>Time Management</li>
          <li>Adaptability</li>
          <li>Leadership</li>
        </ul>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </section>

      <footer className="footer">
        <p>© 2024 ANEESHA A. All rights reserved.</p>
      </footer>
    </>
  
}

