import "./App.css";

export default function Resume() {
  return (
    <>
      <div className="navbar" id="page-top">
        <ul>
          <li>
            <a className="link" href="/index.html#homes-section">
              Home
            </a>
          </li>
          <li>
            <a className="link" href="/index.html#projects-section">
              Projects
            </a>
          </li>
          <li>
            <a className="link" href="/index.html#about-section">
              About
            </a>
          </li>
          <li>
            <a className="link" href="/resume.html">
              Resume
            </a>
          </li>
        </ul>
      </div>

      <div className="container">
        <div className="resume-container">
          <div className="work-experience">
            <h1 className="main-heading">Work Experience</h1>
            <div className="company">
              <h2 className="company__name">
                <a href="https://razorpay.com/" target="_blank">
                  Razorpay
                </a>{" "}
                (Present)
              </h2>
              <p className="date">(October 2022 - Present)</p>
              <p className="company__position">Frontend Engineer</p>
              <p className="company__description">
                During my time at Razorpay, I worked on the following:
              </p>
              <ol className="company__description">
                <li>
                  Created white labelled offers portals for various clients
                  like:
                  <ul>
                    <li>IDFC Bank</li>
                    <li>Mastercard</li>
                    <li>Fi-Money</li>
                    <li>VISA, etc</li>
                  </ul>
                </li>
                <li>
                  Developed reusable components and journeys to enhance the
                  scalability and customization of our offers portals.
                </li>
                <li>
                  Documented project setup, configuration changes, and API
                  endpoints.
                </li>
                <li>
                  Implemented comprehensive development environment
                  configurations, including environment variables, linters,
                  formatters, and Git hooks across multiple repositories.
                </li>
                <li>
                  Set up payment processing and subscription management
                  features.
                </li>
                <li>
                  Revamped several old client portals to improve user experience
                  and modernize design aesthetics.
                </li>
                <li>
                  Mentored junior developers and interns, fostering skill
                  development and contributing to team productivity.
                </li>
                <li>Actively handled on-call issues and reviewed PRs.</li>
              </ol>
              <p className="company__description">
                Additionally, I learned the following:
              </p>
              <ul>
                <li>Nginx setup and deployment</li>
                <li>Unit testing with Jest</li>
                <li>
                  Ability to write RFCs and design frontend flows, facilitating
                  effective communication and collaboration within
                  cross-functional teams.
                </li>
                <li>Performance measurement and improvement</li>
              </ul>
            </div>
            <div className="company">
              <h2 className="company__name">
                <a href="https://razorpay.com/" target="_blank">
                  Razorpay
                </a>
              </h2>
              <p className="date">(February 2022 - September-2022)</p>
              <p className="company__position">Intern</p>
              <p className="company__description">
                During my intership I worked on the following:
              </p>
              <ol className="company__description">
                <li>
                  New features for Razorpay's A/B experimentation
                  dashboard(Splitz) such as viewing the history of the
                  experiment state in a timeline manner, additional edit
                  options, new pages, etc
                </li>
                <li>
                  Redesign of announcement banners on the Payment Gateway
                  dashboard.
                </li>
                <li>Redesig nof the razorpay.com/pricingpage.</li>
                <li>
                  Refactored legacy code for the A/B experimentation dashboard.
                </li>
              </ol>
            </div>
            <div className="company">
              <h2 className="company__name">Bikenbiker</h2>
              <p className="date">(December 2021 - February 2022)</p>
              <p className="company__position">Intern</p>
              <p className="company__description">
                Here, I handled front-end development of the retail website
                using HTML, CSS, Javascript and Shopify for a luxury motorbike
                accessory start-up. I also dwelve into backend operations when
                required.
              </p>
            </div>
            <div className="company">
              <h2 className="company__name">RedGreen Engineering</h2>
              <p className="date">(March 2021 - July 2021)</p>
              <p className="company__position">Intern</p>
              <p className="company__description">
                During the period of my internship, I got to work on a developer
                tool based around git and I had been exposed to Kotlin,
                JavaScript, Git and HTML.
              </p>
            </div>
          </div>

          <div className="certifications">
            <h1 className="main-heading">Certifications</h1>
            <div className="company">
              <h2 className="certification__name">CS50x</h2>
              <p className="certification__by">Harvard University</p>
              <p className="date">(January 2021)</p>
              <ul className="certification__description">
                <li className="list-items">
                  {" "}
                  Introductory course into Computer Science
                </li>
                <li className="list-items">
                  {" "}
                  Algorithms and Data Structures using C and Python
                </li>
                <li className="list-items">
                  {" "}
                  Web Development using HTML, CSS, JavaScript and Flask
                </li>
                <li className="list-items"> Computer Science Ethics</li>
              </ul>
            </div>
          </div>

          <div className="education">
            <h1 className="main-heading">Education</h1>
          </div>
          <div>
            <h2 className="education__university">
              Indira Gandhi National Open University
            </h2>
            <p className="date">(July 2018 - July 2022)</p>
            <p className="course__description">
              Bachelor's Degree in Computer Applications
            </p>
          </div>
          <div className="skills">
            <h1 className="main-heading">Skills</h1>
            <div className="skills__container">
              <ul className="skills__list">
                <li className="list-items">HTML</li>
                <li className="list-items">CSS </li>
                <li className="list-items">JavaScript</li>
                <li className="list-items">AngularJS </li>
                <li className="list-items">Node.js </li>
                <li className="list-items">ReactJS</li>
                <li className="list-items">Python </li>
              </ul>
            </div>
          </div>
          <div className="hobbies">
            <h1 className="main-heading">Hobbies</h1>
            <ul className="hobbies__list">
              <li className="hobbies__list--item list-items">Knitting</li>
              <li className="hobbies__list--item list-items">
                Arts and Crafts
              </li>
              <li className="hobbies__list--item list-items">PC Gaming</li>
              <li className="hobbies__list--item list-items">Skating</li>
            </ul>
          </div>
          <div className="languages"></div>
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
          <a href="#page-top">
            <i className="fas fa-arrow-circle-up"></i>
          </a>
        </div>
      </div>
    </>
  );
}
