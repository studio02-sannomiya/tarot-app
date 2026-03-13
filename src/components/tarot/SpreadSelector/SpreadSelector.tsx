import type { SpreadType } from '../../../types/tarot';
import styles from './SpreadSelector.module.css';

interface SpreadSelectorProps {
  value: SpreadType;
  onChange: (spreadType: SpreadType) => void;
}

const spreadOptions = [
  { value: 'single' as const, title: '1枚引き', description: '今日の流れや今の気持ちを、すばやく見つめたい時に。' },
  { value: 'three' as const, title: '3枚引き', description: '過去・現在・未来を並べて、物語のように読み解きます。' },
];

export const SpreadSelector = ({ value, onChange }: SpreadSelectorProps) => {
  return (
    <div className={styles.grid}>
      {spreadOptions.map((option) => {
        const isSelected = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            className={`${styles.card} ${isSelected ? styles.selected : ''}`.trim()}
            onClick={() => onChange(option.value)}
            aria-pressed={isSelected}
          >
            <span className={styles.title}>{option.title}</span>
            <span className={styles.description}>{option.description}</span>
          </button>
        );
      })}
    </div>
  );
};
