import React from 'react';

import { MdMoreVert } from 'react-icons/md';

import Card from '../Card';

import { Container } from './style';

export default function List() {
  return (
    <Container>
      <header>
        <h2>A Iniciar</h2>
        <button type="button">
          <MdMoreVert size={24} color="#696a6c" />
        </button>
      </header>

      <ul>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </Container>
  );
}
