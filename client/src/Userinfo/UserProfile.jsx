import React from "react";
import styled from "styled-components";
import { RiMedalLine } from "react-icons/ri"

function UserProfile({ userInfo }) {

  const getRandomNumber = (min, max) => {
    return parseInt(Math.random() * (Number(max) - Number(min) + 2));
  };
  
  let getRandomProfile = `https://randomuser.me/api/portraits/lego/${getRandomNumber(1,9)}.jpg`;

  return (
    <UserProfileTemplate>
      <div className="profile">
        <img src={getRandomProfile} alt="proFile"></img>
      </div>
      <div className="userInfo">
        <h1>{userInfo[2].memberEmail}</h1>
        <span>Nickname : {userInfo[2].memberName}</span>
        <div className="badge">
          <RiMedalLine size={30} color="blue"/>
          <RiMedalLine size={30} color="green"/>
          <RiMedalLine size={30} color="red"/>
        </div>
      </div>
      <div className="edit">
        <button className="edit_profile">Edit profile</button>
        <button className="logout">Log out</button>
        <button className="withdrawn">Withdrawn</button>
      </div>
    </UserProfileTemplate>
  );
}

const UserProfileTemplate = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 300px;

  img{
    width: 250px;
    border-radius: 30px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  }
  h1{
    font-size: 50px;
  }
  span{
    font-size: 30px;
  }
  .profile{
    display: flex;
    justify-content: center;
    flex: 1.2;
  }
  .userInfo{
    padding: 30px;
    width: 500px;
    display: flex;
    flex-direction: column;
    flex: 2;
  }
  .badge{
    margin-top: 10px;
    display: flex;

  }
  .badge > div{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #ffb46d;
    margin-right: 10px;
  }
  .edit{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
  }
  button{
    margin: 20px 0px;
    padding: 10px 30px;
    width: 200px;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid #5555555f;
  }
  button:hover{
    background-color: #dddddd;
    font-weight: bold;
  }
  .edit_profile{
    background: #b6d8ff61;
  }
  .logout{
    background: #ffe7975f;
  }
  .withdrawn{
    background: #ffadad5f;
    color: #ff0000;
    width: 130px;
    padding: 5px 10px;
  }
`;

export default UserProfile