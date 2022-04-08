import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { Nav, ToDashboardBtn } from './styles';
import Logo from '../../../public/images/Logo.png';
import { Container } from '@/styles/GlobalStyles';

interface NavBarProps {
  children?: ReactNode;
}

export default function MyNavBar({ children }: NavBarProps): JSX.Element {
  return (
    <Container>
      <Nav>
        <Link href={'/'} passHref>
          <a>
            <Image src={Logo} alt="Traveler Logo" />
          </a>
        </Link>
        {children}
        <Link href={'#'} passHref>
          <ToDashboardBtn>Acesso Restrito</ToDashboardBtn>
        </Link>
      </Nav>
    </Container>
  );
}
