import { useState } from "react"
import { View } from "react-native"
import { ActivityIndicator, Button, MD3DarkTheme, MD3LightTheme , Switch, Text, useTheme } from "react-native-paper"

const DemoDarkLightTheme = ()=>{
    const [darkMode, setDarkMode] = useState(false);
    const myTheme = (darkMode)? MD3DarkTheme : MD3LightTheme;
    const onToggleWitch = ()=> setDarkMode(!darkMode)
    return(
        <View style={{
            flex:1,
            backgroundColor: myTheme.colors.background
        }}>
            <Switch value={darkMode} onValueChange={onToggleWitch}/>
            <View style={{
                height: 50, 
                backgroundColor: myTheme.colors.primary,
                justifyContent: "center",
                alignItems:"center",
                margin: 10
            }}>
                <Text style={{color: myTheme.colors.onPrimary}}> primary  </Text>
            </View>
            <View style={{
                height: 50, 
                backgroundColor: myTheme.colors.secondary,
                justifyContent: "center",
                alignItems:"center",
                margin: 10
            }}>
                <Text style={{color: myTheme.colors.onSecondary}}> secondary  </Text>
            </View>
            
            <Button icon={"camera"}>Press Me</Button>
        </View>
    )
}

export default DemoDarkLightTheme