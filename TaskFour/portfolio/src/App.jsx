import './App.css';

const App = () => {
  return (
    <div>
      {/* Section 1: Introduction */}
      <section className="intro">
        <div className="container">
          <h1>Aftab Mulani</h1>
          <h2>Full Stack / Cross-Platform Developer</h2>
          <div className="technologies">
            <p>Technologies: C++ | Java | Python | SpringBoot | Dart | Rust | Flutter</p>
          </div>
        </div>
      </section>

      {/* Section 2: Projects */}
      <section className="projects">
        <div className="container">
          <h2>Projects</h2>
          <div className="project-grid">
            <div className="project-tile">
              <h3>Book Shop</h3>
              <p>A platform for book enthusiasts to explore and purchase their favorite books.</p>
              <p>Technologies: Java, SpringBoot</p>
            </div>
            <div className="project-tile">
              <h3>College Activity Management</h3>
              <p>An application to manage and organize college activities and events.</p>
              <p>Technologies: C++, Java</p>
            </div>
            <div className="project-tile">
              <h3>Cloud-Based File Storage</h3>
              <p>A secure and efficient cloud-based file storage system.</p>
              <p>Technologies: Python</p>
            </div>
            <div className="project-tile">
              <h3>Attendance Management System</h3>
              <p>An application to automate and manage student attendance in educational institutions.</p>
              <p>Technologies: Dart</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Socials */}
      <section className="socials">
        <div className="container">
          <h2 style={{color:'black'}}>Connect with Me</h2>
          <div className="social-icons">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://www.pngkey.com/png/full/283-2834843_instagram-icon-for-hmsc-instagram-instagram-logo-vector.png" alt="Instagram Logo" />
              <p>@aftabm2017</p>
            </a>
            <a href="https://twitter.com/AftabMulani19" target="_blank" rel="noopener noreferrer">
              <img src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1707004800&semt=ais" alt="Twitter Logo" />
              <p>@aftabm</p>
            </a>
            <a href="https://github.com/Aftab-M" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub Logo" />
              <p>Aftab-M</p>
            </a>
            <a href="https://www.linkedin.com/in/aftab-mulani-a81456188/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="LinkedIn Logo" />
              <p>Aftab Mulani</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
