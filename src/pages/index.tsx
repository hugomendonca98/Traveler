import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import SEO from '@/components/SEO';
import Logo from '../../public/Logo.png';
import Header from '../../public/header.png';
import {
  BtnHeader,
  Conatiner,
  ImageContainer,
  ImageHeader,
  Main,
  MainText,
  Nav,
  Title,
  ToDashboardBtn,
} from '@/styles/Home';

const Home: NextPage = () => {
  return (
    <Conatiner>
      <SEO
        title="Traveler - Viva uma grande aventura."
        description="Descubra locais incriveis para se visitar em cidades maravilhosas de todo o brasil."
        image="Logo.png"
        shouldExcludeTitleSuffix
      />
      <Nav>
        <Link href={'/'} passHref>
          <a>
            <Image src={Logo} alt="Traveler Logo" />
          </a>
        </Link>
        <Link href={'#'} passHref>
          <ToDashboardBtn>Acesso Restrito</ToDashboardBtn>
        </Link>
      </Nav>
      <Main>
        <MainText>
          <Title>Viva uma grande aventura</Title>
          <p>
            Descubra locais incríveis para se visitar em cidades maravilhosas de
            Santa Catarina.
          </p>
          <Link href={'#'} passHref>
            <BtnHeader>Descobrir todos os lugares</BtnHeader>
          </Link>
        </MainText>
        <ImageContainer>
          <ImageHeader src={Header} />
        </ImageContainer>
      </Main>
    </Conatiner>
  );
};

export default Home;
