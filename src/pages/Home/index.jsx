import React from "react";
import { FileText, Presentation, Mic, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="hero">
        <h1 className="hero-title">Base de Conhecimento</h1>
        <h2 className="hero-subtitle">Sistemas Integrados de Gestão</h2>
        <p className="hero-description">
          Site desenvolvido para centralizar todo o conhecimento da disciplina
        </p>
      </div>

      <div className="cards-grid">
        <div className="card" onClick={() => navigate("/ementa")}>
          <FileText className="card-icon icon-blue" />
          <h3 className="card-title">Ementa</h3>
          <p className="card-description">
            Documentação completa da disciplina
          </p>
        </div>

        <div className="card" onClick={() => navigate("/apresentacoes")}>
          <Presentation className="card-icon icon-green" />
          <h3 className="card-title">Apresentações</h3>
          <p className="card-description">Conteúdos sobre ERP e IA</p>
        </div>

        <div className="card" onClick={() => navigate("/podcasts")}>
          <Mic className="card-icon icon-purple" />
          <h3 className="card-title">Podcasts</h3>
          <p className="card-description">Conteúdos em áudio sobre IA</p>
        </div>

        <div className="card" onClick={() => navigate("/cases")}>
          <Trophy className="card-icon icon-orange" />
          <h3 className="card-title">Cases</h3>
          <p className="card-description">Histórias de sucesso</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
