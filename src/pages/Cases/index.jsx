import React from "react";
import { Trophy } from "lucide-react";

const Cases = () => {
  return (
    <div className="page-container-wide">
      <h2 className="page-title">Cases de Sucesso</h2>

      <div className="page-content">
        <div className="page-header">
          <Trophy className="page-header-icon icon-orange" />
          <h3 className="page-header-title">Histórias de Sucesso</h3>
        </div>

        <div className="responsible-section cases-responsible">
          <p className="responsible-title">Responsáveis:</p>
          <p className="responsible-names">Willian, Mariane, Isabelle</p>
        </div>

        <div className="cases-grid">
          <div className="case-card">
            <div className="case-icon-container">
              <Trophy className="case-icon" />
            </div>
            <h4 className="case-title">Case 1</h4>
            <p className="case-description">
              Implementação bem-sucedida de ERP em empresa de médio porte
            </p>
          </div>

          <div className="case-card">
            <div className="case-icon-container">
              <Trophy className="case-icon" />
            </div>
            <h4 className="case-title">Case 2</h4>
            <p className="case-description">
              Transformação digital com IA em processos de gestão
            </p>
          </div>

          <div className="case-card">
            <div className="case-icon-container">
              <Trophy className="case-icon" />
            </div>
            <h4 className="case-title">Case 3</h4>
            <p className="case-description">
              Otimização de processos através de sistemas integrados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
