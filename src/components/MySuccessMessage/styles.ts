import { colors } from '@/styles/Colors';
import styled from 'styled-components';

export const SuccessMessageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SuccessMessageBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(18, 57, 82, 0.9);
  z-index: 1000;
`;

export const SuccessMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  margin-top: 10%;

  div.message-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h2 {
      font-family: 'Heebo';
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 34px;
      text-align: center;
      color: #ffffff;
      margin-top: 40px;
    }

    p {
      font-family: 'Heebo';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;
      text-align: center;
      color: #a0acb3;
      width: 214px;
      margin: 16px 0px;
    }

    button {
      width: 146px;
      height: 48px;
      background: #f25d27;
      border-radius: 10px;
      font-family: Heebo;
      font-size: 16px;
      font-weight: 500;
      line-height: 26px;
      letter-spacing: 0em;
      color: ${colors.text.white};
      cursor: pointer;
    }
  }
`;
