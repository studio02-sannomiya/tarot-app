import type { CardOrientation, TarotCard } from '../../../types/tarot';
import styles from './TarotCardView.module.css';

interface TarotCardViewProps {
  card: TarotCard;
  orientation: CardOrientation;
}

export const TarotCardView = ({ card, orientation }: TarotCardViewProps) => {
  return (
    <div className={styles.cardFrame}>
      <div
        className={`${styles.cardArt} ${orientation === 'reversed' ? styles.reversed : ''}`.trim()}
        role="img"
        aria-label={`${card.nameJa}のカード`}
      >
        <div className={styles.placeholder}>
          <span className={styles.enName}>{card.nameEn}</span>
          <strong className={styles.jaName}>{card.nameJa}</strong>
        </div>
      </div>
    </div>
  );
};
