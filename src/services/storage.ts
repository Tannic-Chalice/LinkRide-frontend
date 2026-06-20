import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveAuthData = async (accessToken: string, refreshToken: string, user: any) => {
  try {
    if (accessToken) await AsyncStorage.setItem('accessToken', accessToken);
    if (refreshToken) await AsyncStorage.setItem('refreshToken', refreshToken);
    if (user) await AsyncStorage.setItem('user', JSON.stringify(user));
  } catch (e) {
    console.error('Failed to save auth data', e);
  }
};

export const clearAuthData = async () => {
  try {
    await AsyncStorage.removeItem('accessToken');
    await AsyncStorage.removeItem('refreshToken');
    await AsyncStorage.removeItem('user');
  } catch (e) {
    console.error('Failed to clear auth data', e);
  }
};

export const getAuthData = async () => {
  try {
    const accessToken = await AsyncStorage.getItem('accessToken');
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    const userStr = await AsyncStorage.getItem('user');
    const user = userStr ? JSON.parse(userStr) : null;
    return { accessToken, refreshToken, user };
  } catch (e) {
    console.error('Failed to fetch auth data', e);
    return null;
  }
};
