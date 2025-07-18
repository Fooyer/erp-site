import { useState } from "react";
import styles from "./podcast.module.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Mic } from "lucide-react";

import episodio1 from "./Files/1.mp3";
import episodio2 from "./Files/2.mp3";
import episodio3 from "./Files/3.mp3";
import episodio4 from "./Files/4.mp3";
import episodio5 from "./Files/5.mp3";
import episodio6 from "./Files/6.mp3";

const episodes = [
  {
    title: "Episódio 1 - Sistemas integrados de Gestão (ERP)",
    src: episodio1,
    duration: "05:38",
  },
  {
    title: "Episódio 2 - O Papel Estratégico da Produção",
    src: episodio2,
    duration: "07:38",
  },
  {
    title: "Episódio 3 - MRP",
    src: episodio3,
    duration: "08:15",
  },
  {
    title: "Episódio 4 - Gestão de estoques",
    src: episodio4,
    duration: "07:04",
  },
  {
    title: "Episódio 5 - Just-in-time (JIT)",
    src: episodio5,
    duration: "07:27",
  },
  {
    title: "Episódio 6 - Financeiro",
    src: episodio6,
    duration: "06:57",
  },
];

const Podcasts = () => {
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);

  const handleNext = () => {
    setCurrentEpisodeIndex((prev) =>
      prev + 1 < episodes.length ? prev + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentEpisodeIndex((prev) =>
      prev - 1 >= 0 ? prev - 1 : episodes.length - 1
    );
  };

  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.pageTitle}>Podcasts</h2>

      <div className={styles.pageContent} style={{ marginBottom: "50px" }}>
        <div className={styles.pageHeader}>
          <Mic className={`${styles.pageHeaderIcon} ${styles.iconPurple}`} />
          <h3 className={styles.pageHeaderTitle}>
            Conteúdos em Áudio sobre IA
          </h3>
        </div>

        <div className={styles.responsibleSection}>
          <p className={styles.responsibleTitle}>Responsáveis:</p>
          <p className={styles.responsibleNames}>
            Jussara, Matheus, Gianne, Arthur
          </p>
        </div>

        <p className={styles.description}>
          Nossa série de podcasts explora como a Inteligência Artificial está
          revolucionando os sistemas integrados de gestão empresarial.
        </p>

        <ul className={styles.episodeList}>
          {episodes.map((ep, index) => (
            <li
              key={index}
              className={`${styles.episodeItem} ${
                index === currentEpisodeIndex ? styles.active : ""
              }`}
              onClick={() => setCurrentEpisodeIndex(index)}
            >
              <strong>{ep.title}</strong>
              <span className={styles.duration}>{ep.duration}</span>
            </li>
          ))}
        </ul>

        <AudioPlayer
          className="custom-player"
          src={episodes[currentEpisodeIndex].src}
          showJumpControls={false}
          showSkipControls={true}
          onClickPrevious={handlePrev}
          onClickNext={handleNext}
          autoPlayAfterSrcChange={true}
        />
      </div>
    </div>
  );
};

export default Podcasts;
