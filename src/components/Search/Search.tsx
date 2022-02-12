import React, { useCallback } from 'react';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

import { ButtonClose, IconSearch, InputContainer, SearchInput } from './styles';
import { colors } from '@/styles/Colors';

interface SearchProps {
  placeholder: string;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search({
  placeholder,
  search,
  setSearch,
}: SearchProps): JSX.Element {
  const handleClearInput = useCallback(() => {
    setSearch('');
  }, [setSearch]);

  const handleChangeValue = useCallback(
    e => {
      setSearch(e.target.value);
    },
    [setSearch],
  );

  return (
    <InputContainer>
      <IconSearch>
        <FiSearch
          color={search !== '' ? colors.background.orange : colors.text.gray}
        />
      </IconSearch>
      <SearchInput
        placeholder={placeholder}
        onChange={handleChangeValue}
        value={search}
      />
      <ButtonClose onClick={handleClearInput}>
        {search !== '' && <AiOutlineClose />}
      </ButtonClose>
    </InputContainer>
  );
}
