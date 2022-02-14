import React, { useState } from 'react';

import SEO from '@/components/SEO/SEO';
import Search from '@/components/Search/Search';
import NavBar from '@/components/NavBar/NavBar';
import {
  BackgroundCustom,
  Container,
  FilterCities,
  Title,
} from '@/styles/Cities';
import AlphabetSelect from '@/components/AlphabetSelect/AlphabetSelect';

export default function Cities(): JSX.Element {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState('');

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
        </FilterCities>
      </Container>
      <AlphabetSelect selected={selected} setSelected={setSelected} />
    </>
  );
}
