import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, StatusBar, Platform } from 'react-native';
import { Truck, Recycle, Clock, MapPin } from 'lucide-react-native';
import { Link } from 'expo-router';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  Landing: undefined;
  Login: undefined;
  Register: undefined;
};

type LandingScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Landing'>;

export default function LandingScreen() {
  const navigation = useNavigation<LandingScreenNavigationProp>();

  return (
    <View className="flex-1 bg-white">
      {/* Add padding for status bar on Android */}
      <View 
        className="bg-[#34A853]" 
        style={{ 
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 
        }}
      />
      <SafeAreaView className="flex-1">
        <ScrollView className="flex-1">
          <View className="bg-[#34A853] p-4">
            <View className="flex-row justify-between items-center">
              <View className="flex-row items-center space-x-2">
                <Truck size={32} color="white" />
                <Text className="text-2xl font-bold text-white">GarbageTrack</Text>
              </View>
              <View className="flex-row space-x-4">
                <TouchableOpacity 
                  className="px-3 py-2" 
                  onPress={() => navigation.navigate('Login')}
                >
                  <Text className="text-white">Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  className="px-3 py-2" 
                  onPress={() => navigation.navigate('Register')}
                >
                  <Text className="text-white">Register</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Rest of your content remains the same */}
          <View className="p-4">
            <View className="items-center mb-8">
              <Text className="text-3xl font-bold text-[#202124] mb-2">Welcome to GarbageTrack</Text>
              <Text className="text-xl text-[#202124] mb-4 text-center">Efficient and Transparent Garbage Collection</Text>
              <TouchableOpacity 
                className="bg-[#4285F4] px-8 py-3 rounded-full"
                onPress={() => navigation.navigate('Register')}
              >
                <Text className="text-white text-lg font-semibold">Get Started</Text>
              </TouchableOpacity>
            </View>

            <View className="space-y-4">
              <FeatureCard
                icon={<Truck size={24} color="#34A853" />}
                title="Real-Time Tracking"
                description="Track garbage trucks in real-time and get accurate ETAs"
              />
              <FeatureCard
                icon={<Recycle size={24} color="#34A853" />}
                title="Smart Scheduling"
                description="Optimized routes and schedules based on waste volume and traffic data"
              />
              <FeatureCard
                icon={<Clock size={24} color="#34A853" />}
                title="On-Demand Pickups"
                description="Request special pickups for non-scheduled waste collection"
              />
              <FeatureCard
                icon={<MapPin size={24} color="#34A853" />}
                title="Interactive Maps"
                description="View collection status and truck locations on interactive maps"
              />
            </View>
          </View>
        </ScrollView>

        <SafeAreaView className="bg-[#F8F9FA]">
          <View className="p-4">
            <Text className="text-center text-[#202124]">&copy; 2024 GarbageTrack. All rights reserved.</Text>
            <View className="flex-row justify-center mt-2">
              <TouchableOpacity className="px-3 py-2 mr-4">
                <Text className="text-[#4285F4]">Privacy Policy</Text>
              </TouchableOpacity>
              <TouchableOpacity className="px-3 py-2">
                <Text className="text-[#4285F4]">Terms of Service</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#34A853" />
    </View>
  );
}

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <View className="bg-white p-4 rounded-lg shadow-md">
    <View className="flex-row items-center mb-2">
      {icon}
      <Text className="text-lg font-semibold text-[#34A853] ml-2">{title}</Text>
    </View>
    <Text className="text-[#202124]">{description}</Text>
  </View>
);