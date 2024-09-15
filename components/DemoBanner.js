import { useState } from "react"
import { Banner } from "react-native-paper"

const DemoBanner = () => {
    const [visible, setVisible] = useState(true)
    return(
        <Banner
        visible={visible}
        actions={[
            {
                label:"OK",
                onPress:() => setVisible(false),
                icon: "home"
            },
            {
                label:"Cancle",
                onPress:() => setVisible(false),
                icon: "exit"
            }
        ]}
        icon={"star"}
        >
                Nhap sai username and Password

        </Banner>
    )
}
export default DemoBanner