import React, { useState } from "react";
import "./AboutSection.css";

const AboutSection = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section], // Bascule l'état pour la section cliquée
    }));
  };

  return (
    <section id="about">
      <h2>À propos de moi</h2>
      <p>
        Je m'appelle <strong>Lucas Garcia</strong>, j'ai 20 ans, je suis
        actuellement étudiant en cycle préparatoire ingénieur au{" "}
        <a href="https://nice.cesi.fr/" target="_blank" rel="noreferrer">
          <u>CESI-Nice</u>
        </a>
        , avec une forte passion pour la cybersécurité.<br></br><br></br> Mon parcours
        académique et personnel reflète mon ambition et ma détermination à
        exceller dans le domaine technologique.
      </p>

      <div className="about-section">
        {/* Formation et Passion Technique */}
        <div className="about-item">
          <button
            className={`about-button ${
              expandedSections["formation"] ? "active" : ""
            }`}
            onClick={() => toggleSection("formation")}
          >
            <strong>Formation et Passion Technique</strong>
          </button>
          {expandedSections["formation"] && (
            <div className="about-content">
              <p>
                Passionné par l'informatique et la <b>cybersécurité</b>, je consacre
                une grande partie de mon temps libre à me perfectionner,
                notamment en utilisant des plateformes comme <a href = "https://tryhackme.com/" target="_blank" rel="noreferrer"><u>TryHackMe</u> </a>
                pour développer mes compétences techniques. <br></br>
                <br></br>
                <strong>Historique de mes formations :</strong> <br></br>
                <br></br>
                <strong>•</strong> 2023 - Actuellement : <a href="https://nice.cesi.fr/" target="_blank" rel="noreferrer"><u>CESI Nice</u></a>, prépa-intégrée en cycle ingénieur, spécialisation informatique.
                <br></br>
                <br></br>
                <strong>•</strong> 2022 - 2023 : Centre International de Valbonne, prépa MP2I.
                <br></br>
                <br></br>
                <strong>•</strong> 2022 : Lycée Albert 1<sup>er</sup>, obtention du bac scientifique mention bien.
              </p>
            </div>
          )}
        </div>

        {/* Compétences Techniques */}
        <div className="about-item">
          <button
            className={`about-button ${
              expandedSections["competences-techniques"] ? "active" : ""
            }`}
            onClick={() => toggleSection("competences-techniques")}
          >
            <strong>Compétences Techniques</strong>
          </button>
          {expandedSections["competences-techniques"] && (
            <div className="about-content">
              <p>
              <strong>• CCNA</strong> : Introduction to Networks (en cours)
              <br></br>
              <br></br>
              <strong>• Langages de programmation</strong> : C, C++, Python, OCaml, Javascript, HTML, CSS, HPP, SQL
              <br></br>
              <br></br>
              <strong>• Bash & Powershell</strong>
              <br></br>
              <br></br>
              <strong>• Windows & Linux servers</strong>
             

              </p>
            </div>
          )}
        </div>

        {/* Compétences Linguistiques */}
        <div className="about-item">
          <button
            className={`about-button ${
              expandedSections["competences-linguistiques"] ? "active" : ""
            }`}
            onClick={() => toggleSection("competences-linguistiques")}
          >
            <strong>Compétences Linguistiques</strong>
          </button>
          {expandedSections["competences-linguistiques"] && (
            <div className="about-content">
              <p>
              <strong>Français :</strong> Langue maternelle.
              <br></br>
              <br></br>
              <strong>Anglais :</strong> C1.
              <br></br>
              <br></br>
              <strong>Espagnol :</strong> A2.
    
              </p>
            </div>
          )}
        </div>

        

        {/* Perspectives Professionnelles */}
        <div className="about-item">
          <button
            className={`about-button ${
              expandedSections["perspectives"] ? "active" : ""
            }`}
            onClick={() => toggleSection("perspectives")}
          >
            <strong>Perspectives Professionnelles</strong>
          </button>
          {expandedSections["perspectives"] && (
            <div className="about-content">
              <p>
                Actuellement à la recherche d'un stage entre le <b>7 avril</b> et le <b>25 juillet </b>
                2025, je suis motivé à l'idée de mettre en pratique mes
                compétences et de contribuer concrètement à des projets
                stimulants dans le domaine de la cybersécurité.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
