import Image from 'next/image';
import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 256px;
  height: 307px;
`;

export const LinkCard = styled.a``;

export const Card = styled.div`
  position: relative;
  background: #ffffff;
  border: 1px solid #dce2e6;
  box-sizing: border-box;
  border-radius: 16px;
  width: 256px;
  height: 307px;
`;

export const CardFavoriteFlag = styled.div`
  position: absolute;
  top: -20px;
  left: 20px;
  width: 56px;
  height: 83px;
  background-color: #f25d27;
  z-index: 10000;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardFavoriteNote = styled.p`
  text-decoration: none;
  color: #fff;
  margin-top: 5px;
`;

export const CardImage = styled(Image)`
  border-radius: 16px 16px 0px 0px;
  width: 256px;
  height: 196px;
`;

export const CardTitle = styled.h3`
  font-family: Barlow;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #123952;
  padding: 18px 25px;
`;

export const CardCategoryTitle = styled.p`
  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #617480;
`;

export const CardCategoryIcon = styled(Image)``;

export const CardCategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
  padding-top: 18px;
  border-top: 1px solid #dce2e6;
`;
