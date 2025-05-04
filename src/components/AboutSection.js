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
        Je m'appelle <strong>Lucas Garcia</strong>, j'ai 21 ans, je suis
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
                <br></br>
                <strong>•</strong> En cours : CCNA Introduction to Cybersecurity
                <br></br>
                <br></br>
                <strong>•</strong> Février 2024 : CCNA Introduction to Networks
                <br></br>
                <br></br>
                <strong>Formations Scolaires</strong> <br></br>
                <br></br>
                <strong>•</strong> 2025 - Actuellement : <a href="https://nice.cesi.fr/" target="_blank" rel="noreferrer"><u>CESI Nice</u></a>, cycle d'alternance ingénieur informatique spécialisation Cybersécurité.
                <br></br>
                <br></br>
                <strong>•</strong> 2023 - 2025 : <a href="https://nice.cesi.fr/" target="_blank" rel="noreferrer"><u>CESI Nice</u></a>, prépa-intégrée en cycle ingénieur.
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
            <p><strong>•<u> Systèmes et Sécurité</u></strong> :</p>
            <div className="about-text-left">
              <p><u>Administration Windows & Linux</u> : installation, mise à jour des OS, déblocage d'appareils.</p>
              <p><u>Gestion des accès</u> : Active Directory, sécurisation des accès, gestion des droits utilisateurs.</p>
              <p><u>Sauvegarde et maintenance</u> : sauvegarde de données, maintenance système, gestion du Cloud.</p>
              <p><u>Sécurité informatique</u> : pare-feu (firewall), contrôle des périphériques USB, audit de sécurité, identification des vulnérabilités.</p>
              <p><u>Déploiement et gestion</u> : déploiement de postes clients.</p>
            </div>

            <p><strong>•<u> Réseaux & Infrastructure</u></strong> :</p>
            <div className="about-text-left">
            <p><u>Protocoles</u>: TCP/IP, VLAN, routage (statique/dynamique), DNS, DHCP, IPv4/IPv6.</p> 
            <p><u>Administration réseau</u> : configuration de switches et routeurs, VPN, Telnet/SSH.</p>
            <p><u>Sécurité réseau</u> : diagnostic, monitoring, serveur Apache.</p>
            </div>

            <p><strong>•<u> Développement</u></strong> :</p>
            <div className="about-text-left">
              <p><u>Programmation orientée objet (POO)</u> : C++.</p>
              <p><u>Développement web</u> : <b>Frontend</b> : HTML5, CSS3, JavaScript ES6+, React.js, Responsive Design. <b>Backend</b> : PHP, Node.js.</p>
              <p><u>Développement embarqué</u> : Arduino.</p>
              <p><u>Méthodologies</u> : tests unitaires, architecture MVC, documentation technique (Markdown).</p>
              <p><u>Bases de données</u> : MySQL, PHPMyAdmin</p>
            </div>

            <p><strong>•<u> Outils</u></strong> :</p>
            <div className="about-text-left">
              <p><u>Versioning</u> : Git, GitHub.</p>
              <p><u>Bureautique</u> : Microsoft Office, LaTeX, Google Scripts, Microsoft Teams.</p>
              <p><u>Réseaux & Sécurité</u> : Telnet/SSH, CISCO Packet Tracer, Wireshark, Nmap, DnSpy.</p>
              <p><u>Systèmes</u> : Linux (Kali, Ubuntu, Azure, Arch).</p>
              <p><u>Développement</u> : CI/CD, OCaml.</p>
              <p><u>Analyse de données.</u></p>
            </div>
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
                Actuellement à la recherche d'une alternance à partir d'<b>Octobre 2025</b> sur une période allant jusqu'à <b>3 ans</b>
                , je suis motivé à l'idée de mettre en pratique mes compétences et de contribuer concrètement à des projets stimulants dans le domaine de la cybersécurité.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
