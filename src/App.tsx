import { HomePage } from './pages/HomePage/HomePage';
import { ResultPage } from './pages/ResultPage/ResultPage';
import { ShufflePage } from './pages/ShufflePage/ShufflePage';
import { useTarotReading } from './hooks/useTarotReading';

const App = () => {
  const {
    screen,
    spreadType,
    drawnCards,
    availableCardsCount,
    setSpreadType,
    startReading,
    finishShuffleAndReveal,
    resetToHome,
  } = useTarotReading();

  if (screen === 'shuffle') {
    return <ShufflePage spreadType={spreadType} onComplete={finishShuffleAndReveal} />;
  }

  if (screen === 'result') {
    return (
      <ResultPage
        spreadType={spreadType}
        drawnCards={drawnCards}
        onRetry={startReading}
        onBackHome={resetToHome}
      />
    );
  }

  return (
    <HomePage
      spreadType={spreadType}
      availableCardsCount={availableCardsCount}
      onChangeSpreadType={setSpreadType}
      onStartReading={startReading}
    />
  );
};

export default App;
