import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MyQuestion from "./MyQuestion"
import UserProfile from "./UserProfile"
import axios from "axios";

const UserInfoBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const BodyScreenDeployment = styled.div`
  position: relative;
  width: 83vw;
  top: 130px;
  left: 300px;
`

function UserInfo() {

  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("/DUMMYDATA/members.json")
      .then(el => setData(el.data[2]));
  },[])

  return (
    <BodyScreenDeployment>
      <UserInfoBackground>
        <UserProfile memberEmail={data.memberEmail} memberName={data.memberName}/>
        <MyQuestion/>
      </UserInfoBackground>
    </BodyScreenDeployment>
  );
}

export default UserInfo