import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

export default function Settings() {
    return (
        <View className='flex-1 items-center justify-center'> 
            <Text>Hello, I'm just a placeholder.</Text>
            <Link href="/">Go Back</Link>
        </View>
    );
}