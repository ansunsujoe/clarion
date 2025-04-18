import { View, SafeAreaView } from 'react-native';
import { AppHeader } from './AppHeader';

type ScreenContentProps = {
  title: string;
  path: string;
};

export const ScreenContent = ({ title, path }: ScreenContentProps) => {
  return (
    <SafeAreaView className="h-full bg-[#13152a]">
      <View className="mt-5 ml-5">
        <AppHeader/>
      </View>
    </SafeAreaView>
  );
};
