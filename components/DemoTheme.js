import { View } from "react-native"
import { useTheme } from "react-native-paper"


const DemoTheme = () =>{
    const theme = useTheme()
    return (
        <View   style={{
            backgroundColor: theme.colors.primary,
            justifyContent:"center",
            alignItems:"center"
           
            
        }}>
            <Text style={{ colors: theme.colors.onSecondaryContainer}}>
                Hello
            </Text>
        </View>
    )
}

export default DemoTheme