import React from 'react';

import { loadLists } from '../../services/api';

import { Container } from './style';

const data = loadLists();

export default function FiltroAvancado() {
  return (
    <Container>
      <img src="https://api.adorable.io/avatars/90/abott@adorable.png" alt="" />
      <p>Alex Pessoa</p>
      <span id="barra" />
      <span id="tag">Desenvolvimento</span>
    </Container>
  );
}
