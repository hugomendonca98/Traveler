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

export const CityInfoContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
`;

export const CityText = styled.div`
  width: 500px;
  h1 {
    font-family: Barlow;
    font-style: normal;
    font-weight: 600;
    font-size: 54px;
    line-height: 54px;
    color: ${colors.text.primary};
  }

  h3 {
    font-family: Heebo;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: ${colors.text.primary};
    margin: 15px 0px;
  }

  p {
    font-family: Heebo;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: ${colors.text.secondary};
  }
`;

export const CityInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const CityCategory = styled.div`
  width: 140px;
  height: 256px;
  background: #ffffff;
  border: 1px solid #dce2e6;
  border-radius: 20px;
  margin-left: 16px;
`;

export const CategoryIcon = styled.div`
  padding: 32px;
  border-bottom: 1px solid #dce2e6;
`;

export const CategoryInfo = styled.div``;

export const CategoryNumber = styled.p`
  font-family: Barlow;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 40px;
  color: #123952;
  margin-top: 30px;
  margin-left: 32px;
`;

export const CategoryName = styled.p`
  font-family: Heebo;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #617480;
  margin-top: 16px;
  margin-left: 32px;
`;
