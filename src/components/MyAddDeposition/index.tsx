import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { AiFillStar } from 'react-icons/ai';
import { RiErrorWarningLine } from 'react-icons/ri';

import {
  AddDeposition,
  AddDepositionBackground,
  AddDepositionContainer,
  FormDeposition,
  StarButton,
} from './styles';

export default function MyAddDeposition(): JSX.Element {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <AddDepositionContainer>
      <AddDepositionBackground />
      <AddDeposition>
        <div className="title-container">
          <h1>Adicionar avaliação</h1>
          <button className="close">
            <GrClose />
          </button>
        </div>
        <FormDeposition>
          <div className="photo-container">
            <label htmlFor="avatar" className="avatar-btn">
              Upload da sua foto
            </label>
            <input type="file" name="avatar" className="avatar" id="avatar" />
            <input
              type="text"
              name="name"
              className="name"
              placeholder="Seu nome completo"
            />
          </div>
          <textarea
            name="description"
            id="description"
            className="description"
            placeholder="Escreva aqui..."
          />
          <div className="star-container">
            <p>Sua nota de 1 a 5</p>

            <div className="stars">
              {[...Array(5)].map((_, index) => {
                index += 1;
                return (
                  <StarButton
                    type="button"
                    key={index}
                    starColor={index <= (hover || rating) ? 'true' : 'false'}
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
  );
}
