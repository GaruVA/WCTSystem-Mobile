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
import { register } from '../services/authService';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    if (!agreeTerms) {
      Alert.alert('Error', 'You must agree to the terms and conditions');
      return;
    }
    try {
      const data = await register({ email, password, name, address});
      const token = data.token;
      router.replace({
        pathname: '/(main)/placeholder',
        params: { token },
      });
    } catch (error) {
      Alert.alert('Registration Failed', 'An unexpected error occurred');
    }
    router.replace('/(auth)/login'); // Navigate to the login screen
  };

  return (
    <View className="flex-1 bg-white">
      <View 
        className="bg-white" 
        style={{ 
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 
        }}
      />

      <SafeAreaView className="flex-1">
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          className="flex-1 justify-center"
        >
          <View className="p-8" style={{ gap: 24 }}>
            {/* Header */}
            <View className="items-center">
              <Truck size={64} color="#34A853" />
              <Text className="text-3xl font-bold text-[#202124] mt-4">Create an Account</Text>
              <Text className="text-[#202124] mt-2 text-center">
                Join GarbageTrack for efficient garbage collection
              </Text>
            </View>

            {/* Form */}
            <View style={{ gap: 16 }}>
              <View>
                <Text className="text-[#202124] mb-1">Full Name</Text>
                <TextInput
                  className="border border-[#4285F4] rounded-md p-2 text-[#202124]"
                  placeholder="John Doe"
                  value={name}
                  onChangeText={setName}
                />
              </View>

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
                <Text className="text-[#202124] mb-1">Address</Text>
                <TextInput
                  className="border border-[#4285F4] rounded-md p-2 text-[#202124]"
                  placeholder="Your address"
                  value={address}
                  onChangeText={setAddress}
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

              <View>
                <Text className="text-[#202124] mb-1">Confirm Password</Text>
                <TextInput
                  className="border border-[#4285F4] rounded-md p-2 text-[#202124]"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry
                />
              </View>

              <View className="flex-row items-center">
                <TouchableOpacity
                  onPress={() => setAgreeTerms(!agreeTerms)}
                  className="mr-2"
                >
                  <View 
                    className={`w-6 h-6 border-2 border-[#4285F4] rounded ${agreeTerms ? 'bg-[#4285F4]' : 'bg-white'}`} 
                  />
                </TouchableOpacity>
                <Text className="text-[#202124] flex-1">
                  I agree to the{' '}
                  <Text className="text-[#4285F4]">terms and conditions</Text>
                </Text>
              </View>

              <TouchableOpacity
                className={`p-3 rounded-md ${agreeTerms ? 'bg-[#34A853]' : 'bg-gray-300'}`}
                onPress={handleRegister}
                disabled={!agreeTerms}
              >
                <Text className="text-white text-center font-semibold">Register</Text>
              </TouchableOpacity>
            </View>

            {/* Footer */}
            <View>
              <Text className="text-center text-[#202124]">
                Already have an account?{' '}
                <Link href="/(auth)/login" asChild>
                  <Text className="text-[#4285F4] font-semibold">
                    Login
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
