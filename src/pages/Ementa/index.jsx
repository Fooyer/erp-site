import { FileText } from "lucide-react";
import styles from "./ementa.module.css";

const Ementa = () => {
  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.pageTitle}>Ementa da Disciplina</h2>

      <div className={styles.pageContent}>
        <div className={styles.pageHeader}>
          <FileText className={`${styles.pageHeaderIcon} ${styles.iconBlue}`} />
          <h3 className={styles.pageHeaderTitle}>Documentação</h3>
        </div>

        <div className={styles.responsibleSection}>
          <p className={styles.responsibleTitle}>Responsáveis:</p>
          <p className={styles.responsibleNames}>
            João, Daniel, Danielle, Willian
          </p>
        </div>

        <div className={styles.description}>
          <p>
            Aqui você encontrará toda a ementa da disciplina de Sistemas
            Integrados de Gestão.
          </p>
        </div>

        <div className={styles.buttonContainer}>
          <a href="/Ementa SIG 2025.pdf" download className={styles.topicLink}>
            <button className={styles.button}>
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
