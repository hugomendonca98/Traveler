import type { NextPage } from 'next';
import Link from 'next/link';

import SEO from '@/components/SEO/SEO';
import Header from '../../public/images/Header.png';
import {
  BtnHeader,
  Container,
  ImageContainer,
  ImageHeader,
  Main,
  MainText,
  Title,
} from '@/styles/Home';
import NavBar from '@/components/NavBar/NavBar';

const Home: NextPage = () => {
  return (
    <>
      <SEO
        title="Traveler - Viva uma grande aventura."
        description="Descubra locais incriveis para se visitar em cidades maravilhosas de todo o brasil."
        image="Logo.png"
        shouldExcludeTitleSuffix
      />
      <NavBar />
      <Container>
        <Main>
          <MainText>
            <Title>Viva uma grande aventura</Title>
            <p>
              Descubra locais incríveis para se visitar em cidades maravilhosas
              de Santa Catarina.
            </p>
            <Link href="/cities" passHref>
              <BtnHeader>Descobrir todos os lugares</BtnHeader>
            </Link>
          </MainText>
          <ImageContainer>
            <ImageHeader src={Header} />
          </ImageContainer>
        </Main>
      </Container>
    </>
  );
};

export default Home;
