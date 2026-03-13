import styles from './ShuffleDeck.module.css';

interface ShuffleDeckProps { spreadLabel: string; }

export const ShuffleDeck = ({ spreadLabel }: ShuffleDeckProps) => {
  return (
    <div className={styles.wrapper} aria-label="シャッフル中のカード演出">
      <div className={styles.aura} />
      <div className={styles.stack}>
        <div className={`${styles.card} ${styles.cardOne}`} />
        <div className={`${styles.card} ${styles.cardTwo}`} />
        <div className={`${styles.card} ${styles.cardThree}`} />
      </div>
      <p className={styles.label}>{spreadLabel} を静かに展開しています…</p>
    </div>
  );
};
