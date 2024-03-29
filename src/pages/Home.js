import { Link } from "react-router-dom";
import React from "react";
import ProjectThumbnail from '../common/images/projects.png';
import WagesThumbnail from '../common/images/salary.png';
  
export default function Home() {
  return (
    <main>
      <h1>Datos públicos del Gobierno de la República Argentina.</h1>
      <br />

      <div className="main-container">
          <Link to="/projects" className="page">
            <h3>Obras Públicas</h3>
            <img src={ProjectThumbnail} alt="Obras públicas"></img>
          </Link>
      </div>
    </main>
  );
};