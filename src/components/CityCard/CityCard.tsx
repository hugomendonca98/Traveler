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
  linkTo: string;
}

export default function CityCard({
  image,
  title,
  description,
  linkTo,
}: CityCardProps): JSX.Element {
  return (
    <Link href={linkTo} passHref>
      <a>
        <Card>
          <CardImage width={254} height={175} src={image} alt={title} />
          <CardText>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardText>
        </Card>
      </a>
    </Link>
  );
}
