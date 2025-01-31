import React, { useEffect, useState, useRef } from "react";
import { useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; // StyledComponents - ThemeProvider
import { SafeAreaProvider } from "react-native-safe-area-context"; // SafeArea
import { ThemeProvider } from "styled-components/native";
import * as SplashScreen from "expo-splash-screen"; // SplashScreen
import * as Font from "expo-font"; // Font
import { darkTheme, lightTheme } from "./theme";

import { RootNavigator } from "@navigations/RootNavigator";

// SplashScreen 자동 숨김 방지
SplashScreen.preventAutoHideAsync();

export default function App() {
  // 로컬 폰트 불러오기: font-family로 사용 가능!
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const isDark = useColorScheme() === "dark";
  console.log(isDark);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Light: require("./src/global/fonts/NotoSansKR-Light.otf"),
        Regular: require("./src/global/fonts/NotoSansKR-Regular.otf"),
        Medium: require("./src/global/fonts/NotoSansKR-Medium.otf"),
        Bold: require("./src/global/fonts/NotoSansKR-Bold.otf"),
        ExtraBold: require("./src/global/fonts/NotoSansKR-Black.otf"),
      });
      setFontsLoaded(true);
    };
    loadFonts();
  }, []);

  // 스플래시 스크린
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 2000);
  }, []);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </>
  );
}
