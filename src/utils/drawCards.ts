import type {
  CardOrientation,
  CardPosition,
  DrawnCard,
  SpreadType,
  TarotCard,
} from '../types/tarot';
import { shuffleCards } from './shuffleCards';

const threeCardPositions: CardPosition[] = ['past', 'present', 'future'];

const getRandomOrientation = (): CardOrientation => {
  return Math.random() > 0.5 ? 'upright' : 'reversed';
};

export const drawCards = (
  cards: TarotCard[],
  spreadType: SpreadType,
): DrawnCard[] => {
  const drawCount = spreadType === 'single' ? 1 : 3;
  const shuffledCards = shuffleCards(cards).slice(0, drawCount);

  return shuffledCards.map((card, index) => ({
    card,
    orientation: getRandomOrientation(),
    position: spreadType === 'single' ? 'single' : threeCardPositions[index],
  }));
};
