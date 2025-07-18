import { FileText, Presentation, Mic, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import styles from "./home.module.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.homeContainer}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Base de Conhecimento</h1>
        <h2 className={styles.heroSubtitle}>Sistemas Integrados de Gestão</h2>
        <p className={styles.heroDescription}>
          Site desenvolvido para centralizar todo o conhecimento da disciplina
        </p>
      </div>

      <div className={styles.cardsGrid}>
        <div className={styles.card} onClick={() => navigate("/ementa")}>
          <FileText className={`${styles.cardIcon} ${styles.iconBlue}`} />
          <h3 className={styles.cardTitle}>Ementa</h3>
          <p className={styles.cardDescription}>
            Documentação completa da disciplina
          </p>
        </div>

        <div className={styles.card} onClick={() => navigate("/apresentacoes")}>
          <Presentation className={`${styles.cardIcon} ${styles.iconGreen}`} />
          <h3 className={styles.cardTitle}>Apresentações</h3>
          <p className={styles.cardDescription}>Conteúdos sobre ERP e IA</p>
        </div>

        <div className={styles.card} onClick={() => navigate("/podcasts")}>
          <Mic className={`${styles.cardIcon} ${styles.iconPurple}`} />
          <h3 className={styles.cardTitle}>Podcasts</h3>
          <p className={styles.cardDescription}>Conteúdos em áudio sobre IA</p>
        </div>

        <div className={styles.card} onClick={() => navigate("/cases")}>
          <Trophy className={`${styles.cardIcon} ${styles.iconOrange}`} />
          <h3 className={styles.cardTitle}>Cases</h3>
          <p className={styles.cardDescription}>Histórias de sucesso</p>
        </div>
      </div>

      <div className={styles.developersSection}>
        <h2 className={styles.developersTitle}>Desenvolvedores do Site</h2>
        <p className={styles.developersNames}>
          Thamires · Freddy · Carlos · Renato · Fernando
        </p>
      </div>
    </div>
  );
};

export default Home;
