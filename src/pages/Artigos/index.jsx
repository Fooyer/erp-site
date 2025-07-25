import { memo, useState, useEffect, useCallback } from "react";
import { Download, Eye, FileText, X, Search, ExternalLink } from "lucide-react";
import styles from "./artigos.module.css";

const articlesData = [
  {
    id: 1,
    title:
      "Implantando um sistema integrado de gestão no processo de aquisição e controle de bens móveis na Universidade Federal de Santa Maria",
    description:
      "Este artigo aborda a implementação de um Sistema Integrado de Gestão (SIG) para aquisição e controle de bens móveis na Universidade Federal de Santa Maria (UFSM). O sistema visa consolidar informações desde a requisição até o fim da vida útil do bem, utilizando uma interface web para corrigir limitações dos sistemas anteriores e agregar valor ao processo de aquisição.",
    date: "2025-04-11",
    file: "/art1.pdf",
    link: "https://doi.org/10.55905/oelv23n4-061",
  },
  {
    id: 2,
    title:
      "SISTEMA INTEGRADO DE GESTÃO EM ESGq: proposta de modelo para o Agronegócio da Região Oeste da Bahia",
    description:
      "Este estudo propõe um modelo de Sistema Integrado de Gestão ESG (Ambiental, Social, Governança) à Gestão da Qualidade (ESGq) para o agronegócio, baseado na Teoria Valor-Crença-Norma. A pesquisa identificou lacunas em práticas ambientais, sociais e de governança.",
    date: "2025-02-29",
    file: "/art2.pdf",
    link: "https://repositorio.ufob.edu.br/handle/123456789/249",
  },
  {
    id: 3,
    title:
      "BENEFÍCIOS E DESAFIOS NA IMPLEMENTAÇÃO DE UM SISTEMA INTEGRADO DE GESTÃO NO SETOR DE FATURAMENTO DE UMA EMPRESA DE ENGENHARIA",
    description:
      "Este artigo analisa os benefícios e desafios na implementação de um Sistema Integrado de Gestão (ERP) no setor de faturamento de uma empresa de engenharia. Os principais benefícios incluem transparência da informação e eficiência da empresa.",
    date: "2024-03-05",
    file: "/art3.pdf",
    link: "https://repositorio.ufersa.edu.br/server/api/core/bitstreams/25019217-5cc5-484b-a51b-8717c6025f8e/content",
  },
  {
    id: 4,
    title:
      "AUTOMAÇÃO DE TESTE DO SISTEMA INTEGRADO DE GESTÃO DE ATIVIDADES ACADÊMICAS (SIGAA) - IFFAR",
    description:
      "Este trabalho foca na automação de testes para o Sistema Integrado de Gestão de Atividades Acadêmicas (SIGAA) do Instituto Federal Farroupilha (IFFAR), utilizando o framework Cypress para melhorar a qualidade do desenvolvimento.",
    date: "2024-12-13",
    file: "/art4.pdf",
    link: "https://arandu.iffarroupilha.edu.br/handle/itemid/551",
  },
  {
    id: 5,
    title:
      "DESENVOLVIMENTO DE UM SISTEMA INTEGRADO DE GESTÃO DA DOSIMETRIA INDIVIDUAL DOS TRABALHADORES OCUPACIONALMENTE EXPOSTOS.",
    description:
      "Este relatório detalha o desenvolvimento de um Sistema Integrado de Gestão da Dosimetria Individual para a Agência Nacional de Energia Atómica (ANEA) em Moçambique, automatizando o monitoramento da exposição à radiação.",
    date: "2024-11-02",
    file: "/art5.pdf",
    link: "http://monografias.uem.mz/handle/123456789/4806",
  },
  {
    id: 6,
    title:
      "SISTEMAS INTEGRADOS DE GESTÃO – MOTIVAÇÕES E BENEFÍCIOS DOS SIG E CERTIFICAÇÃO NAS CÂMARAS MUNICIPAIS",
    description:
      "Esta dissertação investiga as motivações, benefícios e constrangimentos da implementação de Sistemas Integrados de Gestão (SIG) e certificação em Câmaras Municipais de Portugal, focando na norma ISO 9001:2015.",
    date: "2024-06-02",
    file: "/art6.pdf",
    link: "https://www.proquest.com/openview/8e40fab0c2e91a78405e40e11c32fd36/1?pq-origsite=gscholar&cbl=2026366&diss=y",
  },
];

