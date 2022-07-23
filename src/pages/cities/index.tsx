import React, { useState } from 'react';
import { GetServerSideProps } from 'next';

import MySEO from '@/components/MySEO';
import MySearch from '@/components/MySearch';
import MyNavBar from '@/components/MyNavBar';
import MyAlphabetSelect from '@/components/MyAlphabetSelect';
import MyCityCard from '@/components/MyCityCard';
import api from '@/services/api';
import textFormat from '@/utils/textFormat';
import { Container } from '@/styles/GlobalStyles';
import {
  Background,
  FilterButton,
  FilterCities,
  HrAll,
  CitiesContainer,
  CitiesNotFound,
} from '@/styles/Cities';
import Emoji from '../../../public/images/Emoji.png';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface IPlace {
  id: string;
  name: string;
  image: string;
  description: string;
}

interface ICity {
  id: string;
  name: string;
  description: string;

  image_url: string;
  place: IPlace[];
}

interface CitiesProps {
  cities: ICity[];
}

export default function Cities({ cities }: CitiesProps): JSX.Element {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState('');
  const [filterController, setFilterController] = useState('All');

  const router = useRouter();

  const dataFilter = (): ICity[] | [] => {
    if (filterController === 'Alphabet' && selected !== '') {
      // Pesquisa com uma letra do alfabeto selecionada.
      return cities
        .filter(city => textFormat(city.name).startsWith(textFormat(selected)))
        .filter(citySearch =>
          textFormat(citySearch.name).includes(textFormat(search)),
        );
    } else if (filterController === 'All' || selected === '') {
      // Pesquisa sem letra do alfabeto selecionada.
      return cities.filter(citySearch =>
        textFormat(citySearch.name).includes(textFormat(search)),
      );
    }
    return [];
  };

  if (router.isFallback) {
    return <></>;
  }

  return (
    <>
      <MySEO
        title="Descubra locais incríveis"
        description="Descubra locais incriveis para se visitar em cidades maravilhosas de todo o brasil."
        image="Logo.png"
      />
      <Background>
        <MyNavBar>
          <MySearch
            placeholder="Qual cidade você procura?"
            search={search}
            setSearch={setSearch}
          />
        </MyNavBar>
      </Background>
      <Container>
        <FilterCities>
          <h1>Selecione uma cidade</h1>
          <div className="filter-hr">
            <div className="filter-container">
              <FilterButton
                isActive={filterController === 'All'}
                onClick={() => setFilterController('All')}
              >
                Todas
              </FilterButton>
              <FilterButton
                isActive={filterController === 'Most'}
                onClick={() => setFilterController('Most')}
              >
                Mais Acessadas
              </FilterButton>
              <FilterButton
                isActive={filterController === 'Alphabet'}
                onClick={() => setFilterController('Alphabet')}
              >
                <MyAlphabetSelect
                  isActive={filterController === 'Alphabet'}
                  selected={selected}
                  setSelected={setSelected}
                />
              </FilterButton>
              <HrAll active={filterController} />
            </div>
          </div>
        </FilterCities>
        <main>
          {dataFilter().length <= 0 ? (
            <CitiesNotFound>
              <Image src={Emoji} alt="Nenhuma cidade encontrada." />
              <p>Sem resultados. </p>
              <p>Tente uma nova busca</p>
            </CitiesNotFound>
          ) : (
            <CitiesContainer>
              {dataFilter().map(city => (
                <>
                  <MyCityCard
                    key={city.id}
                    linkTo={`/cities/${city.id}`}
                    image={city.image_url}
                    title={city.name}
                    description={`${String(city.place.length)} ${
                      city.place.length > 1 ? 'Locais' : 'Local'
                    }`}
                  />
                </>
              ))}
            </CitiesContainer>
          )}
        </main>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<CitiesProps> = async () => {
  const response = await api.get('/city');

  return {
    props: {
      cities: response.data,
    },
  };
};
