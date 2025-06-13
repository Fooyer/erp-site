import React from "react";
import { Presentation } from "lucide-react";

const Apresentacoes = () => {
  return (
    <div className="page-container-wide">
      <h2 className="page-title">Apresentações</h2>

      <div className="apresentacoes-grid">
        <div className="page-content">
          <div className="page-header">
            <Presentation className="page-header-icon icon-green" />
            <h3 className="page-header-title">ERP e Inteligência Artificial</h3>
          </div>

          <div className="responsible-section apresentacoes-responsible">
            <p className="responsible-title">Responsáveis:</p>
            <p className="responsible-names">
              Jonatan, Diogo, Gustavo, Rodrigo
            </p>
          </div>

          <p style={{ color: "rgb(55, 65, 81)" }}>
            Apresentações sobre Enterprise Resource Planning integrado com
            Inteligência Artificial e outros conteúdos relevantes.
          </p>
        </div>

        <div className="topics-card">
          <h4 className="topics-title">Tópicos Abordados:</h4>
          <ul className="topics-list">
            <li className="topic-item">
              <div className="topic-dot"></div>
              Implementação de ERP
            </li>
            <li className="topic-item">
              <div className="topic-dot"></div>
              IA aplicada a sistemas de gestão
            </li>
            <li className="topic-item">
              <div className="topic-dot"></div>
              Integração de sistemas
            </li>
            <li className="topic-item">
              <div className="topic-dot"></div>
              Análise de dados empresariais
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Apresentacoes;
