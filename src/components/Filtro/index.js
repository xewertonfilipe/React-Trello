import React from 'react';

import FiltroAvancado from '../FiltroAvancado';

import { Container } from './style';

export default function Filtro() {
  return (
    <Container>
      <input type="text" placeholder="Pesquisar" />
      <button type="button" onClick={() => this.operation()}>
        Filtro Avançado
      </button>
    </Container>
  );
}
