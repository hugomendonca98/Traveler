import React, { useCallback, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Error from 'next/error';

import { BiArrowBack } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';

import MyNavBar from '@/components/MyNavBar';

import { Container } from '@/styles/GlobalStyles';
import {
  AddressContainer,
  AttendanceContainer,
  AvatarImage,
  ContactContainer,
  Depoiment,
  DepoimentCards,
  DepoimentContainer,
  HourCard,
  MapContainer,
  NavBackground,
  PlaceHeader,
  PlaceNavegation,
} from '@/styles/Place';

import PlaceImage from '@/../public/images/place.png';
import Avatar from '@/../public/images/Avatar.png';
import { useSuccessMessage } from '@/contexts/MySuccessMessageContext';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

import api from '@/services/api';
import MySEO from '@/components/MySEO';
import { useRouter } from 'next/router';
import iframeStreetLink from '@/utils/iframeStreetLink';

interface IParams extends ParsedUrlQuery {
  id: string;
}

interface ICategory {
  id: string;
  name: string;
  icon_image: string;
}

interface IAddress {
  id: string;
  zip_code: string;
  street: string;
  neighborhood: string;
  number: number;
}

interface IDeposition {
  id: string;
  name: string;
  description: string;
  stars: number;
  avatar_url: string;
}

interface IPlace {
  id: string;
  name: string;
  place_image: string;
  description: string;
  total_depositions_stars: number;
  number_depositions: number;
  category: ICategory;
  address: IAddress;
  depositions: IDeposition[];
}

interface IProps {
  place: IPlace;
}

export default function Place({ place }: IProps): JSX.Element {
  const [openAddDeposition, setOpenAddDeposition] = useState(false);

  const { isOpen } = useSuccessMessage();

  const MyAddDeposition = dynamic(() => import('@/components/MyAddDeposition'));
  const MySuccessMessage = dynamic(
    () => import('@/components/MySuccessMessage'),
  );

  const router = useRouter();

  if (Error) {
  }

  if (router.isFallback) {
    return <></>;
  }

  return (
    <>
      <MySEO
        title={place.name}
        description={place.description}
        image={place.place_image}
      />
      {openAddDeposition && (
        <MyAddDeposition setOpenAddDeposition={setOpenAddDeposition} />
      )}
      {isOpen && (
        <MySuccessMessage
          title="Avaliação enviada!"
          description="Agradecemos pelo seu tempo e colaboração."
          btnText="Disponha :)"
        />
      )}
      <NavBackground>
        <MyNavBar>
          <PlaceNavegation>
            <Link href={'/cities'} passHref>
              <a className="go-back">
                <BiArrowBack size={20} />
              </a>
            </Link>
          </PlaceNavegation>
        </MyNavBar>
      </NavBackground>
      <Container>
        <PlaceHeader>
          <div className="text-content">
            <h1>{place.name}</h1>
            <p className="description">{place.description}</p>

            <AttendanceContainer>
              <h2>Atendimento</h2>
              <div className="hours-container">
                <HourCard>
                  <p className="day">Domingo</p>
                  <p className="hour">Fechado</p>
                </HourCard>
                <HourCard>
                  <p className="day">Segunda</p>
                  <p className="hour">8h - 19h</p>
                </HourCard>
                <HourCard>
                  <p className="day">Terça</p>
                  <p className="hour">8h - 19h</p>
                </HourCard>
                <HourCard>
                  <p className="day">Quarta</p>
                  <p className="hour">8h - 19h</p>
                </HourCard>
                <HourCard>
                  <p className="day">Quinta</p>
                  <p className="hour">8h - 19h</p>
                </HourCard>
                <HourCard>
                  <p className="day">Sexta</p>
                  <p className="hour">8h - 19h</p>
                </HourCard>
                <HourCard>
                  <p className="day">Sábado</p>
                  <p className="hour">8h - 17h</p>
                </HourCard>
              </div>
            </AttendanceContainer>
            <ContactContainer>
              <div className="contact-button">
                <div className="icon">
                  <BsFillTelephoneFill size={10} />
                </div>
                <p>Entrar em contato</p>
              </div>
              <div className="contact-container">
                <p className="contact-title">Telefone</p>
                <p className="contact">(47) 3598 7815</p>
              </div>
            </ContactContainer>
            <AddressContainer>
              <div className="address-title">
                <h2>Endereço</h2>
                <Link
                  href="https://maps.google.com/maps?mapclient=embed&q=Av.%20Aparecida%20do%20Rio%20Negro%2C%20316%20-%20Jardim%20Iris%20S%C3%A3o%20Paulo%20-%20SP%2005144-085"
                  passHref
                >
                  <a>Ver no Google Maps</a>
                </Link>
              </div>
              <MapContainer>
                <iframe
                  width="448px"
                  height="164px"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src={`https://maps.google.com/maps?q=${iframeStreetLink(
                    place.address.street,
                  )}%20-%20${iframeStreetLink(
                    place.address.neighborhood,
                  )},%20${iframeStreetLink(
                    place.address.zip_code,
                  )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                ></iframe>
                <p>
                  {place.address.street} - {place.address.neighborhood} -{' '}
                  {place.address.zip_code}
                </p>
              </MapContainer>
            </AddressContainer>
            <DepoimentContainer>
              <div className="depoiment">
                <div className="depoiment-icon">
                  <h2>Avaliações</h2>
                  <FaStar size={20} color="#F25D27" />
                  <p>4,2</p>
                </div>
                <div className="depoiment-menu">
                  <button onClick={() => setOpenAddDeposition(true)}>
                    Adicionar
                  </button>

                  <Link href="#" passHref>
                    <a>Ver todas</a>
                  </Link>
                </div>
              </div>
            </DepoimentContainer>
            <DepoimentCards>
              {place.depositions.map(deposition => (
                <Depoiment key={deposition.id}>
                  <div className="card-title">
                    <div className="title-avatar">
                      <div className="avatar-image">
                        <AvatarImage src={deposition.avatar_url} alt="" />
                      </div>
                      <h2>{deposition.name}</h2>
                    </div>

                    <div className="stars">
                      {Array.from(Array(deposition.stars), (_, i) => {
                        return <FaStar key={i} size={15} color="#F25D27" />;
                      })}
                    </div>
                  </div>

                  <p>{deposition.description}</p>
                </Depoiment>
              ))}
            </DepoimentCards>
          </div>

          <div className="header-image">
            <Image
              className="place-image"
              src={PlaceImage}
              alt=""
              layout="fixed"
            />
          </div>
        </PlaceHeader>
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<IProps> = async context => {
  const { id } = context.params as IParams;

  const place = await api.get(`/place/${id}`);

  return { props: { place: place.data } };
};
