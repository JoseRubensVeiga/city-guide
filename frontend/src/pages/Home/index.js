import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import InfoCard from '../../components/InfoCard';
import { Container, CardList } from './styles';

export default function Home() {
  const [places, setPlaces] = useState([]);

  async function loadPlaces() {
    const response = await api.get('/placeInfo');

    setPlaces(response.data);
  }

  useEffect(() => {
    loadPlaces();
  }, []);

  return (
    <Container>
      <CardList>
        {places.map(item => (
          <InfoCard key={item.id} {...item} />
        ))}
      </CardList>
    </Container>
  );
}
