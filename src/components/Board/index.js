import React, { useState, useEffect } from 'react';
import produce from 'immer';

import boardsService from '../../services/boardsService';

import Header from '../Header';
import Filtro from '../Filtro';

import BoardContext from './context';

import List from '../List';

import { Container } from './style';

import Button from '../Button';

export default function Board() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const getBoards = () => {
      boardsService
        .getBoards()
        .then(({ data }) => {
          const columns = data[0].columns;
          setLists(columns);
        })
        .catch(erro => console.log(erro));
    };
    getBoards();
  }, []);

  function move(fromList, toList, from, to) {
    setLists(
      produce(lists, draft => {
        const dragged = draft[fromList].cards[from];

        draft[fromList].cards.splice(from, 1);
        draft[toList].cards.splice(to, 0, dragged);
      })
    );
  }
  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Header />
      <Filtro />
      <Container>
        {!!lists.length &&
          lists.map((list, index) => (
            <List key={list.id} index={index} data={list} />
          ))}
        <Button
          className="btn-column"
          title="Coluna"
          onClick={() => {}}
          btnBig
        />
      </Container>
    </BoardContext.Provider>
  );
}
