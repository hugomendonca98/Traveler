import { useSuccessMessage } from '@/contexts/MySuccessMessageContext';
import Image from 'next/image';
import React from 'react';
import Emoji from '../../../public/images/Emoji_Happy.png';
import {
  SuccessMessage,
  SuccessMessageBackground,
  SuccessMessageContainer,
} from './styles';

interface MySuccessMessageProps {
  title: string;
  description: string;
  btnText: string;
}

export default function MySuccessMessage({
  title,
  description,
  btnText,
}: MySuccessMessageProps): JSX.Element {
  const { setIsOpen } = useSuccessMessage();

  return (
    <SuccessMessageContainer>
      <SuccessMessageBackground>
        <SuccessMessage>
          <div className="message-container">
            <Image src={Emoji} alt="Enviado com sucesso." />
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={() => setIsOpen(false)}>{btnText}</button>
          </div>
        </SuccessMessage>
      </SuccessMessageBackground>
    </SuccessMessageContainer>
  );
}
