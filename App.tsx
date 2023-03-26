import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [randomBgColor, setRandomBgColor] = useState('#FFFFFF');
  const [randomSquareColor, setRandomSquareColor] = useState('#F1F1F1');
  const [randomCircleColor, setRandomCircleColor] = useState('#F2F2F2');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    let squareColor = '#';
    let circleColor = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }

    for (let i = 0; i < 6; i++) {
      squareColor += hexRange[Math.floor(Math.random() * 16)];
    }

    for (let i = 0; i < 6; i++) {
      circleColor += hexRange[Math.floor(Math.random() * 16)];
    }

    setRandomBgColor(color);
    setRandomSquareColor(squareColor);
    setRandomCircleColor(circleColor);
  };

  return (
    <>
      <StatusBar backgroundColor={randomBgColor} />
      <View style={[styles.container, {backgroundColor: randomBgColor}]}>
        <View style={styles.shapes}>
          <View
            style={[styles.squareShape, {backgroundColor: randomSquareColor}]}>
            <Text style={styles.squareShapeText}>Square</Text>
          </View>
          <View
            style={[styles.circleShape, {backgroundColor: randomCircleColor}]}>
            <Text style={styles.squareShapeText}>Circle</Text>
          </View>
        </View>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text>Press Here</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  actionBtn: {
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 4,
    backgroundColor: '#6498AF',
    marginVertical: 15,
  },
  shapes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  squareShape: {
    width: 100,
    height: 100,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleShape: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareShapeText: {},
});

export default App;
