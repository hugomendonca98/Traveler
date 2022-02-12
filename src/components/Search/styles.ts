import styled from 'styled-components';

import { colors } from '@/styles/Colors';

export const IconSearch = styled.span`
  margin-top: 2px;
  width: 40px;

  svg {
    transition: color 200ms;
    font-size: 20px;
    margin-left: 10px;
  }
`;

export const ButtonClose = styled.button`
  width: 25px;
  margin-top: 2px;
  margin-right: 10px;
  font-size: 20px;
  color: ${colors.text.gray};
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
`;

export const InputContainer = styled.div`
  background-color: ${colors.background.primary};
  border-radius: 10px;
  border: 1px solid ${colors.border.primary};
  width: fit-content;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  background-color: ${colors.background.primary};
  color: ${colors.text.primary};
  border-radius: 10px;
  border: none;
  box-sizing: border-box;
  width: 416px;
  height: 48px;
  font-family: Heebo;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;

  &::placeholder {
    font-family: Heebo;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: ${colors.text.gray};
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    font-family: Heebo;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: ${colors.text.gray};
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    font-family: Heebo;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: ${colors.text.gray};
  }

  &:focus {
    outline: none;
  }
`;
