import { colors } from '@/styles/Colors';
import Image from 'next/image';
import styled from 'styled-components';

export const LoadingContainer = styled.div`
  position: fixed;
  z-index: 20000;
  width: 100%;
  height: 100%;
  background: rgba(18, 57, 82, 0.9);

  p {
    color: ${colors.text.white};
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    margin-top: 20px;
  }
`;

export const LoadingImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
`;
