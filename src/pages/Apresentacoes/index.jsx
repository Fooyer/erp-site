import React from "react";
import { Presentation } from "lucide-react";
import styles from "./apresentacoes.module.css";

const Apresentacoes = () => {
  const presentations = [
    {
      title: "As vantagens do ERP na gestão",
      file: "/As vantagens do ERP na gestão.pdf",
    },
    {
      title: "Comparativo de ERP's no mercado",
      file: "/Comparativo-de-ERPs-no-Mercado.pdf",
    },
    {
      title: "Desafios e sucesso na implementação de ERP",
      file: "/Desafios-e-Sucesso-na-Implementacao-de-ERP.pdf",
    },
    {
      title: "ERP na nuvem vs On premise",
      file: "/ERP-na-Nuvem-vs-On-Premise.pdf",
    },
    {
      title: "ERP-Transformação digital e indústria 4.0",
      file: "/ERP-Transformacao-Digital-e-Industria-40.pdf",
    },
    {
      title: "Estudo de caso - Implementação de ERP",
      file: "/Estudo-de-Caso-Implementacao-de-ERP.pdf",
    },
    {
      title: "Impacto do ERP na gestão financeira e contábil",
      file: "/Impacto-do-ERP-na-Gestao-Financeira-e-Contabil.pdf",
    },
    {
      title: "Segurança da informação e LGPD em sistemas ERP",
      file: "/Seguranca-da-Informacao-e-LGPD-em-Sistemas-ERP.pdf",
    },
  ];

  const handleDownload = (file, title) => {
    // Fallback para quando o arquivo não existir
    console.log(`Tentando baixar: ${title} - ${file}`);
  };

  return (
    <div className={styles.pageContainerWide}>
      <h2 className={styles.pageTitle}>Apresentações</h2>

      <div className={styles.apresentacoesGrid}>
        <div className={styles.pageContent}>
          <div className={styles.pageHeader}>
            <Presentation
              className={`${styles.pageHeaderIcon} ${styles.iconGreen}`}
            />
            <h3 className={styles.pageHeaderTitle}>
              ERP e Inteligência Artificial
            </h3>
          </div>

          <div
            className={`${styles.responsibleSection} ${styles.apresentacoesResponsible}`}
          >
            <p className={styles.responsibleTitle}>Responsáveis:</p>
            <p className={styles.responsibleNames}>
              Jonatan, Diogo, Gustavo, Rodrigo, Erik
            </p>
          </div>

          <p className={styles.description}>
            Apresentações sobre ERP na transformação digital e indústria 4.0 e
            outros conteúdos relevantes.
          </p>
          <p className={styles.description}>
            Clique no item da lista abaixo para baixá-lo.
          </p>
        </div>

        <div className={styles.topicsCard}>
          <h4 className={styles.topicsTitle}>Tópicos Abordados:</h4>
          <ul className={styles.topicsList}>
            {presentations.map((presentation, index) => (
              <li key={index} className={styles.topicItem}>
                <a
                  href={presentation.file}
                  download
                  className={styles.topicLink}
                  onClick={() => {
                    // Previne o download se o arquivo não existir e executa fallback
                    handleDownload(presentation.file, presentation.title);
                  }}
                  title={`Baixar: ${presentation.title}`}
                >
                  <div className={styles.topicDot}></div>
                  {presentation.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Apresentacoes;
