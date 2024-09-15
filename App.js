import React from "react";
import { StyleSheet, View } from "react-native";
//import Calculator from "./components/Calculator";
import { Provider as PaperProvider, Text } from "react-native-paper";
//import DemoBanner from "./components/DemoBanner"
//import DemoAppbar from "./components/DemoAppbar"
//import DemoTheme from "./components/DemoTheme"
//import DemoDarkLightTheme from "./components/DemoDarkLightTheme"
import LoginScreen from "./components/LoginScreen";




const App = () => {
  return (
    <View style={myStyle.container}>
        
      <PaperProvider>
        {/* <DemoDarkLightTheme/> */}
        {/* <DemoAppbar/> */}
        {/* <DemoBanner/> */}
        {/* <Calculator /> */}
        {/* <Text>Hello</Text> */}
        <LoginScreen/>

      </PaperProvider>
     
    </View>
  );
};

export default App;

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
});
