import React, { useState } from 'react';
import { GetServerSideProps } from 'next';

import SEO from '@/components/SEO/SEO';
import Search from '@/components/Search/Search';
import NavBar from '@/components/NavBar/NavBar';
import {
  BackgroundCustom,
  Container,
  FilterButton,
  FilterCities,
  FilterContainer,
  FilterHr,
  HrContainer,
  HrAll,
  Title,
  CitiesContainer,
} from '@/styles/Cities';
import AlphabetSelect from '@/components/AlphabetSelect/AlphabetSelect';
import CityCard from '@/components/CityCard/CityCard';

import api from '@/services/api';
import linkFormat from '@/utils/linkFormat';

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

  return (
    <>
      <SEO
        title="Descubra locais incríveis"
        description="Descubra locais incriveis para se visitar em cidades maravilhosas de todo o brasil."
        image="Logo.png"
      />
      <BackgroundCustom>
        <NavBar>
          <Search
            placeholder="Qual cidade você procura?"
            search={search}
            setSearch={setSearch}
          />
        </NavBar>
      </BackgroundCustom>
      <Container>
        <FilterCities>
          <Title>Selecione uma cidade</Title>
          <FilterHr>
            <FilterContainer>
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
              <FilterButton onClick={() => setFilterController('Alphabet')}>
                <AlphabetSelect
                  isActive={filterController === 'Alphabet'}
                  selected={selected}
                  setSelected={setSelected}
                />
              </FilterButton>
            </FilterContainer>
            <HrContainer>
              <HrAll active={filterController} />
            </HrContainer>
          </FilterHr>
        </FilterCities>
        <CitiesContainer>
          {cities.map(city => (
            <CityCard
              key={city.id}
              linkTo={`/cities/${linkFormat(city.name)}`}
              image={city.image_url}
              title={city.name}
              description={
                city.place.length > 1
                  ? `${String(city.place.length)} Locais`
                  : `${String(city.place.length)} Local`
              }
            />
          ))}
        </CitiesContainer>
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