const ArticleCard = memo(({ article, index, onView }) => {
  const handleLinkClick = useCallback((url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  const handleViewClick = useCallback(() => {
    onView(article);
  }, [article, onView]);

  return (
    <article
      className={styles.articleCard}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={styles.cardHeader}>
        <div className={styles.cardMeta}>
          <div className={styles.cardInfo}>
            <span className={styles.date}>
              {new Date(article.date).toLocaleDateString("pt-BR")}
            </span>
          </div>
        </div>
      </div>

      <h3 className={styles.cardTitle}>{article.title}</h3>
      <p className={styles.cardDescription}>{article.description}</p>

      <div className={styles.cardActions}>
        <button
          className={`${styles.actionButton} ${styles.primary}`}
          onClick={handleViewClick}
        >
          <Eye size={16} />
          Visualizar
        </button>
        <button
          className={`${styles.actionButton} ${styles.tertiary}`}
          onClick={() => handleLinkClick(article.link)}
        >
          <ExternalLink size={16} />
          Acessar
        </button>
        <a
          href={article.file}
          download
          className={`${styles.actionButton} ${styles.secondary}`}
        >
          <Download size={16} />
          Download
        </a>
      </div>
    </article>
  );
});

ArticleCard.displayName = "ArticleCard";

const PDFViewer = memo(({ article, onClose }) => {
  const handleBackdropClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  const handleOpenInNewTab = useCallback(() => {
    window.open(article.file, "_blank", "noopener,noreferrer");
  }, [article.file]);

  return (
    <div className={styles.pdfModal} onClick={handleBackdropClick}>
      <div className={styles.pdfModalContent}>
        <div className={styles.pdfHeader}>
          <div className={styles.pdfInfo}>
            <FileText size={20} />
            <span className={styles.pdfTitle}>{article.title}</span>
          </div>
          <div className={styles.pdfControls}>
            <button
              className={styles.newTabButton}
              onClick={handleOpenInNewTab}
              title="Abrir em nova aba"
            >
              <ExternalLink size={18} />
            </button>
            <button
              className={styles.closeButton}
              onClick={onClose}
              title="Fechar"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className={styles.pdfContainer}>
          <iframe
            src={`${article.file}#toolbar=0&navpanes=0&scrollbar=1`}
            className={styles.pdfFrame}
            title={article.title}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
});

PDFViewer.displayName = "PDFViewer";

const Artigos = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [filteredArticles, setFilteredArticles] = useState(articlesData);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filtered = searchTerm
      ? articlesData.filter(
          (article) =>
            article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : articlesData;

    setFilteredArticles(filtered);
  }, [searchTerm]);

  const handleViewArticle = useCallback((article) => {
    setSelectedArticle(article);
  }, []);

  const handleCloseViewer = useCallback(() => {
    setSelectedArticle(null);
  }, []);

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  // Fechar modal com ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedArticle) {
        handleCloseViewer();
      }
    };

    if (selectedArticle) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedArticle, handleCloseViewer]);

  return (
    <main className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Artigos</h1>
        <p className={styles.subtitle}>
          Explore vários artigos sobre Sistemas Integrados de Gestão.
        </p>
      </div>

      <section className={styles.content}>
        <div className={styles.controls}>
          <div className={styles.searchContainer}>
            <Search className={styles.searchIcon} size={18} />
            <input
              type="text"
              placeholder="Buscar artigos..."
              className={styles.searchInput}
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <div className={styles.articlesSection}>
          <h2 className={styles.sectionTitle}>
            {filteredArticles.length}{" "}
            {filteredArticles.length === 1 ? "Artigo" : "Artigos"}
          </h2>
          <div className={styles.grid}>
            {filteredArticles.map((article, index) => (
              <ArticleCard
                key={article.id}
                article={article}
                index={index}
                onView={handleViewArticle}
              />
            ))}
          </div>
        </div>

        {filteredArticles.length === 0 && (
          <div className={styles.emptyState}>
            <FileText size={48} className={styles.emptyIcon} />
            <h3>Nenhum artigo encontrado</h3>
            <p>Tente ajustar os termos de busca</p>
          </div>
        )}
      </section>

      {selectedArticle && (
        <PDFViewer article={selectedArticle} onClose={handleCloseViewer} />
      )}
    </main>
  );
};

export default Artigos;
