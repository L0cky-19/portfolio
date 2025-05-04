import React, { useState } from "react";
import "./App.css";
import ProjectList from "./components/ProjectList";
import data from "./data.json";
import AboutSection from "./components/AboutSection";
import FunkyTown from "./Images/FunkyTown.png";
import GameOfLife from "./Images/GameOfLife.png";
import Weather3W from "./Images/3W.png";
import BDD from "./Images/BDD.png";
import Ondes from "./Images/Ondes.svg";
import NFL from "./Images/NoFinishLine.jpg";
import Sports from "./Images/Sports.svg";
import Moto from "./Images/Moto.png";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="App">
      {/* Fond animé */}
      <ul className="background">
        {Array.from({ length: 13 }).map((_, index) => (
          <li key={index}></li>
        ))}
      </ul>
      <header className="navbar">
        <h1>Mon Portfolio</h1>
        <nav>
          <a href="#about">À propos</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <AboutSection />

      <section id="projects">
        <h2 class="h2_2">Projets</h2>
        <h3>Projets Scolaires</h3>
        <div className="project-container">
        <img src={FunkyTown} alt="FunkyTown" style={{ width: "222px", height: "222px" }} />
          <ProjectList
            projects={data.schoolProjects5}
            selectedProject={selectedProject}
            onSelectProject={setSelectedProject}
          />
        </div>
        <div className="project-container">
        <img src={GameOfLife} alt="Jeu de la vie Jonh Conway" style={{ width: "222px", height: "222px" }} />
          <ProjectList
            projects={data.schoolProjects1}
            selectedProject={selectedProject}
            onSelectProject={setSelectedProject}
          />
        </div>
        <div className="project-container">
        <img src={Weather3W} alt="3W" style={{ width: "222px", height: "222px" }} />
          <ProjectList
            projects={data.schoolProjects2}
            selectedProject={selectedProject}
            onSelectProject={setSelectedProject}
          />
        </div>
        <div className="project-container">
        <img src={BDD} alt="Base de données" style={{ width: "222px", height: "222px" }} />
          <ProjectList
            projects={data.schoolProjects3}
            selectedProject={selectedProject}
            onSelectProject={setSelectedProject}
          />
        </div>
        <div className="project-container">
        <img src={Ondes} alt="Propagation d'ondes cryptés" style={{ width: "222px", height: "222px" }} />
          <ProjectList
            projects={data.schoolProjects4}
            selectedProject={selectedProject}
            onSelectProject={setSelectedProject}
          />
        </div>


        <h2 class = "h2_3">Activités Extra-scolaires</h2>
        <div className="project-container">
        <img src={NFL} alt="NoFinishLine Monaco" style={{ width: "222px", height: "222px" }} />
          <ProjectList
            projects={data.extraProjects1}
            selectedProject={selectedProject}
            onSelectProject={setSelectedProject}
          />
        </div>
        <div className="project-container">
        <img src={Sports} alt="Sports" style={{ width: "222px", height: "222px" }} />
          <ProjectList
            projects={data.extraProjects2}
            selectedProject={selectedProject}
            onSelectProject={setSelectedProject}
          />
        </div>
        <div className="project-container">
        <img src={Moto} alt="Moto" style={{ width: "222px", height: "222px" }} />
          <ProjectList
            projects={data.extraProjects3}
            selectedProject={selectedProject}
            onSelectProject={setSelectedProject}
          />
        </div>
      </section>

      <section id="contact">
        <h2><u>Contact</u></h2>
        <h3>Pouvoir me joindre :</h3>
        <div className="contact-container">
          {/* Email */}
          <div className="contact-item">
            <span className="contact-label"><u>Mail</u> :</span>
            <a href="mailto:glucas0705@gmail.com" className="contact-link">
              glucas0705@gmail.com
            </a>
            <button
              onClick={() => navigator.clipboard.writeText("glucas0705@gmail.com")}
              className="copy-button"
              title="Copier le mail"
            >
              📋 <u>Copier</u>
            </button>
          </div>

          {/* Téléphone */}
          <div className="contact-item">
            <span className="contact-label"><u>Téléphone</u> :</span>
            <a href="tel:+33762003227" className="contact-link">
              +33 7 62 00 32 27
            </a>
            <button
              onClick={() => navigator.clipboard.writeText("+33762003227")}
              className="copy-button"
              title="Copier le numéro"
            >
              📋 <u>Copier</u>
            </button>
          </div>

          {/* LinkedIn */}
          <div className="contact-item">
            <span className="contact-label"><u>LinkedIn</u> :</span>
            <a
              href="https://www.linkedin.com/in/lucas-garcia-203706330/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Lucas Garcia
            </a>
            <button
              onClick={() =>
                navigator.clipboard.writeText(
                  "https://www.linkedin.com/in/lucas-garcia-203706330/"
                )
              }
              className="copy-button"
              title="Copier le LinkedIn"
            >
              📋 <u>Copier</u>
            </button>
          </div>

          {/* CV */}
          <div className="contact-item">
            <span className="contact-label"><u>CV</u> :</span>
              <a 
                href={process.env.PUBLIC_URL + '/CV.pdf'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                CV Lucas Garcia
              </a>
              <button
                onClick={() => {
                const link = document.createElement('a');
                link.href = process.env.PUBLIC_URL + '/CV.pdf';
                link.download = 'CV_Lucas_Garcia.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                }}
              className="copy-button"
              title="Télécharger le CV"
              >
            ⬇️ <u>Télécharger</u>
            </button>
          </div>
          
        </div>
      </section>

      <footer>
        <p>© 2024 Mon Portfolio. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;
