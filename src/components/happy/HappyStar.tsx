import React from "react";
import { Animated } from "react-native";
import styled from "styled-components/native";

import { AntDesign } from '@expo/vector-icons'; 

interface HappyStarProps {
  happyPoint: number;
  setHappyPoint: React.Dispatch<React.SetStateAction<number>>;
}

const HappyStar = ({happyPoint, setHappyPoint}: HappyStarProps) => {
  const handleStarButton = (point: number) => {
    setHappyPoint(point);
  };

  return(
    <>
      <ButtonWrapper>
        <StarContainer onPress={() => handleStarButton(1)}>
          {happyPoint >= 1 ? <AntDesign name="star" size={24} color="yellow" /> : <AntDesign name="staro" size={24} color="yellow" />}
        </StarContainer>
        <StarContainer onPress={() => handleStarButton(2)}>
          {happyPoint >= 2 ? <AntDesign name="star" size={24} color="yellow" /> : <AntDesign name="staro" size={24} color="yellow" />}
        </StarContainer>
        <StarContainer onPress={() => handleStarButton(3)}>
          {happyPoint >= 3 ? <AntDesign name="star" size={24} color="yellow" /> : <AntDesign name="staro" size={24} color="yellow" />}
        </StarContainer>
        <StarContainer onPress={() => handleStarButton(4)}>
          {happyPoint >= 4 ? <AntDesign name="star" size={24} color="yellow" /> : <AntDesign name="staro" size={24} color="yellow" />}
        </StarContainer>
        <StarContainer onPress={() => handleStarButton(5)}>
          {happyPoint >= 5 ? <AntDesign name="star" size={24} color="yellow" /> : <AntDesign name="staro" size={24} color="yellow" />}
        </StarContainer>
      </ButtonWrapper>
    </>
  );
};

export default HappyStar;

// styled
const ButtonWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const StarContainer = styled.TouchableOpacity`
  align-items: center;
`;

