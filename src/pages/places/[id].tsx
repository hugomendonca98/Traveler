import React, { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

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

export default function Place(): JSX.Element {
  const [openAddDeposition, setOpenAddDeposition] = useState(false);

  const { isOpen } = useSuccessMessage();

  const MyAddDeposition = dynamic(() => import('@/components/MyAddDeposition'));
  const MySuccessMessage = dynamic(
    () => import('@/components/MySuccessMessage'),
  );

  return (
    <>
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
            <h1>Doce & Companhia</h1>
            <p className="description">
              O melhor lugar da cidade para você tomar um bom café. Fatias de
              tortas artesanais, bolos, lanches e biscoitos caseiros.
            </p>

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
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Avenida%20Aparecida%20do%20Rio%20Negro,%20316+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
                <p>Rua 7 de Setembro, 319 - Jardim América - 89160-170</p>
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
              <Depoiment>
                <div className="card-title">
                  <div className="title-avatar">
                    <div className="avatar-image">
                      <AvatarImage src={Avatar} alt="" />
                    </div>
                    <h2>Maria Eduarda</h2>
                  </div>

                  <div className="stars">
                    <FaStar size={15} color="#F25D27" />
                    <FaStar size={15} color="#F25D27" />
                    <FaStar size={15} color="#F25D27" />
                    <FaStar size={15} color="#F25D27" />
                    <FaStar size={15} color="#F25D27" />
                  </div>
                </div>

                <p>
                  Todos os produtos comercializados são de excelente qualidade,
                  recomendo!
                </p>
              </Depoiment>
              <Depoiment>
                <div className="card-title">
                  <div className="title-avatar">
                    <div className="avatar-image">
                      <AvatarImage src={Avatar} alt="" />
                    </div>
                    <h2>Maria Eduarda</h2>
                  </div>

                  <div className="stars">
                    <FaStar size={15} color="#F25D27" />
                    <FaStar size={15} color="#F25D27" />
                    <FaStar size={15} color="#F25D27" />
                    <FaStar size={15} color="#F25D27" />
                    <FaStar size={15} color="#F25D27" />
                  </div>
                </div>

                <p>
                  Todos os produtos comercializados são de excelente qualidade,
                  recomendo!
                </p>
              </Depoiment>
              <Depoiment>
                <div className="card-title">
                  <div className="title-avatar">
                    <div className="avatar-image">
                      <AvatarImage src={Avatar} alt="" />
                    </div>
                    <h2>Maria Eduarda</h2>
                  </div>

                  <div className="stars">
                    <FaStar size={15} color="#F25D27" />
                    <FaStar size={15} color="#F25D27" />
                    <FaStar size={15} color="#F25D27" />
                    <FaStar size={15} color="#F25D27" />
                    <FaStar size={15} color="#F25D27" />
                  </div>
                </div>

                <p>
                  Todos os produtos comercializados são de excelente qualidade,
                  recomendo!
                </p>
              </Depoiment>
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
