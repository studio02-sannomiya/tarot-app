import { useMemo, useState } from 'react';
import { tarotCards } from '../data/tarotCards';
import type { DrawnCard, ReadingState, SpreadType } from '../types/tarot';
import { drawCards } from '../utils/drawCards';

const initialState: ReadingState = {
  screen: 'home',
  spreadType: 'single',
  drawnCards: [],
  isShuffling: false,
};

interface UseTarotReadingReturn {
  screen: ReadingState['screen'];
  spreadType: SpreadType;
  drawnCards: DrawnCard[];
  isShuffling: boolean;
  availableCardsCount: number;
  setSpreadType: (spreadType: SpreadType) => void;
  startReading: () => void;
  finishShuffleAndReveal: () => void;
  resetToHome: () => void;
}

export const useTarotReading = (): UseTarotReadingReturn => {
  const [readingState, setReadingState] = useState<ReadingState>(initialState);

  const availableCardsCount = useMemo(() => tarotCards.length, []);

  const setSpreadType = (spreadType: SpreadType): void => {
    setReadingState((prevState) => ({ ...prevState, spreadType }));
  };

  const startReading = (): void => {
    setReadingState((prevState) => ({
      ...prevState,
      screen: 'shuffle',
      isShuffling: true,
      drawnCards: [],
    }));
  };

  const finishShuffleAndReveal = (): void => {
    setReadingState((prevState) => ({
      ...prevState,
      screen: 'result',
      isShuffling: false,
      drawnCards: drawCards(tarotCards, prevState.spreadType),
    }));
  };

  const resetToHome = (): void => {
    setReadingState(initialState);
  };

  return {
    screen: readingState.screen,
    spreadType: readingState.spreadType,
    drawnCards: readingState.drawnCards,
    isShuffling: readingState.isShuffling,
    availableCardsCount,
    setSpreadType,
    startReading,
    finishShuffleAndReveal,
    resetToHome,
  };
};
