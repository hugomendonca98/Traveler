import React, { useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
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
import DestaqueImage from '../../../public/images/Destaque.png';
import Emoji from '../../../public/images/Emoji.png';

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
  PlacesNotFound,
} from '@/styles/City';
import textFormat from '@/utils/textFormat';

interface IParams extends ParsedUrlQuery {
  id: string;
}

interface ICategory {
  id: string;
  name: string;
  icon_image: string;
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

interface IMostPlace {
  id: string;
  name: string;
  place_image: string;
  description: string;
  total_depositions_stars: number;
  number_depositions: number;
  average: string;
  category: ICategory;
}

interface IndexProps {
  city: ICity;
  places: IPlace[];
}

export default function City({ city, places }: IndexProps): JSX.Element {
  const [filterController, setFilterController] = useState('All');

  const router = useRouter();

  if (router.isFallback) {
    return <></>;
  }

  const dataFilter = (): IMostPlace[] => {
    // Calculando a média de avaliações de cada local.
    const averagePlaces = places.map(place =>
      Object.assign(place, {
        total_depositions_stars: place.total_depositions_stars,
        number_depositions: place.number_depositions,
        average: (place.total_depositions_stars / place.number_depositions)
          .toFixed(1)
          .toString()
          .replace('.', ','),
      }),
    );
    // Realizar buscar de acordo com o filtro selecionado.
    if (filterController !== 'All') {
      const placeFilter = averagePlaces.filter(
        place =>
          textFormat(place.category.name) === textFormat(filterController),
      );

      return placeFilter;
    }

    return averagePlaces;
  };

  // Array com os 5 locais mais avaliados.
  const mostFivePlaces = dataFilter()
    .sort((prev, curr) =>
      Number(prev.average) < Number(curr.average) ||
      Number(prev.number_depositions) < Number(curr.number_depositions)
        ? 1
        : -1,
    )
    .filter((_, index) => index <= 4);

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
            {mostFivePlaces &&
              mostFivePlaces.map(place => (
                <MyPlaceCard
                  key={place.id}
                  image={place.place_image}
                  title={place.name}
                  category={place.category.name}
                  categoryIcon={place.category.icon_image}
                  favoriteNote={place.average}
                  linkTo={`/places/${place.id}`}
                />
              ))}
          </PlacesContainer>
          <PlacesHighlights>
            <div className="info-container">
              <div className="place-icon">
                <IoAlertCircleOutline size={25} color="#fff" />
                <div className="place-icon-text">Destaque</div>
              </div>
              <h3 className="place-title">{mostFivePlaces[0].name}</h3>
              <p className="place-description">
                {mostFivePlaces[0].description}
              </p>
            </div>
            <Image
              className="place-image"
              src={mostFivePlaces[0].place_image}
              alt={mostFivePlaces[0].name}
              width={600}
              height={300}
            />
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
                    isActive={filterController === 'pontos turísticos'}
                    onClick={() => setFilterController('pontos turísticos')}
                  >
                    Pontos Turísticos
                  </FilterButton>

                  <FilterButton
                    isActive={filterController === 'comida & bebida'}
                    onClick={() => setFilterController('comida & bebida')}
                  >
                    Comida & Bebida
                  </FilterButton>
                  <FilterButton
                    isActive={filterController === 'eventos organizados'}
                    onClick={() => setFilterController('eventos organizados')}
                  >
                    Eventos Organizados
                  </FilterButton>
                  <HrAll active={filterController} />
                </div>
              </div>
            </FilterPlaces>
          </PlacesMenu>

          {dataFilter().length <= 0 ? (
            <PlacesNotFound>
              <Image src={Emoji} alt="Nenhuma cidade encontrada." />
              <p>Sem resultados. </p>
              <p>Tente uma nova busca</p>
            </PlacesNotFound>
          ) : (
            <PlacesContainer>
              {dataFilter().map(place => (
                <MyPlaceCard
                  key={place.id}
                  image={place.place_image}
                  title={place.name}
                  category={place.category.name}
                  categoryIcon={place.category.icon_image}
                  favoriteNote={place.average}
                  linkTo={`/places/${place.id}`}
                />
              ))}
            </PlacesContainer>
          )}
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
