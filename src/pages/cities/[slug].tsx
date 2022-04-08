import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BiArrowBack } from 'react-icons/bi';
import { IoAlertCircleOutline } from 'react-icons/io5';

import MyNavBar from '@/components/MyNavBar';
import {
  Background,
  CityNavegation,
  CityBanner,
  CityInfoContainer,
  CityInfo,
  PlacesTitle,
  PlacesContainer,
  PlacesHighlights,
  FilterButton,
  HrAll,
  PlacesMenu,
  FilterPlaces,
} from '@/styles/City';

import Banner from '../../../public/images/Banner.png';
import PontosIcon from '../../../public/images/Pontos.png';
import ComidaIcon from '../../../public/images/Comidas.png';
import EventosIcon from '../../../public/images/Eventos.png';
import ImgageCard from '../../../public/images/Image.png';
import DestaqueImage from '../../../public/images/Destaque.png';
import { Container } from '@/styles/GlobalStyles';
import MyPlaceCard from '@/components/MyPlaceCard';

interface IPlace {
  id: string;
  name: string;
  image: string;
  description: string;
}

interface CitiesProps {
  places: IPlace[];
}

export default function City({ places }: CitiesProps): JSX.Element {
  const [filterController, setFilterController] = useState('All');

  const dataFilter = (): IPlace[] | [] => {
    // Realizar buscar de acordo com o filtro selecionado.
    return [];
  };

  return (
    <>
      <Background>
        <MyNavBar>
          <CityNavegation>
            <Link href={'/cities'} passHref>
              <a className="go-back">
                <BiArrowBack size={20} />
              </a>
            </Link>
            <div>
              <h3>Cidade</h3>
            </div>
          </CityNavegation>
        </MyNavBar>
      </Background>
      <CityBanner>
        <Image
          src={Banner}
          layout="fill"
          alt=""
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </CityBanner>
      <main>
        <Container>
          <CityInfoContainer>
            <div className="text-container">
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
            </div>
            <CityInfo>
              <div className="category">
                <div className="icon">
                  <Image width={40} height={40} src={PontosIcon} alt="" />
                </div>
                <div className="info">
                  <p className="category-number">60</p>
                  <p className="category-name">Pontos Turísticos</p>
                </div>
              </div>

              <div className="category">
                <div className="icon">
                  <Image width={40} height={40} src={ComidaIcon} alt="" />
                </div>
                <div className="info">
                  <p className="category-number">20</p>
                  <p className="category-name">Comida e Bebida</p>
                </div>
              </div>

              <div className="category">
                <div className="icon">
                  <Image width={40} height={40} src={EventosIcon} alt="" />
                </div>
                <div className="info">
                  <p className="category-number">11</p>
                  <p className="category-name">Eventos Organizados</p>
                </div>
              </div>
            </CityInfo>
          </CityInfoContainer>
          <PlacesTitle>Top avaliados</PlacesTitle>
          <PlacesContainer>
            <MyPlaceCard
              image={ImgageCard}
              title="Doce & Companhia"
              category="Comida e Bebida"
              categoryIcon={ComidaIcon}
              favoriteNote="4,5"
              linkTo="#"
            />
            <MyPlaceCard
              image={ImgageCard}
              title="Doce & Companhia"
              category="Comida e Bebida"
              categoryIcon={ComidaIcon}
              favoriteNote="4,5"
              linkTo="#"
            />
            <MyPlaceCard
              image={ImgageCard}
              title="Doce & Companhia"
              category="Comida e Bebida"
              categoryIcon={ComidaIcon}
              favoriteNote="4,5"
              linkTo="#"
            />
            <MyPlaceCard
              image={ImgageCard}
              title="Doce & Companhia"
              category="Comida e Bebida"
              categoryIcon={ComidaIcon}
              favoriteNote="4,5"
              linkTo="#"
            />
          </PlacesContainer>
          <PlacesHighlights>
            <div className="info-container">
              <div className="place-icon">
                <IoAlertCircleOutline size={25} color="#fff" />
                <div className="place-icon-text">Destaque</div>
              </div>
              <h3 className="place-title">Praia dos Ingleses</h3>
              <p className="place-description">
                Uma parte do paraíso na terra. Frequentemente com águas claras
                em tons verdes e azuis. Um dos locais mais preferidos por
                turistas e viajantes.
              </p>
            </div>
            <Image className="place-image" src={DestaqueImage} alt="" />
          </PlacesHighlights>
          <PlacesMenu>
            <h1>Conheça Todos</h1>
            <FilterPlaces>
              <div className="filter-hr">
                <div className="filter-container">
                  <FilterButton
                    isActive={filterController === 'All'}
                    onClick={() => setFilterController('All')}
                  >
                    Todos
                  </FilterButton>
                  <FilterButton
                    isActive={filterController === 'Poits'}
                    onClick={() => setFilterController('Poits')}
                  >
                    Pontos Turísticos
                  </FilterButton>

                  <FilterButton
                    isActive={filterController === 'Foods'}
                    onClick={() => setFilterController('Foods')}
                  >
                    Comida & Bebida
                  </FilterButton>
                  <FilterButton
                    isActive={filterController === 'Events'}
                    onClick={() => setFilterController('Events')}
                  >
                    Eventos Organizados
                  </FilterButton>
                  <HrAll active={filterController} />
                </div>
              </div>
            </FilterPlaces>
          </PlacesMenu>
          <PlacesContainer>
            <MyPlaceCard
              image={ImgageCard}
              title="Doce & Companhia"
              category="Comida e Bebida"
              categoryIcon={ComidaIcon}
              favoriteNote="4,5"
              linkTo="#"
            />
            <MyPlaceCard
              image={ImgageCard}
              title="Doce & Companhia"
              category="Comida e Bebida"
              categoryIcon={ComidaIcon}
              favoriteNote="4,5"
              linkTo="#"
            />
            <MyPlaceCard
              image={ImgageCard}
              title="Doce & Companhia"
              category="Comida e Bebida"
              categoryIcon={ComidaIcon}
              favoriteNote="4,5"
              linkTo="#"
            />
            <MyPlaceCard
              image={ImgageCard}
              title="Doce & Companhia"
              category="Comida e Bebida"
              categoryIcon={ComidaIcon}
              favoriteNote="4,5"
              linkTo="#"
            />
          </PlacesContainer>
        </Container>
      </main>
    </>
  );
}
