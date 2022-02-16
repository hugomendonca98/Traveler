import React from 'react';
import { useRouter } from 'next/router';

export default function City(): JSX.Element {
  const router = useRouter();

  return <div>{router.query.slug}</div>;
}
