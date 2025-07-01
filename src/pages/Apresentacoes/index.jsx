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
              Jonatan, Diogo, Gustavo, Rodrigo, Erik
            </p>
          </div>

          <p style={{ color: "rgb(55, 65, 81)" }}>
            Apresentações sobre ERP na transformação digital e indutria 4.0 e
            outros conteúdos relevantes.
          </p>
          <p style={{ color: "rgb(55, 65, 81)" }}>
            Clique no item da lista abaixo para baixá-lo.
          </p>
        </div>

        <div className="topics-card">
          <h4 className="topics-title">Tópicos Abordados:</h4>
          <ul className="topics-list">
            <li className="topic-item">
              <a
                href="/As vantagens do ERP na gestão.pdf"
                download
                className="topic-link"
              >
                <div className="topic-dot"></div>
                As vantagens do ERP na gestão
              </a>
            </li>
            <li className="topic-item">
              <a
                href="/Comparativo-de-ERPs-no-Mercado.pdf"
                download
                className="topic-link"
              >
                <div className="topic-dot"></div>
                Comparativo de ERP's no mercado
              </a>
            </li>
            <li className="topic-item">
              <a
                href="/Desafios-e-Sucesso-na-Implementacao-de-ERP.pdf"
                download
                className="topic-link"
              >
                <div className="topic-dot"></div>
                Desafios e sucesso na implementação de ERP
              </a>
            </li>
            <li className="topic-item">
              <a
                href="/ERP-na-Nuvem-vs-On-Premise.pdf"
                download
                className="topic-link"
              >
                <div className="topic-dot"></div>
                ERP na nuvem vs On premise
              </a>
            </li>
            <li className="topic-item">
              <a
                href="/ERP-Transformacao-Digital-e-Industria-40.pdf"
                download
                className="topic-link"
              >
                <div className="topic-dot"></div>
                ERP-Transformação digital e indutria 4.0
              </a>
            </li>
            <li className="topic-item">
              <a
                href="/Estudo-de-Caso-Implementacao-de-ERP.pdf"
                download
                className="topic-link"
              >
                <div className="topic-dot"></div>
                Estudo de caso - Implementação de ERP
              </a>
            </li>
            <li className="topic-item">
              <a
                href="/Impacto-do-ERP-na-Gestao-Financeira-e-Contabil.pdf"
                download
                className="topic-link"
              >
                <div className="topic-dot"></div>
                Impacto do ERP na gestão financeira e contábil
              </a>
            </li>
            <li className="topic-item">
              <a
                href="/Seguranca-da-Informacao-e-LGPD-em-Sistemas-ERP.pdf"
                download
                className="topic-link"
              >
                <div className="topic-dot"></div>
                Segurança da informação e LGPD em sistemas ERP
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Apresentacoes;
