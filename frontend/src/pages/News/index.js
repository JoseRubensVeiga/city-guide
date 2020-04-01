import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import NewsCard from '../../components/NewsCard';

import { Container, NewsList } from './styles';

export default function News() {
  const [news, setNews] = useState([]);

  async function getNews() {
    const response = await api.get('/news');

    setNews(response.data);
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <Container>
      <NewsList>
        {news.map(({ id, newsTitle, newsText }) => (
          <NewsCard key={id} newsTitle={newsTitle} newsText={newsText} />
        ))}
      </NewsList>
    </Container>
  );
}
