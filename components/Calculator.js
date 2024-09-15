import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Vibration } from 'react-native';
// import Entypo from '@expo/vector-icons/Entypo';
import   Entypo from "react-native-vector-icons/Entypo"

const Calculator = () => {
  // State cho dark mode và các màu nền
  const [darkMode, setDarkMode] = useState(false);
  const bgColorFunction = darkMode ? "#414853" : "#ededed";
  const bgColorNumber = darkMode ? "#393e46" : "#ffffff";
  const bgColorResult = darkMode ? "#282f36" : "#f5f5f5";
  const bgColorThemeButton = darkMode ? "#7b8084" : "#e5e5e5";
  const textColorHistory = darkMode ? "#857b7b" : "#7c7c7c";
  const colorIcon = darkMode ? "white" : "black";

  // Buttons và các sự kiện
  const buttonsLeft = [
    ["C", "DEL"],
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0, "."]
  ];
  const buttonsRight = ["/", "*", "-", "+", "="];

  // State cho số hiện tại và số cuối cùng
  const [currentNumber, setCurrentNumber] = useState("");
  const [lastNumber, setLastNumber] = useState("");

  // Xử lý sự kiện
  const calculator = () => {
    let lastChar = currentNumber[currentNumber.length - 1];
    if (["+", "-", "*", "/", "."].includes(lastChar)) {
      setCurrentNumber(currentNumber);
    } else {
      let result = eval(currentNumber).toString();
      setCurrentNumber(result);
    }
  };

  const handleInput = (buttonPress) => {
    switch (buttonPress) {
      case "+":
      case "-":
      case "*":
      case "/":
        Vibration.vibrate(35);
        setCurrentNumber(currentNumber + buttonPress);
        break;
      case "DEL":
        Vibration.vibrate(35);
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
        break;
      case "=":
        Vibration.vibrate(35);
        setLastNumber(currentNumber + " = ");
        calculator();
        break;
      case "C":
        Vibration.vibrate(35);
        setCurrentNumber("");
        setLastNumber("");
        break;
      default:
        Vibration.vibrate(35);
        setCurrentNumber(currentNumber + buttonPress);
        break;
    }
  };

  return (
    <View style={styles.container}>
      {/* View containerResult */}
      <View style={[styles.containerResult, { backgroundColor: bgColorResult }]}>
        <TouchableOpacity
          style={[styles.themeButton, { backgroundColor: bgColorThemeButton }]}
          onPress={() => setDarkMode(!darkMode)}
        >
          <Entypo name={darkMode ? "light-up" : "moon"} size={40} style={{ color: colorIcon }} />
        </TouchableOpacity>
        <Text style={[styles.historyText, { color: textColorHistory }]}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>

      {/* View containerButton */}
      <View style={styles.containerButton}>
        {/* View containerButtonLeft */}
        <View style={styles.containerButtonLeft}>
          {buttonsLeft.map((row, index) => (
            <View key={index} style={styles.containerRow}>
              {row.map((item) => (
                <TouchableOpacity key={item} style={styles.button} onPress={() => handleInput(item)}>
                  <Text style={styles.buttonText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>

        {/* View containerButtonRight */}
        <View style={styles.containerButtonRight}>
          {buttonsRight.map((item) => (
            <TouchableOpacity key={item} style={styles.button} onPress={() => handleInput(item)}>
              <Text style={[styles.buttonText, { color: "#fff" }]}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerResult: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  containerButton: {
    flex: 2,
    flexDirection: "row",
  },
  containerButtonLeft: {
    flex: 3,
  },
  containerButtonRight: {
    flex: 1,
    backgroundColor: "#00b9d6",
  },
  containerRow: {
    flex: 1,
    flexDirection: "row",
  },
  themeButton: {
    marginTop: 50,
    marginRight: 50,
    borderRadius: 90,
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  resultText: {
    color: "#00b9d6",
    fontSize: 35,
    margin: 15,
  },
  historyText: {
    fontSize: 20,
    marginRight: 10,
  },
});
