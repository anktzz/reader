import { Tabs } from "expo-router"
import { Ionicons, } from "@expo/vector-icons"

const TabsLayout = () => {

    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#1e1b1d",
                    borderTopWidth: 1,
                    borderTopColor: "grey",
                    height: 70,
                    paddingBottom: 10,
                    paddingTop: 10,
                },
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="Recent"
                options={{
                    title: "Recent",
                    tabBarIcon: ({ color, size }) => <Ionicons name="book-sharp" size={size} color={color} />
                }}
            />
            <Tabs.Screen
                name="Library"
                options={{
                    title: "Library",
                    tabBarIcon: ({ color, size }) => <Ionicons name="library-sharp" size={size} color={color} />
                }}
            />
        </Tabs>
    )
}

export default TabsLayout;
