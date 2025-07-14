import { Text, View } from "react-native"

const Library = () => {

    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "olive",
        }}
        >
            <Text style={{ fontSize: 18 }}>This Can Be Library</Text>
        </View>
    )
}

export default Library;
