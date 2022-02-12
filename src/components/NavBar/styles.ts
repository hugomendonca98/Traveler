import styled from 'styled-components';
import { darken } from 'polished';

import { colors } from '@/styles/Colors';

export const Container = styled.div`
  width: 1140px;
  margin: auto;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100px;
`;

export const ToDashboardBtn = styled.a`
  background-color: ${colors.background.secondary};
  padding: 10px 30px 10px 30px;
  border-radius: 10px;
  text-decoration: none;
  color: ${colors.text.primary};
  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  text-decoration: none;

  &:hover {
    transition: background 300ms;
    background-color: ${darken(0.1, colors.background.secondary)};
  }
`;
