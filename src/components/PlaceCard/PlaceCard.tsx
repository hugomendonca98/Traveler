import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import {
  CardCategoryTitle,
  Card,
  CardTitle,
  LinkCard,
  CardCategoryIcon,
  CardCategoryContainer,
  CardFavoriteFlag,
  CardContainer,
  CardImage,
  CardFavoriteNote,
} from './styles';

import StarIcon from '../../../public/images/Star.png';

interface PlaceCardProps {
  image: string | StaticImageData;
  title: string;
  category: string;
  categoryIcon: string | StaticImageData;
  favoriteNote?: string;
  linkTo: string;
}

export default function PlaceCard({
  image,
  title,
  category,
  categoryIcon,
  favoriteNote,
  linkTo,
}: PlaceCardProps): JSX.Element {
  return (
    <CardContainer>
      <Link href={linkTo} passHref>
        <LinkCard>
          <Card>
            <CardFavoriteFlag>
              <Image src={StarIcon} alt="Favorite place stats" />
              {favoriteNote && (
                <CardFavoriteNote>{favoriteNote}</CardFavoriteNote>
              )}
            </CardFavoriteFlag>
            <CardImage src={image} width={254} height={175} alt={title} />
            <CardTitle>{title}</CardTitle>
            <CardCategoryContainer>
              <CardCategoryTitle>{category}</CardCategoryTitle>
              <CardCategoryIcon
                src={categoryIcon}
                width={24}
                height={24}
                alt={category}
              />
            </CardCategoryContainer>
          </Card>
        </LinkCard>
      </Link>
    </CardContainer>
  );
}
