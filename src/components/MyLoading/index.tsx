import Image from 'next/image';
import React from 'react';

import LoadingGif from '../../../public/images/Loading.svg';

import { LoadingContainer, LoadingImage } from './styles';

export default function MyLoading(): JSX.Element {
  return (
    <LoadingContainer>
      <LoadingImage>
        <Image src={LoadingGif} width={70} height={70} alt="" />
      </LoadingImage>
      <p>Enviando... por favor aguarde.</p>
    </LoadingContainer>
  );
}
