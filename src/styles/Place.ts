import Image from 'next/image';
import { darken } from 'polished';
import styled from 'styled-components';
import { colors } from './Colors';

export const NavBackground = styled.div`
  background-color: ${colors.background.white};
  border: solid 1px ${colors.border.primary};
`;

export const PlaceNavegation = styled.div`
  width: 83%;
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
`;

export const PlaceHeader = styled.header`
  display: flex;
  justify-content: space-between;
  div.text-content {
    margin-top: 65px;
    width: 100%;
    h1 {
      font-family: 'Barlow';
      font-style: normal;
      font-weight: 600;
      font-size: 54px;
      line-height: 54px;
      color: ${colors.text.primary};
      width: 448px;
      word-wrap: break-word;
    }

    p.description {
      font-family: 'Heebo';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      color: ${colors.text.secondary};
      width: 448px;
      margin-top: 32px;
    }
  }

  div.header-image {
    width: 704px;
    height: 821px;
    position: fixed;
    top: 0;
    right: 0;
  }
`;

export const AttendanceContainer = styled.div`
  margin-top: 80px;
  width: 448px;

  h2 {
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    padding-bottom: 16px;
    color: #123952;
    border-bottom: 1px solid #dce2e6;
  }

  div.hours-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 32px;
  }
`;

export const HourCard = styled.div`
  width: 90px;
  padding: 10px;
  margin-right: 8px;
  margin-bottom: 8px;
  background: #ffffff;
  border: 1px solid #dce2e6;
  border-radius: 8px;
  p.day {
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #123952;
  }

  p.hour {
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    color: #123952;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 43px;
  div.contact-button {
    display: flex;
    justify-content: center;
    padding: 11px 32px;
    background: #51b853;
    border-radius: 10px;
    width: 230px;
    margin-right: 32px;

    font-family: 'Heebo';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;

    div.icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25px;
      border-radius: 50%;
      background-color: #449c47;
      margin-right: 12px;
    }
  }

  div.contact-container {
    p.contact-title {
      font-family: 'Heebo';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;
      color: #617480;
    }

    p.contact {
      font-family: 'Barlow';
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;

      color: #123952;
    }
  }
`;

export const AddressContainer = styled.div`
  margin-top: 80px;
  width: 448px;

  div.address-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #dce2e6;

    h2 {
      font-family: 'Barlow';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 34px;
      padding-bottom: 16px;
      color: #123952;
    }

    a {
      font-family: 'Heebo';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      text-align: right;
      color: #a0acb3;
    }
  }
`;

export const MapContainer = styled.div`
  border-radius: 16px;
  margin-top: 32px;

  p {
    font-family: 'Heebo';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #617480;
    margin-top: 24px;
    margin-bottom: 80px;
  }
`;

export const DepoimentContainer = styled.div`
  margin-top: 80px;
  width: 448px;
  margin-bottom: 16px;
  div.depoiment {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #dce2e6;
    padding-bottom: 16px;

    h2 {
      font-family: 'Barlow';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 34px;
      color: #123952;
      margin-right: 25px;
    }

    a {
      font-family: 'Heebo';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      text-align: right;
      color: #a0acb3;
    }

    div.depoiment-icon {
      display: flex;
      align-items: center;

      p {
        font-family: 'Barlow';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 20px;
        color: #f25d27;
        margin-left: 13px;
      }
    }
  }
  div.depoiment-menu {
    display: flex;
    align-items: center;

    a {
      margin-right: 16px;
      font-family: 'Heebo';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      text-align: right;
      color: #a0acb3;
    }
  }
`;

export const DepoimentCards = styled.div`
  width: 448px;
`;

export const AvatarImage = styled(Image).attrs({
  width: 64,
  height: 64,
  objectFit: 'cover',
})`
  border-radius: 50%;
`;

export const Depoiment = styled.div`
  border-bottom: 1px solid #dce2e6;
  padding-bottom: 30px;
  margin-bottom: 10px;
  padding-top: 15px;

  div.card-title {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    div.title-avatar {
      display: flex;
      align-items: flex-start;
      div.avatar-image {
        border-radius: 50%;
        width: 64px;
        overflow: hidden;
      }
    }

    h2 {
      font-family: 'Barlow';
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 26px;
      color: #617480;
      margin-left: 20px;
    }

    div.stars {
      display: flex;
      align-items: center;
    }
  }

  p {
    font-family: 'Heebo';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #617480;
    margin-left: 84px;
    margin-top: -30px;
  }
`;
