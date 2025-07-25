import styles from "./videos.module.css";
import { Video } from "lucide-react";

const Videos = () => {
  const videoList = [
    {
      title:
        "Como funciona o Sistema de Gestão Integrada (SGI) na prática?- SG4 Gestão Ocupacional",
      embedId: "0eQhcFOasS4",
    },
    {
      title: "O que é SGI e para quem serve? | QMS Brasil",
      embedId: "KwQMP-mlBKc",
    },
    {
      title: "Sistema Integrado de Gestão Empresarial",
      embedId: "r74DQTux8lY",
    },
    {
      title: "O QUE É UM SISTEMA DE GESTÃO INTEGRADO?",
      embedId: "76Sz7TM_RyI",
    },
    {
      title:
        "Curso Intensivo de Desenvolvimento Web - Integrando HTML e CSS - Ep. 2",
      embedId: "Lf4uZELPBwQ",
    },
    {
      title: "Aprenda Desenvolvimento WEB e Consiga Um Emprego! (REACT)",
      embedId: "OPwBCDhjzeA",
    },
    {
      title: "Vite in 100 Seconds",
      embedId: "KCrXgy8qtjM",
    },
    {
      title: "Descubra por que o Vite é a Melhor Escolha para Seu App",
      embedId: "3HdbNsVuhtM",
    },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerTitle}>
            <Video className={styles.headerIcon} />
            <div>
              <h1 className={styles.pageTitle}>Biblioteca de Vídeos</h1>
              <p className={styles.pageSubtitle}>
                Aprenda de forma visual com conteúdos explicativos e rápidos.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.videosGrid}>
            {videoList.map((video, index) => (
              <div key={index} className={styles.videoCard}>
                <div className={styles.videoFrame}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.title}
                  ></iframe>
                </div>
                <div className={styles.videoInfo}>
                  <h3 className={styles.videoTitle}>{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Videos;
