import Image from 'next/image';
import styled from 'styled-components';

import { colors } from '@/styles/Colors';

export const Card = styled.div`
  width: 256px;
  height: 266px;
  background: #ffffff;
  border: 1px solid #dce2e6;
  box-sizing: border-box;
  border-radius: 16px;
  margin: 10px 10px;
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
