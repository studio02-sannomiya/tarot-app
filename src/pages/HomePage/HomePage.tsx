import { PrimaryButton } from '../../components/common/PrimaryButton/PrimaryButton';
import { ScreenContainer } from '../../components/common/ScreenContainer/ScreenContainer';
import { SpreadSelector } from '../../components/tarot/SpreadSelector/SpreadSelector';
import type { SpreadType } from '../../types/tarot';
import styles from './HomePage.module.css';

interface HomePageProps {
  spreadType: SpreadType;
  availableCardsCount: number;
  onChangeSpreadType: (spreadType: SpreadType) => void;
  onStartReading: () => void;
}

export const HomePage = ({ spreadType, availableCardsCount, onChangeSpreadType, onStartReading }: HomePageProps) => {
  return (
    <ScreenContainer
      title="静かな夜に、1枚の答えを。"
      subtitle="スマホで気軽に使える、落ち着いたダークトーンのタロット占いアプリです。大アルカナ22枚の中から、今のあなたに必要なカードを引きます。"
      footer={<PrimaryButton fullWidth onClick={onStartReading}>占いを始める</PrimaryButton>}
    >
      <div className={styles.panel}>
        <h2 className={styles.heading}>スプレッドを選ぶ</h2>
        <SpreadSelector value={spreadType} onChange={onChangeSpreadType} />
      </div>
      <div className={styles.infoBox}>
        <p className={styles.infoLabel}>収録カード</p>
        <p className={styles.infoValue}>大アルカナ {availableCardsCount} 枚</p>
        <p className={styles.infoDescription}>1枚引きでは今のテーマを、3枚引きでは過去・現在・未来の流れを読み解きます。</p>
      </div>
    </ScreenContainer>
  );
};
