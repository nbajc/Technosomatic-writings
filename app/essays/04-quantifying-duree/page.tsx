import React from 'react';
import { ESSAY_SERIES } from '../../../lib/essays-data';
import { EssayDetailView } from '../../../components/EssayDetailView';

export default function Entry04Page() {
  const essay = ESSAY_SERIES[3];
  return <EssayDetailView essay={essay} />;
}
