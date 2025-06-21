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
            <h4 className="case-title">Discover Financial Services</h4>
            <p className="case-description">
              A Discover, terceira maior empresa de cartões de crédito dos EUA,
              substituiu sete sistemas ERP on-premises por uma solução na nuvem
              (Oracle Fusion Cloud ERP + EPM). O objetivo era padronizar
              processos, melhorar a precisão dos dados e apoiar o crescimento
              das áreas financeiras. A implementação foi bem-sucedida, mesmo
              durante a pandemia, graças a uma visão clara de transformação
              organizacional, não apenas tecnológica. O resultado foi maior
              eficiência operacional, dados mais confiáveis, decisões mais ágeis
              e atualizações contínuas via nuvem.
            </p>
          </div>

          <div className="case-card">
            <div className="case-icon-container">
              <Trophy className="case-icon" />
            </div>
            <h4 className="case-title">Hormel Foods</h4>
            <p className="case-description">
              A Hormel, detentora de mais de 50 marcas, enfrentava dificuldades
              com sistemas fragmentados e obsoletos. Em parceria com Oracle e
              KPMG, unificou suas operações com o Oracle Cloud ERP. A chave do
              sucesso foi o trabalho colaborativo entre as equipes, que garantiu
              padronização de processos, visibilidade unificada dos negócios e
              análise mais estratégica dos dados. A nova plataforma também
              permitiu identificar ineficiências na cadeia de suprimentos e
              melhorar o controle financeiro de todas as marcas.
            </p>
          </div>

          <div className="case-card">
            <div className="case-icon-container">
              <Trophy className="case-icon" />
            </div>
            <h4 className="case-title">Taylor Corporation</h4>
            <p className="case-description">
              A Taylor Corporation decidiu adotar um novo sistemas com foco em
              consolidar 85 sistemas legados em uma única plataforma ERP na
              nuvem. O CEO liderou pessoalmente a mobilização dos 10.000
              colaboradores, promovendo uma cultura de participação e adaptação.
              A adesão dos funcionários foi crucial para o sucesso da mudança.
              Como resultado, a empresa ganhou agilidade na tomada de decisões,
              reduziu custos e aumentou a eficiência, especialmente na gestão
              financeira e de compras
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
