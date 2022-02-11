import Image from 'next/image';
import styled from 'styled-components';
import {
  backgroundOrange,
  backgroundSecundary,
  textPrimary,
  textSecundary,
  textWhite,
} from './Colors';

export const Conatiner = styled.div`
  width: 1140px;
  margin: auto;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
`;

export const ToDashboardBtn = styled.a`
  background-color: ${backgroundSecundary};
  padding: 10px 30px 10px 30px;
  border-radius: 10px;
  text-decoration: none;
  color: ${textPrimary};
  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  text-decoration: none;
`;

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
  align-items: justify;

  p {
    margin-right: 100px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: Heebo;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: ${textSecundary};
  }
`;

export const Title = styled.h1`
  font-family: Barlow;
  font-style: normal;
  font-weight: 600;
  font-size: 80px;
  line-height: 74px;
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
  background-color: ${backgroundOrange};
  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: ${textWhite};
  padding: 23px 26px;
  width: 300px;
  text-align: center;
  text-decoration: none;
`;
