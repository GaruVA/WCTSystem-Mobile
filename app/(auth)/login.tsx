import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView, 
  KeyboardAvoidingView, 
  Platform, 
  StatusBar,
  Alert
} from 'react-native';
import { Truck } from 'lucide-react-native';
import { Link, router } from 'expo-router';
import { login } from '../services/authService';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const data = await login({ email, password });
      const token = data.token;
      router.replace({
        pathname: '/(main)/placeholder',
        params: { token },
      });
    } catch (error) {
      Alert.alert('Login Failed', 'An unexpected error occurred');
    }
  };

  return (
    <View className="flex-1 bg-white">
      {/* Status bar padding for Android */}
      <View 
        className="bg-white" 
        style={{ 
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 
        }}
      />

      <SafeAreaView className="flex-1">
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1 justify-center"
        >
          <View className="p-8" style={{ gap: 24 }}>
            {/* Header */}
            <View className="items-center">
              <Truck size={64} color="#34A853" />
              <Text className="text-3xl font-bold text-[#202124] mt-4">Login</Text>
              <Text className="text-[#202124] mt-2 text-center">
                Enter your email and password to access your account
              </Text>
            </View>

            {/* Form */}
            <View style={{ gap: 16 }}>
              <View>
                <Text className="text-[#202124] mb-1">Email</Text>
                <TextInput
                  className="border border-[#4285F4] rounded-md p-2 text-[#202124]"
                  placeholder="m@example.com"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoComplete="email"
                />
              </View>

              <View>
                <Text className="text-[#202124] mb-1">Password</Text>
                <TextInput
                  className="border border-[#4285F4] rounded-md p-2 text-[#202124]"
                  placeholder="Your password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                  autoComplete="password"
                />
              </View>

              <TouchableOpacity
                className="bg-[#34A853] p-3 rounded-md"
                onPress={handleLogin}
              >
                <Text className="text-white text-center font-semibold">Login</Text>
              </TouchableOpacity>
            </View>

            {/* Footer */}
            <View>
              <Text className="text-center text-[#202124]">
                Don't have an account?{' '}
                <Link href="/(auth)/register" asChild>
                  <Text className="text-[#4285F4] font-semibold">
                    Register
                  </Text>
                </Link>
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>

      <StatusBar barStyle="dark-content" backgroundColor="white" />
    </View>
  );
}