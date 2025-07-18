import { Trophy } from "lucide-react";
import styles from "./cases.module.css";

const Cases = () => {
  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.pageTitle}>Cases de Sucesso</h2>

      <div className={styles.pageContent}>
        <div className={styles.pageHeader}>
          <Trophy className={`${styles.pageHeaderIcon} ${styles.iconOrange}`} />
          <h3 className={styles.pageHeaderTitle}>Histórias de Sucesso</h3>
        </div>

        <div
          className={`${styles.responsibleSection} ${styles.casesResponsible}`}
        >
          <p className={styles.responsibleTitle}>Responsáveis:</p>
          <p className={styles.responsibleNames}>Willian, Mariane, Isabelle</p>
        </div>

        <div className={styles.casesGrid}>
          <div className={styles.caseCard}>
            <div className={styles.caseIconContainer}>
              <Trophy className={styles.caseIcon} />
            </div>
            <h4 className={styles.caseTitle}>Discover Financial Services</h4>
            <p className={styles.caseDescription}>
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

          <div className={styles.caseCard}>
            <div className={styles.caseIconContainer}>
              <Trophy className={styles.caseIcon} />
            </div>
            <h4 className={styles.caseTitle}>Hormel Foods</h4>
            <p className={styles.caseDescription}>
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

          <div className={styles.caseCard}>
            <div className={styles.caseIconContainer}>
              <Trophy className={styles.caseIcon} />
            </div>
            <h4 className={styles.caseTitle}>Taylor Corporation</h4>
            <p className={styles.caseDescription}>
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

          <div className={styles.caseCard}>
            <div className={styles.caseIconContainer}>
              <Trophy className={styles.caseIcon} />
            </div>
            <h4 className={styles.caseTitle}>NuBank</h4>
            <p className={styles.caseDescription}>
              O Nubank é um exemplo inspirador de empreendedorismo inovador no
              Brasil. Fundado em 2013 por David Vélez, Cristina Junqueira e
              Edward Wible, a fintech nasceu para enfrentar os bancos
              tradicionais, conhecidos por suas altas tarifas, burocracia e
              atendimento ineficiente. A proposta era clara: oferecer um serviço
              financeiro simples, digital e centrado no cliente. Começando com
              um cartão de crédito sem anuidade e controlado por um aplicativo,
              o Nubank atraiu milhões de brasileiros que buscavam liberdade e
              transparência. Com o tempo, expandiu seus serviços para conta
              digital, empréstimos, seguros e investimentos, tudo de forma
              prática e sem agências físicas. Seu crescimento foi impulsionado
              por um atendimento próximo, tecnologia de ponta e forte presença
              nas redes sociais. Hoje, o Nubank atende mais de 90 milhões de
              pessoas e se tornou uma das maiores fintechs do mundo, com
              presença em vários países e valor de mercado bilionário. Sua
              história mostra que resolver um problema real com simplicidade,
              inovação e foco nas pessoas é o caminho para o sucesso no
              empreendedorismo moderno.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
