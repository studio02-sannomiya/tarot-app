import type { DrawnCard } from '../../../types/tarot';
import { TarotCardView } from '../TarotCardView/TarotCardView';
import styles from './ResultCard.module.css';

interface ResultCardProps { drawnCard: DrawnCard; }

const positionLabelMap = { single: '今回の1枚', past: '過去', present: '現在', future: '未来' } as const;
const orientationLabelMap = { upright: '正位置', reversed: '逆位置' } as const;

export const ResultCard = ({ drawnCard }: ResultCardProps) => {
  const meaning = drawnCard.orientation === 'upright' ? drawnCard.card.uprightMeaning : drawnCard.card.reversedMeaning;

  return (
    <article className={styles.card}>
      <div className={styles.metaRow}>
        <span className={styles.position}>{positionLabelMap[drawnCard.position]}</span>
        <span className={styles.orientation}>{orientationLabelMap[drawnCard.orientation]}</span>
      </div>
      <TarotCardView card={drawnCard.card} orientation={drawnCard.orientation} />
      <div className={styles.body}>
        <h2 className={styles.title}>{drawnCard.card.nameJa}</h2>
        <p className={styles.enTitle}>{drawnCard.card.nameEn}</p>
        <p className={styles.meaning}>{meaning}</p>
        <ul className={styles.keywords}>
          {drawnCard.card.keywords.map((keyword) => (
            <li key={keyword} className={styles.keyword}>{keyword}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};
