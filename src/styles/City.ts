import styled from 'styled-components';
import { darken } from 'polished';

import { colors } from './Colors';

interface HrProps {
  active: string;
}

interface BtnProps {
  isActive?: boolean;
}

export const Background = styled.div`
  background-color: ${colors.background.white};
`;

export const CityNavegation = styled.div`
  width: 82%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  a.go-back {
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
  }

  div {
    margin-left: 30%;

    h3 {
      font-family: Barlow;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: ${colors.text.gray};
    }
  }
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

  div.text-container {
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
  }
`;

export const CityInfo = styled.div`
  display: flex;
  align-items: center;

  div.category {
    width: 140px;
    height: 256px;
    background: ${colors.background.white};
    border: 1px solid ${colors.border.primary};
    border-radius: 20px;
    margin-left: 16px;

    div.icon {
      padding: 32px;
      border-bottom: 1px solid ${colors.border.primary};
    }

    div.info {
      p.category-number {
        font-family: Barlow;
        font-style: normal;
        font-weight: 600;
        font-size: 40px;
        line-height: 40px;
        color: ${colors.text.primary};
        margin-top: 30px;
        margin-left: 32px;
      }

      p.category-name {
        font-family: Heebo;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: ${colors.text.secondary};
        margin-top: 16px;
        margin-left: 32px;
      }
    }
  }
`;

export const PlacesTitle = styled.h2`
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 46px;
  color: ${colors.text.primary};
  margin-top: 120px;
`;

export const PlacesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const PlacesHighlights = styled.div`
  height: 286px;
  background: ${colors.background.white};
  border: 1px solid ${colors.border.primary};
  box-sizing: border-box;
  border-radius: 16px;
  margin-top: 80px;
  margin-bottom: 80px;
  display: flex;

  div.info-container {
    margin: 50px;
    width: 50%;

    div.place-icon {
      width: 119px;
      height: 32px;
      background: ${colors.background.orange};
      border-radius: 100px;
      color: ${colors.text.white};
      display: flex;
      align-items: center;
      justify-content: center;
      p.place-icon-text {
        font-family: 'Barlow';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: ${colors.text.white};
        margin-left: 5px;
      }
    }
    h3.place-title {
      font-family: 'Barlow';
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 36px;
      color: ${colors.text.primary};
      margin-top: 40px;
    }
    p.place-description {
      font-family: 'Heebo';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;
      color: ${colors.text.secondary};
      margin-top: 16px;
    }
  }

  img.place-image {
    border-radius: 0px 16px 16px 0px;
  }
`;

export const PlacesMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 46px;
    color: ${colors.text.primary};
  }
`;

export const FilterPlaces = styled.div`
  display: flex;
  justify-content: space-between;

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
      justify-content: center;
      align-items: center;
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
  margin-left: 10px;
  margin-right: 10px;
`;

export const HrAll = styled.hr<HrProps>`
  border: 0;
  height: 2px;
  width: 100%;
  background-color: ${colors.border.primary};
  transition: background 300ms;
  position: absolute;
  bottom: 0px;
  margin: auto;
`;

export const PlacesNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 50px;

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
