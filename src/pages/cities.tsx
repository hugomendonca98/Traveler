import React, { useState } from 'react';

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
import CityImage from '../../public/images/image15.png';

export default function Cities(): JSX.Element {
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
          <CityCard
            image={CityImage}
            title="Águas Mornas"
            description="13 locais"
          />
        </CitiesContainer>
      </Container>
    </>
  );
}
