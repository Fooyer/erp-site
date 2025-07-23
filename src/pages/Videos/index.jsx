import styles from "./videos.module.css";
import { Video } from "lucide-react";

const Videos = () => {
  const videoList = [
    {
      title: "O que é um ERP?",
      description: "Entenda como funciona um Sistema de Gestão Empresarial.",
      embedId: "UxbX55Y_R_Q",
    },
    {
      title: "Inteligência Artificial",
      description: "Veja como a IA está revolucionando o mundo atual.",
      embedId: "2ePf9rue1Ao",
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
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.title}
                  ></iframe>
                </div>
                <div className={styles.videoInfo}>
                  <h3 className={styles.videoTitle}>{video.title}</h3>
                  <p className={styles.videoDescription}>{video.description}</p>
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
