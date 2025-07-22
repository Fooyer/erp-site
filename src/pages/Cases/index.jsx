import React, { memo } from "react";
import { Trophy, TrendingUp, Target, Star } from "lucide-react";
import styles from "./cases.module.css";

const casesData = [
  {
    id: 1,
    icon: Trophy,
    title: "Discover Financial Services",
    category: "Transformação Digital",
    description:
      "A Discover, terceira maior empresa de cartões de crédito dos EUA, substituiu sete sistemas ERP on-premises por uma solução na nuvem (Oracle Fusion Cloud ERP + EPM). Resultado: maior eficiência operacional, dados mais confiáveis e decisões mais ágeis.",
    metrics: [
      "7 sistemas unificados",
      "Pandemia sem impactos",
      "Dados em tempo real",
    ],
    color: "blue",
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "Hormel Foods",
    category: "Unificação Empresarial",
    description:
      "A Hormel, detentora de mais de 50 marcas, enfrentava dificuldades com sistemas fragmentados. Em parceria com Oracle e KPMG, unificou suas operações com Oracle Cloud ERP, garantindo visibilidade unificada dos negócios.",
    metrics: [
      "50+ marcas integradas",
      "Processos padronizados",
      "Análise estratégica",
    ],
    color: "green",
  },
  {
    id: 3,
    icon: Target,
    title: "Taylor Corporation",
    category: "Modernização Corporativa",
    description:
      "A Taylor Corporation consolidou 85 sistemas legados em uma única plataforma ERP na nuvem. O CEO liderou pessoalmente a mobilização de 10.000 colaboradores, resultando em maior agilidade e redução de custos.",
    metrics: [
      "85 sistemas consolidados",
      "10.000 colaboradores",
      "Custos reduzidos",
    ],
    color: "purple",
  },
  {
    id: 4,
    icon: Star,
    title: "Nubank",
    category: "Fintech Inovadora",
    description:
      "O Nubank revolucionou o mercado financeiro brasileiro com sua proposta digital e centrada no cliente. Começou com cartão sem anuidade e hoje atende mais de 90 milhões de pessoas, tornando-se uma das maiores fintechs do mundo.",
    metrics: ["90M+ clientes", "Valor bilionário", "Presença internacional"],
    color: "violet",
  },
];

const CaseCard = memo(({ caseItem, index }) => {
  const Icon = caseItem.icon;

  return (
    <article
      className={`${styles.caseCard} ${styles[`color${caseItem.color}`]}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={styles.cardHeader}>
        <div className={styles.iconWrapper}>
          <Icon className={styles.cardIcon} size={24} />
        </div>
        <div className={styles.cardMeta}>
          <span className={styles.category}>{caseItem.category}</span>
          <h3 className={styles.cardTitle}>{caseItem.title}</h3>
        </div>
      </div>

      <p className={styles.cardDescription}>{caseItem.description}</p>

      <div className={styles.metricsContainer}>
        {caseItem.metrics.map((metric, idx) => (
          <span key={idx} className={styles.metric}>
            {metric}
          </span>
        ))}
      </div>
    </article>
  );
});

CaseCard.displayName = "CaseCard";

const Cases = () => {
  return (
    <main className={styles.container}>
      <div className={styles.hero}>
        <Trophy className={styles.heroIcon} size={48} />
        <h1 className={styles.title}>Cases de Sucesso</h1>
        <p className={styles.subtitle}>
          Histórias reais de transformação e inovação empresarial
        </p>
      </div>

      <section className={styles.content}>
        <div className={styles.responsibleCard}>
          <div className={styles.responsibleHeader}>
            <div className={styles.responsibleIcon}>
              <Target size={20} />
            </div>
            <div>
              <h2 className={styles.responsibleTitle}>Equipe Responsável</h2>
              <p className={styles.responsibleNames}>
                Willian • Mariane • Isabelle
              </p>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {casesData.map((caseItem, index) => (
            <CaseCard key={caseItem.id} caseItem={caseItem} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Cases;
