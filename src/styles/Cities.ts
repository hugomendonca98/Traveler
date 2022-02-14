import styled from 'styled-components';

import { colors } from './Colors';

interface HrProps {
  active: string;
}

interface BtnProps {
  isActive?: boolean;
}

export const BackgroundCustom = styled.div`
  background-color: ${colors.background.white};
  border-bottom: 1px solid ${colors.border.primary};
`;

export const Container = styled.div`
  width: 1140px;
  margin: auto;
`;

export const FilterCities = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FilterHr = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const FilterButton = styled.button<BtnProps>`
  background-color: transparent;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  color: ${props => (props.isActive ? colors.text.primary : colors.text.gray)};

  cursor: pointer;
  margin-right: 20px;
  margin-left: 20px;
`;

export const HrContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HrAll = styled.hr<HrProps>`
  border: 0;
  height: 2px;
  width: 290px;
  margin-right: 15px;
  transition: background 300ms;

  ${props =>
    props.active === 'All' &&
    `background: rgb(242,93,39);
      background: linear-gradient(
        90deg, rgba(242,93,39,1) 16%,
        rgba(220,226,230,1) 16%,
        rgba(220,226,230,1) 70%,
        rgba(220,226,230,1) 80%);`}

  ${props =>
    props.active === 'Most' &&
    `background: rgb(220, 226, 230);
  background: linear-gradient(
    90deg,
    rgba(220, 226, 230, 1) 25%,
    rgba(220, 226, 230, 1) 25%,
    rgba(242, 93, 39, 1) 25%,
    rgba(242, 93, 39, 1) 73%,
    rgba(220, 226, 230, 1) 73%
  );`}

  ${props =>
    props.active === 'Alphabet' &&
    `background: rgb(220, 226, 230);
  background: linear-gradient(
    90deg,
    rgba(220, 226, 230, 1) 73%,
    rgba(220, 226, 230, 1) 75%,
    rgba(220, 226, 230, 1) 80%,
    rgba(242, 93, 39, 1) 80%
  );`}
`;

export const Title = styled.h1`
  font-family: Barlow;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 46px;
  color: ${colors.text.primary};
`;
