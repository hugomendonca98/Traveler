import { darken } from 'polished';
import styled from 'styled-components';
import { colors } from './Colors';

export const BackgroundCustom = styled.div`
  background-color: ${colors.background.white};
`;

export const CityNavegation = styled.div`
  width: 65%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const BackButton = styled.a`
  text-decoration: none;
  color: ${colors.text.gray};
  background: ${colors.background.white};
  border: solid 1px ${colors.border.primary};
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transition: background 300ms;
    background-color: ${darken(0.07, colors.background.white)};
  }
`;

export const NavTitle = styled.h3`
  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: ${colors.text.gray};
`;

export const CityBanner = styled.div`
  position: relative;
  width: 100%;
  height: 340px;
`;
