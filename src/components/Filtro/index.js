import React from 'react';

import { Container } from './style';

export default function Filtro() {
  return (
    <Container>
      <input type="text" placeholder="Pesquisar" />
      <button type="button">Filtro Avançado</button>
    </Container>
  );
}
