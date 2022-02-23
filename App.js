import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import uuid from 'react-uuid';


export default function App() {

  const NBR_OF_DICES = 2;
  const [sumOfDices, setSumOfDices] = useState(0);
  const [diceImage, setDiceImage] = useState([]);

  function initialize() {
    let imgs = [];
    for (let i = 0; i < NBR_OF_DICES; i++) {
      imgs[i] = require("./assets/dice-images/smiley.png");
    }
    setDiceImage(imgs);
  }

  function setImages(throws) {
    let imgs = [];
    for (let i = 0; i < throws.length; i++) {
      switch(throws[i]){
      case 1: imgs[i] = require("./assets/dice-images/1.png"); break;
      case 2: imgs[i] = require("./assets/dice-images/2.png"); break;
      case 3: imgs[i] = require("./assets/dice-images/3.png"); break;
      case 4: imgs[i] = require("./assets/dice-images/4.png"); break;
      case 5: imgs[i] = require("./assets/dice-images/5.png"); break;
      case 6: imgs[i] = require("./assets/dice-images/6.png"); break;
      default: break;
      }
    }
    setDiceImage(imgs);
  }

  function throwsDices() {
    let throws = [];
    let sum = 0;
    for (let i = 0; i < NBR_OF_DICES; i++) {
      throws[i] = Math.floor(Math.random() * 6 + 1);
      sum += throws[i];
    }
    setSumOfDices(sum);
    setImages(throws);
  }

  useEffect(() => {
    initialize();
  }, []);
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sum of dices</Text>
      <Button 
        style={styles.button}
        onPress={throwsDices}
        title={"Throw dices"}
      ></Button>

      <View style={styles.flex}>
        {diceImage.map(dice => (
          <Image style={styles.dice} source={dice} key={uuid()}/>
        ))}
      </View>

      <Text style={styles.sum}>Sum of dices is {sumOfDices}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    marginTop: 100,
    marginBottom: 30,
  },
  button: {
    marginTop: 30,
    marginBottom: 30,
  },
  flex: {
    flexDirection: 'row'
  },
  dice: {
    width: 80,
    height: 80,
    marginTop: 30,
    marginBottom: 15,
    marginRight: 10
  },
  sum: {
    fontSize: 20
  }
});
