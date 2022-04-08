import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import MySEO from '@/components/MySEO';
import MyNavBar from '@/components/MyNavBar';
import { BtnHeader, Main } from '@/styles/Home';
import { Container } from '@/styles/GlobalStyles';
import Header from '../../public/images/Header.png';

const Home: NextPage = () => {
  return (
    <>
      <MySEO
        title="Traveler - Viva uma grande aventura."
        description="Descubra locais incriveis para se visitar em cidades maravilhosas de todo o brasil."
        image="Logo.png"
        shouldExcludeTitleSuffix
      />
      <MyNavBar />
      <Container>
        <Main>
          <div className="main-text">
            <h1>Viva uma grande aventura</h1>
            <p>
              Descubra locais incríveis para se visitar em cidades maravilhosas
              de Santa Catarina.
            </p>
            <Link href="/cities" passHref>
              <BtnHeader>Descobrir todos os lugares</BtnHeader>
            </Link>
          </div>
          <div className="image-container">
            <Image src={Header} alt="Traveler - Vivia uma aventura" priority />
          </div>
        </Main>
      </Container>
    </>
  );
};

export default Home;
