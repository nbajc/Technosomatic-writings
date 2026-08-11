import React from 'react';
import { ESSAY_SERIES } from '../../../lib/essays-data';
import { EssayDetailView } from '../../../components/EssayDetailView';

export default function Entry02Page() {
  const essay = ESSAY_SERIES[1];
  return <EssayDetailView essay={essay} />;
}
