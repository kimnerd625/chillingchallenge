import React, { useState, useEffect } from "react";
import styled from "styled-components/native";

import { useCalendar } from "@hooks/useCalendar";
import bedges from "@mocks/bedges";
import { getAttendance } from "@utils/Attendance";

import Layout from "@components/Layout";
import Header from "@components/Header";
import Profile from "@components/profile/Profile";
import Margin from "@components/Margin";
import UserButton from "@components/profile/UserButton";
import Calendar from "@components/profile/Calendar";
import Bedge from "@components/profile/Bedge";
import Tree from "@components/profile/Tree";

const UserScreen: React.FC = () => {
  // state
  const [bedge, setBedge] = useState(0);
  const [isSelected, setIsSelected] = useState(1); // 카테고리 선택 관련
  const [isAttended, setIsAttended] = useState(["2023-05-15", "2023-05-16"]); // 출석 관련

  // 달력 관련 hooks
  const { selectedDate, handleSelectDate, handlePrevMonth, handleNextMonth } = useCalendar();

  // bedge 개수
  useEffect(() => {
    setBedge(bedges.filter((el) => el.type === "active").length);
  }, []);

  // 출석 상태 불러오기
  useEffect(() => {
    const fetchAttendance = async () => {
      const attendanceList = await getAttendance();
      setIsAttended(attendanceList);
    };
    fetchAttendance();
  }, [isAttended]);

  return (
    <Layout color="#10b767">
      <Header text="마이페이지" color="#10b767" />
      <Container>
        <Profile username="웃고 싶은 날엔" registerDate={55} />
        <Margin props={20} />
      </Container>
      <TabContainer>
        <UserButton isSelected={isSelected} setIsSelected={setIsSelected} />
        {isSelected === 1 && <Bedge />}
        {isSelected === 2 && <Tree badgeNumber={bedge} />}
        {isSelected === 3 && (
          <Calendar
            selectedDate={selectedDate}
            onSelectDate={handleSelectDate}
            onPrevMonth={handlePrevMonth}
            onNextMonth={handleNextMonth}
            isAttended={isAttended}
          />
        )}
      </TabContainer>
    </Layout>
  );
};

export default UserScreen;

// styled
const Container = styled.View`
  padding: 10px 15px 0 15px;
  background-color: #10b767;
`;
const TabContainer = styled.View`
  flex: 1;
  gap: 30px;
  padding: 10px 15px;
  overflow: hidden;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${(props) => props.theme.color.white};
`;
