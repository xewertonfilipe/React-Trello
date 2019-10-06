import React, { useState, useEffect } from 'react';
import produce from 'immer';

import boardsService from '../../services/boardsService';
import { loadLists } from '../../services/api';

import BoardContext from './context';

import List from '../List';

import { Container } from './style';

import Button from '../Button';

// const data = loadLists();

export default function Board() {
  const [boardTitle, setboardTitle] = useState();
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const getBoards = () => {
      boardsService
        .getBoards()
        .then(({ data }) => {
          const columns = data[0].columns;
          const title = data[0].title;
          setLists(columns);
          setboardTitle(title);
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
      <Container>
        {!!lists.length &&
          lists.map((list, index) => (
            <List key={list.id} index={index} data={list} />
          ))}
        <Button
          className="btn-column"
          title="Coluna"
          onClick={() => alert(2)}
          btnBig
        />
      </Container>
    </BoardContext.Provider>
  );
}
