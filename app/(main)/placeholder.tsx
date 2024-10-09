import { Text, View } from 'react-native';
import React from 'react';
import { Link, useLocalSearchParams } from 'expo-router';

export default function Placeholder() {
  const { token } = useLocalSearchParams();

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Hello, I'm just a placeholder.</Text>
      <Text>Token: {token ? token.toString() : 'No token available'}</Text>
      <Link href="/">Go Back</Link>
    </View>
  );
}
