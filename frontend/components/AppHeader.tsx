import { Text, View, Image } from 'react-native';

export const AppHeader = () => {
  return (
    <View className="flex flex-row items-center">
      <Image source={require('../assets/clarion.png')} style={{ width: 40, height: 40 }} resizeMode="contain"/>
      <Text className="text-3xl font-bold text-white ml-3">Clarion</Text>
    </View>
  );
};