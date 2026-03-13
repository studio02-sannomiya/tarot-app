import { PrimaryButton } from '../../components/common/PrimaryButton/PrimaryButton';
import { ScreenContainer } from '../../components/common/ScreenContainer/ScreenContainer';
import { ResultCard } from '../../components/tarot/ResultCard/ResultCard';
import type { DrawnCard, SpreadType } from '../../types/tarot';
import styles from './ResultPage.module.css';

interface ResultPageProps {
  spreadType: SpreadType;
  drawnCards: DrawnCard[];
  onRetry: () => void;
  onBackHome: () => void;
}

export const ResultPage = ({ spreadType, drawnCards, onRetry, onBackHome }: ResultPageProps) => {
  return (
    <ScreenContainer
      title={spreadType === 'single' ? '今回の1枚' : '3枚の流れ'}
      subtitle={spreadType === 'single' ? '今のあなたに届いたメッセージです。' : '過去・現在・未来を並べて、静かに意味を読み解きます。'}
      footer={
        <div className={styles.actions}>
          <PrimaryButton fullWidth onClick={onRetry}>もう一度占う</PrimaryButton>
          <PrimaryButton fullWidth variant="ghost" onClick={onBackHome}>トップへ戻る</PrimaryButton>
        </div>
      }
    >
      <div className={styles.resultList}>
        {drawnCards.map((drawnCard) => (
          <ResultCard key={`${drawnCard.position}-${drawnCard.card.id}-${drawnCard.orientation}`} drawnCard={drawnCard} />
        ))}
      </div>
    </ScreenContainer>
  );
};
