import React from 'react';

import { Container, FormContainer } from './styles';

export default function Contacts() {
  return (
    <Container>
      <div>
        <h1>Nossa Localização</h1>
        <iframe
          title="Nossa Localização"
          src="https://www.google.com/maps/d/embed?mid=1cz2t1QctUPVP7CrcQ-95sHv4c7xhDSK2"
          allowFullScreen
          style={{
            border: '0',
            borderRadius: '4px',
            width: '100%',
            height: '315px',
            frameborder: '0',
          }}
        />
      </div>
      <FormContainer>
        <h1>Contate-nos</h1>
        <form>
          <input placeholder="Nome" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="Telefone" />
          <textarea placeholder="Mensagem" />
          <button type="button">Enviar</button>
        </form>
      </FormContainer>
    </Container>
  );
}
