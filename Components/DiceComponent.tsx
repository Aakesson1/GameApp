// components/DiceComponent.tsx
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface DiceProps {
  diceValue: number | null;
  diceImages: Record<number, any>;
  valuesHidden: boolean;
}

const DiceComponent: React.FC<DiceProps> = ({ diceValue, diceImages, valuesHidden }) => {
  return (
    <View>
      {diceValue !== null && (
        <Image
          source={valuesHidden ? diceImages[7] : diceImages[diceValue]} // Show hidden dice image if values are hidden
          style={styles.diceImage}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  diceImage: {
    width: 100, // Adjust size based on your images
    height: 100,
  },
});

export default DiceComponent;
