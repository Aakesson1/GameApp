// hooks/useDiceRoll.ts
import { useState } from 'react';

export function useDiceRoll() {
  const [diceValue1, setDiceValue1] = useState<number | null>(null);
  const [diceValue2, setDiceValue2] = useState<number | null>(null);
  const [rolling, setRolling] = useState(false);
  const [roundOver, setRoundOver] = useState(false);
  const [valuesHidden, setValuesHidden] = useState(false);
  const [hideOptionAvailable, setHideOptionAvailable] = useState(false);

  const rollDice = () => {
    setRolling(true);
    setRoundOver(false);
    setValuesHidden(false);
    setHideOptionAvailable(false);
    const rollDuration = 2000;
    const interval = 100;

    const intervalId = setInterval(() => {
      const randomValue1 = Math.floor(Math.random() * 6) + 1;
      const randomValue2 = Math.floor(Math.random() * 6) + 1;
      setDiceValue1(randomValue1);
      setDiceValue2(randomValue2);
    }, interval);

    setTimeout(() => {
      clearInterval(intervalId);
      const finalValue1 = Math.floor(Math.random() * 6) + 1;
      const finalValue2 = Math.floor(Math.random() * 6) + 1;
      setDiceValue1(finalValue1);
      setDiceValue2(finalValue2);
      setRolling(false);
      setRoundOver(true);
      setHideOptionAvailable(true);
    }, rollDuration);
  };

  const nextRound = () => {
    setDiceValue1(null);
    setDiceValue2(null);
    setRoundOver(false);
    setValuesHidden(false);
    setHideOptionAvailable(false);
  };

  const hideValues = () => {
    setValuesHidden(true);
  };

  const showValues = () => {
    setValuesHidden(false);
  };

  return {
    diceValue1,
    diceValue2,
    rolling,
    roundOver,
    valuesHidden,
    hideOptionAvailable,
    rollDice,
    nextRound,
    hideValues,
    showValues,
  };
}
