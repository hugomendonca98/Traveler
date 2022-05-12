import React, { useState } from 'react';
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { BiArrowBack } from 'react-icons/bi';
import { IoAlertCircleOutline } from 'react-icons/io5';

import MyNavBar from '@/components/MyNavBar';
import MyPlaceCard from '@/components/MyPlaceCard';
import MySEO from '@/components/MySEO';
import { Container } from '@/styles/GlobalStyles';
import api from '@/services/api';

import PontosIcon from '../../../public/images/Pontos.png';
import ComidaIcon from '../../../public/images/Comidas.png';
import EventosIcon from '../../../public/images/Eventos.png';
import ImgageCard from '../../../public/images/Image.png';
import DestaqueImage from '../../../public/images/Destaque.png';

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
import averageCalc from '@/utils/averageCalc';

interface IParams extends ParsedUrlQuery {
  id: string;
}

interface ICategory {
  id: string;
  name: string;
  icon: string;
}

interface IPlace {
  id: string;
  name: string;
  place_image: string;
  description: string;
  total_depositions_stars: number;
  number_depositions: number;
  category: ICategory;
}

interface ICity {
  id: string;
  name: string;
  description: string;
  image_url: string;
  place: IPlace[];
}

interface IndexProps {
  city: ICity;
  places: IPlace[];
}

export default function City({ city, places }: IndexProps): JSX.Element {
  const [filterController, setFilterController] = useState('All');

  const router = useRouter();

  const dataFilter = (): ICity[] | [] => {
    // Realizar buscar de acordo com o filtro selecionado.
    return [];
  };

  if (router.isFallback) {
    return <></>;
  }

  return (
    <>
      <MySEO
        title={city.name}
        description={city.description}
        image={city.image_url}
      />
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
          src={city.image_url}
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
              <h1>{city.name}</h1>
              <h3>{city.description}</h3>
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
            {places.map(place => (
              <MyPlaceCard
                key={place.id}
                image={place.place_image}
                title={place.name}
                category={place.category.name}
                categoryIcon={`http://localhost:3333/${place.category.icon}`}
                favoriteNote={averageCalc(
                  place.total_depositions_stars,
                  place.number_depositions,
                )}
                linkTo="#"
              />
            ))}
          </PlacesContainer>
        </Container>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<IndexProps> = async context => {
  const { id } = context.params as IParams;

  try {
    const city = await api.get(`/city/${id}`);
    const places = await api.get('/place');

    console.log(places);

    return {
      props: {
        city: city.data,
        places: places.data,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
