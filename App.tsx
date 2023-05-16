import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { SafeAreaProvider } from "react-native-safe-area-context"; // SafeArea
import * as SplashScreen from "expo-splash-screen"; // SplashScreen
import * as Font from "expo-font"; // Font


// 로컬 폰트 불러오기: font-family로 사용 가능!
Font.loadAsync({
  Light: require("./src/global/fonts/NanumSquareL.ttf"),
  Regular: require("./src/global/fonts/NanumSquareR.ttf"),
  Medium: require("./src/global/fonts/NanumSquare.ttf"),
  Bold: require("./src/global/fonts/NanumSquareB.ttf"),
  ExtraBold: require("./src/global/fonts/NanumSquareEB.ttf"),
});

// SplashScreen 자동 숨김 방지
SplashScreen.preventAutoHideAsync();

export default function App() {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 2000);
  }, []);

  return (
    <>
    </>
  );
}