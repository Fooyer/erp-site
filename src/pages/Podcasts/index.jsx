import { useState } from "react";
import styles from "./styles.module.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./customAudioPlayer.css";
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
      <h2 className="page-title">Podcasts</h2>

      <div className="page-content" style={{ marginBottom: "50px" }}>
        <div className="page-header">
          <Mic className="page-header-icon icon-purple" />
          <h3 className="page-header-title">Conteúdos em Áudio sobre IA</h3>
        </div>

        <div className="responsible-section podcasts-responsible">
          <p className="responsible-title">Responsáveis:</p>
          <p className="responsible-names">Jussara, Matheus, Gianne, Arthur</p>
        </div>
        <p className="description">
          Nossa série de podcasts explora como a Inteligência Artificial está
          revolucionando os sistemas integrados de gestão empresarial.
        </p>

        <ul className="episode-list">
          {episodes.map((ep, index) => (
            <li
              key={index}
              className={`episode-item ${
                index === currentEpisodeIndex ? "active" : ""
              }`}
              onClick={() => setCurrentEpisodeIndex(index)}
            >
              <strong>{ep.title}</strong>
              <span className="duration">{ep.duration}</span>
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
