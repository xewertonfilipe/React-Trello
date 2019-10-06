import React from 'react';
import PropTypes from 'prop-types';

import { MdMoreVert } from 'react-icons/md';

import Card from '../Card';
import Button from '../Button';

import { Container } from './style';

function List({ data, index: listIndex }) {
  return (
    <Container>
      <header>
        <h2>{data.title}</h2>
        <button type="button">
          <MdMoreVert size={24} color="#696a6c" />
        </button>
      </header>

      <div className="content-list">
        <ul>
          {!!data.cards.length &&
            data.cards.map((card, index) => (
              <Card
                key={card.id}
                listIndex={listIndex}
                index={index}
                data={card}
              />
            ))}
        </ul>
        {listIndex === 0 && <Button title="Task" onClick={() => {}} />}
      </div>
    </Container>
  );
}

List.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    cards: PropTypes.array
  }),
  index: PropTypes.number.isRequired
};

List.defaultProps = {
  data: {
    title: '',
    cards: []
  }
};

export default List;
