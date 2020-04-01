import React from 'react';
import PropTypes from 'prop-types';

import { NewsContainer, NewsTitle, NewsText, NewsButton } from './styles';

export default function NewsCard({ newsTitle, newsText }) {
  return (
    <NewsContainer>
      <NewsTitle>{newsTitle}</NewsTitle>
      <NewsText>{newsText}</NewsText>
      <NewsButton>Ler mais</NewsButton>
    </NewsContainer>
  );
}

NewsCard.propTypes = {
  newsTitle: PropTypes.string.isRequired,
  newsText: PropTypes.string.isRequired,
};
