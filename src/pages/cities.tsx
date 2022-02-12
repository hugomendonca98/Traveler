import React, { useState } from 'react';

import SEO from '@/components/SEO/SEO';
import Search from '@/components/Search/Search';
import NavBar from '@/components/NavBar/NavBar';

export default function Cities(): JSX.Element {
  const [search, setSearch] = useState('');

  return (
    <>
      <SEO
        title="Descubra locais incríveis"
        description="Descubra locais incriveis para se visitar em cidades maravilhosas de todo o brasil."
        image="Logo.png"
      />
      <NavBar>
        <Search
          placeholder="Qual cidade você procura?"
          search={search}
          setSearch={setSearch}
        />
      </NavBar>
    </>
  );
}
