import { Stack } from 'expo-router';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
    default: "native",
});

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{
            headerShown: false,
            }}/>
                <Stack.Screen name="(auth)/login" options={{
            headerShown: false,
            }}/>
            <Stack.Screen name="(auth)/register" options={{
            headerShown: false,
            }}/>
            <Stack.Screen name="(main)" options={{
            headerShown: false,
            }}/>
        </Stack>
    );
}
