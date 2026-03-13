import { useEffect } from 'react';
import { PrimaryButton } from '../../components/common/PrimaryButton/PrimaryButton';
import { ScreenContainer } from '../../components/common/ScreenContainer/ScreenContainer';
import { ShuffleDeck } from '../../components/tarot/ShuffleDeck/ShuffleDeck';
import type { SpreadType } from '../../types/tarot';
import styles from './ShufflePage.module.css';

interface ShufflePageProps {
  spreadType: SpreadType;
  onComplete: () => void;
}

export const ShufflePage = ({ spreadType, onComplete }: ShufflePageProps) => {
  useEffect(() => {
    const timerId = window.setTimeout(() => { onComplete(); }, 2600);
    return () => { window.clearTimeout(timerId); };
  }, [onComplete]);

  const spreadLabel = spreadType === 'single' ? '1枚引き' : '3枚引き';

  return (
    <ScreenContainer
      title="カードを整えています"
      subtitle="少しだけ呼吸を整えて、今気になっていることを思い浮かべてみてください。"
      footer={<PrimaryButton fullWidth variant="secondary" onClick={onComplete}>結果を見る</PrimaryButton>}
    >
      <ShuffleDeck spreadLabel={spreadLabel} />
      <p className={styles.note}>数秒後に自動で結果へ進みます。</p>
    </ScreenContainer>
  );
};
