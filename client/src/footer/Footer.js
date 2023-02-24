import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrap>
      <div className="address">
        copyright ⓒ 2023 stack overflow <br />
        <strong>made by.</strong>
        <img
          className="df-logo"
          src={require("../img/df-logo.png")}
          alt="dog footer"
        />
      </div>
      <div className="team">
        <strong>FrontEnd</strong>
        <div className="front">
          <span>
            <a href="https://github.com/Observant0120">백종우(팀장) |</a>
          </span>
          <span>
            <a href="https://github.com/sienna0715">이시온 |</a>
          </span>
          <span>
            <a href="https://github.com/blueberryade">조정인</a>
          </span>
        </div>
        <strong>BackEnd</strong>
        <div className="back">
          <span>
            <a href="https://github.com/hunjeong93">곽훈정(부팀장) |</a>
          </span>
          <span>
            <a href="https://github.com/RaYul18">심라율 |</a>
          </span>
          <span>
            <a href="https://github.com/jin-yeong-kim">김진영</a>
          </span>
        </div>
      </div>
    </FooterWrap>
  );
}

const FooterWrap = styled.div`
  min-width: 700px;
  width: 100vw;
  height: 200px;
  background-color: #333;
  position: absolute;
  bottom: 0;
  color: white;
  padding: 0 5rem;
  display: flex;
  flex-direction: row;
  .address {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    .df-logo {
      width: 300px;
    }
  }
  .team {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem 0;
    margin-left: 5rem;
    .front,
    .back {
      display: flex;
      flex-direction: row;
      margin-bottom: 1rem;
    }
    .front > span,
    .back > span {
      margin-right: 0.5rem;
      a {
        color: #fff;
        text-decoration: none;
        outline: none;
      }
    }
  }
  @media screen and (max-width: 760px) {
      padding-left: 12rem;
      .address {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .team {
        display: none;
      }
    }
`;
