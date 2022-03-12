import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { BiArrowBack } from 'react-icons/bi';
import { IoAlertCircleOutline } from 'react-icons/io5';

import NavBar from '@/components/NavBar/NavBar';
import {
  BackButton,
  BackgroundCustom,
  CityNavegation,
  NavTitle,
  CityBanner,
  CityInfoContainer,
  CityText,
  CityInfo,
  CityCategory,
  CategoryIcon,
  CategoryInfo,
  CategoryNumber,
  CategoryName,
  PlacesTitle,
  PlacesContainer,
  PlacesHighlights,
  PlacesHighlightsIcon,
  PlacesHighlightsIconText,
  PlacesHighlightsTitle,
  PlacesHighlightsDescription,
  PlacesHighlightsInfosContainer,
  PlacesHighlightsImage,
} from '@/styles/City';

import Banner from '../../../public/images/Banner.png';
import PontosIcon from '../../../public/images/Pontos.png';
import ComidaIcon from '../../../public/images/Comidas.png';
import EventosIcon from '../../../public/images/Eventos.png';
import ImgageCard from '../../../public/images/Image.png';
import DestaqueImage from '../../../public/images/Destaque.png';
import { Container } from '@/styles/GlobalStyles';
import PlaceCard from '@/components/PlaceCard/PlaceCard';

export default function City(): JSX.Element {
  const router = useRouter();

  return (
    <>
      <BackgroundCustom>
        <NavBar>
          <CityNavegation>
            <Link href={'/cities'} passHref>
              <BackButton>
                <BiArrowBack size={20} />
              </BackButton>
            </Link>
            <div style={{ marginLeft: '40%' }}>
              <NavTitle>Cidade</NavTitle>
            </div>
          </CityNavegation>
        </NavBar>
      </BackgroundCustom>
      <CityBanner>
        <Image
          src={Banner}
          layout="fill"
          alt=""
          objectFit="cover"
          objectPosition="center"
        />
      </CityBanner>
      <main>
        <Container>
          <CityInfoContainer>
            <CityText>
              <h1>Florianópolis</h1>
              <h3>
                Capital do estado de Santa Catarina no sul do Brasil, é
                maioritariamente constituída pela Ilha de Santa Catarina, com 54
                km de comprimento.
              </h3>
              <p>
                É famosa pelas suas praias, incluindo estâncias turísticas
                populares como a Praia dos Ingleses na extremidade norte da
                ilha.
              </p>
            </CityText>
            <CityInfo>
              <CityCategory>
                <CategoryIcon>
                  <Image width={40} height={40} src={PontosIcon} alt="" />
                </CategoryIcon>
                <CategoryInfo>
                  <CategoryNumber>60</CategoryNumber>
                  <CategoryName>Pontos Turísticos</CategoryName>
                </CategoryInfo>
              </CityCategory>

              <CityCategory>
                <CategoryIcon>
                  <Image width={40} height={40} src={ComidaIcon} alt="" />
                </CategoryIcon>
                <CategoryInfo>
                  <CategoryNumber>20</CategoryNumber>
                  <CategoryName>Comida e Bebida</CategoryName>
                </CategoryInfo>
              </CityCategory>

              <CityCategory>
                <CategoryIcon>
                  <Image width={40} height={40} src={EventosIcon} alt="" />
                </CategoryIcon>
                <CategoryInfo>
                  <CategoryNumber>11</CategoryNumber>
                  <CategoryName>Eventos Organizados</CategoryName>
                </CategoryInfo>
              </CityCategory>
            </CityInfo>
          </CityInfoContainer>
          <PlacesTitle>Top avaliados</PlacesTitle>
          <PlacesContainer>
            <PlaceCard
              image={ImgageCard}
              title="Doce & Companhia"
              category="Comida e Bebida"
              categoryIcon={ComidaIcon}
              favoriteNote="4,5"
              linkTo="#"
            />
            <PlaceCard
              image={ImgageCard}
              title="Doce & Companhia"
              category="Comida e Bebida"
              categoryIcon={ComidaIcon}
              favoriteNote="4,5"
              linkTo="#"
            />
            <PlaceCard
              image={ImgageCard}
              title="Doce & Companhia"
              category="Comida e Bebida"
              categoryIcon={ComidaIcon}
              favoriteNote="4,5"
              linkTo="#"
            />
            <PlaceCard
              image={ImgageCard}
              title="Doce & Companhia"
              category="Comida e Bebida"
              categoryIcon={ComidaIcon}
              favoriteNote="4,5"
              linkTo="#"
            />
          </PlacesContainer>
          <PlacesHighlights>
            <PlacesHighlightsInfosContainer>
              <PlacesHighlightsIcon>
                <IoAlertCircleOutline size={25} color="#fff" />
                <PlacesHighlightsIconText>Destaque</PlacesHighlightsIconText>
              </PlacesHighlightsIcon>
              <PlacesHighlightsTitle>Praia dos Ingleses</PlacesHighlightsTitle>
              <PlacesHighlightsDescription>
                Uma parte do paraíso na terra. Frequentemente com águas claras
                em tons verdes e azuis. Um dos locais mais preferidos por
                turistas e viajantes.
              </PlacesHighlightsDescription>
            </PlacesHighlightsInfosContainer>
            <PlacesHighlightsImage src={DestaqueImage} alt="" />
          </PlacesHighlights>
        </Container>
      </main>
    </>
  );
}
