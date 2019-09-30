import React from 'react';

import { MdMoreVert } from 'react-icons/md';

import Card from '../Card';

import { Container } from './style';

export default function List({ data, index: listIndex }) {
  return (
    <Container>
      <header>
        <h2>{data.title}</h2>
        <button type="button">
          <MdMoreVert size={24} color="#696a6c" />
        </button>
      </header>

      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.id} listIndex={listIndex} index={index} data={card} />
        ))}
      </ul>
    </Container>
  );
}
