import React from 'react';

import { OptionAlphabet, SelectAlphabet } from './styles';

interface AlphabetSelectProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  isActive: boolean;
}

export default function AlphabetSelect({
  selected,
  setSelected,
  isActive,
}: AlphabetSelectProps): JSX.Element {
  return (
    <>
      <SelectAlphabet
        isActive={isActive}
        name="alphabet"
        defaultValue={selected}
        onChange={e => setSelected(e.target.value)}
      >
        <OptionAlphabet>A - Z</OptionAlphabet>
        <OptionAlphabet>A</OptionAlphabet>
        <OptionAlphabet>B</OptionAlphabet>
        <OptionAlphabet>C</OptionAlphabet>
        <OptionAlphabet>D</OptionAlphabet>
        <OptionAlphabet>E</OptionAlphabet>
        <OptionAlphabet>F</OptionAlphabet>
        <OptionAlphabet>G</OptionAlphabet>
        <OptionAlphabet>H</OptionAlphabet>
        <OptionAlphabet>I</OptionAlphabet>
        <OptionAlphabet>J</OptionAlphabet>
        <OptionAlphabet>K</OptionAlphabet>
        <OptionAlphabet>L</OptionAlphabet>
        <OptionAlphabet>M</OptionAlphabet>
        <OptionAlphabet>N</OptionAlphabet>
        <OptionAlphabet>O</OptionAlphabet>
        <OptionAlphabet>P</OptionAlphabet>
        <OptionAlphabet>Q</OptionAlphabet>
        <OptionAlphabet>R</OptionAlphabet>
        <OptionAlphabet>S</OptionAlphabet>
        <OptionAlphabet>T</OptionAlphabet>
        <OptionAlphabet>U</OptionAlphabet>
        <OptionAlphabet>V</OptionAlphabet>
        <OptionAlphabet>W</OptionAlphabet>
        <OptionAlphabet>X</OptionAlphabet>
        <OptionAlphabet>Y</OptionAlphabet>
        <OptionAlphabet>Z</OptionAlphabet>
      </SelectAlphabet>
    </>
  );
}
