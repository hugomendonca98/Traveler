import React, { useCallback, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import { GrClose } from 'react-icons/gr';
import { AiFillStar } from 'react-icons/ai';
import { RiErrorWarningLine } from 'react-icons/ri';

import {
  AddDeposition,
  AddDepositionBackground,
  AddDepositionContainer,
  AvatarLabel,
  FormDeposition,
  StarButton,
} from './styles';

import api from '@/services/api';
import { useSuccessMessage } from '@/contexts/MySuccessMessageContext';
import MyLoading from '../MyLoading';

interface MyAddDepositionProps {
  setOpenAddDeposition: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Inputs {
  avatar: string;
  name: string;
  description: string;
  stars: string;
}

export default function MyAddDeposition({
  setOpenAddDeposition,
}: MyAddDepositionProps): JSX.Element {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [avatar, setAvatar] = useState<null | FileList>(null);
  const [loading, setLoading] = useState(false);

  const { setIsOpen } = useSuccessMessage();

  const { query } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = useCallback(
    async data => {
      setLoading(true);
      if (avatar && avatar[0]) {
        const sendData = new FormData();
        sendData.append('name', data.name);
        sendData.append('description', data.description);
        sendData.append('stars', rating.toString());
        sendData.append('avatar', avatar[0]);
        try {
          await api.post(`/deposition/${query.id}`, sendData, {
            headers: {
              'content-type': 'multipart/form-data',
            },
          });
          setOpenAddDeposition(false);
          setLoading(false);
          setIsOpen(true);
        } catch (error) {
          toast.error(
            'Ocorreu um erro ao enviar, tente novamente mais tarde.',
            {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'colored',
            },
          );
        }
      }
    },
    [avatar, query.id, rating, setIsOpen, setOpenAddDeposition],
  );

  return (
    <>
      <AddDepositionContainer>
        <AddDepositionBackground />
        {loading && <MyLoading />}
        <AddDeposition>
          <div className="title-container">
            <h1>Adicionar avaliação</h1>
            <button
              className="close"
              onClick={() => setOpenAddDeposition(false)}
            >
              <GrClose />
            </button>
          </div>
          <FormDeposition
            onSubmit={handleSubmit(onSubmit)}
            isErrorName={!!errors.name}
            isErrorDescription={!!errors.description}
            isErrorStars={!!errors.stars && rating <= 0}
          >
            <div className="photo-container">
              <AvatarLabel
                htmlFor="avatar"
                avatarSelected={avatar && avatar[0] ? true : false}
                isError={!!errors.avatar}
              >
                {avatar && avatar[0]
                  ? 'Feito! Trocar foto'
                  : 'Upload da sua foto'}
              </AvatarLabel>

              <input
                type="file"
                className="avatar"
                id="avatar"
                {...register('avatar', { required: true })}
                onChange={e => setAvatar(e.target.files)}
              />

              <input
                type="text"
                className="name"
                placeholder="Seu nome completo"
                {...register('name', { required: true })}
              />
            </div>
            <textarea
              id="description"
              className="description"
              placeholder="Escreva aqui..."
              {...register('description', { required: true })}
            />
            <div className="star-container">
              <p>Sua nota de 1 a 5</p>
              <input
                type="number"
                {...register('stars', { min: 1, max: 5, required: true })}
                value={rating}
              />
              <div className="stars">
                {[...Array(5)].map((_, index) => {
                  index += 1;
                  return (
                    <StarButton
                      type="button"
                      key={index}
                      starColor={index <= (hover || rating) ? true : false}
                      borderRadius={index}
                      onClick={() => setRating(index)}
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover(rating)}
                      onDoubleClick={() => {
                        setRating(0);
                        setHover(0);
                      }}
                    >
                      <AiFillStar size={17} />
                    </StarButton>
                  );
                })}
              </div>
            </div>
            <div className="send-container">
              <div>
                <RiErrorWarningLine size={32} color="#F25D27" />
                <p>Sua avaliação será analisada para poder ser publicada.</p>
              </div>

              <button type="submit">Enviar avaliação</button>
            </div>
          </FormDeposition>
        </AddDeposition>
      </AddDepositionContainer>
    </>
  );
}
