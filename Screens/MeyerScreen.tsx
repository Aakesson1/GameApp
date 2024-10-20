// screens/TabOneScreen.tsx
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import DiceComponent from '../Components/DiceComponent';
import { useDiceRoll } from '../Components/hooks/useDiceRoll';

const diceImages: Record<number, any> = {
  1: require('../assets/dice/dice1.png'),
  2: require('../assets/dice/dice2.png'),
  3: require('../assets/dice/dice3.png'),
  4: require('../assets/dice/dice4.png'),
  5: require('../assets/dice/dice5.png'),
  6: require('../assets/dice/dice6.png'),
  7: require('../assets/dice/diceHide.png'),
};

export default function TabOneScreen() {
  const {
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
  } = useDiceRoll();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Two Dice Roller</Text>

      <Text style={styles.diceText}>
        {rolling
          ? 'Rolling...'
          : diceValue1 && diceValue2 && !valuesHidden
          ? `You rolled: ${diceValue1 + diceValue2}`
          : 'Press the button to roll the dice!'}
      </Text>

      {/* Show the dice images side by side */}
      <View style={styles.diceContainer}>
        <DiceComponent diceValue={diceValue1} diceImages={diceImages} valuesHidden={valuesHidden} />
        <DiceComponent diceValue={diceValue2} diceImages={diceImages} valuesHidden={valuesHidden} />
      </View>

      {/* Button section */}
      {!rolling && roundOver && hideOptionAvailable && !valuesHidden ? (
        <View>
          <Button title="Hide Values" onPress={hideValues} />
          <Button title="Roll Again" onPress={rollDice} />
        </View>
      ) : valuesHidden ? (
        <View>
          <Button title="Show Values" onPress={showValues} />
          <Button title="Roll Again" onPress={rollDice} />
        </View>
      ) : roundOver ? (
        <Button title="Next Round" onPress={nextRound} />
      ) : (
        <Button title="Roll Dice" onPress={rollDice} disabled={rolling} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  diceText: {
    fontSize: 20,
    marginVertical: 20,
    textAlign: 'center',
  },
  diceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginVertical: 20,
  },
});
