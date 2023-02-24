import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MyQuestion from "./MyQuestion"
import UserProfile from "./UserProfile"
import axios from "axios";

const UserInfoBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

function UserInfo() {
  const [userInfo, setuserInfo] = useState({});
  
  useEffect(() => {
    axios
      .get("/DUMMYDATA/members.json")
      .then(res => setuserInfo(res.data))
      .catch(err => console.log(err));
  },[]);

  return (
    <UserInfoBackground>
      <UserProfile userInfo={userInfo}/>
      <MyQuestion/>
    </UserInfoBackground>
  );
}

export default UserInfo