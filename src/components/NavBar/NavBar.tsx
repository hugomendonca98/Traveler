import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { Container, Nav, ToDashboardBtn } from './styles';
import Logo from '../../../public/images/Logo.png';

interface NavBarProps {
  children?: ReactNode;
}

export default function NavBar({ children }: NavBarProps): JSX.Element {
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
