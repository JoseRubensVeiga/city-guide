import React from 'react';

import { MdHome, MdInfo, MdEmail } from 'react-icons/md';

import logo from '../../logo.svg';
import { Container, Logo, ItemList, Item } from './styles';

export default function Navbar() {
  return (
    <Container>
      <Logo src={logo} alt="City Tour Guide" />
      <ItemList>
        <Item to="/">
          <MdHome size={20} color="#222" />
          Início
        </Item>
        <Item to="/news">
          <MdInfo size={20} color="#222" />
          Notícias
        </Item>
        <Item to="/contacts">
          <MdEmail size={20} color="#222" />
          Contato
        </Item>
      </ItemList>
    </Container>
  );
}
