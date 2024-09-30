import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
    return (
        <SafeAreaView className='h-full'>
            <ScrollView contentContainerStyle={{ height: '100%'}}>
                <View className='w-full h-full justify-center items-center'>
                    <Text>
                        GarbageTrack
                    </Text>
                    <Link href={"/(auth)/login"}>Go to Login</Link>
                    <Link href={"/(auth)/register"}>Go to Register</Link>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}