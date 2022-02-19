import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { BiArrowBack } from 'react-icons/bi';

import NavBar from '@/components/NavBar/NavBar';
import {
  BackButton,
  BackgroundCustom,
  CityNavegation,
  NavTitle,
  CityBanner,
} from '@/styles/City';

import Banner from '../../../public/images/Banner4.jpg';

export default function City(): JSX.Element {
  const router = useRouter();

  return (
    <>
      <BackgroundCustom>
        <NavBar>
          <CityNavegation>
            <Link href={'/cities'} passHref>
              <BackButton>
                <BiArrowBack size={20} />
              </BackButton>
            </Link>
            <div style={{ marginLeft: '40%' }}>
              <NavTitle>Cidade</NavTitle>
            </div>
          </CityNavegation>
        </NavBar>
      </BackgroundCustom>
      <CityBanner>
        <Image
          src={Banner}
          layout="fill"
          alt=""
          objectFit="cover"
          objectPosition="center"
        />
      </CityBanner>
    </>
  );
}
