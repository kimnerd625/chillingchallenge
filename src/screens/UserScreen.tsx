import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const View = SafeAreaView;

const UserScreen: React.FC = () => {
  return (
    <View>
      <Text>사용자 화면입니당!</Text>
    </View>
  );
};

export default UserScreen;