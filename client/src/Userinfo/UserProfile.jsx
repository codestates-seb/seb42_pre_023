import React, { useState } from "react";
import styled from "styled-components";
import { RiMedalLine } from "react-icons/ri"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const getRandomNumber = (min, max) => {
  return parseInt(Math.random() * (Number(max) - Number(min) + 2));
};

let getRandomProfile = `https://randomuser.me/api/portraits/lego/${getRandomNumber(1,9)}.jpg`;

function UserProfile({isLogin, setIsLogin}) {

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const LogOut = () => {
    setIsLogin(!isLogin);
    localStorage.removeItem("token");
    sessionStorage.removeItem("login");
    sessionStorage.setItem("login", false);
    navigate("/");
  }
  const Withdrawn = () => setIsModalOpen(!isModalOpen);
  const ModalClose = () => setIsModalOpen(!isModalOpen);

  const ModalSubmit = () => {
    setIsModalOpen(!isModalOpen);
    setIsLogin(!isLogin);
    localStorage.removeItem("token");
    sessionStorage.removeItem("login");
    sessionStorage.setItem("login", false);
    axios
      .delete('/member/:member-id')
      .then(() => {
        alert("삭제에 성공 하셨습니다.");
        navigate("/");
      })
      .catch(() => {
        alert("회원탈퇴를 실패하였습니다.");
        navigate("/");
      })
  }
  

  return (
    <>
      <UserProfileTemplate>
        <div className="profile">
          <img src={getRandomProfile} alt="proFile"></img>
        </div>
        <div className="userInfo">
          <h1>Empty</h1>
          <span>Nickname : Empty</span>
          <div className="badge">
            <RiMedalLine size={30} color="blue"/>
            <RiMedalLine size={30} color="green"/>
            <RiMedalLine size={30} color="red"/>
          </div>
        </div>
        <div className="edit">
          <button className="edit_profile">Edit profile</button>
          <button className="logout" onClick={LogOut}>Log out</button>
          <button className="withdrawn" onClick={Withdrawn}>Withdrawn</button>
        </div>
      </UserProfileTemplate>
      {isModalOpen ?  
        <ModalOverlay>
          <div class="modal">
            <div class="modal-content">
              <h2>회원 탈퇴</h2>
              <p>진행 하시겠습니까?</p>
              <button class="modal-submit-btn" onClick={ModalSubmit}>확인</button>
              <button class="modal-close-btn" onClick={ModalClose}>취소</button>
            </div>
          </div>
        </ModalOverlay>
      : null}
    </>
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
    font-size: 40px;
  }
  span{
    font-size: 20px;
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
    padding: 20px 40px;
    width: 200px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
  }
  .edit_profile{
    background: #c6ffb4;
  }
  .logout{
    background: #ffb452;
  }
  .withdrawn{
    background: #ffffff;
    color: #ff3a3a;
    width: 130px;
    padding: 5px 10px;
  }
  .withdrawn:hover{
    background-color: #ff3a3a;
    color: #ffffff;
  }
  .logout:hover{
    background-color: #ffebd2;
    color: #ff9100;
  }
  .edit_profile:hover{
    background-color: #e2ffda;
    color: #00750a;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;

/* 모달창 스타일링 */
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  z-index: 10;
}

/* 모달창 내용 스타일링 */
.modal-content {
  max-width: 400px;
  margin: 0 auto;
}
p {
  margin: 10px 0 20px 0px;
}

/* 모달창 닫기 버튼 스타일링 */
button{
  margin-top: 20px;
  padding: 10px 20px;
  margin: 0px 20px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
}
.modal-submit-btn {
  background-color: #f52424;
}
.modal-close-btn {
  background-color: #3498db;
}
`

export default UserProfile