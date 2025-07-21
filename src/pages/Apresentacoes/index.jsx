import React, { useState } from "react";
import { Presentation, Eye, Download, FileText } from "lucide-react";
import styles from "./Apresentacoes.module.css";

const Apresentacoes = () => {
  const [selectedPresentation, setSelectedPresentation] = useState(null);

  const presentations = [
    {
      id: 1,
      title: "As vantagens do ERP na gestão",
      file: "/As-vantagens-do-ERP-na-gestão.pdf",
      description:
        "Explorando os benefícios dos sistemas ERP para empresas modernas",
    },
    {
      id: 2,
      title: "Comparativo de ERP's no mercado",
      file: "/Comparativo-de-ERPs-no-Mercado.pdf",
      description: "Análise detalhada das principais soluções ERP disponíveis",
    },
    {
      id: 3,
      title: "Desafios e sucesso na implementação de ERP",
      file: "/Desafios-e-Sucesso-na-Implementacao-de-ERP.pdf",
      description: "Estratégias para uma implementação bem-sucedida",
    },
    {
      id: 4,
      title: "ERP na nuvem vs On premise",
      file: "/ERP-na-Nuvem-vs-On-Premise.pdf",
      description: "Comparação entre modelos de deployment",
    },
    {
      id: 5,
      title: "ERP-Transformação digital e indústria 4.0",
      file: "/ERP-Transformacao-Digital-e-Industria-40.pdf",
      description: "O papel do ERP na era da digitalização",
    },
    {
      id: 6,
      title: "Estudo de caso - Implementação de ERP",
      file: "/Estudo-de-Caso-Implementacao-de-ERP.pdf",
      description: "Exemplo prático de implementação exitosa",
    },
    {
      id: 7,
      title: "Impacto do ERP na gestão financeira e contábil",
      file: "/Impacto-do-ERP-na-Gestao-Financeira-e-Contabil.pdf",
      description: "Como o ERP revoluciona os processos financeiros",
    },
    {
      id: 8,
      title: "Segurança da informação e LGPD em sistemas ERP",
      file: "/Seguranca-da-Informacao-e-LGPD-em-Sistemas-ERP.pdf",
      description: "Aspectos de segurança e conformidade legal",
    },
  ];

  const handleSelectPresentation = (presentation) => {
    setSelectedPresentation(presentation);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerTitle}>
            <Presentation className={styles.headerIcon} />
            <div>
              <h1 className={styles.pageTitle}>Apresentações</h1>
              <p className={styles.pageSubtitle}>
                ERP e Inteligência Artificial
              </p>
            </div>
          </div>

          <div className={styles.responsibleSection}>
            <div className={styles.responsibleBorder}>
              <p className={styles.responsibleTitle}>Responsáveis:</p>
              <p className={styles.responsibleNames}>
                Jonatan, Diogo, Gustavo, Rodrigo, Erik
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.panelsContainer}>
            {/* Left Panel - Lista de Apresentações */}
            <div className={styles.leftPanel}>
              <div className={styles.listHeader}>
                <h2 className={styles.listTitle}>
                  <FileText className={styles.listIcon} />
                  Apresentações Disponíveis
                </h2>
                <p className={styles.listCount}>
                  {presentations.length} apresentações
                </p>
              </div>

              <div className={styles.listContainer}>
                <div className={styles.listItems}>
                  {presentations.map((presentation) => (
                    <div
                      key={presentation.id}
                      onClick={() => handleSelectPresentation(presentation)}
                      className={`${styles.presentationItem} ${
                        selectedPresentation?.id === presentation.id
                          ? styles.presentationItemSelected
                          : styles.presentationItemDefault
                      }`}
                    >
                      <div className={styles.itemContent}>
                        <div className={styles.itemText}>
                          <h3
                            className={`${styles.itemTitle} ${
                              selectedPresentation?.id === presentation.id
                                ? styles.itemTitleSelected
                                : styles.itemTitleDefault
                            }`}
                          >
                            {presentation.title}
                          </h3>
                          <p className={styles.itemDescription}>
                            {presentation.description}
                          </p>
                        </div>

                        <div className={styles.itemActions}>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelectPresentation(presentation);
                            }}
                            className={styles.actionButton}
                            title="Visualizar"
                          >
                            <Eye className={styles.actionIcon} />
                          </button>
                          <a
                            href={presentation.file}
                            download
                            onClick={(e) => e.stopPropagation()}
                            className={styles.actionButton}
                            title="Baixar"
                          >
                            <Download className={styles.actionIcon} />
                          </a>
                        </div>
                      </div>

                      {selectedPresentation?.id === presentation.id && (
                        <div className={styles.selectedIndicator}>
                          <div className={styles.selectedContent}>
                            <span className={styles.selectedBadge}>
                              Selecionado
                            </span>
                            <div className={styles.selectedActions}>
                              <a
                                href={presentation.file}
                                download
                                onClick={(e) => e.stopPropagation()}
                                className={styles.downloadButton}
                              >
                                <Download className={styles.downloadIcon} />
                                <span>Baixar</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel - Visualizador de PDF */}
            <div className={styles.rightPanel}>
              {selectedPresentation ? (
                <>
                  {/* Header do PDF */}
                  <div className={styles.pdfHeader}>
                    <div className={styles.pdfHeaderContent}>
                      <div>
                        <h2 className={styles.pdfTitle}>
                          {selectedPresentation.title}
                        </h2>
                        <p className={styles.pdfDescription}>
                          {selectedPresentation.description}
                        </p>
                      </div>
                      <div className={styles.pdfActions}>
                        <a
                          href={selectedPresentation.file}
                          download
                          className={styles.pdfDownloadButton}
                        >
                          <Download className={styles.pdfDownloadIcon} />
                          Baixar PDF
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Conteúdo do PDF */}
                  <div className={styles.pdfContent}>
                    <div className={styles.pdfViewer}>
                      <object
                        data={selectedPresentation.file}
                        type="application/pdf"
                        className={styles.pdfEmbed}
                      >
                        <div className={styles.pdfFallback}>
                          <FileText className={styles.fallbackIcon} />
                          <h3 className={styles.fallbackTitle}>
                            Visualização não disponível
                          </h3>
                          <p className={styles.fallbackText}>
                            Não foi possível carregar o PDF no navegador. Clique
                            no botão abaixo para baixar o arquivo.
                          </p>
                          <a
                            href={selectedPresentation.file}
                            download
                            className={styles.fallbackButton}
                          >
                            <Download className={styles.fallbackButtonIcon} />
                            Baixar Apresentação
                          </a>
                        </div>
                      </object>
                    </div>
                  </div>
                </>
              ) : (
                /* Estado inicial - Nenhuma apresentação selecionada */
                <div className={styles.emptyState}>
                  <div className={styles.emptyContent}>
                    <div className={styles.emptyIcon}>
                      <Presentation className={styles.emptyIconSvg} />
                    </div>
                    <h3 className={styles.emptyTitle}>
                      Selecione uma apresentação
                    </h3>
                    <p className={styles.emptyText}>
                      Clique em qualquer apresentação da lista ao lado para
                      visualizá-la aqui.
                    </p>
                    <div className={styles.emptyTip}>
                      <p className={styles.emptyTipText}>
                        💡 <strong>Dica:</strong> Use os ícones de visualizar e
                        baixar ao passar o mouse sobre cada item.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apresentacoes;
