import styled from 'styled-components';

import { colors } from '@/styles/Colors';
import { darken } from 'polished';

interface StarButtonProps {
  starColor: boolean;
  borderRadius: number;
}

interface AvatarLabelProps {
  avatarSelected: boolean;
  isError: boolean;
}

interface FormDepositionProps {
  isErrorName: boolean;
  isErrorDescription: boolean;
  isErrorStars: boolean;
}

export const AddDepositionContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const AddDepositionBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${colors.text.primary};
  opacity: 0.6;
  z-index: 1000;
`;

export const AddDeposition = styled.div`
  position: fixed;
  width: 736px;
  height: 528px;
  z-index: 10000;
  background: ${colors.background.primary};
  top: 10%;
  border-radius: 20px;

  div.title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${colors.border.primary};
    border-radius: 20px 20px 0px 0px;
    background: ${colors.background.white};
    padding: 30px;

    h2 {
      font-family: 'Barlow';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;
      color: ${colors.text.lightBlue};
    }

    button.close {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: ${colors.background.white};
      border: 1px solid ${colors.border.primary};
      border-radius: 10px;
      cursor: pointer;
      transition: background 200ms;

      &:hover {
        background: ${darken(0.1, colors.background.white)};
      }
    }
  }
`;

export const AvatarLabel = styled.label<AvatarLabelProps>`
  background: ${props =>
    props.avatarSelected
      ? 'linear-gradient(90deg, #DCF5DD 0%, rgba(220, 245, 221, 0) 100%)'
      : colors.background.lightBlue};
  border: 1px solid
    ${props => (props.isError ? '#cf4646' : colors.border.primary)};
  border-radius: 10px;
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: ${props => (props.avatarSelected ? '#51B853' : colors.text.white)};
  padding: 11px 32px;
  cursor: pointer;
  transition: background 200ms;

  &:hover {
    background: ${props =>
      props.avatarSelected
        ? darken(0.1, '#DCF5DD')
        : darken(0.1, colors.background.lightBlue)};
  }
`;

export const FormDeposition = styled.form<FormDepositionProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div.photo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;

    input.avatar {
      display: none;
    }

    input.name {
      width: 441px;
      height: 48px;
      background: ${colors.background.white};
      border: 1px solid
        ${props => (props.isErrorName ? '#cf4646' : colors.border.primary)};
      border-radius: 10px;
      margin-left: 16px;
      padding: 0px 24px;
      outline: none;
    }
  }

  textarea.description {
    width: 656px;
    height: 136px;
    margin-top: 16px;
    padding: 18px 24px;
    background: ${colors.background.white};
    border: 1px solid
      ${props => (props.isErrorDescription ? '#cf4646' : colors.border.primary)};
    border-radius: 10px;
    outline: none;
    font-family: 'Heebo';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: ${colors.text.gray};
  }

  div.star-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;

    input {
      display: none;
    }

    p {
      font-family: 'Heebo';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      color: ${colors.background.orange};
      margin-right: 20px;
    }

    div.stars {
      display: flex;
      align-items: center;
      justify-content: center;
      border: ${props => (props.isErrorStars ? '1px solid red' : 'none')};
      border-radius: 10px;
    }
  }

  div.send-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 656px;
    margin-top: 42px;

    div {
      display: flex;
      align-items: center;

      p {
        width: 181px;
        margin-left: 24px;
        font-family: 'Heebo';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #617480;
      }
    }

    button {
      padding: 11px 32px;
      width: 181px;
      height: 48px;
      background: #51b853;
      border-radius: 10px;
      font-family: 'Heebo';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      color: #ffffff;
      cursor: pointer;
      transition: background 200ms;

      &:hover {
        background: ${darken(0.1, '#51b853')};
      }
    }
  }
`;

export const StarButton = styled.button<StarButtonProps>`
  width: 104px;
  height: 48px;
  background: ${props => (props.starColor ? '#FEF7F5' : '#fff')};
  border: 1px solid ${props => (props.starColor ? '#F1BEAC' : '#dce2e6')};
  border-radius: ${props =>
    props.borderRadius === 1
      ? '10px 0px 0px 10px'
      : props.borderRadius === 5
      ? '0px 10px 10px 0px'
      : 'none'};
  cursor: pointer;
  color: ${props => (props.starColor ? '#F25D27' : '#ccc')};
`;
