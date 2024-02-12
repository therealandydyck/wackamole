import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack screenOptions={{
            headerTitle: "WaccaMole",
            headerStyle: { backgroundColor: 'red',},
            headerTintColor: 'white',
            headerBackVisible: false,
        }}>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: true,
                }}
            />
            <Stack.Screen 
                name="gamePage"
                options={{
                    headerShown: false,
                    presentation: 'modal',
                }}
            />
             <Stack.Screen 
                name="gameOver"
                options={{
                    headerShown: false,
                    presentation: 'modal',
                }}
            />
        </Stack>
    )
}