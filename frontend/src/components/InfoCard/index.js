import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardSubtitle,
  CardText,
  CardButton,
} from './styles';

export default function InfoCard({
  id,
  img,
  headerTitle,
  headerSubTitle,
  headerText,
}) {
  const history = useHistory();
  function GoToInfo() {
    history.push({
      pathname: '/details',
      state: { id: String(id) },
    });
  }

  return (
    <Card>
      <CardImage src={img} alt={headerTitle} />
      <CardContent>
        <CardTitle>{headerTitle}</CardTitle>
        <CardSubtitle>{headerSubTitle}</CardSubtitle>
        <CardText>{headerText}</CardText>
        <CardButton onClick={GoToInfo}>Mais Informações</CardButton>
      </CardContent>
    </Card>
  );
}

InfoCard.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  headerTitle: PropTypes.string.isRequired,
  headerSubTitle: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
};
