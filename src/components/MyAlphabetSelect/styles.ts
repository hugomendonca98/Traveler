import { colors } from '@/styles/Colors';
import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface SelectAlphabetProps {
  isActive: boolean;
}

export const SelectAlphabet = styled.select<SelectAlphabetProps>`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  background: url("data:image/svg+xml,<svg height='10px' width='10px' viewBox='0 0 16 16' fill='rgb(242, 93, 39)' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>")
    no-repeat;
  background-position: 40px center;
  padding-right: 1rem !important;
  outline: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: ${props => (props.isActive ? colors.text.primary : colors.text.gray)};
  cursor: pointer;

  &::-ms-expand {
    display: none; /* Hide the default arrow in Internet Explorer 10 and Internet Explorer 11 */
  }
`;

export const OptionAlphabet = styled.option`
  text-align: center;
  color: ${colors.text.primary};
`;
