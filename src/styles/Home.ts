import styled from 'styled-components';
import { lighten } from 'polished';
import Image from 'next/image';

import { colors } from './Colors';

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - 100px);
`;

export const MainText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: auto;
  margin-right: 50px;

  p {
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: Heebo;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: ${colors.text.secondary};
  }
`;

export const Title = styled.h1`
  font-family: Barlow;
  font-style: normal;
  font-weight: 600;
  font-size: 80px;
  line-height: 74px;
  color: ${colors.text.primary};
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 100%;
`;

export const ImageHeader = styled(Image)``;

export const BtnHeader = styled.a`
  border-radius: 10px;
  background-color: ${colors.background.orange};
  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: ${colors.text.white};
  padding: 23px 26px;
  width: 300px;
  text-align: center;
  text-decoration: none;

  &:hover {
    transition: background 300ms;
    background-color: ${lighten(0.1, colors.background.orange)};
  }
`;
