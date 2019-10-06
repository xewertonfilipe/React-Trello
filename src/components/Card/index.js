import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import BoardContext from '../Board/context';

import { Container } from './style';

const Member = ({ name, num }) => {
  console.log(num);
  const nameArr = name.split(' ');
  const firstNameLastName = `${nameArr[0].charAt(0)} ${nameArr[1].charAt(0)}`;
  return (
    <div
      style={{
        width: 30,
        height: 30,
        borderRadius: '50%',
        fontSize: 12,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#3a94f9',
        color: '#fff'
      }}
    >
      {firstNameLastName}
    </div>
  );
};

export default function Card({ data, index, listIndex }) {
  const ref = useRef();
  const { move } = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD', index, listIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (
        draggedIndex === targetIndex &&
        draggedListIndex === targetListIndex
      ) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    }
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
      <header />
      <p>{data.title}</p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <div>
          {!!data.tags &&
            data.tags.map((tag, index) => <span key={index}>{tag}</span>)}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          {!!data.members
            ? data.members.map(member => {
                if (member.photoURL) {
                  return <img key={member.id} src={data.user} alt="" />;
                }
                return (
                  <Member key={member.id} num={member.id} name={member.name} />
                );
              })
            : null}
        </div>
      </div>
    </Container>
  );
}
