import Image from 'next/image';
import { darken } from 'polished';
import styled from 'styled-components';
import { colors } from './Colors';

export const Background = styled.div`
  background-color: ${colors.background.white};
`;

export const CityNavegation = styled.div`
  width: 65%;
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
    margin-left: 40%;

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
    background: #ffffff;
    border: 1px solid #dce2e6;
    border-radius: 20px;
    margin-left: 16px;

    div.icon {
      padding: 32px;
      border-bottom: 1px solid #dce2e6;
    }

    div.info {
      p.category-number {
        font-family: Barlow;
        font-style: normal;
        font-weight: 600;
        font-size: 40px;
        line-height: 40px;
        color: #123952;
        margin-top: 30px;
        margin-left: 32px;
      }

      p.category-name {
        font-family: Heebo;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: #617480;
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
  color: #123952;
  margin-top: 120px;
`;

export const PlacesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

export const PlacesHighlights = styled.div`
  height: 286px;
  background: #ffffff;
  border: 1px solid #dce2e6;
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
      background: #f25d27;
      border-radius: 100px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      p.place-icon-text {
        font-family: 'Barlow';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #ffffff;
        margin-left: 5px;
      }
    }
    h3.place-title {
      font-family: 'Barlow';
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 36px;
      color: #123952;
      margin-top: 40px;
    }
    p.place-description {
      font-family: 'Heebo';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;
      color: #617480;
      margin-top: 16px;
    }
  }

  img.place-image {
    border-radius: 0px 16px 16px 0px;
  }
`;
