export default function Homepage() {
  return (
    <>
      <div className="navbar" id="page-top">
        <a href="#" className="toggle-button">
          <i className="fas fa-bars"></i>
        </a>
        <div className="navbar-links">
          <ul>
            <li>
              <a className="link" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="link" href="/">
                Projects
              </a>
            </li>
            <li>
              <a className="link" href="/">
                About
              </a>
            </li>
            <li>
              <a className="link" href="/resume">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="home" id="home-section">
          <div className="home__heading">
            <div className="home__heading--set">
              <h1 className="home__heading--name">Varsha</h1>
              <div className="tiles">
                <div className="tile1"></div>
                <div className="tile2"></div>
                <div className="tile3"></div>
                <div className="tile4"></div>
              </div>
            </div>
            <div className="home__heading--set">
              <h1 className="home__heading--name">Singh</h1>
              <div className="tiles">
                <div className="tile1"></div>
                <div className="tile2"></div>
                <div className="tile3"></div>
                <div className="tile4"></div>
              </div>
            </div>
          </div>
          <p className="home__text">
            Hi! I'm a Frontend Engineer based in Bangalore, India. I specialize
            in crafting dynamic websites and small-scale projects.
          </p>
        </div>

        <div className="projects" id="projects-section">
          <div className="spacer waves-top"></div>
          <h1 className="projects__heading">Projects</h1>
          <div className="projects__container">
            <div className="projects__container--item">
              <a href="https://github.com/girlwhodrawsandstuff/day-planner">
                <img src="src/assets/Planner.svg" className="svg-item" />
                <h3>Day Planner</h3>
                <p>
                  This program implemented in Flask (python) for the backend and
                  HTML, CSS and JavaScript for the frontend where users can
                  login and keep track of their daily tasks.
                </p>
              </a>
            </div>
            <div className="projects__container--item">
              <a href="https://github.com/girlwhodrawsandstuff/JavaScript-Dice-Game">
                <img src="src/assets/Dice.svg" className="svg-item" />
                <h3>Dice Game</h3>
                <p>
                  A simple dice game implemented using HTML, CSS and JavaScript
                </p>
              </a>
            </div>
            <div className="projects__container--item">
              <a href="https://github.com/girlwhodrawsandstuff/react-expense-tracker-no-server">
                <img src="src/assets/Expense.svg" className="svg-item" />
                <h3>Expense Tracker</h3>
                <p>
                  A ReactJS project to implement an expense tracker without a
                  backend. It uses functional components with hooks and the
                  context API.
                </p>
              </a>
            </div>
            <div className="projects__container--item">
              <a href="https://github.com/girlwhodrawsandstuff/react-mini-blog">
                <img src="src/assets/Blog.svg" className="svg-item" />
                <h3>Mini-Blog</h3>
                <p>
                  A React JS blog made to learn about concepts such as creating
                  templates and components, click events, using state, props,
                  hooks, custom hooks, handling GET and POST requests, etc.
                </p>
              </a>
            </div>
          </div>
          <div className="spacer waves-bottom"></div>
        </div>

        <div className="about" id="about-section">
          <h1 className="about__heading">About Me</h1>
          <img
            className="my-image"
            src="src/assets/varsha.jpg"
            alt="A picture of me"
          />
          <p className="about__description">
            I am a frontend developer based in Bangalore, India. I specialize in
            web development and small-scale projects. I'm proficient in HTML,
            CSS, and JavaScript, I leverage frameworks like AngularJS and
            ReactJS to deliver seamless user experiences. With a passion for
            creating innovative digital solutions, I thrive on bringing ideas to
            life through code. Having completed my B.C.A (Bachelor's in Computer
            Applications), I have transitioned into a full-time role at
            Razorpay, a prominent payments solution company in India. Prior to
            this role, I gained valuable industry experience through internships
            at Razorpay, Bikenbiker and RedGreen Engineering.
          </p>
          <p>
            Outside of work, I enjoy a range of hobbies such as roller-skating,
            drawing, and knitting while relaxing on my grandma-style rocking
            chair.
          </p>
        </div>

        <div className="footer">
          <p className="footer__email">varsha.singh0497@gmail.com</p>
          <ul className="footer__social">
            <li>
              <a href="https://www.linkedin.com/in/varshasingh97/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/madebyvorshe">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Varsha_Singh97">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCwDZjnz5SFizBVrSFADS8uA/">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
          <p>© 2024 Varsha Singh</p>
          <p>
            Illustrations by
            <a href="https://www.linkedin.com/in/bhawna-joshi-5732a049/">
              Bhawna Joshi
            </a>
          </p>
          <a href="#page-top">
            <i className="fas fa-arrow-circle-up"></i>
          </a>
        </div>
      </div>
    </>
  );
}
