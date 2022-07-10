import styled from 'styled-components';

import { colors } from './Colors';

interface HrProps {
  active: string;
}

interface BtnProps {
  isActive?: boolean;
}

export const Background = styled.div`
  background-color: ${colors.background.white};
  border-bottom: 1px solid ${colors.border.primary};
`;

export const FilterCities = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;

  h1 {
    font-family: Barlow;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 46px;
    color: ${colors.text.primary};
  }

  div.filter-hr {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    div.filter-container {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 274px;
    }
  }
`;

export const FilterButton = styled.button<BtnProps>`
  background-color: transparent;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: ${props => (props.isActive ? colors.text.primary : colors.text.gray)};
  ${props =>
    props.isActive && `border-bottom: 2px solid ${colors.background.orange};`}
  cursor: pointer;
  z-index: 10000;
`;

export const HrAll = styled.hr<HrProps>`
  border: 0;
  height: 2px;
  width: 100%;
  margin-right: 15px;
  background-color: #dce2e6;
  transition: background 300ms;
  position: absolute;
  bottom: 0px;
`;

export const CitiesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 20px;

  @media screen and (max-width: 1200px) {
    width: 1025px;
  }

  @media screen and (max-width: 1024px) {
    width: 769px;
    flex-wrap: wrap;
    margin-top: 40px;
    margin-bottom: 20px;
  }
`;

export const CitiesNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;

  p {
    font-family: Heebo;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
    color: ${colors.text.secondary};
    margin-top: 10px;
  }
`;
