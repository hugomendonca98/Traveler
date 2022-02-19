import Image from 'next/image';

import styled from 'styled-components';

import { colors } from '@/styles/Colors';

export const LinkCard = styled.a`
  margin: 10px 10px;

  -webkit-animation: scale-up-center 0.3s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: scale-up-center 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @-webkit-keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.7);
      transform: scale(0.7);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.7);
      transform: scale(0.7);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;

export const Card = styled.div`
  width: 256px;
  height: 266px;
  background: #ffffff;
  border: 1px solid #dce2e6;
  box-sizing: border-box;
  border-radius: 16px;
`;

export const CardImage = styled(Image)`
  border-radius: 16px 16px 0px 0px;
  width: 256px;
  height: 196px;
`;

export const CardText = styled.div`
  padding-left: 20px;
  padding-top: 10px;
`;

export const CardTitle = styled.h3`
  font-family: Barlow;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: ${colors.text.primary};
`;

export const CardDescription = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: #617480;
`;
