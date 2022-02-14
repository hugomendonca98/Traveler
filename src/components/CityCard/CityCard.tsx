import Link from 'next/link';
import React from 'react';

import {
  Card,
  CardDescription,
  CardImage,
  CardText,
  CardTitle,
} from './styles';

interface CityCardProps {
  image: string | StaticImageData;
  title: string;
  description: string;
}

export default function CityCard({
  image,
  title,
  description,
}: CityCardProps): JSX.Element {
  return (
    <Link href={'#'} passHref>
      <a href="#">
        <Card>
          <CardImage src={image} alt={title} />
          <CardText>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardText>
        </Card>
      </a>
    </Link>
  );
}
