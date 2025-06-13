import React from "react";
import { Mic } from "lucide-react";

const Podcasts = () => {
  return (
    <div className="page-container">
      <h2 className="page-title">Podcasts</h2>

      <div className="page-content">
        <div className="page-header">
          <Mic className="page-header-icon icon-purple" />
          <h3 className="page-header-title">Conteúdos em Áudio sobre IA</h3>
        </div>

        <div className="responsible-section podcasts-responsible">
          <p className="responsible-title">Responsáveis:</p>
          <p className="responsible-names">Jussara, Matheus, Gianne, Arthur</p>
        </div>

        <div className="episodes-container">
          <p
            className="description"
            style={{
              backgroundColor: "transparent",
              padding: 0,
              marginBottom: "1rem",
            }}
          >
            Nossa série de podcasts explora como a Inteligência Artificial está
            revolucionando os sistemas integrados de gestão empresarial.
          </p>

          <div className="episodes-grid">
            <div className="episode-card">
              <h4 className="episode-title">Episódio 1</h4>
              <p className="episode-description">Introdução à IA em ERP</p>
            </div>

            <div className="episode-card">
              <h4 className="episode-title">Episódio 2</h4>
              <p className="episode-description">Machine Learning aplicado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcasts;
