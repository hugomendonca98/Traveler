import styled from 'styled-components';

import { colors } from './Colors';

export const BackgroundCustom = styled.div`
  background-color: ${colors.background.white};
  border-bottom: 1px solid #dce2e6;
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

export const Title = styled.h1`
  font-family: Barlow;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 46px;
  color: ${colors.text.primary};
`;
