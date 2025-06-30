import React from "react";
import { FileText } from "lucide-react";

const Ementa = () => {
  return (
    <div className="page-container">
      <h2 className="page-title">Ementa da Disciplina</h2>

      <div className="page-content">
        <div className="page-header">
          <FileText className="page-header-icon icon-blue" />
          <h3 className="page-header-title">Documentação</h3>
        </div>

        <div className="responsible-section ementa-responsible">
          <p className="responsible-title">Responsáveis:</p>
          <p className="responsible-names">João, Daniel, Danielle, Willian</p>
        </div>

        <div className="description">
          <p>
            Aqui você encontrará toda a ementa da disciplina de Sistemas
            Integrados de Gestão.
          </p>
        </div>

        <div className="button-container">
          <a href="/Ementa SIG 2025.pdf" download className="topic-link">
            {" "}
            <button className="button">
              {" "}
              <FileText style={{ width: "1.25rem", height: "1.25rem" }} />
              Baixar PDF da Ementa
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ementa;
