import api from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const register = async (userData: { email: string; password: string; name: string; address: string }) => {
  const response = await api.post('/auth/register', userData);
  await AsyncStorage.setItem('token', response.data.token);
  return response.data;
};

export const login = async (credentials: { email: string; password: string }) => {
  const response = await api.post('/auth/login', credentials);
  await AsyncStorage.setItem('token', response.data.token);
  return response.data;
};

export const logout = async () => {
  await AsyncStorage.removeItem('token');
};